/* =====================================================
   DỮ LIỆU WEBSITE — chỉ cần sửa file này để cập nhật nội dung.
   Xem hướng dẫn chi tiết trong README.md
   ===================================================== */
const F = id => `https://drive.google.com/file/d/${id}/view`;
const D = id => `https://drive.google.com/drive/folders/${id}`;
const DOC = id => `https://docs.google.com/document/d/${id}/edit`;
const LIB = slug => `https://thuvien.f88.vn/vi_VI/sổ-tay-sản-phẩm-bảo-hiểm-tự-nguyện-dộc-lập/${slug}`;
const SITE = p => `https://sites.google.com/view/tailieu-bao-hiem-nnx/${p}`;
const CAP_DON = DOC("1zYr--cd1ueq4poD1eIAl4BH_yutZYgod");

const NEEDS = [
  {id:"health", label:"Lo viện phí, sức khỏe", short:"Sức khỏe & nằm viện", icon:"heart"},
  {id:"acc",    label:"Phòng rủi ro tai nạn",  short:"Tai nạn", icon:"shield"},
  {id:"income", label:"Bảo vệ thu nhập khi ốm đau, tai nạn",  short:"Thu nhập", icon:"wallet"},
  {id:"bike",   label:"Khách có xe máy",       short:"Xe máy", icon:"bike"},
  {id:"car",    label:"Khách có ô tô",         short:"Ô tô", icon:"car"},
];
const CHANNELS = {kdml:"KDML", ns:"NGÔI SAO BH"};

const DOC_TYPES = {
  brochure:{label:"Brochure", icon:"image"},
  quytac:{label:"Quy tắc BH", icon:"scale"},
  salekit:{label:"Salekit bán hàng", icon:"briefcase"},
  daotao:{label:"Đào tạo sản phẩm", icon:"book"},
  capdon:{label:"Hướng dẫn cấp đơn", icon:"pen"},
  boithuong:{label:"Hướng dẫn bồi thường", icon:"lifebuoy"},
  bieuphi:{label:"Biểu phí", icon:"calc"},
  taituc:{label:"Hướng dẫn tái tục", icon:"refresh"},
  chupanh:{label:"Hướng dẫn chụp ảnh xe", icon:"camera"},
  phaply:{label:"Văn bản pháp lý", icon:"scale"},
  tonghop:{label:"Bộ tài liệu", icon:"folder"},
};

