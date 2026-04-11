# Tabs

Thành phần phân chia nội dung thành các lớp Layer, chỉ hiển thị một lớp tại một thời điểm.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'line' \| 'border' \| 'simple' \| 'toggle'` | `'line'` | Kiểu hiển thị của các tab. |
| `size` | `'1' \| '2'` | `'2'` | Kích thước (chiều cao) của tab trigger. |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Độ bo góc (áp dụng mạnh mẽ cho variant toggle/border). |
| `defaultValue` | `string` | - | Giá trị tab mặc định. |
| `value` | `string` | - | Giá trị tab hiện tại (controlled). |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Hướng hiển thị của tabs. |

## Variants

- **Line**: Indicator là một đường kẻ phía dưới. Thích hợp cho điều hướng cấp cao.
- **Toggle**: Segmented control. Thích hợp để chuyển đổi giữa các view hoặc bộ lọc nhanh.
- **Border**: Các tab được bao quanh bởi border, phân tách rõ ràng với nội dung.
- **Simple**: Minimalism, chỉ sử dụng background highlight cho trạng thái active.
