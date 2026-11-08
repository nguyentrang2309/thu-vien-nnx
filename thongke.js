/* =====================================================
   GHI LƯỢT TRUY CẬP
   Không cần sửa file này. Gửi mỗi thao tác về Apps Script (STATS_URL trong data.js),
   Apps Script ghi thành một dòng trong Google Sheet thống kê.
   - Không ghi họ tên, email hay thông tin cá nhân. Mỗi trình duyệt chỉ có một mã
     ngẫu nhiên để đếm số người xem.
   - Không ghi khi chạy thử trên máy (localhost), trừ khi mở với ?dothu.
     ?dothu còn in từng thao tác ra Console để kiểm tra.
   ===================================================== */
const Track = (() => {
  const url = typeof STATS_URL === "string" ? STATS_URL.trim() : "";
  const test = /[?&]dothu\b/.test(location.search);
  const local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  const on = !!url && (!local || test);

  const rid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  const keep = (store, key) => {
    try { let v = store.getItem(key); if (!v) { v = rid(); store.setItem(key, v); } return v; }
    catch (e) { return rid(); }
  };
  const visitor = keep(localStorage, "nnx-vid");
  const session = keep(sessionStorage, "nnx-sid");
  const device = matchMedia("(max-width: 900px)").matches ? "Điện thoại" : "Máy tính";

  /* type: visit | product | doc | media | honor | view | search */
  function send(type, target = "", label = "", extra = ""){
    const ev = {type, target: String(target).slice(0, 200), label: String(label).slice(0, 200),
      extra: String(extra).slice(0, 200), visitor, session, device};
    if (test) console.info("[thống kê]", ev);
    if (!on) return;
    const body = JSON.stringify(ev);
    /* text/plain để trình duyệt không chặn (Apps Script không nhận yêu cầu kiểm tra CORS) */
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(url, new Blob([body], {type: "text/plain"}))) return;
    } catch (e) {}
    fetch(url, {method: "POST", mode: "no-cors", keepalive: true, headers: {"Content-Type": "text/plain"}, body}).catch(() => {});
  }

  /* Nguồn vào trang: link sản phẩm gửi qua Zalo, nhúng trong Google Site, gõ trực tiếp… */
  function visit(){
    let from = "Trực tiếp";
    try {
      if (window.self !== window.top) from = "Nhúng trong Google Site";
      else if (document.referrer && new URL(document.referrer).host !== location.host) from = new URL(document.referrer).host;
    } catch (e) { from = "Nhúng trong Google Site"; }
    /* Vào bằng link riêng: #p-<mã sản phẩm> hoặc #vd-<vinh danh> */
    const h = decodeURIComponent(location.hash);
    send("visit", h.startsWith("#p-") ? h.slice(3) : h.startsWith("#vd-") ? h.slice(1) : "", from);
  }

  /* Ghi từ khóa khi người dùng ngừng gõ 1,5 giây, bỏ qua từ khóa dưới 2 ký tự */
  let searchTimer, lastQ = "";
  function search(q, results){
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const k = q.trim().toLowerCase();
      if (k.length < 2 || k === lastQ) return;
      lastQ = k;
      send("search", k, "", results);
    }, 1500);
  }

  return {send, visit, search};
})();