const PRODUCTS = [
  {id:"tcnv", name:"Trợ cấp nằm viện", ch:"kdml", need:"health", ins:"Bán tại PGD F88",
   desc:"Trợ cấp tiền mặt theo ngày khi khách hàng phải nằm viện do ốm bệnh hoặc tai nạn. Dễ tư vấn kèm khoản vay.",
   docs:[["salekit",D("1XsKGW05w5n2eUHzStaSf31jkF6VhkntJ")],["daotao",LIB("bảo-hiểm-trợ-cấp-nằm-viện")],["capdon",CAP_DON],["quytac",F("1tnHr5QF4YDHBPJ51phEFV-ZwJoFzjbtd")]],
   skills:["sk-tcnv","sk-loan","sk-qa"]},
  {id:"cssk", name:"Chăm sóc sức khỏe", ch:"kdml", need:"health", ins:"Bán tại PGD F88",
   desc:"Chi trả chi phí điều trị nội trú, ngoại trú cho khách hàng và gia đình.",
   docs:[["salekit",D("1fm_BOupJFsbUVUUpzumgFOKMZftp1NLr")],["daotao",F("1vRo53EWgGD16Yt3os0iRwqsoYOG3pj4E")],["capdon",CAP_DON],["quytac",F("11leFdMDQCqCZZUT26kuH6yTJhHJwmJoQ")]],
   skills:["sk-tcnv","sk-bundle","sk-qa"]},
  {id:"tnc", name:"Tai nạn cá nhân", ch:"kdml", need:"acc", ins:"Bán tại PGD F88",
   desc:"Bảo vệ khách hàng trước rủi ro thương tật, tử vong do tai nạn. Phí thấp, cấp đơn nhanh.",
   docs:[["salekit",D("1JV2RdRH_KHkSwNvRFro2i7Gjn7Ktrtdp")],["daotao",LIB("sản-phẩm-bảo-hiểm-tai-nạn-ca-nhan")],["capdon",CAP_DON],["quytac",F("1EzWe2AvfXL9zI4x00b4UGOzwfauY1VQG")]],
   skills:["sk-bundle","sk-objection","sk-qa"]},
  {id:"tctn", name:"Trợ cấp thu nhập 6 tháng", ch:"kdml", need:"income", ins:"Bán tại PGD F88",
   desc:"Hỗ trợ khách hàng duy trì thu nhập trong 6 tháng khi gặp rủi ro, giúp yên tâm trả khoản vay.",
   docs:[["daotao",F("1UU9Av70jeVhlrtBmRnAf99zbe8L0Zutk")],["capdon",CAP_DON],["taituc",D("1oJ6Bd2DgFOJFu_FsWOIw4vF0rMR8hrrb")]],
   skills:["sk-loan","sk-objection","sk-qa"]},
  {id:"tnds-xm", name:"TNDS xe máy", ch:"kdml", need:"bike", ins:"Bán tại PGD F88",
   desc:"Bảo hiểm trách nhiệm dân sự bắt buộc cho chủ xe máy. Sản phẩm dễ mở lời với mọi khách hàng có xe.",
   docs:[["daotao",LIB("bảo-hiểm-tnds-xe-may-o-to")],["capdon",CAP_DON],["quytac",F("1QFI8jWJakvWsO-erPTms1hB9aJMsd2X_")],["bieuphi",F("1s4vWnClkBjqxnGW8duPq70MdtV8hjLZz")]],
   skills:["sk-find","sk-digital"]},
  {id:"tnds-ot", name:"TNDS ô tô", ch:"kdml", need:"car", ins:"Bán tại PGD F88",
   desc:"Trách nhiệm dân sự bắt buộc cho chủ xe ô tô. Ưu thế về phí và uy tín khi mua tại cửa hàng F88.",
   docs:[["daotao",LIB("bảo-hiểm-tnds-xe-may-o-to")],["capdon",CAP_DON],["quytac",F("1QFI8jWJakvWsO-erPTms1hB9aJMsd2X_")],["bieuphi",F("1s4vWnClkBjqxnGW8duPq70MdtV8hjLZz")]],
   skills:["sk-find","sk-digital"], cases:["cs-son"]},
  {id:"vcx-kdml", name:"Vật chất xe ô tô", ch:"kdml", need:"car", ins:"Bán tại PGD F88",
   desc:"Bồi thường thiệt hại vật chất thân vỏ, máy móc xe ô tô do va chạm, thiên tai, mất cắp bộ phận.",
   docs:[["daotao",LIB("bảo-hiểm-vật-chất-xe-o-to")],["capdon",CAP_DON],["chupanh",DOC("1jDf5ISzDWp-UercH9SVaJOR-lcNnY4NzJn2R2_Tzc0w")]],
   skills:["sk-find","sk-objection"]},
  {id:"tasco", name:"CSSK Xanh Bình An", ch:"ns", need:"health", ins:"TASCO",
   desc:"Chăm sóc sức khỏe Xanh Bình An của Bảo hiểm Tasco, kèm đầy đủ hướng dẫn bồi thường và bộ tài liệu tổng hợp.",
   docs:[["salekit",D("1xVvC4XNtvNMqjvQBsa2CA4ITxxKfhTy1")],["daotao","https://docs.google.com/presentation/d/1Qgya7MKGkxDQ2Y1d1cbEFnK9c4pZCviI/edit"],["boithuong",D("1zVXBN_hwBY24eLgFyf_Ri43dPrlQ1MXb")],["quytac",F("1FR1_KSTfyO6fQRVrjWWbDnTUJWKZOAhu")],["tonghop",D("1wXyD_72BWwurcmoAgtp6x4ubAyxBdyOY")]],
   skills:["sk-tcnv","sk-objection"]},
  {id:"mic", name:"MIC Care", ch:"ns", need:"health", ins:"MIC",
   desc:"Gói chăm sóc sức khỏe của Bảo hiểm Quân đội MIC, có brochure giới thiệu để gửi khách.",
   docs:[["brochure",D("1IXsT-dwn_WJmEhu1Jsn-eenKinXLWfLF")],["salekit",F("1mcRGfO0t4oU6lNkbjgdIn03dPkHlkx4d")],["daotao",D("1pWsEPwYf4KH11eG1WfhUEfjjd90pOCoC")],["capdon",CAP_DON],["quytac",D("1NTGjlx5W5Hk-SqVNmlS1r_fTTC0q71hP")]],
   skills:["sk-tcnv","sk-objection"]},
  {id:"vbi", name:"VBI Care", ch:"ns", need:"health", ins:"VBI",
   desc:"Gói chăm sóc sức khỏe của Bảo hiểm VietinBank VBI, có brochure giới thiệu để gửi khách.",
   docs:[["brochure",F("1g7roGqNO-10IY3_9iFUd5qyez6qKyEZo")],["salekit",D("1F76BvtzNRlJYnCyfLBzu-eareflTlHPH")],["daotao",F("1g7roGqNO-10IY3_9iFUd5qyez6qKyEZo")],["capdon",CAP_DON],["quytac",F("1azpZf2QIo0z0w2QBK_V9grjH8WE5Yp8c")]],
   skills:["sk-tcnv","sk-objection"]},
  {id:"vcx-ns", name:"Vật chất xe đa hãng", ch:"ns", need:"car", ins:"PJICO · BẢO VIỆT · DBV · TASCO · BẢO MINH",
   desc:"Chọn hãng phù hợp với khách: mỗi hãng có thư mục tài liệu, quy tắc và biểu phí riêng.",
   docs:[["tonghop",D("12IuJBIhDZVrQEesbkUrKAYCM-13IJhF7"),"VCX PJICO"],["tonghop",D("1099FM5d1R3fczw8CFFdYuPz8auWGMI9t"),"VCX Bảo Việt"],["tonghop",D("1SzA5rg2xF2_IY9wSpFQmu7cXA35emNep"),"VCX DBV"],["tonghop",D("1KQ-rBGk0FSKmu96-FFip0-eAXN9Hat3b"),"VCX TASCO"],["tonghop",D("1ORWQDJw67C0_r9Wljrrr_8ZhWSw0KneG"),"VCX Bảo Minh"]],
   skills:["sk-find","sk-digital"], cases:["cs-son"]},
  {id:"tnds-bb", name:"TNDS bắt buộc ô tô", ch:"ns", need:"car", ins:"Theo Nghị định hiện hành",
   desc:"Tài liệu, nghị định, quy tắc phân loại xe và báo giá để tư vấn TNDS bắt buộc.",
   docs:[["tonghop",D("1HXJ6jDeCY_GwwQpq79PcqoTW9AIMRGFQ"),"Tài liệu TNDS bắt buộc"],["phaply",F("1UdJ7k-KegDT9JwIS6bHGgcCHYWwrodOx"),"Nghị định"],["phaply",F("1QaVDnJrPPvAacVFltke4T_QR_tiDLnXJ"),"Quy tắc phân loại xe"],["bieuphi",D("1HXJ6jDeCY_GwwQpq79PcqoTW9AIMRGFQ"),"Báo giá"]],
   skills:["sk-find","sk-digital"], cases:["cs-son"]},
];

