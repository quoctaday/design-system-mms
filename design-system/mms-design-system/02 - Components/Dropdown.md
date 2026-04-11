# Dropdown

Hiển thị một menu các hành động hoặc chức năng cho người dùng, được kích hoạt bởi một trigger button.

## Props (Dropdown.Content)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `align` | `'left' \| 'right'` | `'right'` | Căn lề của menu so với trigger. |
| `width` | `number \| string` | `180` | Chiều rộng tùy chỉnh. |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Độ bo góc của menu content. |
| `sideOffset` | `number` | `4` | Khoảng cách từ trigger. |

## Props (Dropdown.Item)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2'` | `'2'` | Kích thước của item (khuyến khích size 1 cho menu dày đặc). |
| `variant` | `'default' \| 'danger'` | `'default'` | Kiểu hiển thị (danger hiển thị màu đỏ). |
| `disabled` | `boolean` | `false` | Vô hiệu hóa mục. |
| `leftIcon` | `ReactNode` | - | Icon chính bên trái. |

## Thiết kế

- **Premium Feel**: Menu sử dụng hiệu ứng Glassmorphism (backdrop-filter: blur).
- **Radius**: Bo góc các item phải nhỏ hơn bo góc của menu content một chút để tạo cảm giác lồng ghép hoàn hảo.
