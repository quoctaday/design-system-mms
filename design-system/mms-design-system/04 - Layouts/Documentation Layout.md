# Documentation Layout (Premium Modern)

Starting from v3.1, the documentation system follows a **Premium Floating Card** aesthetic with dynamic backgrounds.

## 🌄 The Hero Section (Aurora)
Each documentation page begins with a high-impact hero area.
- **Background:** `AuroraBackground` UI component.
- **Aesthetic:** Animated, borderless glassmorphism.
- **Hierarchy:** H1 title and description are centered within the aurora field.

## 🃏 Floating Card Content
The core content area is visually separated from the application chrome.
- **Structure:** Content is wrapped in a large container with `border-radius: var(--radius-lg)` (16px) or larger.
- **Shadow:** Uses `--shadow-large` to create depth against the app background.
- **Internal Padding:** Scaled operational padding using `--spacing-40` to `--spacing-80`.

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
