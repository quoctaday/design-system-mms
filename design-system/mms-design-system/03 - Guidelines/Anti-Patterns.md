# Anti-Patterns (Do NOT Use)

To maintain a professional, high-density fintech aesthetic, avoid the following common pitfalls:

## ❌ Visual Drifts
- **Neon Colors**: No generic vibrant backgrounds — Use neutral surfaces (`--bg-surface`).
- **Shadow Drift**: No custom `box-shadow` — Use `--shadow-2` or `--shadow-3`.
- **Hardcoded Density**: Avoid `px` for spacing/sizing — Always use system tokens.

## ❌ UX Infractions
- **Emoji Icons**: Never use emojis as functional icons — Use the Remix Icon set.
- **Layout Shifts**: No scale transforms that shift sibling elements on hover.
- **Invisible Focus**: Focus states must be high-contrast and visible.
- **Missing Cursors**: All clickable elements **must** have `cursor: pointer`.

---
[[00 - Introduction|Back to Introduction]]
