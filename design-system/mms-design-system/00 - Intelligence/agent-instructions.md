# MMS Intelligence: Agent Creative Instructions

This document outlines the creative principles that the AI Design Agent must follow when generating UI/UX recommendations for the MMS Platform.

## 🛡️ ULTRA-IRONCLAD PROTOCOL (Level 5 Security)

### 1. Geometric & Radius Parity (The 5-Level Law)
- **Standard Scale:** All components MUST support the standard Radix 5-level radius scale: `none`, `small`, `medium`, `large`, `full`.
- **Concentric Alignment:** For nested elements (like indicators), its radius MUST follow the logic: `Radius_inner = max(0px, Radius_outer - 1px)`. This is non-negotiable for pixel-perfect curves.
- **Visual Evidence:** Before finalizing a component, verify this subtraction logic in the CSS.

### 2. Interaction Depth (The Haptic Law)
- **Mandatory States:** Every primary control MUST implement `:active` (Haptic Squeeze) and `:focus-visible` (Focus Ring).
- **Squeeze Factor:** Use `transform: scale(0.975)` for active feedback to create a mechanical, responsive feel.
- **Timing:** Use `100ms` for CSS-only transforms and `200ms` for Javascript-managed sliding indicators.

### 3. Materiality & Color Integrity (The Solid-Panel Law)
- **Solid Contrast Mandate**: Any active/selected indicator (e.g., in SegmentedControl, Tabs, Switch) MUST use a **Solid Background** (#fff or `panel-solid`) in Light Mode to pop against translucent gray-aN containers.
- **Alpha-Blending Rule**: Non-active states and large containers MUST use **Alpha Tokens** (`gray-aN`) to ensure visual harmony and background bleed-through.
- **Dark-Theme Sourcing**: Always audit the precise `gray-aN` level for dark mode to maintain depth without over-exposure.
- **Verification**: Never report completion without a verified check on the "Indicator Color Contrast Ratio" against its parent.

### 4. Anatomy vs. Layout Enforcement
- **Internal Anatomy:** Use **Local CSS Variables** (e.g., `--comp-width`) for fixed sizes.
- **External Layout:** Use the Strict Radix 1-9 scale (`--space-N`).
- **Source Audit:** NEVER modify a core component without first reading the official Radix source in `./Radix Reference/`.

## 🚥 Verification & Guarding

### 5. Automation & Evidence
- **Visual Evidence:** Every UI change MUST be verified via a `browser_subagent` screenshot.
- **Verified Audit (Protocol 5.1):** RUN `node scripts/mms-ironclad-reporter.mjs [ComponentName]` and ensure **Parity Score: 100%** before reporting completion.
- **Zero-Primitive Policy:** Run `sh scripts/verify-ironclad.sh` to ensure no raw hex/color leakage.

### 6. Documentation Sync
- **MASTER.md:** Update specifications immediately after a confirmed 100% parity build.
- **Lessons Learned:** Log any new architectural discoveries or Radix deviations immediately.

---
*This document is the supreme directive for AI design generations.*
