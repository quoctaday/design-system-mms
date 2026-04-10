# MMS Intelligence: Agent Creative Instructions

This document outlines the creative principles that the AI Design Agent must follow when generating UI/UX recommendations for the MMS Platform.

## 核心原则 (Core Principles)

### 1. Flat-Premium Aesthetic
- **Shadows:** Strictly prohibited unless absolute depth is required for functional clarity.
- **Elevation:** Use color contrast and borders (`--border-subtle`, `--border-default`) instead of shadows to define hierarchy.
- **Glassmorphism:** Allowed for high-end overlays, using `backdrop-filter: blur()`.

### 2. Typography Strictness
- **Headings:** Always use **Inter Display**.
- **Body:** Always use **Inter**.
- **Base Size:** Default to **14px** (`--font-size-3`) for dense operational layouts.

### 3. Token Integrity
- Never use Hex codes in design recommendations.
- All colors must map to the semantic tokens defined in `agent-protocol.json`.
- Backgrounds must follow the `var(--surface-app)` -> `var(--surface-panel)` hierarchy.

## ⚠️ Anti-Patterns to Avoid
- **Legacy Gradients:** Avoid heavy or multi-color gradients.
- **Rounded Corners Overload:** Stick to the standard scale: 4px (small), 16px (medium), 20px (large).
- **Inconsistent Spacing:** Always use multipliers of 4 (e.g., `--spacing-12`, `--spacing-16`).

---

*This document is read by the AI during the design generation process.*
