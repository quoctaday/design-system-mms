# Tabs

Thành phần phân chia nội dung thành các lớp (Layers), chỉ hiển thị một lớp tại một thời điểm. Hệ thống Tabs mới sử dụng cơ chế **Sliding Indicator** (Thanh chỉ báo trượt) để tạo cảm giác chuyển động mượt mà và cao cấp.

## Architecture (Compound Pattern)

```tsx
<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">...</Tabs.Content>
  <Tabs.Content value="tab2">...</Tabs.Content>
</Tabs.Root>
```

## Props (Tabs.Root)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'classic' \| 'surface'` | `'classic'` | Kiểu hiển thị của các tab. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Kích thước (chiều cao) của tab trigger. |
| `radius` | `RadiusScale` | `'4'` | Độ bo góc của danh sách tab. |
| `defaultValue` | `string` | - | Giá trị tab mặc định. |
| `value` | `string` | - | Giá trị tab hiện tại (controlled). |

## Variants

- **Classic (Mặc định)**: Indicator là một đường kẻ phía dưới (High-intent). Thích hợp cho các trang cài đặt hoặc phân vùng nội dung chính.
- **Surface**: Thiết kế dạng thanh trượt (Sliding track). Được tối ưu với **Padding 6px** để tạo sự thoáng đãng và sang trọng.

## The Sliding Indicator
Thanh chỉ báo (Indicator) được tính toán vị trí động thông qua `useLayoutEffect` và `getBoundingClientRect`. Điều này đảm bảo:
1. Độ chính xác tuyệt đối ngay cả khi độ dài text của các Tab khác nhau.
2. Hiệu ứng trượt (Transition) mượt mà khi thay đổi trạng thái Active.
3. Tương thích hoàn hảo với Responsive layout.
