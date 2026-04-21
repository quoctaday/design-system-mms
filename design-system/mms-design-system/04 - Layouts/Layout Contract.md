# Layout Contract

Every documentation page and UI layout within the system must adhere to this Layout Contract to ensure absolute consistency in spacing and visual rhythm.

## 1. Centralized Spacing Management
Spacing between primary sections **must** be delegated to the Parent Container.

**Correct ✅** — Parent container utilizes `gap`:
```css
.my-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-9); /* ← Single source of control */
}
```

**Incorrect ❌** — Each section manages its own margins:
```css
.section-1 { margin-bottom: 64px; } /* ← Orphan margin violation */
.section-2 { margin-top: 64px; }    /* ← Potential double-spacing collision */
```

## 2. Spacing Hierarchy

| Level | Spacing Method | Token Range |
|---|---|---|
| **Top-level Sections** | `gap` on Parent | `var(--space-9)` (64px) |
| **Groups within Sections** | `gap` on Grid/Flex | `var(--space-6)` to `var(--space-7)` |
| **Items within Groups** | `gap` on Flex/Grid | `var(--space-4)` to `var(--space-5)` |
| **Internal Card Padding** | `padding` | `var(--space-4)` to `var(--space-7)` |

## 3. Orphan Margin (Red Flags)
To maintain structural integrity, strictly avoid these patterns:
- Using `margin-bottom` on the last element within a container.
- Using `margin-top` on the first element within a container that already has `gap`.
- Overlapping margins where two adjacent elements both define spacing, leading to unpredictable gaps.

---
[[00 - Introduction|Back to Introduction]]
