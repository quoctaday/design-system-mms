# Segmented Control

The Segmented Control component is engineered specifically for value selection (Form Selection) within high-density operational interfaces. It is optimized with a **4px Internal Padding** to provide a solid, "mechanical" and compact character—distinctly separated from the more spacious and navigation-focused aesthetic of the Tabs component.

## 🧱 Compound Architecture

This component utilizes a `Root` and `Item` structural model to decouple state management logic from the individual segment rendering.

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
| `surface` | Flat, subtle | (Default) Designed for standard operational toolbars. |
| `classic` | High contrast | Reserved for primary mode-switching or view toggles. |
| `soft` | Sunken track | Optimized for sidebars or ultra-high-density data views. |

## 📏 Sizing

The component adheres to a precise numeric scaling system to ensure layout consistency across all viewports.

- **Size 1 (28px)**: Optimized for ultra-high-density data grids.
- **Size 2 (36px)**: The standard operational baseline (Default).
- **Size 3 (44px)**: Designed for Hero sections and prominent landing areas.

## ✨ The Premium Sliding Indicator

Mirroring the behavior of the `Tabs` component, the `SegmentedControl` features an independent, fluid sliding Indicator:
1. **Mechanical Feel**: The indicator glides seamlessly between stops using hardware-accelerated `transform` transitions.
2. **Context Awareness**: Dynamically calculates its dimensions (Width/Height) based on the currently active element via `useLayoutEffect`.
3. **Visual Depth**: Applies subtle layering (`shadow-1` or `shadow-2`) to the indicator to create the necessary physical relief against the track background.

---
**Related:** [[02 - Components/Tabs|Tabs]] • [[02 - Components/Button|Button]] • [[02 - Components/Switch|Switch]]
