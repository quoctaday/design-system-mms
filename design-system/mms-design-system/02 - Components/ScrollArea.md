# ScrollArea

A utility component that provides customizable, premium scrollbars while maintaining cross-browser consistency. Essential for high-density dashboards where standard browser scrollbars are too intrusive.

## 🧱 Structure

```tsx
import { ScrollArea, Text } from '@mms/ui';

<ScrollArea style={{ height: 200 }} orientation="vertical">
  <Text>
    A very long text that requires scrolling...
  </Text>
</ScrollArea>
```

## 📐 Properties

| Prop | Purpose | Supported Values |
| :--- | :--- | :--- |
| `orientation` | Direction of scrolling | `vertical` (default), `horizontal`, `both` |
| `size` | Width of the scrollbar track | `1` (6px - Default), `2` (10px) |

## 🎨 Visual Specs

The ScrollArea implements the **MMS Precision Scrollbar** style:

- **Thumb Logic**: Uses `var(--gray-a6)` for the thumb with a subtle hover state to `var(--gray-a8)`.
- **Track Material**: Remains transparent to preserve the cleanliness of the underlying background surface.
- **Micro-interactions**: Thumb undergoes a snappy color transition (`140ms`) when hovered.
- **Native Efficiency**: Built on top of standard browser scrolling for maximum performance, with customized Webkit/Firefox scrollbar styling.

---
[[00 - Introduction|Back to Introduction]]
