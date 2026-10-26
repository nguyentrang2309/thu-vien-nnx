# Thư viện Bảo hiểm Ngôi Nhà Xanh

Website giúp người bán chọn sản phẩm bảo hiểm theo nhu cầu của khách, rồi mở brochure, quy tắc, hướng dẫn bồi thường, salekit trên Google Drive. Website cũng tập hợp tin mới, vinh danh, câu chuyện bồi thường và kho content.

| | Link |
|---|---|
| 🌐 **Web cho người bán** | https://nguyentrang2309.github.io/thu-vien-nnx/ |
| 📝 **Sửa nội dung** (Google Sheet) | https://docs.google.com/spreadsheets/d/1CM5UR0rGkWSdaNJPDd3dxXAXwvu4_qzeLu480lIdQtY/edit |
| 🔎 **Kiểm tra lỗi trong Sheet** | https://nguyentrang2309.github.io/thu-vien-nnx/?kiemtra |
| ✏️ Sửa bản dự phòng `data.js` | https://github.com/nguyentrang2309/thu-vien-nnx/edit/main/data.js |
| ✅ **Xem web đã cập nhật chưa** | https://github.com/nguyentrang2309/thu-vien-nnx/actions |
| 🕘 **Lịch sử sửa / khôi phục** | https://github.com/nguyentrang2309/thu-vien-nnx/commits/main |
| 👥 **Thêm người quản trị** | https://github.com/nguyentrang2309/thu-vien-nnx/settings/access |

## Mục lục

