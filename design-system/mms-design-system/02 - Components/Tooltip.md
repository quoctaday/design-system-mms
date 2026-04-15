# Tooltip

Thành phần hiển thị thông tin bổ sung khi di chuột hoặc focus vào một thành phần khác. Được hiện đại hóa với Portal để đảm bảo khả năng hiển thị tuyệt đối.

## 🧱 Cấu trúc

```tsx
import { Tooltip } from '@mms/ui';

<Tooltip content="Mã số thuế doanh nghiệp">
  <Button variant="outline">MST</Button>
</Tooltip>
```

## 🚀 Tính năng nổi bật

- **Portal Rendering**: Tooltip được render tại cấp độ `document.body`, giúp nó luôn nổi trên mọi lớp UI khác (tránh lỗi bị cắt bởi `overflow: hidden`).
- **Elevation v1**: Sử dụng `Shadow 2` để tạo độ nổi khối nhẹ nhàng, không gây xao nhãng.
- **Auto-Positioning**: Tự động tính toán vị trí dựa trên 4 hướng chính (`top`, `bottom`, `left`, `right`).

## 🎨 Token Specs

- **Background:** `var(--surface-tooltip)` (Đen/Xám đậm).
- **Text:** `var(--content-on-solid)` (Trắng).
- **Radius:** `var(--radius-2)` (4px) cho cảm giác cứng cáp, chuyên dụng.

## 📏 Props

| Prop | Type | Default | Note |
| :--- | :--- | :--- | :--- |
| `content` | `ReactNode` | - | Nội dung hiển thị bên trong |
| `side` | `top | bottom | left | right` | `top` | Hướng của tooltip |
| `delayDuration` | `number` | `200` | Thời gian chờ trước khi hiện (ms) |

---
[[00 - Introduction|Quay lại trang chủ]]
