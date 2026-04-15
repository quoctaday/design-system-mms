# Card

The `Card` is the fundamental layout container for grouping related content, actions, and information.

## 💎 Design Standards
- **Aesthetic**: Flat-Premium.
- **Radius**: `var(--radius-5)` (12px) - Stable rectangle-rounded.
- **Nesting**: Follows the `12-4-8` rule (Radius-5 Container $\rightarrow$ Spacing-4 $\rightarrow$ Radius-4 Component).

## 🎨 Variants
- **Default**: `var(--surface-panel)` background with a subtle border.
- **Bordered**: Explicit `var(--border-default)` for high contrast.
- **Glass**: Transparent surface for overlay effects.

## 🚥 Token Mapping

| Element | Token | Usage |
| :--- | :--- | :--- |
| **Surface** | `var(--surface-panel)` | Main card body |
| **Border** | `var(--border-subtle)` | 1px hairline border |
| **Title** | `var(--content-strong)` | Header typography |
| **Subtitle** | `var(--content-subtle)` | Secondary header text |

## 🛠 Usage Guidelines
- Every dashboard widget should be wrapped in at least a `Card` or a specialized `MetricCard`.
- Use `headerExtra` for secondary actions like "View All" or "Filter".
- Maintain a consistent `padding="md"` unless space is extremely limited.

---
**Related:** [[01 - Foundations/Widgets|Widgets Hub]] • [[02 - Components/MetricCard|MetricCard]] • [[02 - Components/Table|Table]]
