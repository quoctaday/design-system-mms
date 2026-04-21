# Popover

A rich overlay component used to display additional content or information when a trigger is activated. It is more versatile than a tooltip and less intrusive than a dialog.

## 🧱 Structure

```tsx
import { Popover, Button, Text } from '@mms/ui';

<Popover.Root radius="large">
  <Popover.Trigger>
    <Button>Open Popover</Button>
  </Popover.Trigger>
  <Popover.Content width={240}>
    <Text size="2">This is a premium popover content.</Text>
    <Popover.Close>
      <Button variant="soft" size="1">Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>
```

## 📐 Sizing & Geometry

The Popover supports standard MMS sizing and standardized radius keywords to ensure geometric consistency across the layout.

| Prop | Purpose | Supported Values |
| :--- | :--- | :--- |
| `size` | Adjusts padding and spacing | `1`, `2`, `3` |
| `radius` | Controls corner rounding | `none`, `small`, `medium`, `large`, `full` |
| `width` | Custom width for the panel | `number` |

## 🎨 Material Specs

Following the **Flat-Premium** standard, the Popover utilizes advanced CSS techniques for depth and clarity:

- **Elevation (Shadow-5)**: Reserved for floating elements, utilizing a triple-layered shadow for realistic depth.
- **Backdrop Blur**: Uses `blur(12px)` to provide a glass-like transparency that maintains readability over busy backgrounds.
- **Border Architecture**: Uses a `1px` ring (`var(--gray-a3)`) to define a sharp perimeter without visual clutter.
- **Snappy Logic**: Adheres to the **140ms Snap Factor** for entrance/exit animations using a custom ease-out curve.

## 💡 Accessiblity
- **Role**: `dialog`
- **Focus management**: Automatically handles click-outside detection and close events.
- **Aria Attributes**: Synchronizes `aria-expanded` and `aria-haspopup` with the trigger state.

---
[[00 - Introduction|Back to Introduction]]
