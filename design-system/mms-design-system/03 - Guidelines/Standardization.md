# MMS Standardization Protocol (Agentic v1.0)

Tài liệu này quy dẫn các tiêu chuẩn và kỹ thuật để duy trì hệ thống **Pixel-Perfect** trong MMS Platform. Cả Con người và AI (Agent) phải tuân thủ nghiêm ngặt để tránh "nợ kỹ thuật" (technical debt) về UI.

## 🎯 Mục tiêu tối thượng
- **100% Tokenized**: Không bao giờ sử dụng giá trị `px` hoặc `hex` trực tiếp trong component.
- **Single Source of Truth**: Mọi kích thước phải tham chiếu từ `theme.css`.
- **Atomic Consistency**: Các thành phần tương đồng phải dùng chung bộ Token (ví dụ: Button và Input cùng dùng `--size-2`).

---

## 🔍 Bộ công cụ quét (Regex Vault)

Sử dụng các biểu thức chính quy sau để tìm kiếm lỗi trong quá trình Audit:

| Đối tượng | Regex Pattern | Mục đích |
| :--- | :--- | :--- |
| **Pixel cứng** | `[:\s][1-9][0-9]*px[;\s]` | Tìm các giá trị `px` không phải là 0 hoặc 1px. |
| **Hex/Color** | `(#[0-9a-fA-F]{3,8}\|rgba?\(.*?\)\|hsla?\(.*?\))` | Tìm mã màu chưa được token hóa. |
| **Fallback PX** | `var\(--.*, \s*[0-9]+px\)` | Tìm các giá trị dự phòng mang đơn vị `px`. |
| **Spacing sai** | `(padding\|margin\|gap): (?!var\(--spacing-)` | Kiểm tra vi phạm hệ lưới 4-point grid. |

---

## 🛠 Quy trình Refactor 4 Bước

### Bước 1: Audit Layered (Kiểm toán phân lớp)
Chạy script audit và phân loại lỗi theo 3 cấp độ:
- **Critical**: Lỗi `px` trực tiếp trong component cốt lõi (`src/components/ui`).
- **Warning**: Lỗi trong các trang Example hoặc Page (`src/pages`).
- **Aesthetic**: Các giá trị lẻ không thuộc lưới 4px (ví dụ: `3px`, `6px`).

### Bước 2: Token Mapping (Bản đồ Token)
Trước khi sửa, hãy đối chiếu giá trị thực với bảng Token chuẩn:
- **Spacing**: 4, 8, 12, 16, 24, 32, 48, 64...
- **Dimensions**: Size-0 (20px) đến Size-18 (800px).
- **Borders**: `--stroke-width-1` (1px), `--stroke-width-2` (1.5px).

### Bước 3: Layered Implementation (Thực thi phân tách)
- **Tuyệt đối không** dùng một lệnh `multi_replace` cho nhiều file khác nhau nếu không cùng mục đích.
- Ưu tiên sửa `theme.css` trước nếu thiếu Token.
- Sửa file CSS chính của component, sau đó chạy lại Audit ngay lập tức.

### Bước 4: Final Wrap (Hoàn tất)
- Xóa các file `_Corrected.css` hoặc file tạm.
- Chụp ảnh màn hình đối chiếu (Screenshot Audit).
- Cập nhật `MASTER.md`.

---

## 🚫 Các lỗi thường gặp (Antipatterns)
- **Lỗi 1**: Dùng Token Spacing để định nghĩa phông chữ (`font-size: var(--spacing-4)`). -> **Sửa**: Phải dùng `var(--font-size-X)`.
- **Lỗi 2**: Hardcode giá trị dự phòng (`var(--shadow, 0 2px 4px rgba(0,0,0,0.1))`). -> **Sửa**: Dùng token shadow lồng nhau.
- **Lỗi 3**: Dùng pixel lẻ để "fix" giao diện (`margin-top: 3px`). -> **Sửa**: Điều chỉnh lại `calc()` dựa trên token chính.

---

