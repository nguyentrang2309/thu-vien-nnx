/* =====================================================
   ĐỌC NỘI DUNG TỪ GOOGLE SHEET
   Không cần sửa file này khi cập nhật nội dung.
   - Website đọc 4 tab: Sản phẩm, Tài liệu, Truyền thông, Chữ chạy.
   - Tab nào đọc lỗi (mất mạng, đổi tên tab hoặc tên cột…) thì web dùng
     dữ liệu dự phòng trong data.js cho phần đó.
   - Mở web với đuôi ?kiemtra để xem các dòng bị bỏ qua và lý do.
   ===================================================== */
const SHEET_TABS = {
  products: {name:"Sản phẩm",     cols:["mã","tên sản phẩm","kênh","nhu cầu","hãng bảo hiểm","dòng phụ","mô tả","hiển thị"]},
  docs:     {name:"Tài liệu",     cols:["mã sản phẩm","loại tài liệu","tên hiển thị riêng","link","hiển thị"]},
  media:    {name:"Truyền thông", cols:["mục","ngày cập nhật","dòng nhỏ","tiêu đề","mô tả","link","nổi bật","biểu tượng","hiển thị"]},
  ticker:   {name:"Chữ chạy",     cols:["nội dung","hiển thị"]},
};
const SHEET_ICONS = {"cúp":"trophy","tin tức":"news","trái tim":"heart","loa":"megaphone","sách":"book","quà":"gift","phao cứu sinh":"lifebuoy"};
const SECTION_ICONS = {news:"news", claim:"heart", case:"trophy", content:"megaphone", skill:"book", guide:"lifebuoy"};

