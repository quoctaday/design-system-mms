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
- **Actions:** [[02 - Components/Button|Buttons]] • [[02 - Components/Badge|Badges]] • [[02 - Components/SegmentedControl|SegmentedControl]] • [[02 - Components/DropdownMenu|DropdownMenu]] • [[02 - Components/ContextMenu|ContextMenu]] • [[02 - Components/Slider|Slider]] • [[02 - Components/Tabs|Tabs]]
- **Selection:** [[02 - Components/Checkbox|Checkbox]] • [[02 - Components/Switch|Switch]] • [[02 - Components/RadioGroup|RadioGroup]] • [[02 - Components/Avatar|Avatar]]
- **Text Entry:** [[02 - Components/TextField|TextField]] • [[02 - Components/TextArea|TextArea]] • [[02 - Components/Search|Search]]

### 📊 Data & Complex Components
- **Enumeration:** [[02 - Components/Table|Table]] • [[02 - Components/Timeline|Timeline]] • [[02 - Components/DataList|DataList]]
- **Selection:** [[02 - Components/Select|Select]] • [[02 - Components/MultiSelect|MultiSelect]] • [[02 - Components/DatePicker|DatePicker]]
- **Visualization:** [[02 - Components/PieChart|PieChart]] • [[02 - Components/Progress|Progress]] • [[01 - Foundations/Colors#Charts|Chart Palette]]

### 🍱 Dashboard & Feedback
- **Containers:** [[02 - Components/Card|Card]] • [[02 - Components/MetricCard|MetricCard]] • [[02 - Components/Sidebar|Sidebar]] • [[02 - Components/Callout|Callout]] • [[02 - Components/Accordion|Accordion]]
- **Feedback:** [[02 - Components/Dialog|Dialog]] • [[02 - Components/AlertDialog|AlertDialog]] • [[02 - Components/Toast|Toast]] • [[02 - Components/Tooltip|Tooltip]] • [[02 - Components/Popover|Popover]] • [[02 - Components/HoverCard|HoverCard]] • [[02 - Components/EmptyState|EmptyState]] • [[02 - Components/Result|Result]]
- **Loading:** [[02 - Components/Skeleton|Skeleton]] • [[02 - Components/Pagination|Pagination]] • [[02 - Components/Spinner|Spinner]]
- **Visuals:** [[02 - Components/AuroraBackground|AuroraBackground]] • [[02 - Components/Breadcrumbs|Breadcrumbs]] • [[02 - Components/Separator|Separator]] • [[02 - Components/ScrollArea|ScrollArea]]

### 📐 Layout Primitives
- [[02 - Components/Box|Box]] • [[02 - Components/Flex|Flex]] • [[02 - Components/Grid|Grid]] • [[02 - Components/Container|Container]] • [[02 - Components/Section|Section]] • [[02 - Components/Inset|Inset]] • [[02 - Components/AspectRatio|AspectRatio]]

### 🔡 Typography Components
- [[02 - Components/Heading|Heading]] • [[02 - Components/Text|Text]] • [[02 - Components/Kbd|Kbd]]

### 📏 Strategic Guidelines
- [[03 - Guidelines/Introduction|Introduction]] • [[03 - Guidelines/Workflow|Workflow]] • [[03 - Guidelines/Checklist|Checklist]] 
- [[03 - Guidelines/Component Parity Workflow|Component Parity Workflow]] • [[03 - Guidelines/Anti-Patterns|Anti-Patterns]] • [[03 - Guidelines/Design Agency CLI|Design Agency CLI]]

### 🏗️ Layout Standards
- [[04 - Layouts/Introduction|Introduction]] • [[04 - Layouts/Layout Contract|Layout Contract]] • [[04 - Layouts/Documentation Layout|Documentation Layout]]

### 🏢 Quality & Governance
- [[03 - Guidelines/Workflow|Systemic Workflow]] • [[03 - Guidelines/Checklist|Audit Checklist]]
- [[03 - Guidelines/Component Parity Workflow|Radix Parity Workflow]]
- **Audit Skill**: `mms-quality-control` (PPA Protocol)
- **Validation**: `npm run guard` (Circular Reference & Token Audit)

---

## 💎 The MMS Protocol (Core Rules)

### 1. The Evolved Flat-Premium Standard (V4.1)
Our aesthetic relies on **Structural Clarity** and hairline precision. Hierarchy is achieved through:
- **Surface Shifts**: Moving between `S1` (App), `S2` (Subtle), and `White` (Panel).
- **Shadow-Free Operations**: PremiumBlocks and core layout containers are now **Shadow-Free**. They rely on `hairline` borders and background separation to maintain focus and extreme density without visual mud.
- **Hairline Borders**: Using `0.5px` (`--stroke-hairline`) for inner panels and `1px` (`--stroke-width-1`) for outer shells.
- **Layered Shadows**: Shadows are reserved **ONLY** for floating elements (Tooltips, Dialogs, Popovers) to preserve their elevation hierarchy.

### 2. The Mathematical Nesting Principle (Dynamic 12-4-8)
To maintain visual harmony, the radius of internal elements must be calculated based on the outer container's radius and the padding between them.

**Formula:** $R_{inner} = R_{outer} - Padding$

| Scenario | Outer Radius | Padding | Resulting Inner | Recommended Tokens |
| :--- | :--- | :--- | :--- | :--- |
| **Operational (Standard)** | 12px (r-5) | 4px (s-1) | 8px (r-4) | Concentric & Dense |
| **Relaxed** | 16px (r-6) | 8px (s-2) | 8px (r-4) | Accessible |
| **Micro-UI** | 12px (r-5) | 8px (s-2) | 4px (r-2) | Information Tight |

**Why this matters:** This prevents the "corner-clash" effect and ensures that nested boundaries look parallel to the eye, regardless of the chose spacing or scale.

- **Radix-style Max Logic**: Internal action components use `max(var(--radius-full), var(--current-radius))`. The `--radius-full` variable acts as a global toggle (switching between `0px` and `9999px`) to trigger pill-shapes without breaking the structural stability of outer containers.

### 3. Adaptive Ironclad Protocol (Native Parity)
To achieve pixel-perfect parity with Radix, we distinguish between structural necessity and semantic identity:

- **Structural Primitives (Law of 1px)**: For precision UI boundaries (rings, indicators, hairlines), we allow hardcoded `1px` or `0.5px` values **IF** they reflect the official Radix implementation. These are structural, not semantic.
- **Internal Anatomy (Locality)**: Components should define their own interaction filters or state variables inside their local CSS (e.g., `--mms-button-active-filter`). This keeps the global `theme.css` clean.
- **Law of Perceptual Interaction**: Use `filter: brightness()` and `filter: saturate()` for `:active` and `:hover` transitions. This ensures a consistent "press" feel regardless of the component's base color lightness.
- **External Layout (Token-Strict)**: Any spacing *between* components, or *between* a component and its label, **MUST** strictly use global tokens (`--space-1` to `--space-9`).
- **Typography & Color (Zero Hardcodes)**: Typography and Color Palette **MUST** strictly follow global semantic tokens without exception.
- **140ms Snap Factor**: Standardized transition speed for all interactive feedback.

### 4. The UI Materiality Protocol (Layering & Sharpness)
To deliver absolute Radix-level clarity, we utilize precision layering and rings:

- **The Indicator Law (Inset 1px)**: When creating an indicator background inside a bordered container (e.g., SegmentedControl, Switch), use `inset: 1px` or equivalent positioning to avoid "Double-Border" visual clutter and ensure layout stability.
- **Shadow-Rings (Hybrid Approach)**: 
    *   **Floating Elements**: Use layered elevation tokens (`--shadow-2` to `--shadow-6`).
    *   **Interactive Triggers**: Use `box-shadow: 0 0 0 1px ...` (outset or inset) to define precise boundaries that change color on hover/focus without shifting the layout footprint.
- **Conflict Rule**: When a precision ring is applied via `box-shadow`, the actual `border` property MUST be set to `none` to prevent rendering artifacts.

---

## 🚥 Semantic Token Glossary (Quick Reference)

| Group | Key Tokens | Purpose |
| :--- | :--- | :--- |
| **Surface** | `--surface-app`, `--surface-panel`, `--surface-component` | Background layers & elevation |
| **Content** | `--content-strong`, `--content-subtle`, `--content-on-solid` | Typography & readable icons |
| **Border** | `--border-subtle`, `--border-default`, `--border-strong` | Structural separation & focus |
| Radius | `none`, `small`, `medium`, `large`, `full` | Unified logical API (resolves to numeric scale) |
| **Spacing** | `--space-1` to `--space-9` (Numeric Index) | Modular 4px-baseline scale (Standardized) |
| Shadow | `--shadow-1` to `--shadow-6` (Numeric Scale) | Layered depth for high-luxury surface isolation |
| **Accent** | `--accent-9` (Solid), `--accent-10` (Dark) | Brand identity & High-intent actions (Dynamic) |
| **Chart** | `--chart-1` to `--chart-10` | Categorical data visualization scale |

---
[[00 - Intelligence/agent-instructions|Agent Instructions]] • [[00 - Standards/PremiumBlock|Premium Block Standard]] • [[00 - Introduction|Back to Home]]