const SKILLS = {
  "sk-loan":{t:"Tips tư vấn bảo hiểm khoản vay", u:DOC("1k0_wHN-Rl3UiZ-rMQBAmwgA0W6MDv4He")},
  "sk-qa":{t:"Q&A trả lời khách hàng", u:F("1URlxFXgMr-8RAOdg8RBpPnq-yhUcfLpv")},
  "sk-bundle":{t:"Quyền lợi BH bán kèm & Tips tư vấn 2026", u:F("1XnYXNSfqWAeYdmK1cR63Ihkyctv1Gh2q")},
  "sk-tcnv":{t:"Kỹ năng tư vấn Trợ cấp nằm viện & CSSK", u:F("1ifW8-WHEdkXTkGEDWBB15nncVIdSu-tY")},
  "sk-objection":{t:"Kỹ năng xử lý từ chối (đào tạo T6.2025)", u:F("1S2nDPr_p_tfq-MI15PmXlOls1AaFZ3og")},
  "sk-find":{t:"Kỹ năng tìm kiếm khách hàng", u:"https://docs.google.com/spreadsheets/d/1Uxg3sxvU_DYIQ65s8VkBlyZLEMq7QoLR/pubhtml?gid=2059675596&single=true"},
  "sk-persona":{t:"Xác định chân dung khách hàng", u:"https://docs.google.com/spreadsheets/d/1Uxg3sxvU_DYIQ65s8VkBlyZLEMq7QoLR/pubhtml?gid=160771760&single=true"},
  "sk-brand":{t:"Xây dựng thương hiệu cá nhân trên MXH", u:F("1CBkuwG-1Jzx6A660mjgmPtBFnCiK4pnB")},
  "sk-digital":{t:"Bộ hành động digital PGD", u:DOC("1eqBG_vf8CxtQtLfjFZdXT0s8HNmOyd0BMkGuVkbHdZU")},
};
const CLAIM_GUIDES = [
  {t:"Quy trình tiếp nhận, xử lý bồi thường tại PGD", u:F("17Fd_SwMbPsOZQDserhsArBIbqyNAg2uE")},
  {t:"Tạo hồ sơ yêu cầu bồi thường trên FBH", u:F("1yLNrHAjLZqekzvNJoiNYYNgGOl-R7DHU")},
  {t:"Thu thập hồ sơ bồi thường theo sản phẩm", u:"https://docs.google.com/spreadsheets/d/1Dg_eB94PrjQIQK5eYKlQgQDJF5QU8inzwVG7uPXTSxk/edit"},
];

