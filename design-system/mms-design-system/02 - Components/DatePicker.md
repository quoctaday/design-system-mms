# 📅 DatePicker

A premier date selection component achieving 100% **Mirror-Parity** with the foundational Select architecture. The design strictly adheres to the **Shadow-Ring V4.3** protocol and integrates the **PremiumBlock** framework to deliver a sharp, layered hierarchical structure.

---

## 🏛️ Elite Architecture

The DatePicker is constructed upon an "Ironclad" framework to ensure maximum systemic consistency:
- **Mirror Trigger**: The Trigger element is a perfect visual clone of the Select component (featuring haptic feedback support and inset rings).
- **PremiumBlock Shell**: The Popover utilizes the `PremiumBlock` architecture with the `padding="none"` variant to create an edge-to-edge calendar grid, effectively purging all redundant spacing.
- **Shadow-Ring Automation**: Leverages the built-in `--shadow-5` token integrated with a 1px ring, guaranteeing the Popover maintains visual dominance without requiring supplementary CSS.

---

## 🎨 Technical Specs

### Typography & Sizing
- **Weekday Baseline**: Fixed strictly at **12px** (`var(--font-size-1)`) to preserve absolute architectural alignment with Radix UI Themes.
- **Grid Geometry**: The day grid is calculated using dynamic scaling tokens (`calc(var(--size-2) + var(--space-2))`), allowing the component to auto-calibrate its proportions based on the global `--scaling` variable.
- **Spacing Density**: Header padding is tightened to `var(--space-2)` (8px) to reinforce a dense, information-rich aesthetic.

---

## 🛠️ Properties

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `mode` | `'single' \| 'range'` | `'single'` | Toggles between single date selection or date range selection. |
| `variant` | `'surface' \| 'classic' \| 'soft'` | `'surface'` | Defines the material variant based on MMS standards. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Sets the component scale (1-3). |
| `radius` | `'none' \| ... \| 'full'` | `'4'` | Specifies the corner rounding based on the Radix scale system. |
| `highContrast` | `boolean` | `false` | Enhances color contrast for Active/Today states. |

---

## 🚀 Usage

### Standard Architecture
```tsx
<DatePicker 
  size="2" 
  radius="4"
  placeholder="Select arrival date"
/>
```

### Range Mode
Utilizes the `accent-a3` bridge technique to create a modern, fluid visual connection between date boundaries.
```tsx
<DatePicker 
  mode="range" 
  onRangeChange={(range) => handleRange(range)}
/>
```

---

## 🛡️ Mirror Parity Standard
The DatePicker must remain in permanent synchronization with updates in `Select.css`. Any modifications regarding Ring protocols, Shadow depth, or Haptic behavior on the Select component must be mirrored here immediately.
