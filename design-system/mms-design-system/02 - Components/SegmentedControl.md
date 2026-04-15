# Segmented Control

Thành phần điều khiển phân đoạn (Segmented Control) được thiết kế cho việc chọn giá trị (Form Selection) trên các giao diện có mật độ thông tin cao. Hệ thống được tối ưu với **Padding 4px**, tạo cảm giác "cơ học" chắc chắn và gọn gàng, tách biệt rõ rệt với diện mạo thoáng đạt của Tabs.

## 🧱 Compound Architecture

Sử dụng mô hình `Root` và `Item` để tách biệt logic quản lý trạng thái và hiển thị từng phân đoạn.

```tsx
import { SegmentedControl } from '@mms/ui';

<SegmentedControl.Root value="list">
  <SegmentedControl.Item value="grid">Grid</SegmentedControl.Item>
  <SegmentedControl.Item value="list">List</SegmentedControl.Item>
</SegmentedControl.Root>
```

## 🎨 Variants

| Variant | Aesthetic | Usage |
| :--- | :--- | :--- |
| `surface` | Flat, subtle | (Default) Dành cho các thanh công cụ tiêu chuẩn. |
| `classic` | High contrast | Dành cho các nút chuyển đổi chế độ xem chính. |
| `soft` | Sunken track | Dành cho sidebar hoặc giao diện có mật độ cao. |

## 📏 Sizing

Sử dụng thang đo số (Numeric scaling) để đảm bảo độ chính xác tuyệt đối.

- **Size 1 (28px)**: Mật độ cao.
- **Size 2 (36px)**: Tiêu chuẩn (Default).
- **Size 3 (44px)**: Hero sections.

## ✨ The Premium Sliding Indicator
Tương tự như `Tabs`, `SegmentedControl` sử dụng một thanh chỉ báo (Indicator) trượt độc lập:
1. **Mechanical Feel**: Indicator di chuyển mượt mà giữa các điểm dừng bằng `transform`.
2. **Context Awareness**: Tự động tính toán kích thướt (Width/Height) dựa trên phần tử Active thông qua `useLayoutEffect`.
3. **Visual Depth**: Áp dụng shadow nhẹ (`shadow-1` hoặc `shadow-2`) trên thanh chỉ báo để tạo độ nổi khối so với đường rãnh (Track).

---
**Related:** [[02 - Components/Tabs|Tabs]] • [[02 - Components/Button|Button]] • [[02 - Components/Switch|Switch]]
