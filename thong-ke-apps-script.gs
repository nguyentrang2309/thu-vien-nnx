/* =====================================================
   APPS SCRIPT THỐNG KÊ THƯ VIỆN NNX
   Dán toàn bộ file này vào Apps Script của Google Sheet thống kê
   (Tiện ích mở rộng → Apps Script). Cách cài: xem README, mục "Thống kê truy cập".
   - doPost: web gửi mỗi thao tác, script ghi thành một dòng ở tab "Nhật ký".
   - doGet:  trang thong-ke.html hỏi số liệu tổng hợp (không trả về từng dòng).
   ===================================================== */
const TAB = "Nhật ký";
const HEAD = ["Thời gian", "Loại", "Đối tượng", "Tên", "Thêm", "Mã người xem", "Mã phiên", "Thiết bị"];
const TYPES = {visit:"Vào trang", product:"Mở sản phẩm", doc:"Bấm tài liệu", media:"Mở truyền thông",
  honor:"Mở vinh danh", view:"Chuyển mục", search:"Tìm kiếm"};
const TZ = "Asia/Ho_Chi_Minh";

function sheet_(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(TAB);
  if (!sh){
    sh = ss.insertSheet(TAB);
    sh.appendRow(HEAD);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEAD.length).setFontWeight("bold");
  }
  return sh;
}

const clip_ = (v, n) => String(v == null ? "" : v).slice(0, n || 200);

function doPost(e){
  try {
    const ev = JSON.parse(e.postData.contents);
    const type = TYPES[ev.type];
    if (!type) return out_({ok:false});
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet_().appendRow([new Date(), type, clip_(ev.target), clip_(ev.label), clip_(ev.extra),
        clip_(ev.visitor, 40), clip_(ev.session, 40), clip_(ev.device, 40)]);
    } finally { lock.releaseLock(); }
    return out_({ok:true});
  } catch (err) {
    return out_({ok:false});
  }
}

/* ?days=30 → số liệu 30 ngày gần nhất và kỳ trước đó để so sánh */
function doGet(e){
  const days = Math.min(365, Math.max(1, Number(e && e.parameter && e.parameter.days) || 30));
  const sh = sheet_();
  const n = sh.getLastRow() - 1;
  const rows = n > 0 ? sh.getRange(2, 1, n, HEAD.length).getValues() : [];

  const dayKey = d => Utilities.formatDate(d, TZ, "yyyy-MM-dd");
  const today = new Date();
  const keys = [];
  for (let i = days - 1; i >= 0; i--) keys.push(dayKey(new Date(today.getTime() - i * 864e5)));
  const from = keys[0];
  const prevFrom = dayKey(new Date(today.getTime() - (2 * days - 1) * 864e5));

  const daily = {}; keys.forEach(k => daily[k] = {d:k, visits:0, visitors:{}});
  const cur = blank_(), prev = blank_();
  const count = (map, key, by) => { if (key) map[key] = (map[key] || 0) + (by || 1); };
  const top = {products:{}, docs:{}, docTypes:{}, media:{}, searches:{}, noResult:{}, sources:{}, devices:{}, views:{}};
  const hours = new Array(24).fill(0);

  rows.forEach(r => {
    const t = r[0]; if (!(t instanceof Date)) return;
    const k = dayKey(t), type = r[1], target = String(r[2]), label = String(r[3]), extra = String(r[4]), vid = r[5];
    if (k < prevFrom) return;
    const P = k >= from ? cur : prev;
    P.visitors[vid] = 1;
    if (type === TYPES.visit){ P.visits++; P.sessions[r[6]] = 1; }
    if (type === TYPES.product) P.products++;
    if (type === TYPES.doc) P.docs++;
    if (type === TYPES.search) P.searches++;
    if (k < from) return;

    const day = daily[k];
    if (day){ day.visitors[vid] = 1; if (type === TYPES.visit) day.visits++; }
    if (type === TYPES.visit){
      count(top.sources, label || "Trực tiếp");
      count(top.devices, r[7] || "Khác");
      hours[Number(Utilities.formatDate(t, TZ, "H"))]++;
    }
    if (type === TYPES.product) count(top.products, label || target);
    if (type === TYPES.doc){
      count(top.docs, label || target);
      count(top.docTypes, label.split(" · ").pop() || target);
    }
    if (type === TYPES.media || type === TYPES.honor) count(top.media, (type === TYPES.honor ? "Vinh danh · " : target + " · ") + label);
    if (type === TYPES.view) count(top.views, label ? target + " · " + label : target);
    if (type === TYPES.search){
      count(top.searches, target);
      if (Number(extra) === 0) count(top.noResult, target);
    }
  });

  const rank = (map, limit) => Object.keys(map).map(k => [k, map[k]]).sort((a, b) => b[1] - a[1]).slice(0, limit || 10);
  const sum = P => ({visits:P.visits, visitors:Object.keys(P.visitors).length, sessions:Object.keys(P.sessions).length,
    products:P.products, docs:P.docs, searches:P.searches});

  return out_({
    ok:true, days, from, to:keys[keys.length - 1],
    updated:Utilities.formatDate(today, TZ, "HH:mm dd/MM/yyyy"),
    totals:sum(cur), previous:sum(prev),
    daily:keys.map(k => ({d:k, visits:daily[k].visits, visitors:Object.keys(daily[k].visitors).length})),
    hours,
    topProducts:rank(top.products), topDocs:rank(top.docs), topDocTypes:rank(top.docTypes, 8),
    topMedia:rank(top.media), topSearches:rank(top.searches), noResult:rank(top.noResult),
    sources:rank(top.sources, 6), devices:rank(top.devices, 4), views:rank(top.views, 8),
  });
}

function blank_(){ return {visits:0, visitors:{}, sessions:{}, products:0, docs:0, searches:0}; }
function out_(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/* Chạy thử một lần trong trình soạn thảo (chọn hàm setup → Chạy) để tạo tab và cấp quyền */
function setup(){ sheet_(); }
