# MMS Standardization Protocol (Agentic v5.0)

This document outlines the standards and techniques required to maintain a **Pixel-Perfect** system across the MMS Platform. Both humans and AI Agents must strictly adhere to these rules to avoid UI technical debt.

## 🎯 Strategic Objectives
- **Semantic Tokenization (Color & Type)**: 100% mandatory usage of `var()` for Colors and Typography. Raw HEX codes and hardcoded font families are strictly prohibited.
- **Structural Native Primitives**: Ultra-fine pixel values (`1px`, `0.5px`) are permitted when creating rings, hairlines, or indicators to ensure Radix-level visual sharpness.
- **Single Source of Truth**: All primary spacing, border-radius, and elevation must reference `theme.css`.
- **Atomic Consistency**: Similar components must share the same token sets (e.g., Button and Input should both use `--size-2`).

---

## 🔍 The Regex Vault (Audit Toolset)

Use the following regular expressions to identify violations during the audit process:

| target | Regex Pattern | Purpose |
| :--- | :--- | :--- |
| **Hard Pixels** | `[:\s][2-9][0-9]*px[;\s]` | Find `px` values (2px and above). Exempts `1px` and `0.5px` for ring architecture. |
| **Hex/Color** | `(#[0-9a-fA-F]{3,8}\|rgba?\(.*?\)\|hsla?\(.*?\))` | Find untokenized color codes. |
| **Fallback PX** | `var\(--.*, \s*[0-9]+px\)` | Find fallback values using `px` units. |
| **Invalid Spacing** | `(padding\|margin\|gap): (?!var\(--spacing-)` | Check for 4-point grid violations. |

---

## 🛠 4-Step Refactor Workflow

### Step 1: Layered Audit
Run the audit script and categorize errors into 3 levels:
- **Critical**: Raw `px` values directly in core components (`src/components/ui`).
- **Warning**: Errors in Example pages or high-level views (`src/pages`).
- **Aesthetic**: Odd values not adhering to the 4px grid (e.g., `3px`, `6px`).

### Step 2: Token Mapping
Before applying fixes, cross-reference actual values with the standard token table:
- **Spacing**: 4 (space-1), 8 (space-2), 12 (space-3), 16 (space-4), 24 (space-5), 32 (space-6)...
- **Dimensions**: Size-0 (20px) to Size-18 (800px).
- **Radius**: Radius-4 (8px), Radius-5 (12px), Radius-6 (16px).
- **Borders**: `--stroke-width-1` (1px), `--stroke-hairline` (0.5px).
- **Semantics**: Always use `var(--border-accent)` instead of `var(--accent-7)`, and `var(--surface-accent-subtle)` instead of `var(--accent-2)`. Strictly prohibit `-aX` (numeric alpha) tokens directly in component logic if a semantic equivalent exists.

### Step 3: Mathematical Concentricity
To achieve the highest aesthetic quality in nested blocks, MMS transitions from manual rules to **CSS calc() Automation**:

- **Mandatory Formula**: `Inner_Radius = calc(Outer_Radius - Padding)`.
- **Rationale**: The MMS system supports **Dynamic Scaling**. When a user adjusts `--scaling`, absolute values will drift. Only `calc()` ensures that corner radii remain perfectly concentric.
- **Implementation**:
  ```css
  .container { --outer-radius: var(--radius-5); padding: var(--space-1); }
  .inner-box { border-radius: calc(var(--outer-radius) - var(--space-1)); }
  ```

### Step 4: Final Wrap
- Delete any `_Corrected.css` or temporary files.
- Capture comparison screenshots (Screenshot Audit).
- Update `MASTER.md`.

---

## 🚫 Common Antipatterns
- **Error 1**: Using Spacing tokens for font size (`font-size: var(--spacing-4)`). -> **Fix**: Use `var(--font-size-X)`.
- **Error 2**: Hardcoding fallback values (`var(--shadow, 0 2px 4px rgba(0,0,0,0.1))`). -> **Fix**: Use nested shadow tokens.
- **Error 3**: Using "magic" odd pixels to fix layout (`margin-top: 3px`). -> **Fix**: Adjust `calc()` logic based on primary tokens.