/* Truyền thông
   date: ngày cập nhật, viết "DD/MM/YYYY", "MM/YYYY" hoặc "YYYY".
   Các mục tự nhóm theo năm và mục mới nhất hiện trước. */
const MEDIA = [
  {id:"n-bonus", sec:"news", date:"08/04/2026", k:"Chính sách · áp dụng từ 08/04/2026", t:"Chính sách thưởng bảo hiểm độc lập 2026 – KDML F88", d:"Thưởng bảo hiểm = Tỷ lệ thưởng × Phí bảo hiểm. Xem bảng tỷ lệ theo nhóm sản phẩm.", u:SITE("ch%C3%ADnh-s%C3%A1ch-th%C6%B0%E1%BB%9Fng"), icon:"gift", star:true},
  {id:"n-bundle", sec:"news", date:"2026", k:"Đào tạo · 2026", t:"Quyền lợi BH bán kèm & Tips tư vấn 2026", d:"Cập nhật quyền lợi các gói bán kèm khoản vay và cách mở lời.", u:SKILLS["sk-bundle"].u, icon:"news"},
  {id:"n-obj", sec:"news", date:"06/2025", k:"Đào tạo · T6.2025", t:"Kỹ năng xử lý từ chối", d:"Tài liệu buổi đào tạo xử lý các lời từ chối thường gặp.", u:SKILLS["sk-objection"].u, icon:"news"},
  {id:"c1", sec:"claim", k:"Câu chuyện bồi thường · HNI", t:"Chị Hường PT – CVKD 192 KN HNI", d:"Chia sẻ thực tế hỗ trợ khách hàng nhận bồi thường.", u:"https://www.gapowork.vn/group/2357079808128083968/posts/661879113957330944", icon:"heart", src:"Gapowork"},
  {id:"c2", sec:"claim", k:"Câu chuyện bồi thường · HNI", t:"Chị Tâm NT – CVKD 22 CD HNI", d:"Chia sẻ thực tế hỗ trợ khách hàng nhận bồi thường.", u:"https://www.gapowork.vn/group/2357079808128083968/posts/662356870240809984", icon:"heart", src:"Gapowork"},
  {id:"c3", sec:"claim", k:"Câu chuyện bồi thường · DNO", t:"Chị Trâm HTT – CVKD 04 THD DNO", d:"Chia sẻ thực tế hỗ trợ khách hàng nhận bồi thường.", u:"https://www.gapowork.vn/group/2357079808128083968/posts/662333022405276672", icon:"heart", src:"Gapowork"},
  {id:"c4", sec:"claim", k:"Câu chuyện bồi thường · HDG", t:"Chị Lệ ĐT – CVKD 153 BH HDG", d:"Chia sẻ thực tế hỗ trợ khách hàng nhận bồi thường.", u:"https://www.gapowork.vn/group/2357079808128083968/posts/662283269182025728", icon:"heart", src:"Gapowork"},
  {id:"cs-linh", sec:"case", date:"2026", k:"Vinh danh · KV5 Hà Nội 2", t:"Anh Nguyễn Mạnh Linh QLKV – Top 1 doanh thu bảo hiểm toàn miền Bắc", d:"Giữ vững Top 1 toàn Vùng và dẫn đầu miền Bắc. Bí kíp quản lý bền bỉ, chủ động, sáng tạo.", u:SITE("kinh-nghi%E1%BB%87m-b%C3%A1n-t%E1%BB%91t"), icon:"trophy", star:true},
  {id:"cs-son", sec:"case", date:"2026", k:"Vinh danh · KV2 Hà Nội 1", t:"Anh Nguyễn Minh Sơn QLKV – 3 tháng liên tục vượt KPI phí 120–150%", d:"Tập trung TNDS ô tô, chăm sóc lại data khách cũ kết hợp digital bảo hiểm.", u:SITE("kinh-nghi%E1%BB%87m-b%C3%A1n-t%E1%BB%91t"), icon:"trophy", star:true},
  {id:"ct-people", sec:"content", k:"Kho content · Google Sheets", t:"Bảo hiểm con người", d:"Bài đăng mẫu, caption cho sức khỏe, nằm viện, tai nạn, thu nhập.", u:"https://docs.google.com/spreadsheets/d/1qvgII0geFa3SV6Gs4lG-YAuDST0rXa8iPY7Xo1MaXCc/edit", icon:"megaphone"},
  {id:"ct-car", sec:"content", k:"Kho content · Google Sheets", t:"Bảo hiểm xe cơ giới", d:"Bài đăng mẫu, caption cho TNDS, vật chất xe máy và ô tô.", u:"https://docs.google.com/spreadsheets/d/1OcaVYLd3r5QAjBEoSnpS3Z716JK1oCU6ybjqEIToAQA/edit", icon:"megaphone"},
  ...["sk-loan","sk-qa","sk-tcnv","sk-objection","sk-find","sk-persona","sk-brand","sk-digital"].map(k=>({id:k, sec:"skill", k:"Kỹ năng bán hàng", t:SKILLS[k].t, d:"", u:SKILLS[k].u, icon:"book"})),
  ...CLAIM_GUIDES.map((g,i)=>({id:"g"+i, sec:"guide", k:"Hướng dẫn bồi thường", t:g.t, d:"", u:g.u, icon:"lifebuoy"})),
];
const SECTIONS = [
  {id:"news", label:"Tin mới", icon:"news"},
  {id:"claim", label:"Câu chuyện bồi thường", icon:"heart"},
  {id:"case", label:"Vinh danh & case study", icon:"trophy"},
  {id:"content", label:"Kho content social", icon:"megaphone"},
  {id:"skill", label:"Kỹ năng bán hàng", icon:"book"},
  {id:"guide", label:"Hướng dẫn bồi thường", icon:"lifebuoy"},
];

/* Dòng chữ chạy trên đầu trang. Chữ trong <b>...</b> sẽ có màu nổi bật. */
const TICKER = [
  `CHÍNH SÁCH THƯỞNG 2026 ÁP DỤNG TỪ <b>08/04/2026</b>`,
  `THƯỞNG = <b>TỶ LỆ THƯỞNG × PHÍ BẢO HIỂM</b>`,
  `<b>${PRODUCTS.length}</b> SẢN PHẨM · <b>${PRODUCTS.reduce((a,p)=>a+p.docs.length,0)}</b> TÀI LIỆU`,
  `KV2 HÀ NỘI 1: <b>3 THÁNG VƯỢT KPI 120–150%</b> VỚI TNDS Ô TÔ`,
  `KV5 HÀ NỘI 2: <b>TOP 1 DOANH THU</b> TOÀN MIỀN BẮC`,
  `MỚI: QUYỀN LỢI BH BÁN KÈM & TIPS TƯ VẤN <b>2026</b>`,
];

