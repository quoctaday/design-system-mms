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

## 📏 Spacing Logic
- [ ] **Parental Control**: Section spacing controlled by parent `gap`, NOT by individual margins.
- [ ] **Orphan Margins**: No `margin-bottom` on the last element of a container.

---
[[00 - Introduction|Back to Introduction]]
