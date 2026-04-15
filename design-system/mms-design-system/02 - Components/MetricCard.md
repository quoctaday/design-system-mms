# MetricCard

The `MetricCard` is a high-density primitive used to display Key Performance Indicators (KPIs), financial data, and trend analysis.

## 💎 Design Standards
- **Aesthetic**: Flat-Premium (Zero Shadow).
- **Radius**: `12px` (Outer) with `4px` padding and `8px` internal elements.
- **Typography**: Value is `--font-size-6` (24px) or higher, Label is `14px`.

## 🎨 Variants & States
- **Primary**: Standard brand blue accents.
- **Success**: Positive trends and growth data.
- **Danger**: Negative trends and system errors.
- **Warning**: Cautionary data and thresholds.

## 🚥 Token Mapping

| Element | Token | Usage |
| :--- | :--- | :--- |
| **Container** | `var(--surface-panel)` | Background surface |
| **Border** | `var(--border-subtle)` | 1px hairline border |
| **Value** | `var(--content-strong)` | Primary metric text |
| **Label** | `var(--content-subtle)` | Description text |
| **Trend Up** | `var(--content-success)` | Growth indicators |
| **Trend Down** | `var(--content-danger)` | Regression indicators |

## 🛠 Usage Guidelines
- Use for dashboard overviews.
- Prefer `design="premium"` for the most refined look.
- Always provide `comparisonText` (e.g., "vs last month") for context.

---
**Related:** [[01 - Foundations/Widgets|Widgets Hub]] • [[02 - Components/Card|Card]] • [[02 - Components/PieChart|PieChart]]
