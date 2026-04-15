# Badge

Thành phần hiển thị nhãn trạng thái hoặc phân loại thông tin. Được tối ưu hóa cho mật độ dữ liệu cao với thiết kế Flat-Premium.

## 🧱 Cấu trúc

```tsx
import { Badge } from '@mms/ui';

<Badge variant="surface" color="brand">Hoạt động</Badge>
```

## 🎨 Variants & Contrast

- **Solid**: Sử dụng nền đậm (Brand/State colors). Dành cho các trạng thái cực kỳ quan trọng.
- **Soft**: Nền màu nhạt, không viền. Tiêu chuẩn quốc tế cho nhãn phân loại.
- **Surface**: Nền nhạt kết hợp với **viền Hairline (0.5px)**. Mang lại cảm giác tinh tế và cao cấp nhất.
- **Outline**: Chỉ có viền, không nền.
- **Ghost**: Tối giản tối đa.

## 📏 Sizing

Hệ thống kích thước mới hỗ trợ 3 cấp độ để linh hoạt trong mọi vị trí hiển thị:

| Prop | Height | Font Size | Usage |
| :--- | :--- | :--- | :--- |
| `size="1"` | `20px` | `11px` | Micro-tags, Table rows |
| `size="2"` | `24px` | `12px` | Standard (Mặc định) |
| `size="3"` | `28px` | `13px` | Large cards, Headers |

## 🎨 Token Specs

- **Radius:** Mặc định `var(--radius-1)` cho cảm giác hiện đại, hoặc `radius="full"` cho dạng viên thuốc (Pill).
- **Border:** `0.5px` cho biến thể `surface`.

---
[[00 - Introduction|Quay lại trang chủ]]
