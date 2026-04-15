# Dialog

Thành phần `Dialog` (trước đây là Modal) được thiết kế hiện đại, hỗ trợ hiệu ứng Backdrop Blur tinh tế và hệ thống bóng đổ **Elevation v2** Shadow 6 để tạo tiêu điểm tối đa cho nội dung quan trọng.

## Architecture (Compound Pattern)

```tsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content size="2">
      <Dialog.Header>
        <Dialog.Title>Xác nhận</Dialog.Title>
        <Dialog.Description>Bạn có chắc chắn muốn thực hiện hành động này?</Dialog.Description>
        <Dialog.Close />
      </Dialog.Header>
      <Dialog.Body>...</Dialog.Body>
      <Dialog.Footer>
        <Dialog.Close><Button variant="surface">Hủy</Button></Dialog.Close>
        <Button variant="classic">Đồng ý</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

## 💎 Design Standards

- **Elevation v2 (Shadow 6)**: Dialog sử dụng mức độ bóng đổ cao nhất để tách biệt hoàn toàn khỏi các lớp UI khác bên dưới.
- **Glassmorphism Backdrop**: Lớp Overlay sử dụng `backdrop-filter: blur(8px)` kết hợp với `--black-a8` để tạo hiệu ứng mờ sang trọng, tập trung thị giác vào Dialog.
- **Micro-Animations**: Hiệu ứng mở (`Scale 0.95 -> 1.0` kết hợp `Fade`) tạo cảm giác hộp thoại mọc lên từ trung tâm một cách tự nhiên.

## Props (Dialog.Content)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3' \| '4'` | `'2'` | Kích thước (Max-width) của Dialog (400px - 1140px). |
| `radius` | `RadiusScale` | `'4'` | Cấu hình bo góc đồng bộ với Radius của hệ thống. |

## Internal Components

- **Dialog.Title / Dialog.Description**: Đồng bộ font và spacing theo chuẩn Flat-Premium.
- **Dialog.Body**: Có khả năng cuộn nội dung tự động nếu vượt quá 85vh.
- **Dialog.Footer**: Thường chứa các nút hành động, được mặc định căn bên phải.

---
**Related:** [[02 - Components/DropdownMenu|DropdownMenu]] • [[02 - Components/Toast|Toast]] • [[02 - Components/Button|Button]]
