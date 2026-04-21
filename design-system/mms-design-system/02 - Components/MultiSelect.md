# MultiSelect

A high-fidelity selection component that enables users to choose multiple values from an options list. It features integrated search functionality and displays selections as interactive tags (chips), adhering strictly to **Radix UI Themes 3.0** standards.

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Trigger dimensions: **24px**, **32px**, **40px**. |
| `radius` | `'none' \| 'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Corner rounding following the 5-level Radix scale. |
| `variant` | `'surface' \| 'soft'` | `'surface'` | Defines the visual presentation (Bordered or Translucent surface). |
| `values` | `string[]` | `[]` | Array of currently selected values. |
| `maxChips` | `number` | `3` | Maximum number of chips visible within the trigger before truncation. |

## 📐 Ironclad Parity Features

- **Shadow-Ring Protocol**: Strictly forbids the use of physical CSS `borders`. Utilizes **Shadow-Ring black-a7** (1px) to ensure absolute sharpness and prevent layout-shifting during hover/focus states.
- **Glassmorphism Materiality**: The dropdown menu employs a translucent background (`surface-panel-a95`) with `backdrop-filter: blur(16px)` and **Shadow-4** to deliver a premium, dimensional feel.
- **Adaptive Items**: Menu items and chipped tags automatically calibrate their corner rounding (`radius - 2px`) to remain harmonious with the external container.
- **Micro-interactions**: 
  - Magnetic hover states on menu items with a 140ms background transition.
  - Efficient chip deletion directly from the trigger via precise "X" icons.

## 🎨 Token Usage

- **Triggers**: `var(--black-a7)` (Surface Ring), `var(--gray-a3)` (Soft Background).
- **Floating Panel**: `var(--shadow-4)`, `var(--black-a3)` (Outer Ring).
- **Selected Text**: `var(--accent-11)`
- **Selected BG**: `var(--accent-a3)`

---
[[00 - Introduction|Back to Main Hub]]
