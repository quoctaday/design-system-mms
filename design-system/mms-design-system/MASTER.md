# 🗺️ MMS Design System - Master Hub

> [!IMPORTANT]
> **Source of Truth Protocol**: This is the primary navigation and strategic logic hub. 
> - Implementation details (Code) live in specific **Foundations** or **Components** files.
> - When building a specific page, check `design-system/pages/[page-name].md` for overrides.

---

## 🏛️ Documentation Map

### 🏛️ Foundations
- [[01 - Foundations/Colors|Colors]] • [[01 - Foundations/Typography|Typography]] • [[01 - Foundations/Spacing & Grid|Spacing & Grid]] 
- [[01 - Foundations/Radius & Elevation|Radius & Elevation]] • [[01 - Foundations/Sizing|Sizing]] • [[01 - Foundations/Widgets|Widgets]] • [[01 - Foundations/Metrics|Metrics]]

### 🧱 Core UI (Actions & Inputs)
- **Actions:** [[02 - Components/Button|Buttons]] • [[02 - Components/Badge|Badges]] • [[02 - Components/SegmentedControl|SegmentedControl]] • [[02 - Components/DropdownMenu|DropdownMenu]]
- **Selection:** [[02 - Components/Checkbox|Checkbox]] • [[02 - Components/Switch|Switch]] • [[02 - Components/RadioGroup|RadioGroup]]
- **Text Entry:** [[02 - Components/Input|Inputs]] • [[02 - Components/Search|Search]]

### 📊 Data & Complex Components
- **Enumeration:** [[02 - Components/Table|Table]] • [[02 - Components/Timeline|Timeline]]
- **Selection:** [[02 - Components/Select|Select]] • [[02 - Components/MultiSelect|MultiSelect]] • [[02 - Components/DatePicker|DatePicker]]
- **Visualization:** [[02 - Components/PieChart|PieChart]] • [[02 - Components/Progress|Progress]]

### 🍱 Dashboard & Feedback
- **Containers:** [[02 - Components/Card|Card]] • [[02 - Components/MetricCard|MetricCard]] • [[02 - Components/Sidebar|Sidebar]]
- **Feedback:** [[02 - Components/Dialog|Dialog]] • [[02 - Components/Toast|Toast]] • [[02 - Components/Tooltip|Tooltip]] • [[02 - Components/EmptyState|EmptyState]] • [[02 - Components/Result|Result]]
- **Loading:** [[02 - Components/Skeleton|Skeleton]] • [[02 - Components/Pagination|Pagination]]
- **Visuals:** [[02 - Components/AuroraBackground|AuroraBackground]] • [[02 - Components/Breadcrumbs|Breadcrumbs]]

### 📏 Strategic Guidelines
- [[03 - Guidelines/Introduction|Introduction]] • [[03 - Guidelines/Workflow|Workflow]] • [[03 - Guidelines/Checklist|Checklist]] 
- [[03 - Guidelines/Anti-Patterns|Anti-Patterns]] • [[03 - Guidelines/Design Agency CLI|Design Agency CLI]]

### 🏗️ Layout Standards
- [[04 - Layouts/Introduction|Introduction]] • [[04 - Layouts/Layout Contract|Layout Contract]] • [[04 - Layouts/Documentation Layout|Documentation Layout]]

### 🏢 Quality & Governance
- [[03 - Guidelines/Workflow|Systemic Workflow]] • [[03 - Guidelines/Checklist|Audit Checklist]]
- **Audit Skill**: `mms-quality-control` (PPA Protocol)
- **Validation**: `npm run guard` (Circular Reference & Token Audit)

---

## 💎 The MMS Protocol (Core Rules)

### 1. The Evolved Flat-Premium Standard
Our aesthetic relies on **Soft-Elevation** and structural clarity. Hierarchy is achieved through:
- **Surface Shifts**: Moving between `S1` (App), `S2` (Subtle), and `White` (Panel).
- **Contextual Contrast**: We distinguish between **Operational Context** (using Surface variants to reduce fatigue) and **Intentional Context** (using Classic high-contrast for primary forms).
- **Hairline Borders**: Using `0.5px` to `1px` borders with `var(--border-subtle)`.
- **Layered Shadows**: Shadows are used strategically to define depth. We avoid heavy black shadows in favor of **Alpha-Layered Elevation (Steps 1-6)**.

### 2. The Mathematical Nesting Principle (Dynamic 12-4-8)
To maintain visual harmony, the radius of internal elements must be calculated based on the outer container's radius and the padding between them.

**Formula:** $R_{inner} = R_{outer} - Padding$

| Scenario | Outer Radius | Padding | Resulting Inner | Recommended Tokens |
| :--- | :--- | :--- | :--- | :--- |
| **High Density** | 12px | 4px | 8px | `radius-5` + `space-1` + `radius-4` |
| **Relaxed** | 12px | 8px | 4px | `radius-5` + `space-2` + `radius-2` |
| **Micro-UI** | 8px | 4px | 4px | `radius-4` + `space-1` + `radius-2` |

**Why this matters:** This prevents the "corner-clash" effect and ensures that nested boundaries look parallel to the eye, regardless of the chose spacing or scale.

- **Radix-style Max Logic**: Internal action components use `max(var(--radius-full), var(--current-radius))`. The `--radius-full` variable acts as a global toggle (switching between `0px` and `9999px`) to trigger pill-shapes without breaking the structural stability of outer containers.

---

## 🚥 Semantic Token Glossary (Quick Reference)

| Group | Key Tokens | Purpose |
| :--- | :--- | :--- |
| **Surface** | `--surface-app`, `--surface-panel`, `--surface-component` | Background layers & elevation |
| **Content** | `--content-strong`, `--content-subtle`, `--content-on-solid` | Typography & readable icons |
| **Border** | `--border-subtle`, `--border-default`, `--border-strong` | Structural separation & focus |
| Radius | `--radius-1` to `--radius-6` (Scale) | Smart numeric scale + pill-shape fallback |
| **Spacing** | `--space-1` to `--space-9` (Numeric Index) | Modular 4px-baseline scale (Standardized) |
| Shadow | `--shadow-1` to `--shadow-6` (Numeric Scale) | Layered depth for high-luxury surface isolation |
| Brand | `--brand-9` (Solid), `--brand-10` (Soft) | Action & High-intent areas |

---
[[00 - Intelligence/agent-instructions|Agent Instructions]] • [[00 - Standards/PremiumBlock|Premium Block Standard]] • [[00 - Introduction|Back to Home]]
