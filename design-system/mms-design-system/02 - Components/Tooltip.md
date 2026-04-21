# Tooltip

A component used to display supplementary informational content when a user hovers over or focuses on another UI element. Modernized with Portal logic to ensure absolute visibility across deep layout hierarchies.

## 🧱 Structure

```tsx
import { Tooltip } from '@mms/ui';

<Tooltip content="Business Tax Identification Number">
  <Button variant="outline">Tax ID</Button>
</Tooltip>
```

## 🚀 Key Features

- **Portal Rendering**: Tooltips are rendered at the `document.body` level, ensuring they remain afloat above all other UI layers and bypassing `overflow: hidden` clipping constraints from parent containers.
- **Elevation v1**: Utilizes `Shadow 2` to establish a gentle, non-obtrusive sense of material depth.
- **Auto-Positioning**: Intelligently calculates the optimal placement across the four primary cardinal directions (`top`, `bottom`, `left`, `right`).

## 🎨 Token Specs

- **Background:** `var(--surface-tooltip)` (Deep Gray/Black).
- **Text:** `var(--content-on-solid)` (High-contrast White).
- **Radius:** `var(--radius-2)` (4px) for a focused, technical appearance.

## 💎 Design Standards

- **Snappy Timing**: Tooltips utilize a **140ms** animation duration, optimized for the high-response feel characteristic of the Radix UI engine.
- **High-Contrast Presence**: Leverages the `gray-12` token for its background to ensure content remains perfectly legible against any underlying interface surface.
- **Shadow v4.0 (Layering)**: Employs `shadow-3` to maintain visual clarity even when the Tooltip overlays other floating surfaces like Dialogs or DropdownMenus.

## 📏 Props

| Prop | Type | Default | Note |
| :--- | :--- | :--- | :--- |
| `content` | `ReactNode` | - | The information content to render inside the tooltip. |
| `side` | `top | bottom | left | right` | `top` | The preferred directional orientation of the tooltip. |
| `delayDuration` | `number` | `200` | The duration to wait (in ms) before prompting the tooltip display. |

---
[[00 - Introduction|Back to Introduction]]
