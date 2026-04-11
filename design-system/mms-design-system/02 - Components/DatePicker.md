# DatePicker

Thành phần cho phép người dùng chọn một ngày cụ thể hoặc khoảng ngày thông qua giao diện lịch overlay.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `Date \| null` | `null` | Ngày được chọn hiện tại. |
| `onChange` | `(date: Date \| null) => void` | - | Callback khi thay đổi ngày. |
| `mode` | `'single' \| 'range'` | `'single'` | Chế độ chọn ngày đơn hoặc khoảng ngày. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Kích thước của date picker (1: 32px, 2: 40px, 3: 48px). |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Độ bo góc của date picker. |
| `placeholder` | `string` | `'Select date'` | Văn bản hiển thị khi chưa chọn ngày. |
| `disabled` | `boolean` | `false` | Vô hiệu hóa tương tác. |

## Thiết kế

- **Trigger**: Sử dụng kiểu dáng giống như Input field.
- **Overlay**: Calendar hiển thị phía dưới hoặc phía trên trigger tùy theo không gian khả dụng.
- **Tokens**: Luôn sử dụng hệ thống token chuẩn (`size-1`, `size-2`, `size-3`) để đảm bảo tính nhất quán với Form Inputs.
