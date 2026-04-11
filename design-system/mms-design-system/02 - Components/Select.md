# Select

Thành phần cho phép người dùng chọn một giá trị từ danh sách tùy chọn được định sẵn.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Kích thước của trigger và các mục item bên trong. |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Độ bo góc của trigger và menu layer. |
| `value` | `string` | - | Giá trị được chọn. |
| `disabled` | `boolean` | `false` | Vô hiệu hóa toàn bộ select. |

## Đặc điểm

- **Trigger**: Có trạng thái Open đặc biệt với border highlight.
- **Menu**: Tự động tính toán vị trí để hiển thị overlay (SelectPortal).
- **Items**: Hỗ trợ trạng thái Selected rõ ràng với check icon.

## Thiết kế

- Luôn sử dụng cùng một `radius` cho cả Trigger và Content để tạo sự đồng bộ khi menu mở ra.
- Sử dụng `size="1"` cho các bảng dữ liệu hoặc giao diện cần mật độ thông tin cao.
