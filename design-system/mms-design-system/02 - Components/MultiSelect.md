# MultiSelect

Linh kiện cho phép người dùng chọn nhiều giá trị từ một danh sách tùy chọn, tích hợp tính năng tìm kiếm và hiển thị dưới dạng tag (chips).

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Kích thước của trigger (32px, 40px, 48px). |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Độ bo góc của trigger và menu layer. |
| `values` | `string[]` | `[]` | Danh sách các giá trị đang được chọn. |
| `defaultValue` | `string[]` | `[]` | Giá trị mặc định khi khởi tạo. |
| `onValuesChange` | `(values: string[]) => void` | - | Callback khi thay đổi danh sách chọn. |
| `maxChips` | `number` | `3` | Số lượng tag tối đa hiển thị trong trigger trước khi ẩn bớt. |
| `placeholder` | `string` | `'Select options...'` | Văn bản hiển thị khi chưa có lựa chọn. |

## 📐 Đặc điểm thiết kế

- **High Density**: Duy trì font size 14px cho size `2` và 12px cho size `1` để tối ưu diện tích Dashboard.
- **Flat-Premium**: Tuyệt đối không sử dụng đổ bóng. Menu dropdown sử dụng border cường độ mạnh (`var(--border-strong)`) để phân tách không gian.
- **Micro-interactions**: 
  - Hover highlight trên từng item với transition 150ms.
  - Xóa chip trực tiếp từ trigger mà không cần mở menu.
  - Search box tích hợp ở đầu menu giúp lọc nhanh kết quả.

## 🎨 Token Usage

- **Background**: `var(--surface-panel)`
- **Border**: `var(--border-default)` cho trạng thái thường, `var(--brand-9)` cho trạng thái focus.
- **Selected Text**: `var(--content-accent)`
- **Selected BG**: `var(--surface-accent-subtle)`

---
[[00 - Introduction|Quay lại trang chính]]
