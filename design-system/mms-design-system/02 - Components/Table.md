# Table

The `Table` component is engineered for high-density data visualization, meticulously optimized to ensure maximum readability while adhering to the **Flat-Premium v4.0** aesthetic.

## 💎 Design Standards

- **Hairline Borders**: Employs ultra-refined borders (`0.5px` - `1px`) utilizing `var(--border-subtle)` to create clean structural separation without inducing visual fatigue.
- **Modern Striping**: Leverages an extremely subtle background color (`var(--surface-subtle)`) for zebra striping, assisting users in tracking horizontal data rows across large datasets.
- **Sticky Header**: Highly recommended for data-intensive tables to maintain column context at all times during vertical scrolling.

## 🎨 Variants

- **Surface (Primary)**: Features a solid, high-fidelity background (`var(--surface-panel)`), a translucent boundary ring, and a light `shadow-1` lift. This is the standard container for primary page-level data.
- **Ghost**: Provides a transparent background without external boundary rings. Designed specifically for nesting within larger Cards, Panels, or complex layouts.

## 📏 Sizing & Scale

| Size | Padding | Font Scale | Usage |
| :--- | :--- | :--- | :--- |
| `1` | `8px 12px` | `12px` | Ultra-high-density operational data grids |
| `2` | `12px 16px` | `14px` | Standard operational dashboards (Default) |
| `3` | `16px 24px` | `16px` | Hero tables and simplified customer-facing views |

## 🚥 Token Mapping

| Element | Token | Usage |
| :--- | :--- | :--- |
| **Row Border** | `var(--border-subtle)` | Horizontal hairline separator between data rows. |
| **Header Text** | `var(--content-subtle)` | Column labels (Uppercase + Semibold tracking). |
| **Active/Hover Row**| `var(--surface-subtle)` | High-contrast highlight state for active user engagement. |
| **Striped Row** | `var(--surface-subtle)` | Background fill for even-numbered (Zebra) rows. |

---
**Related:** [[02 - Components/Pagination|Pagination]] • [[02 - Components/Checkbox|Checkbox]] • [[02 - Components/Badge|Badge]]
