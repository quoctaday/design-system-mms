# Select

A selection component used to pick from a list of options, built on an advanced Compound pattern and supporting Portal-based rendering to prevent clipping issues in overflow-hidden containers.

## 🧱 Compound Pattern

```tsx
import { Select } from '@mms/ui';

<Select.Root value="apple" variant="surface">
  <Select.Trigger placeholder="Select fruit..." />
  <Select.Portal>
    <Select.Content>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Separator />
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Portal>
</Select.Root>
```

## 💎 Design Standards

- **Tight Animation**: Employs a `scale(0.97)` menu entry animation, aligning with the Premium standards established for Dialogs and DropdownMenus.
- **Semantic Highlighting**: Interaction items utilize `surface-accent-component` on hover to reinforce brand identity during navigation.
- **Elevation v4.0**: Leverages `shadow-5` for the content panel to achieve optimal UI layering and depth hierarchy.

## 🎨 Variants & Materiality (Ironclad Update)

The Select system has been fine-tuned for absolute parity with the Input and MultiSelect architectures:

- **Surface**: The signature variant featuring a high-precision **Shadow-Ring black-a7** (1px). This is the definitive standard for MMS sharpness and premium finish.
- **Soft**: Features a `gray-a3` translucent background. By omitting the border ring, it optimizes for the fluid aesthetic used in Sidebars and consistent Toolbars.

| Detail | Surface | Soft |
| :--- | :--- | :--- |
| **Material** | Solid Background | Translucent `gray-a3` |
| **Border-Ring** | `var(--black-a7)` | `none` |
| **Elevation** | `Shadow-4` | `Shadow-4` |

## 📐 Sizing & Radius (Radix 3.0 Grid)

Precisely synchronized 1:1 with the system-wide Input and Button scaling grid:

- **Heights**: Size 1 (**24px**), Size 2 (**32px**), Size 3 (**40px**).
- **Radius**: Adheres to the 5-level semantic scale: `none`, `small`, `medium` (Default), `large`, `full`.

| Prop | Height | Radius Logic | Usage |
| :--- | :--- | :--- | :--- |
| `size="1"` | `24px` | Inherited | Table filters, Micro-UIs |
| `size="2"` | `32px` | Inherited | Standard operational forms (Default) |
| `size="3"` | `40px` | Inherited | Hero sections, prominent Modals |

---
[[00 - Introduction|Back to Introduction]]
