# WOKER Premium Block Master Standard (V4.1 - Flat-Premium)

This specification serves as the primary **Source of Truth**, defining the **Flat-Premium** (Zero-Shadow) design language at its highest level of precision for the MMS Platform.

---

## 1. The "12-4-8 Rule" (Concentricity)
To create a perfectly nested, concentric layout, we utilize a fixed mathematical metric system:
- **Outer Radius**: `var(--radius-5)` (12px)
- **Outer Padding**: `var(--space-1)` (4px)
- **Inner Radius**: `var(--radius-4)` (8px) (Calculated as: 12 - 4 = 8)
- **Objective**: Achieve absolute mathematical concentricity, imparting a sense of precision engineering and mechanical accuracy.

## 2. Ultra-Density SOP (Standard Operating Procedure)

### A. Zero-Gap Integration
- **Rule**: Entirely eliminate the `gap` between the Header and the Inner Panel.
- **Implementation**: `gap: 0px`. 

### B. Header Alignment
- **Padding**: **12px** (Aligned perfectly with the Inner Panel's content).
- **Typography**: **12px+**, Uppercase, 1.0 Opacity (Flexible based on system font).
- **Letter Spacing**: **0.08em** (Increased spacing for a professional, high-luxury aesthetic).
- **Iconography**: Scaled **1:1 with Text** (default 12px), positioned adjacent to the Label with an 8px gap.

### C. Inner Panel Optimization
- **Padding**: **12px** (Compact Standard).
- **Border**: **0.5px solid var(--border-subtle)** (Hairline border for ultra-sharp Retina rendering).
- **Shadow**: **NONE** (Mandatory Flat-Premium Standard).

## 3. Master Technical Specifications (Checklist)

| Component | Property | Master Value |
| :--- | :--- | :--- |
| **Container** | Background | `var(--surface-subtle)` / `var(--surface-accent-subtle)` |
| | Border Radius | `var(--radius-5)` (12px) |
| | Padding | `var(--space-1)` (4px) |
| | Internal Gap | **0px** |
| **Header** | Padding | `var(--space-4)` (16px) |
| | Label | 12px+, Uppercase, 0.08em letter-spacing |
| **Panel (Core)** | Background | `var(--surface-panel)` |
| | Border Radius | `var(--radius-4)` (8px) |
| | Padding | `var(--space-3)` (12px) |
| | Border | **0.5px solid var(--border-subtle)** |
| | Shadow | **NONE** |

## 4. Flush Variant (Full Bleed)
Reserved for scenarios requiring maximum information density (e.g., complex full-width charts):
- **Outer Padding**: **0px**.
- **Header Padding**: **12px**.
- **Inner Radius**: **12px** (Inner = Outer).

## 5. Anti-Patterns (Critical Violations)
To preserve system integrity, Agents and Developers must strictly avoid:
- ❌ **NO** heavy or colored shadows.
- ❌ **NO** background gradients for blocks.
- ❌ **NO** gap (`> 0`) between Header and Inner Panel.
- ❌ **NO** arbitrary radii outside the 12-4-8 rule.
- ❌ **NO** background patterns (dots/grids) on operational dashboards.
- ❌ **NO** default browser/global margins for `h3` or `p`. **Mandatory**: `margin: 0 !important`.

## 6. Typography Isolation (V4.1)
Every text block (Title, Subtitle) within the Header or Body must be absolutely isolated using `margin: 0 !important`. Vertical rhythm is managed centrally via the `headerGap` prop of the Root component.

---
*V4.0 Specification - Approved as the baseline technical standard for the MMS Design System.*
