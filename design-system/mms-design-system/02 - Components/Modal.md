# Modal

Một cửa sổ lớp phủ yêu cầu sự tương tác của người dùng trước khi tiếp tục. Thường dùng cho các hành động quan trọng, xác nhận hoặc biểu mẫu.

## Props (Modal.Content)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'xl'` | Độ bo góc của container modal. |
| `className` | `string` | - | Lớp CSS tùy chỉnh. |

## Cấu trúc (Compound Components)

- **Modal.Root**: Quản lý trạng thái mở/đóng.
- **Modal.Portal**: Chuyển nội dung lên cấp body.
- **Modal.Overlay**: Lớp nền mờ phía sau.
- **Modal.Content**: Container chính chứa nội dung.
- **Modal.Header**: Chứa Title, Description và Icon.
- **Modal.Footer**: Chứa các nút hành động (thường là Sticky hoặc nằm dưới cùng).

## Thiết kế

- **Backdrop**: Sử dụng độ mờ mạnh (`var(--black-a9)`) kết hợp với hiệu ứng blur (`12px`) để làm nổi bật modal.
- **Animation**: Sử dụng `mms-modal-enter` để tạo cảm giác modal mọc lên mềm mại từ trung tâm.
