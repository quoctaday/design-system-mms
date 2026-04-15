# Select

Thành phần chọn từ danh sách, được xây dựng trên mô hình Compound tiên tiến và hỗ trợ hiển thị qua Portal để tránh bị cắt bởi container.

## 🧱 Compound Pattern

```tsx
import { Select } from '@mms/ui';

<Select.Root value="apple" variant="surface">
  <Select.Trigger placeholder="Chọn trái cây..." />
  <Select.Portal>
    <Select.Content>
      <Select.Group>
        <Select.Label>Trái cây</Select.Label>
        <Select.Item value="apple">Táo</Select.Item>
        <Select.Item value="banana">Chuối</Select.Item>
        <Select.Separator />
        <Select.Item value="orange">Cam</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Portal>
</Select.Root>
```

## 🎨 Variants & Contrast

Tuân thủ triết lý **Contextual Contrast**, Select hỗ trợ 3 biến thể chính:

- **Surface (Mặc định)**: Nền xám nhẹ (`--surface-subtle`), viền Hairline. Dành cho các giao diện quản trị dày đặc thông tin.
- **Classic**: Nền trắng (`--surface-panel`), tương phản cao. Dành cho các Form quan trọng cần sự nổi bật.
- **Soft**: Không viền, nền nhẹ. Dùng cho Toolbar hoặc các trường hợp ít quan trọng hơn.

## 🎨 Token Specs

- **Elevation:** `Shadow 4` (Elevation v2) với `Backdrop Blur (12px)`.
- **Focus:** Tiêu chuẩn `mms-focus-halo-brand`.
- **Radius:** Mặc định `var(--radius-4)`.

## 📏 Sizing

Đồng bộ với hệ thống Button và Input (32px / 40px / 48px).

| Prop | Height | Usage |
| :--- | :--- | :--- |
| `size="1"` | `32px` | Table filters, Micro-UIs |
| `size="2"` | `40px` | Standard forms (Default) |
| `size="3"` | `48px` | Hero sections, Promising entries |

---
[[00 - Introduction|Quay lại trang chủ]]
