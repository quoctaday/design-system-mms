# Pre-Delivery Checklist

Before delivering any UI code or new pages, please verify against this quality checklist.

## ✅ Visual & Functional Check
- [ ] **No emojis** as icons (use Remix Icons / `react-icons/ri`).
- [ ] **Interactive**: `cursor: pointer` on all clickable components.
- [ ] **States**: Smooth hover/active transitions (150-300ms).
- [ ] **Accessibility**: Text contrast 4.5:1 minimum (Light & Dark).
- [ ] **Focus**: Visible focus states for keyboard navigation.
- [ ] **Motion**: Respect `prefers-reduced-motion` settings.

## 📱 Responsive & Layout
- [ ] **Breakpoints**: Verified at 375px, 768px, 1024px, 1440px.
- [ ] **Safeguards**: No content hidden behind fixed navbars.
- [ ] **Scroll**: No horizontal scroll on mobile devices.

- [ ] **Orphan Margins**: No `margin-bottom` on the last element of a container.

## 🛡️ The Guardian Protocol (V4.0)
- [ ] **Audit Pass**: `npm run guard` returns zero errors.
- [ ] **Strict Spacing**: 100% usage of modular `space-1` to `space-9` tokens.
- [ ] **Strict Radius**: 100% usage of modular `radius-1` to `radius-6` tokens.
- [ ] **Circular Safety**: Verified no self-referencing variables in `theme.css`.
- [ ] **Radix-Native Structural Parity**: 1px/0.5px rings and indicators correctly mirror Radix source architecture.
- [ ] **Semantic Color Tokenization**: 100% usage of global color tokens (Zero Hex/Alpha hardcodes).
- [ ] **Modular Spacing**: 100% usage of `space-1` to `space-9` tokens for external layout.
- [ ] **Parity Scope Locked**: Radix reference, anatomy, variants, and states were identified before implementation.
- [ ] **Variant Completeness**: All declared variants and key states were verified, not just the default appearance.
- [ ] **No Anatomy Drift**: No undeclared slots, wrappers, or new component parts were introduced silently.
- [ ] **MMS Semantic Mapping**: Accent and status colors were mapped to MMS tokens instead of copied directly from Radix hues.

---
[[00 - Introduction|Back to Introduction]]
