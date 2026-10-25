# Thư viện Bảo hiểm Ngôi Nhà Xanh

Website giúp người bán chọn sản phẩm bảo hiểm theo nhu cầu của khách, rồi mở brochure, quy tắc, hướng dẫn bồi thường, salekit trên Google Drive. Website cũng tập hợp tin mới, vinh danh, câu chuyện bồi thường và kho content.

| | Link |
|---|---|
| 🌐 **Web cho người bán** | https://nguyentrang2309.github.io/thu-vien-nnx/ |
| ✏️ **Sửa nội dung** (mở thẳng trình soạn thảo) | https://github.com/nguyentrang2309/thu-vien-nnx/edit/main/data.js |
| ✅ **Xem web đã cập nhật chưa** | https://github.com/nguyentrang2309/thu-vien-nnx/actions |
| 🕘 **Lịch sử sửa / khôi phục** | https://github.com/nguyentrang2309/thu-vien-nnx/commits/main |
| 👥 **Thêm người quản trị** | https://github.com/nguyentrang2309/thu-vien-nnx/settings/access |

## Mục lục

- [Website có những gì](#website-có-những-gì)
- [Quy trình cập nhật (4 bước)](#quy-trình-cập-nhật-4-bước)
- [Cập nhật nhanh: việc gì sửa ở đâu](#cập-nhật-nhanh-việc-gì-sửa-ở-đâu)
- [1. Lấy link Google Drive](#1-lấy-link-google-drive)
- [2. Sửa tài liệu của sản phẩm](#2-sửa-tài-liệu-của-sản-phẩm)
- [3. Thêm sản phẩm mới](#3-thêm-sản-phẩm-mới)
- [4. Thêm vinh danh, tin mới, câu chuyện bồi thường, kho content](#4-thêm-vinh-danh-tin-mới-câu-chuyện-bồi-thường-kho-content)
- [5. Dòng chữ chạy trên đầu trang](#5-dòng-chữ-chạy-trên-đầu-trang)
- [6. Hướng dẫn bồi thường và kỹ năng bán dùng chung](#6-hướng-dẫn-bồi-thường-và-kỹ-năng-bán-dùng-chung)
- [Quản trị](#quản-trị)
- [Khi gặp sự cố](#khi-gặp-sự-cố)

---

## Website có những gì

| Khu vực | Nội dung | Lấy dữ liệu từ (trong `data.js`) |
|---|---|---|
| **Trang sản phẩm** | Bước 1 chọn nhu cầu (và hãng bảo hiểm nếu cần) → Bước 2 chọn sản phẩm. Lọc theo kênh KDML / Ngôi sao BH. Mỗi thẻ có tag kênh và tên hãng bảo hiểm | `NEEDS`, `PRODUCTS` |
| **Trang chi tiết sản phẩm** (toàn màn hình) | Tài liệu sản phẩm, hướng dẫn bồi thường, kỹ năng bán, kho content, vinh danh liên quan | `PRODUCTS`, `CLAIM_GUIDES`, `SKILLS`, `MEDIA` |
| **Nút 🏆 VINH DANH** trên header | Các case vinh danh, nhóm theo năm, mới nhất lên trước | `MEDIA` mục `sec:"case"` |
| **Truyền thông & hỗ trợ bán** (sidebar) | Tin mới, Câu chuyện bồi thường, Vinh danh, Kho content, Kỹ năng bán hàng, Hướng dẫn bồi thường | `MEDIA`, `SECTIONS` |
| **Dòng chữ chạy** trên cùng | Thông báo ngắn | `TICKER` |

Toàn bộ nội dung nằm trong **một file `data.js`**. File `index.html` là giao diện, không cần sửa khi cập nhật nội dung.

Mỗi sản phẩm có link riêng để gửi cho người bán: `https://nguyentrang2309.github.io/thu-vien-nnx/#p-<id>`, ví dụ `…/#p-mic` mở thẳng trang MIC Care.

---

## Quy trình cập nhật (4 bước)

1. **Mở trình soạn thảo:** https://github.com/nguyentrang2309/thu-vien-nnx/edit/main/data.js
   *(hoặc vào repo → bấm file `data.js` → bấm cây bút ✏️ ở góc phải)*
2. **Tìm và sửa:** bấm `Ctrl + F`, gõ tên sản phẩm hoặc tiêu đề cần sửa. Sửa theo hướng dẫn ở các mục bên dưới.
3. **Lưu:** bấm nút xanh **Commit changes…** → ghi một dòng mô tả (ví dụ *"Thêm vinh danh chị Hoa 10/2026"*) → bấm **Commit changes**.
4. **Kiểm tra:** chờ **1–2 phút**, vào tab [Actions](https://github.com/nguyentrang2309/thu-vien-nnx/actions):
   - 🟡 vàng: đang cập nhật
   - ✅ xanh: đã lên web, mở web và bấm **`Ctrl + F5`** để thấy bản mới
   - ❌ đỏ: có lỗi, xem mục [Khi gặp sự cố](#khi-gặp-sự-cố)

> 💡 GitHub có thể giữ bản cũ trong bộ nhớ đệm tới **10 phút**. Nếu Actions đã ✅ mà web chưa đổi, bấm `Ctrl + F5` hoặc mở bằng tab ẩn danh.

> 💡 Muốn sửa nhiều chỗ cùng lúc thì sửa hết rồi mới Commit một lần.

---

## Cập nhật nhanh: việc gì sửa ở đâu

| Việc cần làm | Tìm trong `data.js` | Xem mục |
|---|---|---|
| Thay link brochure / quy tắc / salekit… | Tên sản phẩm → dòng `docs:` | [2](#2-sửa-tài-liệu-của-sản-phẩm) |
| Thêm sản phẩm mới | `const PRODUCTS` | [3](#3-thêm-sản-phẩm-mới) |
| Gắn / đổi **tag hãng bảo hiểm** | Tên sản phẩm → `insurers:[...]` | [3](#3-thêm-sản-phẩm-mới) |
| Thêm người được **vinh danh** | `sec:"case"` | [4](#4-thêm-vinh-danh-tin-mới-câu-chuyện-bồi-thường-kho-content) |
| Đăng **tin mới** | `sec:"news"` | [4](#4-thêm-vinh-danh-tin-mới-câu-chuyện-bồi-thường-kho-content) |
| Thêm **câu chuyện bồi thường** | `sec:"claim"` | [4](#4-thêm-vinh-danh-tin-mới-câu-chuyện-bồi-thường-kho-content) |
| Thêm link **kho content** | `sec:"content"` | [4](#4-thêm-vinh-danh-tin-mới-câu-chuyện-bồi-thường-kho-content) |
| Đổi **dòng chữ chạy** | `const TICKER` | [5](#5-dòng-chữ-chạy-trên-đầu-trang) |
| Đổi hướng dẫn bồi thường / kỹ năng | `CLAIM_GUIDES`, `SKILLS` | [6](#6-hướng-dẫn-bồi-thường-và-kỹ-năng-bán-dùng-chung) |

---

## 1. Lấy link Google Drive

Mở file hoặc thư mục trên Drive, bấm **Chia sẻ → Sao chép đường liên kết**. Có hai cách điền link:

- **Dán nguyên link** trong ngoặc kép: `"https://drive.google.com/file/d/1abc.../view?usp=sharing"`
- **Chỉ dán ID**, tức đoạn mã nằm giữa `/d/` và `/view` (hoặc nằm sau `/folders/`), rồi bọc trong hàm rút gọn:

| Loại link | Cách viết | Ví dụ link gốc |
|---|---|---|
| File trên Drive (PDF, ảnh…) | `F("ID")` | drive.google.com/file/d/**ID**/view |
| Thư mục Drive | `D("ID")` | drive.google.com/drive/folders/**ID** |
| Google Docs | `DOC("ID")` | docs.google.com/document/d/**ID**/edit |
| Trang trên Google Site cũ | `SITE("tên-trang")` | sites.google.com/view/tailieu-bao-hiem-nnx/**tên-trang** |
| Sổ tay Thư viện F88 | `LIB("tên-trang")` | |
| Link khác (Sheets, Slides, Gapowork…) | `"link đầy đủ"` | |

> ⚠️ **Kiểm tra quyền chia sẻ trên Drive:** người bán phải có quyền xem file, nếu không họ sẽ thấy trang "Cần quyền truy cập". Web chỉ dẫn link, quyền xem do Drive quyết định.

## 2. Sửa tài liệu của sản phẩm

Tìm sản phẩm trong `PRODUCTS`, đến dòng `docs:`. Mỗi tài liệu có dạng `["loại", link]`:

```js
docs:[
  ["brochure", D("1IXsT-dwn_WJmEhu1Jsn-eenKinXLWfLF")],
  ["quytac",   F("1azpZf2QIo0z0w2QBK_V9grjH8WE5Yp8c")],
  ["phaply",   F("1UdJ7k-KegDT9JwIS6bHGgcCHYWwrodOx"), "Nghị định 67/2023"],
],
```

- **Thay link:** chỉ sửa phần link.
- **Thêm tài liệu:** thêm một dòng `["loại", link],`.
- **Đặt tên hiển thị riêng:** thêm phần tử thứ 3, như dòng `phaply` ở ví dụ trên.
- **Thứ tự dòng** chính là thứ tự hiển thị trên web.

**Các loại tài liệu** (mỗi loại tự hiện icon phù hợp):

| Mã | Hiển thị | Mã | Hiển thị |
|---|---|---|---|
| `brochure` | Brochure | `boithuong` | Hướng dẫn bồi thường |
| `quytac` | Quy tắc BH | `bieuphi` | Biểu phí |
| `salekit` | Salekit bán hàng | `taituc` | Hướng dẫn tái tục |
| `daotao` | Đào tạo sản phẩm | `chupanh` | Hướng dẫn chụp ảnh xe |
| `capdon` | Hướng dẫn cấp đơn | `phaply` | Văn bản pháp lý |
| | | `tonghop` | Bộ tài liệu |

Muốn thêm loại mới, khai báo nó trong `DOC_TYPES`: `mamoi:{label:"Tên hiển thị", icon:"book"},`

## 3. Thêm sản phẩm mới

Copy một khối có sẵn trong `PRODUCTS` (từ `{id:` đến `},`), dán ngay bên dưới rồi sửa:

```js
{id:"pti-care", name:"PTI Care", ch:"ns", need:"health", insurers:["PTI"], ins:"Bảo hiểm Bưu điện PTI",
 desc:"Mô tả ngắn 1–2 câu để người bán hiểu sản phẩm.",
 docs:[["brochure",F("...")],["quytac",F("...")],["salekit",D("...")]],
 skills:["sk-tcnv","sk-objection"]},
```

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã không trùng, viết liền không dấu (dùng làm link riêng `#p-pti-care`) |
| `name` | Tên sản phẩm |
| `ch` | Kênh: `"kdml"` hoặc `"ns"` (Ngôi sao BH) |
| `need` | Nhu cầu: `"health"` sức khỏe · `"acc"` tai nạn · `"income"` thu nhập · `"bike"` xe máy · `"car"` ô tô |
| `insurers` | **Tên hãng bảo hiểm** hiện trên phần bìa thẻ, cùng hàng với tag kênh KDML / Ngôi sao BH, ví dụ `["MIC"]` hoặc nhiều hãng `["PJICO","BẢO VIỆT"]`. Để `[]` nếu chưa gắn hãng. Hàng lọc **HÃNG BẢO HIỂM** tự tạo từ các tag này. Hãy viết tên hãng giống nhau ở mọi sản phẩm (cùng viết `TASCO`, không lúc `Tasco` lúc `TASCO`) |
| `ins` | Dòng chữ nhỏ dưới tên nhóm, ví dụ "Bảo hiểm Quân đội MIC" hoặc "Bán tại PGD F88" |
| `desc` | Mô tả ngắn |
| `docs` | Danh sách tài liệu (xem mục 2) |
| `skills` | Mã tài liệu kỹ năng hiện ở trang chi tiết (xem `SKILLS`): `sk-loan` `sk-qa` `sk-bundle` `sk-tcnv` `sk-objection` `sk-find` `sk-persona` `sk-brand` `sk-digital` |
| `cases` | *(không bắt buộc)* Mã vinh danh liên quan, ví dụ `["cs-son"]` |

Sản phẩm mới tự hiện trong đúng nhóm nhu cầu, đúng kênh, và số đếm ở sidebar tự tăng.

**Đổi tên nhóm nhu cầu** (ví dụ nút "Bảo vệ thu nhập khi ốm đau, tai nạn"): sửa `label` (tên trên nút) hoặc `short` (tên trong sidebar) trong `NEEDS`.

## 4. Thêm vinh danh, tin mới, câu chuyện bồi thường, kho content

Mọi mục truyền thông nằm trong `MEDIA`. Copy một dòng cùng loại rồi sửa.

**Ví dụ thêm một người vinh danh:**

```js
{id:"cs-hoa", sec:"case", date:"10/2026", k:"Vinh danh · KV3 Hải Phòng", t:"Chị Trần Thị Hoa – Top 1 phí bảo hiểm quý 3", d:"Mô tả ngắn thành tích và bí quyết.", u:F("ID-file-chia-se"), icon:"trophy", star:true},
```

**Ví dụ đăng tin mới:**

```js
{id:"n-tet2027", sec:"news", date:"05/01/2027", k:"Chương trình · 01/2027", t:"Ưu đãi Tết 2027 cho TNDS ô tô", d:"Mô tả ngắn.", u:F("..."), icon:"news", star:true},
```

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã không trùng, viết liền không dấu |
| `sec` | Mục: `case` **Vinh danh** · `news` Tin mới · `claim` Câu chuyện bồi thường · `content` Kho content · `skill` Kỹ năng · `guide` Hướng dẫn bồi thường |
| `date` | **Ngày cập nhật**: `"15/09/2026"`, `"09/2026"` hoặc `"2026"`. Thẻ hiện dòng 📅 "Cập nhật …" |
| `k` | Dòng chữ nhỏ phía trên tiêu đề (loại · khu vực) |
| `t` | Tiêu đề |
| `d` | Mô tả (để `""` nếu không cần) |
| `u` | Link (Drive, Gapowork, Sheets…) |
| `icon` | `trophy` vinh danh · `news` tin · `heart` bồi thường · `megaphone` content · `book` kỹ năng · `gift` thưởng · `lifebuoy` hướng dẫn |
| `star` | *(không bắt buộc)* `true` để icon có nền vàng chanh, dùng cho mục nổi bật |

**Nhóm theo năm và thứ tự:** khi xem riêng một mục (ví dụ bấm **🏆 VINH DANH**), các thẻ tự xếp thành nhóm *Năm 2027*, *Năm 2026*… và mục có `date` mới nhất hiện trước. Vì vậy **không cần quan tâm vị trí dòng**, chỉ cần điền `date` đúng. Mục không có `date` nằm ở nhóm *Chưa có ngày* cuối trang.

**Gắn vinh danh vào sản phẩm:** thêm `id` của mục vinh danh vào `cases` của sản phẩm (mục 3), ví dụ `cases:["cs-son","cs-hoa"]`. Mục đó sẽ hiện ở trang chi tiết sản phẩm.

## 5. Dòng chữ chạy trên đầu trang

Sửa mảng `TICKER` ở cuối `data.js`. Mỗi dòng nằm trong dấu backtick `` ` `` và kết thúc bằng dấu phẩy. Chữ trong `<b>...</b>` có màu nổi bật:

```js
`VINH DANH THÁNG 10: <b>CHỊ HOA – KV3 HẢI PHÒNG</b>`,
```

## 6. Hướng dẫn bồi thường và kỹ năng bán dùng chung

- `CLAIM_GUIDES`: ba link hướng dẫn bồi thường hiện ở **mọi** trang chi tiết sản phẩm.
- `SKILLS`: danh sách tài liệu kỹ năng. Mỗi sản phẩm chọn kỹ năng của mình qua trường `skills`. Muốn tài liệu cũng hiện ở mục *Kỹ năng bán hàng* trong sidebar thì thêm một dòng `sec:"skill"` vào `MEDIA`.

---

## Quản trị

**Thêm người cùng cập nhật:** vào [Settings → Collaborators](https://github.com/nguyentrang2309/thu-vien-nnx/settings/access) → **Add people** → nhập tài khoản GitHub của đồng nghiệp. Sau khi họ chấp nhận email mời, họ sửa được như chủ repo. Người bán chỉ cần link web, **không cần** tài khoản GitHub.

**Xem ai sửa gì, lúc nào:** vào [Commits](https://github.com/nguyentrang2309/thu-vien-nnx/commits/main), bấm vào từng lần sửa. Dòng đỏ là nội dung bị xóa, dòng xanh là nội dung thêm mới.

**Quay lại bản trước khi sửa nhầm:**
1. Vào [Commits](https://github.com/nguyentrang2309/thu-vien-nnx/commits/main) và mở lần sửa gây lỗi.
2. Xem dòng đỏ (nội dung cũ) rồi copy lại.
3. Mở [trình soạn thảo `data.js`](https://github.com/nguyentrang2309/thu-vien-nnx/edit/main/data.js), dán đè vào đúng chỗ và Commit.

**Lưu ý bảo mật:** repo đang để **công khai**, ai có link cũng xem được code và danh sách link Drive. Tài liệu vẫn được bảo vệ bằng quyền chia sẻ trên Drive, nên **không** dán link "Bất kỳ ai có đường liên kết" cho tài liệu nội bộ nhạy cảm.

---

## Khi gặp sự cố

| Hiện tượng | Nguyên nhân thường gặp | Cách xử lý |
|---|---|---|
| Web **trắng trơn** hoặc mất hết sản phẩm | Sai dấu câu trong `data.js` | Xem danh sách kiểm tra bên dưới |
| Actions ✅ nhưng web **chưa đổi** | Bộ nhớ đệm | `Ctrl + F5`, mở tab ẩn danh, hoặc chờ 10 phút |
| Bấm tài liệu ra trang **"Cần quyền truy cập"** | Quyền chia sẻ trên Drive | Mở file trên Drive → Chia sẻ → cấp quyền cho nhóm người bán |
| Sản phẩm **không hiện ở nhóm nhu cầu** | Sai mã `need` hoặc `ch` | Kiểm tra lại bằng bảng ở mục 3 |
| Vinh danh **xếp sai thứ tự** | Thiếu hoặc sai định dạng `date` | Viết `"MM/YYYY"`, ví dụ `"09/2026"` |

**Danh sách kiểm tra dấu câu:**
- Mỗi dòng `{...}` hoặc `[...]` kết thúc bằng **dấu phẩy `,`**
- Chữ nằm trong **ngoặc kép thẳng `"..."`**. Không dùng ngoặc kép kiểu Word `“ ”` (hay gặp khi copy từ Word hoặc Zalo)
- Nếu trong chữ có dấu `"` thì đổi thành `'`
- Mở/đóng ngoặc đủ cặp: `{ }`, `[ ]`, `( )`
- Không xóa nhầm các dòng bắt đầu bằng `const`

Không tìm ra lỗi thì quay lại bản trước (xem [Quản trị](#quản-trị)) để web chạy lại đã, rồi sửa từ từ sau.
