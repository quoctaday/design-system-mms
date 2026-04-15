# Widgets & Functional Blocks

Widgets are high-density, functional containers that encapsulate data, state, and logic. They are the building blocks of the MMS Dashboard ecosystem.

## 🏗️ Structural Strategy
Widgets must follow the **12-4-8 Nesting Rule** defined in [[01 - Foundations/Radius & Elevation|Radius & Elevation]].
- **Container**: `var(--surface-panel)` or `var(--surface-subtle)`.
- **Border**: `1px solid var(--border-subtle)`.
- **Shadow**: None (Flat-Premium Standard).

## 🧩 Primary Widgets

### 📊 Metric & Data Widgets
Used for KPIs, real-time monitors, and financial summaries.
- [[02 - Components/MetricCard|MetricCard]]: Single-value focus with trend indicators.
- [[02 - Components/PieChart|PieChart]]: Proportional data visualization.
- [[02 - Components/Progress|Progress]]: Goal tracking and loading states.

### 🍱 Content Containers
Used for grouping related information and actions.
- [[02 - Components/Card|Card]]: Generic high-level container.
- [[02 - Components/Table|Table]]: Dense data enumeration.

### 🕒 Operational & Ecosystem Widgets
- [[02 - Components/Timeline|Timeline]]: Activity feeds and audit trails.
- [[02 - Components/BrandSwitcher|BrandSwitcher]]: High-level ecosystem navigation.
- [[02 - Components/Sidebar|Sidebar]]: Global navigation framework.

---
[[00 - Introduction|Back to Introduction]]
