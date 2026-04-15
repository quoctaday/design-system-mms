# Input / TextField

Thành phần nhập liệu chính của nền tảng MMS, được chuyển đổi từ dạng đơn khối (monolithic) sang hệ thống Compound linh hoạt và mạnh mẽ theo tiêu chuẩn Radix UI v3.0.

## 🧱 Compound Pattern

Chúng tôi sử dụng mô hình Compound để tối đa hóa khả năng tùy biến các thành phần bổ trợ (Icons, Buttons, Kbd) bên trong Input.

```tsx
import { TextField } from '@mms/ui';

<TextField.Root size="2" variant="surface">
  <TextField.Slot side="left">
    <RiSearchLine />
  </TextField.Slot>
  <TextField.Input placeholder="Tìm kiếm tài liệu..." />
  <TextField.Slot side="right">
    <kbd>⌘K</kbd>
  </TextField.Slot>
</TextField.Root>
```

## 🎨 Variants & Tokens

Hệ thống mới chuẩn hóa 3 biến thể chính:

- **Surface**: Sử dụng `--surface-subtle` với viền cực mảnh (Hairline). Mang lại bản sắc hiện đại, mượt mà. Phù hợp cho Dashboard và các giao diện vận hành dày đặc thông tin.
- **Classic**: Sử dụng nền trắng (`--surface-panel`) với tương phản cao. **Khuyến dùng** cho các Form quan trọng, trang thanh toán hoặc bộ lọc chính để tăng độ trong trẻo (Clarity) và tính tập trung.
- **Soft**: Nền nhẹ, không có viền. Tối ưu cho các thanh công cụ (toolbars) hoặc sidebar.

| Detail | Surface | Classic | Soft |
| :--- | :--- | :--- | :--- |
| **Background** | `var(--surface-subtle)` | `var(--surface-panel)` | `var(--surface-subtle)` |
| **Border** | `var(--border-subtle)` | `var(--border-default)` | `none` |
| **Focus** | `Focus Halo` | `Focus Halo` | `Focus Halo` |

## 🛡️ Focus Halo Standard
Tất cả các Input đều áp dụng tiêu chuẩn **mms-focus-halo-brand**. Đây là hệ thống đổ bóng 3 lớp (Spacer, Halo, Outer-ring) giúp trạng thái Focus trông sắc nét, rực rỡ và không bị nhòe ngay cả trên nền tối.

## 📏 Sizing
Kích thước được đồng bộ với Buttons để đảm bảo căn lề hoàn hảo trên cùng một hàng (Horizontal Alignment).

| Size | Height | Usage |
| :--- | :--- | :--- |
| `1` | `32px` | Table cells, Filters |
| `2` | `40px` | Standard Forms |
| `3` | `48px` | Modals, Search bars |
