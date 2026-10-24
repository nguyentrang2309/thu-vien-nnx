# Thư viện Bảo hiểm Ngôi Nhà Xanh

Website giúp người bán chọn sản phẩm bảo hiểm theo nhu cầu của khách, rồi mở brochure, quy tắc, hướng dẫn bồi thường, salekit trên Google Drive. Website cũng tập hợp tin truyền thông, case study và kho content.

**Link web:** https://nguyentrang2309.github.io/thu-vien-nnx/

## Cấu trúc

| File | Nội dung | Có cần sửa? |
|---|---|---|
| `data.js` | Toàn bộ nội dung: sản phẩm, link tài liệu, tin tức, case study, kho content, dòng chữ chạy | **Có**, mọi cập nhật nội dung đều sửa ở đây |
| `index.html` | Giao diện và cách hiển thị | Không, trừ khi muốn đổi thiết kế |

---

## Cách sửa nhanh nhất (ngay trên trình duyệt)

1. Vào repo trên GitHub, bấm vào file **`data.js`**.
2. Bấm biểu tượng **cây bút ✏️** (Edit this file) ở góc phải.
3. Sửa nội dung, xem hướng dẫn ở các phần bên dưới.
4. Bấm **Commit changes…**, ghi một dòng mô tả (ví dụ *"Thêm brochure MIC Care 2027"*), rồi bấm **Commit changes**.
5. Chờ **1–2 phút**, sau đó tải lại trang web để xem nội dung mới. Nếu chưa thấy thay đổi, bấm `Ctrl + F5`.

Tab **Actions** của repo cho biết tiến độ cập nhật: dấu ✅ xanh là đã lên web, dấu ❌ đỏ là có lỗi (xem phần *Khi web bị trắng / lỗi*).

---

## 1. Lấy link Google Drive

Mở file hoặc thư mục trên Drive, bấm **Chia sẻ → Sao chép đường liên kết**. Có hai cách điền link:

- **Dán nguyên link** trong dấu ngoặc kép: `"https://drive.google.com/file/d/1abc.../view?usp=sharing"`
- **Chỉ dán ID**, tức đoạn mã nằm giữa `/d/` và `/view` (hoặc nằm sau `/folders/`), rồi bọc trong hàm rút gọn:

| Loại link | Cách viết |
|---|---|
| File trên Drive (PDF, ảnh…) | `F("1abc...")` |
| Thư mục Drive | `D("1abc...")` |
| Google Docs | `DOC("1abc...")` |
| Sổ tay Thư viện F88 | `LIB("tên-trang")` |

> ⚠️ Kiểm tra quyền chia sẻ trên Drive: người bán phải có quyền xem file, nếu không họ sẽ thấy trang "Cần quyền truy cập".

## 2. Thay link một tài liệu có sẵn

Tìm sản phẩm trong mảng `PRODUCTS` (dùng `Ctrl + F` gõ tên sản phẩm), rồi tìm dòng `docs:`. Mỗi tài liệu có dạng `["loại", link]`:

```js
docs:[
  ["brochure", D("1IXsT-dwn_WJmEhu1Jsn-eenKinXLWfLF")],
  ["quytac",   F("1azpZf2QIo0z0w2QBK_V9grjH8WE5Yp8c")],
],
```

Bạn chỉ cần thay phần link. Muốn đặt tên hiển thị riêng thì thêm phần tử thứ 3: `["phaply", F("1Ud..."), "Nghị định 67/2023"]`.

**Các loại tài liệu có sẵn** (mỗi loại tự hiện icon phù hợp):

| Mã | Hiển thị |
|---|---|
| `brochure` | Brochure |
| `quytac` | Quy tắc BH |
| `salekit` | Salekit bán hàng |
| `daotao` | Đào tạo sản phẩm |
| `capdon` | Hướng dẫn cấp đơn |
| `boithuong` | Hướng dẫn bồi thường |
| `bieuphi` | Biểu phí |
| `taituc` | Hướng dẫn tái tục |
| `chupanh` | Hướng dẫn chụp ảnh xe |
| `phaply` | Văn bản pháp lý |
| `tonghop` | Bộ tài liệu |

