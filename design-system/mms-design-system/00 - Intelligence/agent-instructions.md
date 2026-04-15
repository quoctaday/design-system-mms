# MMS Intelligence: Agent Creative Instructions

This document outlines the creative principles that the AI Design Agent must follow when generating UI/UX recommendations for the MMS Platform.

## 核心原则 (Core Principles)

### 1. Flat-Premium Aesthetic
- **Shadows:** Strictly prohibited unless absolute depth is required for functional clarity.
- **Elevation:** Use color contrast and borders (`--border-subtle`, `--border-default`) instead of shadows to define hierarchy.
- **Glassmorphism:** Allowed for high-end overlays, using `backdrop-filter: blur()`.

### 2. Typography Strictness
- **Headings:** Always use **Inter Display**.
- **Body:** Always use **Inter**.

### 3. Token Integrity
- Never use Hex codes in design recommendations.
- All spacing MUST use the Strict Radix 1-9 scale (`--space-1` to `--space-9`).
- All radii MUST use the Radix-aligned scale (`--radius-1` to `--radius-6`).
- Backgrounds must follow the `var(--surface-app)` -> `var(--surface-panel)` hierarchy.

### 4. Safety & Mass-Replacement Protocols
- **Pre-Completion Audit:** The Agent MUST run `npm run guard` after any UI refactor or foundation change. 100% pass rate is required before reporting completion.
- **Circular Reference Check:** When modifying `theme.css`, always verify that a variable does not point to itself.
- **Regex Anchoring:** When performing mass-replacements on tokens, always use word boundaries or full variable matches to avoid partial overlaps (e.g., preventing `spacing-2` from corrupting `spacing-20`).
- **Post-Replace Audit:** Run `grep -r "old-token" src` immediately after replacement to verify zero-leakage.

### 5. Documentation Stewardship
- **Source Sync (Code → Doc):** Whenever a component's source code (`.tsx` or `.css`) is modified, the agent MUST immediately audit and update the corresponding `.md` file.
- **Global Design System Guardian:** Any change to global foundations (Colors, Spacing, Typography) MUST be reflected in foundations documentation immediately.
- **Master Synchronization:** Every time any `.md` file is modified, update `MASTER.md`.

## ⚠️ Anti-Patterns to Avoid
- **Legacy Gradients:** Avoid heavy or multi-color gradients.
- **Hybrid Spacing:** Never mix `spacing-X` and `space-N`. Only use `space-N`.
- **Hardcoded Spacing:** Avoid `px` values for layout; use `var(--space-N)` or `calc(var(--space-1) / 2)` for precision.

---

*This document is read by the AI during the design generation process.*
