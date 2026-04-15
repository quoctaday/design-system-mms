# RadioGroup

Thành phần lựa chọn duy nhất từ một danh sách các phương án cho trước. RadioGroup mới hỗ trợ kiến trúc Compound Component và kế thừa các thuộc tính từ Root để đảm bảo tính nhất quán.

## Architecture (Compound Pattern)

```tsx
<RadioGroup.Root defaultValue="1" variant="surface" size="2">
  <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
</RadioGroup.Root>
```

## Props (RadioGroup.Root)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'classic' \| 'surface' \| 'soft'` | `'surface'` | Kiểu hiển thị của Radio Item. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Kích thước của Radio và text. |
| `color` | `BrandColor` | `'brand'` | Màu sắc chủ đạo khi Active. |
| `defaultValue` | `string` | - | Giá trị mặc định. |

## Variants

- **Classic**: Viền đậm (`border-strong`), Dot có độ tương phản cao. Thích hợp cho Form truyền thống.
- **Surface**: Thiết kế tinh tế với nền nhẹ (`surface-subtle`), Dot đồng bộ với Brand color. (Default)
- **Soft**: Nền cực nhẹ, không có viền rõ rệt, mang cảm giác Flat-Premium hiện đại.

## Focus Standards
Tất cả các Radio Item đều được tích hợp **Focus Halo Standard** (3 lớp shadow) thông qua class `mms-focus-halo-brand`, đảm bảo khả năng truy cập (Accessibility) và thẩm mỹ khi điều hướng bằng bàn phím.
