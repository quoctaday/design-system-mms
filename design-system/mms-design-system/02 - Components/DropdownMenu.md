# DropdownMenu

Hệ thống menu phân cấp, hỗ trợ các hành động phức tạp, phím tắt (shortcuts) và menu con (sub-menus) lồng nhau vô hạn cấp.

## Architecture (Compound Pattern)

```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Open</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item shortcut="⌘S">Save</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>Email</DropdownMenu.Item>
        <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

## 💎 Design Standards

- **Elevation v2**: Menu content sử dụng `--shadow-4` để tạo sự tách biệt rõ ràng với bề mặt ứng dụng.
- **Glassmorphism**: Áp dụng `backdrop-filter: blur(12px)` trên nền `--surface-panel` để tạo cảm giác cao cấp và hiện đại.
- **Hierarchy**: Phân tách các nhóm hành động bằng `DropdownMenu.Separator`.

## Props (DropdownMenu.Content)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | Căn lề của menu so với trigger (x-axis). |
| `width` | `number \| string` | `200` | Chiều rộng cố định hoặc linh hoạt. |
| `sideOffset` | `number` | `4` | Khoảng cách an toàn từ trigger. |

## Props (DropdownMenu.Item)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'danger'` | `'default'` | Kiểu hiển thị (danger cho các hành động xóa/hủy). |
| `shortcut` | `string` | - | Hiển thị tổ hợp phím tắt bên phải item. |
| `disabled` | `boolean` | `false` | Vô hiệu hóa tương tác. |

---
**Related:** [[02 - Components/Button|Button]] • [[02 - Components/Select|Select]] • [[02 - Components/Tooltip|Tooltip]]
