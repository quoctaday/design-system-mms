# Input / TextField

The platform's primary input architecture, evolved from a monolithic structure to a flexible and robust Compound system strictly aligned with the Radix UI v3.0 standard.

## 🧱 Compound Pattern

The Compound model is utilized to maximize the customization potential of auxiliary internal elements such as Icons, Buttons, and Kbd indicators within the Input field.

```tsx
import { TextField } from '@mms/ui';
import { RiSearchLine } from 'react-icons/ri';

<TextField.Root size="2" variant="surface">
  <TextField.Slot side="left">
    <RiSearchLine />
  </TextField.Slot>
  <TextField.Input placeholder="Search documentation..." />
  <TextField.Slot side="right">
    <kbd>⌘K</kbd>
  </TextField.Slot>
</TextField.Root>
```

## 🎨 Variants & Tokens

The system has been meticulously tuned to prioritize operational efficiency and a "Flat-Premium" aesthetic:

- **Surface (The Ironclad Standard)**: The default visual variant utilizing the **Shadow-Ring Protocol** (1px `black-a7` alpha-ring) instead of physical borders. This delivers absolute pixel-sharpness and maintains structural neutrality within the layout.
- **Soft**: Features a subtle translucent background (`gray-a3`) with no boundary ring. Optimized for toolbars or sidebar environments where a minimalist, low-distraction presence is required.

| Detail | Surface | Soft |
| :--- | :--- | :--- |
| **Background** | `var(--surface-panel)` | `var(--gray-a3)` |
| **Border-Ring** | `var(--black-a7)` | `none` |
| **Focus State** | `Accent Shadow Ring` | `Accent Shadow Ring` |

## 📐 Sizing & Radius (Radix 3.0 Parity)

Input dimensions and corner rounding are perfectly synchronized with the Radix UI Themes layout grid:

- **Heights**: Size 1 (**24px**), Size 2 (**32px**), Size 3 (**40px**).
- **Radius Levels**: Utilizes a 5-tier semantic system: `none`, `small`, `medium` (Default), `large`, and `full`.

| Size | Height | Radius Logic | Usage |
| :--- | :--- | :--- | :--- |
| `1` | `24px` | Inherited | Data-heavy table cells, High-density filters |
| `2` | `32px` | Inherited | Standard functional forms (Universal) |
| `3` | `40px` | Inherited | Hero search areas, Large-scale modals |

---
**Note:** All internal corner radii (such as Chips or Buttons nested within the Input) are calculated using the formula `max(0px, Current_Radius - 2px)` to maintain rigorous Geometric Parallelism across the UI.
