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
- [ ] **Zero Hardcodes**: No raw hex codes or pixel values in component CSS.

---
[[00 - Introduction|Back to Introduction]]