Muốn thêm loại mới, khai báo nó trong `DOC_TYPES` theo mẫu `mamoi:{label:"Tên hiển thị", icon:"book"},`. Danh sách icon nằm trong `index.html`, mục `ICONS`.

## 3. Thêm một sản phẩm mới

Copy một khối sản phẩm có sẵn trong `PRODUCTS` (từ `{id:` đến `},`), dán ngay bên dưới rồi sửa:

```js
{id:"pti-care", name:"PTI Care", ch:"ns", need:"health", ins:"PTI",
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
| `ins` | Hãng bảo hiểm / ghi chú nhỏ |
| `desc` | Mô tả ngắn |
| `docs` | Danh sách tài liệu (xem mục 2) |
| `skills` | Mã tài liệu kỹ năng hiện trong ngăn sản phẩm (xem `SKILLS`) |
| `cases` | *(không bắt buộc)* Mã case study liên quan, ví dụ `["cs-son"]` |

Mỗi sản phẩm còn có link riêng để gửi cho người bán: `https://nguyentrang2309.github.io/thu-vien-nnx/#p-<id>`.

## 4. Thêm tin tức, câu chuyện bồi thường, case study, kho content

Mọi mục truyền thông nằm trong mảng `MEDIA`. Để thêm mục mới, copy một dòng có sẵn rồi sửa:

```js
{id:"n-tet2027", sec:"news", k:"Chương trình · 01/2027", t:"Ưu đãi Tết 2027 cho TNDS ô tô",
 d:"Mô tả ngắn.", u:F("..."), icon:"news", star:true},
```

| Trường | Ý nghĩa |
|---|---|
| `sec` | Mục: `news` Tin mới · `claim` Câu chuyện bồi thường · `case` Case study · `content` Kho content · `skill` Kỹ năng · `guide` Hướng dẫn bồi thường |
| `k` | Dòng nhỏ phía trên tiêu đề (loại · ngày/khu vực) |
| `t` | Tiêu đề |
| `d` | Mô tả (để `""` nếu không cần) |
| `u` | Link (Drive, Gapowork, Sheets…) |
| `icon` | `news`, `heart`, `trophy`, `megaphone`, `book`, `gift`, `lifebuoy` |
| `star` | *(không bắt buộc)* `true` để thẻ có icon nền vàng chanh, dùng cho mục nổi bật |

Đặt mục mới **lên đầu** nhóm nếu muốn nó hiện trước.

## 5. Sửa dòng chữ chạy trên đầu trang

Sửa mảng `TICKER` ở cuối `data.js`. Mỗi dòng nằm trong dấu backtick `` ` ``, chữ trong `<b>...</b>` sẽ có màu nổi bật.

## 6. Hướng dẫn bồi thường dùng chung

Ba link trong `CLAIM_GUIDES` hiện ở **mọi** sản phẩm. Khi có quy trình mới thì sửa tại đây.

---

## Khi web bị trắng / lỗi

Nguyên nhân gần như luôn là **sai dấu câu** trong `data.js`. Kiểm tra các điểm sau:

- Mỗi dòng `{...}` hoặc `[...]` kết thúc bằng **dấu phẩy `,`**
- Chữ nằm trong **cặp ngoặc kép `"..."`**. Không dùng ngoặc kép kiểu Word `“ ”`
- Nếu trong chữ có dấu `"` thì đổi thành `'`
- Mở/đóng ngoặc đủ cặp: `{ }`, `[ ]`, `( )`

Cách sửa nhanh: vào tab **Commits**, mở lần sửa gần nhất để xem đã thay đổi gì, rồi sửa lại đúng chỗ đó.

## Lưu ý

- Link Claude Artifact (bản demo đầu tiên) **không tự cập nhật** theo GitHub. Từ giờ hãy dùng link GitHub Pages ở trên.
- Repo đang để **công khai**: ai có link cũng xem được code và danh sách link Drive. Tài liệu vẫn được bảo vệ bằng quyền chia sẻ trên Drive.
