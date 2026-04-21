# Anti-Patterns (Do NOT Use)

To maintain a professional, high-density fintech aesthetic, avoid the following common pitfalls:

## ❌ Visual Drifts
- **Neon Colors**: No generic vibrant backgrounds — Use neutral surfaces (`--bg-surface`).
- **Toxic Tokenization**: Avoid using elevation tokens (e.g., `--shadow-2`) where a precision structural ring (box-shadow 1px) is required by the Radix source.
- **The Indicator Clash**: Never allow a 1px indicator to sit flush against a 1px border. Always use `inset: 1px` for indicator layering.
- **Hardcoded Spacing**: Avoid `px` for spacing between elements — Always use global modular tokens.

## ❌ UX Infractions
- **Emoji Icons**: Never use emojis as functional icons — Use the Remix Icon set.
- **Layout Shifts**: No scale transforms that shift sibling elements on hover.
- **Invisible Focus**: Focus states must be high-contrast and visible.
- **Missing Cursors**: All clickable elements **must** have `cursor: pointer`.
1. **Typography Margin Leaks**: Using semantic tags (`p`, `h1`-`h6`) without `margin: 0 !important` inside isolated components.
2. **Global Style Dependence**: Relying on documentation styles (like `.doc-content`) for component layout.
3. **Hardcoded Nesting Radii**: Using static radius tokens (e.g., `radius-2`) for inner elements instead of `calc(outer - padding)`. This breaks with `--scaling`.

---
[[00 - Introduction|Back to Introduction]]