---

## 💎 Standardization Exceptions

Certain cases are permitted to use primitive values to maintain precision or special effects:

1.  **Radix-Native Structural Primitives**: `1px` and `0.5px` values used in `box-shadow` or `inset` to accurately mirror Radix Themes indicator architecture.
2.  **AuroraBackground.css**: Complex aurora effects (Gradients). Marked with `/* [AI-STND-EXCEPTION] */`.

---

## 🏗️ Modern Component Architecture (Agentic v4.0)

To ensure high scalability and customization, MMS standardizes complex components using the **Compound Architecture** model.

### 1. Compound Model (Root-based)
Components must be broken down into sub-components rather than using a single monolithic prop object.
- **Root**: Manages State, Context, and global configuration (size, variant).
- **Trigger/Input**: The primary interaction element.
- **Content/List**: The container for data or options.
- **Item/Slot**: Children elements or custom content insertion points.

### 2. Focus Halo Standards (Accessibility & Luxury)
The system uses a 3-layer focus halo instead of a simple border to ensure radiance and professionalism:
- **Layer 1 (Spacer)**: 2px gap adjacent to the element.
- **Layer 2 (Halo)**: 3px - 5px blurred glow using Brand or Error colors.
- **Layer 3 (Outer-ring)**: Ultra-fine border to define position in space.
- **Applied Classes**: `mms-focus-halo-brand`, `mms-focus-halo-error`.

### 3. Flat-Premium Strategy (Zero-Shadow Architecture)
To optimize information density and the sharpness of operational UIs:
- **Rule**: Functional blocks (PremiumBlock, Cards, Widgets) **DO NOT** use box-shadow by default.
- **Alternative**: Use `hairline` borders (0.5px) combined with subtle background layers (`surface-subtle`, `surface-accent-subtle`) to create depth.
- **Exception**: Shadows are reserved for "Floating" elements only: Tooltips, Dropdowns, Dialogs, Modals.

**Golden Rule**: If your UI looks "muddy," switch primary Entry Points to `classic` to restore clarity.

### 5. Tabs vs. Segmented Control
Although both use slider models, MMS strictly distinguishes their purpose to avoid visual confusion:

| Characteristic | Segmented Control | Tabs |
| :--- | :--- | :--- |
| **Nature** | Value selection (Form Selection). | Section navigation (Navigation). |
| **Aesthetics** | **High Density**. 4px padding, mechanical, solid feel. | **Spacious**. 6px padding, light feel, navigation priority. |
| **Default** | Surface-nested (Surface). | Underlined (Classic). |

**Rule**: Never place Surface Tabs directly next to a Segmented Control.

### 6. Typography Isolation & Margin Reset
To prevent global styles (from documents or browser resets) from leaking into components, MMS applies the **Bulletproof Reset**:

- **Rule**: All semantic tags (`h1`-`h6`, `p`, `ul`, `ol`) inside core components **MUST** have `margin: 0 !important` reset.
- **Rationale**: Prevents titles or paragraphs from creating unintended white space when components are placed inside stylized containers (like `.doc-content`).
- **Implementation**: All spacing between text blocks must be managed by the Parent Container's `gap` or purposeful `margin-top` (e.g., `.mms-card-description { margin-top: var(--space-1) !important; }`).

### 7. Utility-First Layout Protocol
To eliminate custom CSS for basic layouts, MMS uses the **Utility-First** model based on the 3 Primitives: `Box`, `Flex`, and `Grid`.

- **Principle**: 90% of layout structure must be built using the Props of these Basic Components.
- **Extended Spacing System**: 
    - Use `pt`, `pr`, `pb`, `pl` (Padding) and `mt`, `mr`, `mb`, `ml` (Margin).
    - Range values are focused from `0` to `9`, matching `theme.css`.
- **Dimension & Position**:
    - Use `width`, `height`, `position`, `top`, `bottom`... directly in React Props.
    - Avoid creating new CSS classes just for `display: flex` or `margin-bottom: 16px`.
- **Responsive-First**: Always define layouts via Responsive Objects: `p={{ initial: '2', md: '5' }}`.

---
[[03 - Guidelines/Workflow|Back to Workflow]]