## 💎 Các ngoại lệ được chấp nhận (Standardization Exceptions)

Một số component mang tính chất "Visual Art" hoặc "Complex Gradient" được phép giữ lại giá trị hex để bảo toàn hiệu ứng thị giác nguyên bản:

1.  **AuroraBackground.css**: Hiệu ứng cực quang phức tạp. Được đánh dấu bằng `/* [AI-STND-EXCEPTION] */`.

## 🏗️ Kiến trúc Component Hiện đại (Agentic v4.0)

Để đảm bảo khả năng mở rộng và tính tùy biến cao, MMS chuẩn hóa các component phức tạp theo mô hình **Compound Architecture**.

### 1. Mô hình Compound (Root-based)
Các thành phần phải được chia nhỏ thành các tiểu phần (sub-components) thay vì sử dụng một khối prop duy nhất.
- **Root**: Quản lý State, Context và cấu hình chung (size, variant).
- **Trigger/Input**: Thành phần tương tác chính.
- **Content/List**: Container chứa dữ liệu hoặc các lựa chọn.
- **Item/Slot**: Các phần tử con hoặc vị trí chèn nội dung tùy chỉnh.

### 2. Tiêu chuẩn Focus Halo (Accessibility & Luxury)
Hệ thống sử dụng vòng sáng tiêu điểm 3 tầng thay vì viền đơn để đảm bảo độ rực rỡ và chuyên nghiệp:
- **Layer 1 (Spacer)**: Khoảng trắng 2px sát phần tử.
- **Layer 2 (Halo)**: Vòng sáng mờ 3px - 5px sử dụng màu Brand hoặc Error.
- **Layer 3 (Outer-ring)**: Vòng biên cực mảnh để định vị trong không gian.
- **Class ứng dụng**: `mms-focus-halo-brand`, `mms-focus-halo-error`.

### 3. Chiến lược Tương phản Ngữ cảnh (Contextual Contrast Strategy)
Thay vì ép buộc một biến thể duy nhất, hệ thống MMS áp dụng tư duy tương phản theo mục đích sử dụng (Intent-based contrast):

- **Biến thể Surface (Operational-first)**: Sử dụng màu nền cực nhẹ (`var(--surface-subtle)`). Mặc định dành cho các trang Dashboard dày đặc dữ liệu (Data-heavy), Sidebar, hoặc các thanh Toolbar vận hành để giảm mỏi mắt và tạo cảm giác "vẳng" (subtle).
- **Biến thể Classic (High-contrast)**: Sử dụng màu nền trắng panel (`var(--surface-panel)`). Ưu tiên cho các Form nhập liệu quan trọng (như Trang thanh toán, Đăng ký, Cấu hình bảo mật) hoặc các Modal hội thoại cần sự tập trung tuyệt đối.

**Quy tắc vàng**: Nếu UI của bạn trông quá "đục" (muddy), hãy chuyển các Entry Point chính sang `classic` để lấy lại độ trong trẻo (clarity) cho giao diện.

### 5. Phân định Tabs và Segmented Control
Mặc dù cùng sử dụng mô hình thanh trượt, hệ thống MMS phân biệt rõ mục đích sử dụng để tránh gây rối loạn thị giác:

| Đặc tính | Segmented Control | Tabs |
| :--- | :--- | :--- |
| **Bản chất** | Lựa chọn giá trị (Form Selection). | Điều hướng phân vùng (Navigation). |
| **Thẩm mỹ** | **Mật độ cao (Density)**. Padding 4px, cảm giác cơ học, đặc và chắc chắn. | **Thoáng đãng (Spacious)**. Padding 6px, cảm giác nhẹ nhàng, ưu tiên điều hướng. |
| **Mặc định** | Luôn ở dạng Khối lồng (Surface). | Luôn ưu tiên dạng Gạch chân (Classic). |

**Quy tắc**: Không bao giờ sử dụng Tabs dạng Surface ngay cạnh Segmented Control.

---
[[03 - Guidelines/Workflow|Back to Workflow]]
