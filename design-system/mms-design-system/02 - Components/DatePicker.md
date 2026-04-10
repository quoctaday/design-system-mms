# DatePicker

The standard date selection component for the MMS Design System, supporting single date, ranges, and presets.

## 📏 Architecture
The DatePicker consists of:
- **Trigger:** Uses standard input tokens for seamless form integration.
- **Popover:** Uses `var(--surface-panel)` for elevation.
- **Calendar Grid:** Maps strictly to semantic text scaling.

## 🎨 Token Specs
- **Popover Background:** `var(--surface-panel)`
- **Selected Day Background:** Solid Brand color variant.
- **Selected Day Text:** `var(--content-on-solid)` (Ensures perfect WCAG contrast regardless of the underlying theme; strictly prohibits hardcoded `#fff`).
- **Outside Month Text:** `var(--content-subtle)` / `var(--content-placeholder)`

---
[[00 - Introduction|Back to Introduction]]