/* CSV -> mảng các dòng (hỗ trợ ngoặc kép và xuống dòng trong ô) */
function parseCSV(text){
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++){
    const c = text[i];
    if (q){
      if (c === '"'){ if (text[i+1] === '"'){ cell += '"'; i++; } else q = false; }
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i+1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += c;
  }
  if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const sheetKey = s => String(s||"").trim().toLowerCase().replace(/\s+/g," ");
const isHidden = v => sheetKey(v) === "ẩn";
const isYes = v => ["có","x","yes","true","1"].includes(sheetKey(v));
const isLink = u => /^https?:\/\//i.test(u);

/* Tìm mã theo nhãn tiếng Việt hoặc theo mã gốc */
function lookup(value, entries){
  const k = sheetKey(value);
  if (!k) return null;
  for (const [id, labels] of entries) if (sheetKey(id) === k || labels.some(l => sheetKey(l) === k)) return id;
  return null;
}

async function fetchTab(tab){
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&headers=1&sheet=${encodeURIComponent(tab.name)}`;
  const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), 8000);
  try {
    const res = await fetch(url, {cache:"no-store", signal:ctl.signal});
    if (!res.ok) throw new Error(`Google trả về lỗi ${res.status}. Kiểm tra Sheet đã chia sẻ "Bất kỳ ai có đường liên kết đều xem được".`);
    const text = await res.text();
    if (text.trim().startsWith("<")) throw new Error(`Không đọc được Sheet. Kiểm tra quyền chia sẻ của Sheet.`);
    const [head = [], ...body] = parseCSV(text);
    const cols = head.map(sheetKey);
    /* Sai tên tab thì Google trả về tab đầu tiên, nên phải kiểm tra tên cột */
    const missing = tab.cols.filter(c => !cols.includes(c));
    if (missing.length) throw new Error(`Không thấy tab "${tab.name}" hoặc thiếu cột: ${missing.join(", ")}.`);
    return body.map((r, i) => {
      const o = {_row: i + 2};
      cols.forEach((c, j) => o[c] = (r[j] || "").trim());
      return o;
    }).filter(o => tab.cols.some(c => o[c]));
  } finally { clearTimeout(timer); }
}

async function loadSheet(){
  const report = {used:{}, problems:[]};
  const bad = (tab, row, msg) => report.problems.push(`${tab}, dòng ${row}: ${msg}`);
  if (typeof SHEET_ID === "undefined" || !SHEET_ID) { report.off = true; return report; }

  const names = Object.keys(SHEET_TABS);
  const results = await Promise.allSettled(names.map(n => fetchTab(SHEET_TABS[n])));
  const got = {};
  results.forEach((r, i) => {
    const n = names[i];
    if (r.status === "fulfilled") got[n] = r.value;
    else report.problems.push(`Tab "${SHEET_TABS[n].name}": ${r.reason && r.reason.name === "AbortError" ? "tải quá lâu." : (r.reason && r.reason.message) || r.reason}`);
  });

  const needs = NEEDS.map(n => [n.id, [n.label, n.short]]);
  const chans = Object.entries(CHANNELS).map(([id, l]) => [id, [l]]);
  const types = Object.entries(DOC_TYPES).map(([id, t]) => [id, [t.label]]);
  const secs  = SECTIONS.map(s => [s.id, [s.label]]);

  /* Sản phẩm + Tài liệu: chỉ thay khi đọc được cả hai tab */
  if (got.products && got.docs){
    const T = SHEET_TABS.products.name, list = [], ids = new Set(), hiddenIds = new Set();
    got.products.forEach(r => {
      if (isHidden(r["hiển thị"])) { hiddenIds.add(r["mã"]); return; }
      const id = r["mã"], need = lookup(r["nhu cầu"], needs), ch = lookup(r["kênh"], chans);
      if (!id) return bad(T, r._row, "thiếu Mã.");
      if (!/^[a-z0-9-]+$/i.test(id)) return bad(T, r._row, `Mã "${id}" chỉ được dùng chữ không dấu, số và dấu gạch ngang.`);
      if (ids.has(id)) return bad(T, r._row, `Mã "${id}" bị trùng.`);
      if (!r["tên sản phẩm"]) return bad(T, r._row, "thiếu Tên sản phẩm.");
      if (!need) return bad(T, r._row, `Nhu cầu "${r["nhu cầu"]}" không có trong danh sách.`);
      if (!ch) return bad(T, r._row, `Kênh "${r["kênh"]}" không có trong danh sách.`);
      ids.add(id);
      list.push({id, name:r["tên sản phẩm"], ch, need,
        insurers: r["hãng bảo hiểm"].split(/[,;]/).map(s => s.trim()).filter(Boolean),
        ins:r["dòng phụ"], desc:r["mô tả"], docs:[]});
    });
    const D = SHEET_TABS.docs.name;
    got.docs.forEach(r => {
      if (isHidden(r["hiển thị"])) return;
      const p = list.find(x => x.id === r["mã sản phẩm"]), type = lookup(r["loại tài liệu"], types), u = r["link"];
      if (!p) return ids.has(r["mã sản phẩm"]) || hiddenIds.has(r["mã sản phẩm"]) ? null : bad(D, r._row, `Mã sản phẩm "${r["mã sản phẩm"]}" không có ở tab Sản phẩm.`);
      if (!type) return bad(D, r._row, `Loại tài liệu "${r["loại tài liệu"]}" không có trong danh sách.`);
      if (!isLink(u)) return bad(D, r._row, "Link trống hoặc không bắt đầu bằng https://");
      p.docs.push(r["tên hiển thị riêng"] ? [type, u, r["tên hiển thị riêng"]] : [type, u]);
    });
    if (list.length){ PRODUCTS.splice(0, PRODUCTS.length, ...list); report.used.products = report.used.docs = true; }
    else report.problems.push(`Tab "${T}" không có sản phẩm nào đang Hiện, web giữ danh sách dự phòng.`);
  } else if (got.products || got.docs) {
    report.problems.push("Cần đọc được cả tab Sản phẩm và Tài liệu thì mới cập nhật sản phẩm, web giữ danh sách dự phòng.");
  }

  if (got.media){
    const T = SHEET_TABS.media.name, list = [];
    got.media.forEach(r => {
      if (isHidden(r["hiển thị"])) return;
      const sec = lookup(r["mục"], secs), u = r["link"];
      if (!sec) return bad(T, r._row, `Mục "${r["mục"]}" không có trong danh sách.`);
      if (!r["tiêu đề"]) return bad(T, r._row, "thiếu Tiêu đề.");
      if (!isLink(u)) return bad(T, r._row, "Link trống hoặc không bắt đầu bằng https://");
      const date = r["ngày cập nhật"];
      if (date && !/^(\d{1,2}\/)?(\d{1,2}\/)?\d{4}$/.test(date)) bad(T, r._row, `Ngày "${date}" nên viết 15/09/2026, 09/2026 hoặc 2026 (vẫn hiện nhưng có thể xếp sai thứ tự).`);
      list.push({id:"s"+r._row, sec, date, k:r["dòng nhỏ"], t:r["tiêu đề"], d:r["mô tả"], u,
        icon: SHEET_ICONS[sheetKey(r["biểu tượng"])] || SECTION_ICONS[sec] || "news", star:isYes(r["nổi bật"]),
        /* Cột tùy chọn cho thẻ vinh danh có ảnh */
        photo:r["ảnh"]||"", name:r["họ tên"]||"", role:r["chức danh"]||"", pgd:r["pgd / khu vực"]||r["pgd"]||"", badge:r["thành tích"]||""});
      if (sec === "case" && r["ảnh"] && !driveId(r["ảnh"]) && !isLink(r["ảnh"])) bad(T, r._row, "Cột Ảnh cần là link file Google Drive (mở ảnh → Chia sẻ → Sao chép đường liên kết).");
    });
    if (list.length){ MEDIA.splice(0, MEDIA.length, ...list); report.used.media = true; }
    else report.problems.push(`Tab "${T}" không có mục nào đang Hiện, web giữ danh sách dự phòng.`);
  }

  if (got.ticker){
    const docCount = PRODUCTS.reduce((a, p) => a + p.docs.length, 0);
    const list = got.ticker.filter(r => r["nội dung"] && !isHidden(r["hiển thị"])).map(r =>
      esc(r["nội dung"]).replace(/\{SO_SAN_PHAM\}/gi, PRODUCTS.length).replace(/\{SO_TAI_LIEU\}/gi, docCount)
        .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"));
    if (list.length){ TICKER.splice(0, TICKER.length, ...list); report.used.ticker = true; }
  }
  return report;
}

/* Bảng kiểm tra, chỉ hiện khi mở web với ?kiemtra */
function showSheetReport(report){
  if (report.problems.length) console.warn("Google Sheet:", report.problems);
  if (!/[?&]kiemtra\b/.test(location.search)) return;
  const tabs = Object.entries(SHEET_TABS).map(([k, t]) =>
    `<li>${esc(t.name)}: <b>${report.off ? "chưa kết nối Sheet" : report.used[k] ? "đọc từ Google Sheet" : "dùng dữ liệu dự phòng (data.js)"}</b></li>`).join("");
  const probs = report.problems.length
    ? `<p style="margin:12px 0 4px"><b>${report.problems.length} vấn đề cần sửa:</b></p><ul style="margin:0;padding-left:18px">${report.problems.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`
    : `<p style="margin:12px 0 0">Không có lỗi nào.</p>`;
  const box = document.createElement("div");
  box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Kiểm tra Google Sheet");
  box.style.cssText = "position:fixed;right:16px;bottom:16px;left:16px;max-width:560px;margin-left:auto;max-height:60vh;overflow:auto;z-index:99;background:var(--surface);color:var(--ink);border:1px solid var(--line);border-radius:8px;box-shadow:var(--shadow);padding:16px;font:14px/1.5 var(--f-body)";
  box.innerHTML = `<div style="display:flex;justify-content:space-between;gap:12px;align-items:center"><b style="font-size:16px">Kiểm tra Google Sheet</b><button type="button" aria-label="Đóng" style="border:0;background:none;color:inherit;font-size:20px;cursor:pointer">×</button></div><ul style="margin:8px 0 0;padding-left:18px">${tabs}</ul>${probs}`;
  box.querySelector("button").onclick = () => box.remove();
  document.body.appendChild(box);
}
