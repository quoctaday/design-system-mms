# MMS Intelligence: Radix Technical Deep-Dive

This document archives the high-level design and implementation techniques "decoded" from Radix UI Themes, serving as a blueprint for building the MMS Native Premium architecture.

---

## 🌓 1. Layered Shadow-Border Technique
Radix avoids traditional `border` properties for floating elements (Popovers, Menus, Selects). Instead, they utilize a single `box-shadow` attribute composed of 3-4 nested layers.

### Why?
- **Seamless Integration**: Ensures that the "border" and "shadow" blend 100% naturally.
- **Rendering Safety**: Prevents rendering artifacts and pixel-clipping when components are nested.
- **Retina Precision**: Achieves ultra-high sharpness (Hairline precision) that traditional borders cannot match on high-DPI screens.

### Formula (Size M / Shadow-5 Example):
```css
box-shadow: 
  0 0 0 1px var(--gray-a3),      /* Layer 1: Simulated Border (1px Alpha gray) */
  0 12px 60px var(--black-a3),   /* Layer 2: Distant Elevation (Soft Shadow) */
  0 12px 32px -16px var(--gray-a5); /* Layer 3: Ambient Depth (Realistic liftoff) */
```

---

## 📐 2. Organic Radii Rules
Radix does not strictly follow pure mathematics (e.g., `R_out - P = R_in`). Instead, they use specific pairs of values optically tuned for a "soft" and fluid feel.

### The Golden Mapping Table:
| Level | Outer Container | Inner Item (Select/Input) | Visual Feel |
| :--- | :--- | :--- | :--- |
| **S** (Radius 3) | **6px** | **3px** | Tight & Refined |
| **M** (Radius 4) | **8px** | **4px** | Balanced & Modern |
| **L** (Radius 5) | **12px** | **6px** | Spacious & Premium |

> **Secret**: Even when the gap between the container and the child is large, the child's radius **must never** be 0px (sharp corner). It should be at least 2px - 3px to maintain the design language's brand DNA.

---

## 🎨 3. Adaptive Shadow Colors
Radix utilizes `color-mix` strategically to ensure shadows adapt to their underlying background.

### Logic:
In Dark Mode, shadows are not merely black. They are mixed with the primary Gray of the theme (`var(--gray-a6)`) to ensure the shadow looks "translucent" and "deep" rather than "muddy" or opaque.

---

## ⌨️ 4. Keyboard Orchestration
- **Orientation-Aware**: Automatically detects horizontal vs. vertical orientation to map arrow keys accordingly.
- **Cycle Navigation**: Implements looping (returning to the first item after the last), creating an uninterrupted navigational flow.

---

> [!IMPORTANT]
> **MMS Standard**: Prioritize these techniques whenever refactoring a core component to the Native MMS Engine to ensure elite visual parity.
