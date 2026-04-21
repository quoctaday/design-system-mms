# MMS Intelligence: Lessons Learned

This document serves as a persistent memory of technical challenges, failures, and their corresponding solutions encountered during the development of the MMS Design System.

## 🔴 Failure Mode: The "Muddy Control" Regression (April 2026)
- **Problem:** Switch and Checkbox components looked "cheap", "bulky", and "muddy," especially on non-white backgrounds.
- **Root Cause:** 
    1. **Geometric Failure:** Skipping the strict 1.75x width ratio for Switch (using 36x20 instead of 35x20).
    2. **Border Failure:** Using Solid colors (`gray-7`) for borders, which creates a "double-border" effect and masks the background.
    3. **Elevation Failure:** Using 1-layer shadows for interactive knobs, resulting in a flat, "toy-like" appearance.
- **Solution:** 
    1. Adopt the **Ironclad: Radix Parity Protocol**.
    2. Switch to **Alpha-based borders** (`gray-a7`) to allow background transparency.
    3. Implement the **Radix 5-layer shadow stack** for all floating/interactive knobs.
- **Prevention:** Mandatory source-code audit of `./Radix Reference/` before any interactive component refactor.

## 🔴 Failure Mode: Spacing Collapse (April 2026)
- **Problem:** After a mass-replacement of spacing tokens, the entire UI collapsed with 0px spacing.
- **Root Cause:** A circular reference was introduced in `theme.css`. The find-and-replace modified the definition of `--space-1` to point to `var(--space-1)`, causing a CSS engine failure.
- **Solution:** Always isolate the `theme.css` definitions during mass-replaces.
- **Prevention:** Use the `grep -E "\-\-space-([1-9]): var\(\-\-space-\1\)"` command to detect circularity.

## 🔴 Failure Mode: SVG Variable Blindness (April 2026)
- **Problem:** Pie charts and SVG elements rendered as solid black.
- **Root Cause:** Browsers fail to resolve multi-level CSS variable aliases in SVG `fill` attributes.
- **Solution:** Use `style={{ fill: 'var(--token)' }}` instead of the `fill` attribute.

## 🟢 Success Pattern: Ironclad Visual Guard
- **Pattern:** Using a 3-step verification (Source Audit -> Implementation -> High-Fidelity Screenshot).
- **Result:** Achieved 100% pixel-perfect parity with Radix UI Themes 3.0.
- **Protocol:** Never report completion without attaching a verified screenshot captured at 2x scale.

## 🟢 Success Pattern: The 62.5% Icon Fill Rule
- **Pattern:** Centering 10px icons in 16px containers.
- **Result:** Created sophisticated "white space" that is the hallmark of Radix aesthetics.

## 🔴 Failure Mode: Primitive Color Leak (April 2026)
- **Problem:** MultiSelect checkbox appeared as a "White Block" in Dark Mode, breaking its materiality.
- **Root Cause:** Hardcoding `background-color: white` in the CSS file instead of using semantic or alpha tokens.
- **Solution:** Switch to `background-color: transparent` and use `var(--accent-9)` for the checked state.
- **Prevention:** Mandatory use of the `verify-ironclad.sh` script to detect forbidden color keywords (`white`, `black`, `#HEX`).

## 🔴 Failure Mode: Undefined Token usage (April 2026)
- **Problem:** IDE tooltips reported `--color-panel-solid` as undefined, leading to unpredictable fallbacks.
- **Root Cause:** Attempting to use Radix standard tokens without first registering them in the local `theme.css`.
- **Solution:** Register the token in both Light and Dark blocks or use existing system tokens like `--surface-panel`.
- **Prevention:** Always perform a `grep` check on `theme.css` before implementing a new token reference.

## 🔴 Failure Mode: Anchor Jump via autoFocus (April 2026)
- **Problem:** Clicking a trigger caused the page to jump to the top.
- **Root Cause:** Using `autoFocus` on an absolute element that is initially mounted at `top: 0` (via Portal). The browser scrolls to the focused element before its position is calculated in `useEffect`.
- **Solution:** 
    1. Remove `autoFocus` attribute.
    2. Use `useRef` and a `useEffect` that only calls `.focus()` once `position.top !== 0`.
    3. Use `opacity: 0` until positioned to prevent visual flickering at (0,0).
- **Prevention:** Mandatory Audit of all Portal components for direct `autoFocus` usage.

## 🔴 Failure Mode: Pseudo-Parity & Detection Failure (April 2026)
- **Problem:** SegmentedControl was reported as 100% Ironclad but had 3 critical regressions: animation jitter, missing 1px concentric radius logic, and non-white indicator in light mode.
- **Root Cause:**
    1. **Auditor v1.0 Blindness:** The audit script only checked for token presence, not the *expressive scale depth* (e.g., it didn't verify the full 5-level radius scale).
    2. **Geometric Oversimplification:** Ignoring the "Concentric Radius Law" (`Outer Radius - 1px`) for inner layers.
    3. **Materiality Assumption:** Assuming `var(--color-background)` is always white in light mode instead of forcing a Solid Panel state.
- **Solution:**
    1. Upgrade Auditor to **v1.1** with deep scale validation.
    2. Mandate **Ultra-Ironclad Protocol** in `agent-instructions.md`.
    3. Force **Solid Panel Contrast** (#fff) for active indicators in Light Mode.
- **Prevention:** Run `node scripts/mms-ironclad-reporter.mjs` (v1.1+) and verify all "Deep Scale" matches and interaction states.

## 🟢 Success Pattern: Token-Native Boundary Awareness (V4.3)
- **Pattern:** Auditing the internal CSS layers of a token before implementing manual overrides.
- **Context:** During the DatePicker refactor, we discovered that v3.0 shadow tokens already integrate the 1px ring.
- **Result:** Successfully simplified Rule 4 in `MASTER.md`, reducing CSS boilerplate and ensuring absolute layout neutrality.
- **Protocol:** Always use `view_file` on `theme.css` to verify a token's "Gene" before proposing design rule changes.

---
*Last Updated: 2026-04-19 - V4.3 Shadow-Ring Automation and 12px Baseline codified.*
