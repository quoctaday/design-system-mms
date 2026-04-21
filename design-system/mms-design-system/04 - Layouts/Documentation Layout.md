# Documentation Layout (Premium Modern)

Starting from v3.1, the documentation system follows a **Premium Floating Card** aesthetic with dynamic backgrounds.

## 🌄 The Hero Section (Aurora)
Each documentation page begins with a high-impact hero area.
- **Background:** `AuroraBackground` UI component.
- **Aesthetic:** Animated, borderless glassmorphism.
- **Hierarchy:** H1 title and description are centered within the aurora field.
- **Spacing:** `var(--space-9)` vertical padding.

## 🃏 Content Sectioning
The documentation system uses a dense, operational spacing scale.
- **Section Gap:** `var(--space-9)` (64px) between major sections.
- **Internal Padding:** `var(--space-8)` (48px) for body content.
- **Radius:** `var(--radius-6)` (16px) for the main card structure.
- **Typography:**
  - H1: Clamp(Radius-7, Radius-11).
  - H2: `var(--font-size-8)` (32px).
  - H3: `var(--font-size-5)` (20px).

## 📍 Sticky Navigation (TOC)
To maintain context during long scrolls:
- **Location:** Right-side sidebar ("On This Page").
- **Behavior:** `sticky` positioning with a viewport offset.
- **Active State:** Highlights the current section using `--content-accent` (Brand Blue).

## 🛠 Documentation Components
- **CodePreview:** Real-time component execution with a "copy-code" function.
- **PropsTable:** Standardized API reference table for component properties.

---
[[00 - Introduction|Back to Introduction]]