- [Website có những gì](#website-có-những-gì)
- [Cập nhật nội dung bằng Google Sheet](#cập-nhật-nội-dung-bằng-google-sheet)
  - [Quy trình cập nhật (4 bước)](#quy-trình-cập-nhật-4-bước)
  - [Việc thường làm](#việc-thường-làm)
  - [Thẻ vinh danh](#thẻ-vinh-danh)
  - [Kết nối Sheet](#kết-nối-sheet)
- [Sửa bản dự phòng `data.js`](#sửa-bản-dự-phòng-datajs)
- [Quy trình sửa `data.js` (4 bước)](#quy-trình-sửa-datajs-4-bước)
- [Cập nhật nhanh: việc gì sửa ở đâu](#cập-nhật-nhanh-việc-gì-sửa-ở-đâu)
- [1. Lấy link Google Drive](#1-lấy-link-google-drive)
- [2. Sửa tài liệu của sản phẩm](#2-sửa-tài-liệu-của-sản-phẩm)
- [3. Thêm sản phẩm mới](#3-thêm-sản-phẩm-mới)
- [4. Thêm vinh danh, tin mới, câu chuyện bồi thường, kho content](#4-thêm-vinh-danh-tin-mới-câu-chuyện-bồi-thường-kho-content)
- [5. Dòng chữ chạy trên đầu trang](#5-dòng-chữ-chạy-trên-đầu-trang)
- [6. Hướng dẫn bồi thường và kỹ năng bán dùng chung](#6-hướng-dẫn-bồi-thường-và-kỹ-năng-bán-dùng-chung)
- [7. Đổi logo](#7-đổi-logo)
- [Quản trị](#quản-trị)
- [Khi gặp sự cố](#khi-gặp-sự-cố)

---

## Website có những gì

| Khu vực | Nội dung | Sửa ở tab nào trong Sheet |
|---|---|---|
| **Trang sản phẩm** | Bước 1 chọn nhu cầu (và hãng bảo hiểm nếu cần) → Bước 2 chọn sản phẩm. Lọc theo kênh KDML / Ngôi sao BH. Mỗi thẻ có tag kênh và tên hãng bảo hiểm | **Sản phẩm** |
| **Trang chi tiết sản phẩm** (toàn màn hình) | Tên, kênh, hãng bảo hiểm, mô tả và các tài liệu sản phẩm | **Sản phẩm**, **Tài liệu** |
| **Nút 🏆 VINH DANH** trên header | Các case vinh danh, nhóm theo năm, mới nhất lên trước | **Truyền thông**, mục *Vinh danh & case study* |
| **Truyền thông & hỗ trợ bán** (sidebar) | Tin mới, Câu chuyện bồi thường, Vinh danh, Kho content, Kỹ năng bán hàng, Hướng dẫn bồi thường | **Truyền thông** |
| **Dòng chữ chạy** trên cùng | Thông báo ngắn | **Chữ chạy** |

**Các file trong repo:**

| File | Nội dung | Khi nào cần sửa |
|---|---|---|
| `data.js` | Mã Google Sheet (`SHEET_ID`), danh mục cố định (nhu cầu, kênh, loại tài liệu, mục truyền thông) và **bản dự phòng** của toàn bộ nội dung | Khi đổi Sheet, thêm nhu cầu / loại tài liệu / mục mới, hoặc khi Sheet gặp sự cố |
| `sheet.js` | Đọc nội dung từ Google Sheet | Không cần sửa |
| `logo-nnx.webp` | Logo NNX Insurance ở góc trên bên trái | Khi đổi logo (xem [mục 7](#7-đổi-logo)) |
| `fonts/` | Font chữ **SVN-Gilroy** (5 độ đậm: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold, 800 XBold) dùng cho toàn bộ web | Không cần sửa. Muốn đổi font thì nhờ người phụ trách kỹ thuật |
| `index.html` | Giao diện và cách hiển thị | Chỉ khi đổi thiết kế |
| `README.md` | Hướng dẫn này | |

Mỗi sản phẩm có link riêng để gửi cho người bán: `https://nguyentrang2309.github.io/thu-vien-nnx/#p-<id>`, ví dụ `…/#p-mic` mở thẳng trang MIC Care.

---

## Cập nhật nội dung bằng Google Sheet

Sản phẩm, tài liệu, tin mới, vinh danh, câu chuyện bồi thường, kho content, kỹ năng, hướng dẫn bồi thường và dòng chữ chạy đều nhập trong **Google Sheet**:

👉 **https://docs.google.com/spreadsheets/d/1CM5UR0rGkWSdaNJPDd3dxXAXwvu4_qzeLu480lIdQtY/edit**

Sửa Sheet xong, mở lại web là thấy thay đổi. **Không cần GitHub, không cần Commit.**

### Quy trình cập nhật (4 bước)

1. **Mở Sheet** bằng link trên (cần quyền *Người chỉnh sửa*, xem [Thêm người cùng cập nhật](#thêm-người-cùng-cập-nhật)).
2. **Sửa hoặc thêm dòng** ở tab cần cập nhật. Google Sheet tự lưu, không có nút Lưu.
3. **Mở web** và bấm `Ctrl + F5`. Thay đổi thường hiện ngay, chậm nhất khoảng 1–2 phút.
4. **Kiểm tra lỗi** khi thêm nhiều dòng: mở https://nguyentrang2309.github.io/thu-vien-nnx/?kiemtra. Nếu có dòng sai, bảng ở góc dưới màn hình ghi rõ tab, số dòng và lý do.

| Tab trong Sheet | Nội dung | Mỗi dòng là |
|---|---|---|
| **Hướng dẫn** | Cách điền từng cột | |
| **Sản phẩm** | Mã, tên, kênh, nhu cầu, hãng bảo hiểm, dòng phụ, mô tả | 1 sản phẩm |
| **Tài liệu** | Mã sản phẩm, loại tài liệu, tên hiển thị riêng, link | 1 tài liệu của 1 sản phẩm |
| **Truyền thông** | Mục, ngày cập nhật, dòng nhỏ, tiêu đề, mô tả, link, nổi bật, biểu tượng. Cột J–M (họ tên, chức danh, PGD / khu vực, thành tích) chỉ dùng cho vinh danh | 1 thẻ tin / vinh danh / content… |
| **Chữ chạy** | Nội dung dòng chữ chạy. Bọc chữ trong `**hai dấu sao**` để tô màu | 1 thông báo |
| **Danh mục** | Danh sách cho các ô thả xuống. Không sửa | |

**Quy tắc chính:**
- Ô có danh sách thả xuống thì chọn, không gõ tay.
- Muốn ẩn tạm một dòng: chọn **Ẩn** ở cột *Hiển thị* (dòng chuyển xám). Không cần xóa.
- **Không đổi tên tab và dòng tiêu đề** (dòng 1). Đổi là web không đọc được tab đó.
- Sản phẩm và tài liệu hiện theo thứ tự dòng. Truyền thông tự xếp theo *Ngày cập nhật*, mới nhất lên trước.
- Chữ chạy có thể dùng `{SO_SAN_PHAM}` và `{SO_TAI_LIEU}` để tự hiện số sản phẩm, số tài liệu.

**Trang kiểm tra `?kiemtra`** cho biết từng tab đang đọc từ Sheet hay từ bản dự phòng, và liệt kê các dòng bị bỏ qua kèm lý do (thiếu link, sai mã sản phẩm, ngày sai định dạng…). Dòng bị bỏ qua sẽ không hiện trên web cho đến khi sửa xong.

### Việc thường làm

| Việc cần làm | Làm ở đâu trong Sheet |
|---|---|
| Thay link brochure / quy tắc / salekit… | Tab **Tài liệu**: tìm dòng có Mã sản phẩm và Loại tài liệu đó (`Ctrl + F`), dán link mới vào cột *Link* |
| Thêm tài liệu cho sản phẩm | Tab **Tài liệu**: thêm dòng, chọn *Mã sản phẩm* và *Loại tài liệu*, dán link. Muốn tài liệu hiện ở vị trí nào thì chèn dòng ở vị trí đó |
| Thêm sản phẩm mới | Tab **Sản phẩm**: thêm dòng, đặt *Mã* viết liền không dấu (ví dụ `pti-care`). Sau đó sang tab **Tài liệu** thêm các tài liệu với mã vừa đặt |
| Gắn / đổi hãng bảo hiểm | Tab **Sản phẩm**, cột *Hãng bảo hiểm*. Nhiều hãng thì cách nhau bằng dấu phẩy |
| Thêm người được **vinh danh** | Tab **Truyền thông**: thêm dòng, *Mục* chọn *Vinh danh & case study*, điền *Ngày cập nhật* (ví dụ `10/2026`), *Mô tả*, *Link* và 4 cột cuối **J–M**: *Họ tên, Chức danh, PGD / khu vực, Thành tích*. Xem [Thẻ vinh danh](#thẻ-vinh-danh) |
| Đăng **tin mới** | Tab **Truyền thông**: *Mục* chọn *Tin mới*. Chọn *Nổi bật = Có* nếu muốn biểu tượng có nền vàng chanh |
| Thêm **câu chuyện bồi thường** / **kho content** / **kỹ năng** / **hướng dẫn bồi thường** | Tab **Truyền thông**, chọn *Mục* tương ứng |
| Đổi **dòng chữ chạy** | Tab **Chữ chạy**. Bọc chữ trong `**hai dấu sao**` để tô màu |
| Gỡ tạm một mục | Cột *Hiển thị* chọn **Ẩn** |

Mỗi sản phẩm có link riêng theo *Mã*: `https://nguyentrang2309.github.io/thu-vien-nnx/#p-<mã>`. **Đã gửi link sản phẩm cho người bán thì đừng đổi Mã**, nếu không link cũ sẽ không mở đúng sản phẩm.

**Khi Sheet gặp sự cố** (mất quyền chia sẻ, đổi tên tab, sai tên cột…), web không trắng trang mà tự dùng **bản dự phòng** trong `data.js` cho tab bị lỗi. Bản dự phòng không tự cập nhật theo Sheet, nên thỉnh thoảng nhờ người phụ trách kỹ thuật chép lại nội dung mới vào `data.js`.

### Thẻ vinh danh

Mỗi người được vinh danh có một thẻ như sau:

```
┌───────────────────────────────┐
│ 🏆 Top 1 miền Bắc   📅 09/2026 │  ← Thành tích · Ngày cập nhật
│                               │
│ Nguyễn Mạnh Linh              │  ← Họ tên (chữ lớn)
│ QLKV · KV5 · Vùng Hà Nội 2    │  ← Chức danh · PGD / khu vực
├───────────────────────────────┤
│ Giữ vững Top 1 toàn Vùng…     │  ← Mô tả
│ Xem chia sẻ ↗                 │  ← Link
└───────────────────────────────┘
```

Thẻ tự nhóm theo năm (*Năm 2026*, *Năm 2027*…), người mới nhất lên trước. Bấm nút **🏆 VINH DANH** trên đầu trang để xem.

#### Các cột dùng cho thẻ vinh danh

Tab **Truyền thông** đã có sẵn 4 cột dành riêng cho vinh danh ở cuối bảng: **J · Họ tên**, **K · Chức danh**, **L · PGD / khu vực**, **M · Thành tích**. Một dòng vinh danh dùng các cột sau:

| Cột | Điền gì | Ví dụ | Hiện ở đâu trên thẻ |
|---|---|---|---|
| **A · Mục** | Chọn **Vinh danh & case study** | | |
| **B · Ngày cập nhật** | `MM/YYYY` hoặc `DD/MM/YYYY` | `10/2026` | Tag 📅 góc phải trên, và dùng để xếp thứ tự |
| C · Dòng nhỏ | Không hiện trên thẻ vinh danh, có thể để trống | `Vinh danh · KV3 Hải Phòng` | |
| **D · Tiêu đề** | Câu ngắn, dùng khi tìm kiếm | `Trần Thị Hoa – Top 1 phí Q3` | Không hiện, chỉ để tìm kiếm |
| **E · Mô tả** | 1–2 câu về thành tích, bí quyết. **Nên dưới 150 ký tự** | `3 tháng liên tục dẫn đầu phí BH độc lập nhờ chăm sóc lại khách cũ.` | Phần dưới của thẻ |
| **F · Link** | Bài chia sẻ chi tiết (Gapowork, Drive, Google Site…). **Bắt buộc** | `https://www.gapowork.vn/…` | Nút *Xem chia sẻ ↗* |
| G · Nổi bật, H · Biểu tượng | Không cần cho thẻ vinh danh | | |
| **I · Hiển thị** | **Hiện** hoặc **Ẩn** | `Hiện` | |
| **J · Họ tên** | Họ tên đầy đủ, có dấu. **Bắt buộc** để hiện dạng thẻ vinh danh | `Trần Thị Hoa` | Chữ lớn, nền xanh |
| **K · Chức danh** | Viết tắt, in hoa | `CVKD`, `TPGD`, `QLKV` | Chữ vàng chanh, trước PGD |
| **L · PGD / khu vực** | Tên PGD hoặc khu vực / vùng | `PGD 192 Kim Ngưu – HNI`, `KV5 · Vùng Hà Nội 2` | Sau chức danh |
| **M · Thành tích** | Một cụm ngắn, **khoảng 20 ký tự** | `Top 1 phí Q3`, `Vượt KPI 150%` | Tag 🏆 vàng chanh góc trái trên |

> Ô **Họ tên** để trống thì dòng đó hiện kiểu thẻ thường (có biểu tượng cúp nhỏ, không có phần đầu xanh). Các mục khác (Tin mới, Câu chuyện bồi thường, Kho content…) để trống 4 cột J–M.

#### Thêm một người vinh danh (khoảng 2 phút)

1. Mở Sheet → tab **Truyền thông**.
2. Thêm 1 dòng mới ở **cuối bảng** (thứ tự dòng không quan trọng, web tự xếp theo *Ngày cập nhật*).
3. Điền theo bảng trên. Ví dụ một dòng hoàn chỉnh:

| Mục | Ngày cập nhật | Tiêu đề | Mô tả | Link | Hiển thị | Họ tên | Chức danh | PGD / khu vực | Thành tích |
|---|---|---|---|---|---|---|---|---|---|
| Vinh danh & case study | 10/2026 | Trần Thị Hoa – Top 1 phí Q3 | 3 tháng liên tục dẫn đầu phí BH độc lập nhờ chăm sóc lại khách cũ. | https://www.gapowork.vn/… | Hiện | Trần Thị Hoa | CVKD | PGD 192 Kim Ngưu – HNI | Top 1 phí Q3 |

4. Mở web → bấm **🏆 VINH DANH** → `Ctrl + F5` để kiểm tra. Nếu thẻ không hiện, mở `?kiemtra` để xem lý do (thường do thiếu *Link*).

**Mẹo viết cho đẹp:**
- **Thành tích** càng ngắn càng nổi: `Top 1 miền Bắc` tốt hơn `Đạt giải Top 1 doanh thu bảo hiểm toàn miền Bắc`.
- **Chức danh** viết tắt in hoa (`CVKD`), để thông tin dài hơn ở cột *PGD / khu vực*.
- **Mô tả** nêu con số hoặc cách làm cụ thể để người bán khác học theo.
- Muốn gỡ một người khỏi trang: chọn **Ẩn** ở cột *Hiển thị*, không cần xóa dòng.

### Thêm người cùng cập nhật

Trong Sheet bấm **Chia sẻ** → nhập email thành viên team truyền thông → chọn quyền **Người chỉnh sửa**. Người bán chỉ cần link web, không cần quyền vào Sheet.

**Xem ai sửa gì, khôi phục bản cũ:** trong Sheet vào **Tệp → Nhật ký phiên bản → Xem nhật ký phiên bản**, chọn mốc thời gian rồi bấm **Khôi phục phiên bản này**. Web tự đọc lại bản đã khôi phục.

### Kết nối Sheet

Web đang đọc từ Sheet có mã `1CM5UR0rGkWSdaNJPDd3dxXAXwvu4_qzeLu480lIdQtY` (khai báo ở dòng `const SHEET_ID` trong `data.js`). Sheet phải luôn để **Chia sẻ → Quyền truy cập chung → Bất kỳ ai có đường liên kết → Người xem**, vì web cần quyền này để đọc. Người xem không sửa được Sheet.

**Chỉ khi muốn chuyển sang một Sheet khác** (ví dụ tạo bản sao mới):
1. Sheet mới phải giữ nguyên tên các tab và dòng tiêu đề. Cách an toàn nhất là **Tệp → Tạo bản sao** từ Sheet hiện tại.
2. Chia sẻ Sheet mới: *Bất kỳ ai có đường liên kết → Người xem*.
3. Copy mã Sheet mới trong link: đoạn giữa `/d/` và `/edit`.
4. Mở [data.js](https://github.com/nguyentrang2309/thu-vien-nnx/edit/main/data.js), thay mã trong dòng `const SHEET_ID = "...";` → **Commit changes**.
5. Chờ 1–2 phút rồi mở `?kiemtra` để chắc chắn cả 4 tab báo *đọc từ Google Sheet*.
6. Cập nhật link Sheet ở đầu file README này.

> ⚠️ Sheet để quyền "Bất kỳ ai có đường liên kết đều xem được", nên ai có mã Sheet cũng đọc được nội dung, giống như repo công khai hiện nay. Đừng để thông tin nội bộ nhạy cảm trong Sheet.

> 💡 Muốn thêm **nhu cầu**, **loại tài liệu** hoặc **mục truyền thông** mới: phải khai báo trong `data.js` (`NEEDS`, `DOC_TYPES`, `SECTIONS`) trước, rồi thêm tên đó vào tab *Danh mục* của Sheet để có trong danh sách thả xuống.

---

## Sửa bản dự phòng `data.js`

Các mục bên dưới hướng dẫn sửa trực tiếp `data.js`. **Team truyền thông không cần đọc phần này.** Chỉ cần làm khi:
- cập nhật **bản dự phòng** (nội dung web hiện khi không đọc được Sheet) cho khớp với Sheet, hoặc
- thêm **nhu cầu**, **loại tài liệu**, **mục truyền thông** mới (`NEEDS`, `DOC_TYPES`, `SECTIONS`).

Lưu ý: khi Sheet đang hoạt động, sửa sản phẩm, tài liệu, truyền thông hay chữ chạy trong `data.js` sẽ **không** thay đổi web.

## Quy trình sửa `data.js` (4 bước)

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
| Đổi **logo** | Tải đè file `logo-nnx.webp` | [7](#7-đổi-logo) |

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
| `skills` | *(hiện không hiển thị)* Có thể để nguyên hoặc bỏ |
| `cases` | *(hiện không hiển thị)* Có thể để nguyên hoặc bỏ |

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


## 5. Dòng chữ chạy trên đầu trang

Sửa mảng `TICKER` ở cuối `data.js`. Mỗi dòng nằm trong dấu backtick `` ` `` và kết thúc bằng dấu phẩy. Chữ trong `<b>...</b>` có màu nổi bật:

```js
`VINH DANH THÁNG 10: <b>CHỊ HOA – KV3 HẢI PHÒNG</b>`,
```

## 6. Hướng dẫn bồi thường và kỹ năng bán dùng chung

- `CLAIM_GUIDES`: các link hướng dẫn bồi thường, hiện ở mục *Hướng dẫn bồi thường* trong sidebar.
- `SKILLS`: danh sách tài liệu kỹ năng. Muốn tài liệu cũng hiện ở mục *Kỹ năng bán hàng* trong sidebar thì thêm một dòng `sec:"skill"` vào `MEDIA`.

## 7. Đổi logo

Logo ở góc trên bên trái lấy từ file **`logo-nnx.webp`** trong repo. Logo được đặt trên khung trắng nhỏ, nên chế độ tối vẫn hiển thị rõ.

**Cách thay logo:**
1. Đổi tên file logo mới thành đúng **`logo-nnx.webp`**.
   *Nếu file là PNG/JPG, có thể đổi đuôi bằng công cụ chuyển đổi trực tuyến sang WebP, hoặc gửi file cho người phụ trách kỹ thuật.*
2. Vào repo → bấm **Add file → Upload files**.
3. Kéo thả file vào → bấm **Commit changes**. File mới sẽ đè lên file cũ.
4. Chờ 1–2 phút rồi bấm `Ctrl + F5` để xem.

> 💡 Nên dùng logo ngang (rộng hơn cao), dung lượng dưới 200KB để web tải nhanh. Logo hiện tại có kích thước 2000×1111px, nặng 35KB.

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
| Sửa Sheet mà web **không đổi** | Tab đó đang dùng bản dự phòng, dòng bị bỏ qua, hoặc bộ nhớ đệm | Bấm `Ctrl + F5`, rồi mở web với `?kiemtra` để xem lý do |
| Sửa nhầm Sheet, muốn quay lại | | Trong Sheet: **Tệp → Nhật ký phiên bản** (xem [Thêm người cùng cập nhật](#thêm-người-cùng-cập-nhật)) |
| `?kiemtra` báo **lỗi 401/403** hoặc *kiểm tra quyền chia sẻ* | Sheet chưa để "Bất kỳ ai có đường liên kết" | Chia sẻ lại Sheet: *Bất kỳ ai có đường liên kết → Người xem* (xem [Kết nối Sheet](#kết-nối-sheet)) |
| `?kiemtra` báo **thiếu cột** | Đổi tên tab hoặc dòng tiêu đề | Đổi lại đúng tên cũ (xem tab *Hướng dẫn* hoặc file `sheet.js`) |
| Web **trắng trơn** hoặc mất hết sản phẩm | Sai dấu câu trong `data.js` | Xem danh sách kiểm tra bên dưới |
| Actions ✅ nhưng web **chưa đổi** | Bộ nhớ đệm | `Ctrl + F5`, mở tab ẩn danh, hoặc chờ 10 phút |
| Bấm tài liệu ra trang **"Cần quyền truy cập"** | Quyền chia sẻ trên Drive | Mở file trên Drive → Chia sẻ → cấp quyền cho nhóm người bán |
| Sản phẩm **không hiện ở nhóm nhu cầu** | Sai mã `need` hoặc `ch` | Kiểm tra lại bằng bảng ở mục 3 |
| Vinh danh **xếp sai thứ tự** | Thiếu hoặc sai định dạng `date` | Viết `"MM/YYYY"`, ví dụ `"09/2026"` |
| Thẻ vinh danh **vẫn hiện kiểu cũ** (không có phần đầu xanh và họ tên lớn) | Cột *Họ tên* trống hoặc tên cột gõ sai | Kiểm tra dòng tiêu đề có đúng `Họ tên`, và ô Họ tên đã điền |
| **Logo không hiện** (chỉ thấy chữ "NNX Insurance") | Sai tên file khi tải lên | Tên file phải đúng `logo-nnx.webp` (chữ thường, không dấu cách) |
| Hàng lọc hãng có **2 nút trùng tên** (vd `Tasco` và `TASCO`) | Viết tên hãng không thống nhất | Sửa `insurers` cho giống nhau ở mọi sản phẩm |

**Danh sách kiểm tra dấu câu:**
- Mỗi dòng `{...}` hoặc `[...]` kết thúc bằng **dấu phẩy `,`**
- Chữ nằm trong **ngoặc kép thẳng `"..."`**. Không dùng ngoặc kép kiểu Word `“ ”` (hay gặp khi copy từ Word hoặc Zalo)
- Nếu trong chữ có dấu `"` thì đổi thành `'`
- Mở/đóng ngoặc đủ cặp: `{ }`, `[ ]`, `( )`
- Không xóa nhầm các dòng bắt đầu bằng `const`

Không tìm ra lỗi thì quay lại bản trước (xem [Quản trị](#quản-trị)) để web chạy lại đã, rồi sửa từ từ sau.
