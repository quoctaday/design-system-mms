# MMS Intelligence: Lessons Learned

This document serves as a persistent memory of technical challenges, failures, and their corresponding solutions encountered during the development of the MMS Design System.

## 🔴 Failure Mode: Spacing Collapse (April 2026)
- **Problem:** After a mass-replacement of spacing tokens, the entire UI collapsed with 0px spacing.
- **Root Cause:** A circular reference was introduced in `theme.css`. The find-and-replace modified the definition of `--space-1` to point to `var(--space-1)`, causing a CSS engine failure.
- **Solution:** Always isolate the `theme.css` definitions during mass-replaces or perform a manual "Golden Source" audit immediately after. 
- **Prevention:** Use the `grep -E "\-\-space-([1-9]): var\(\-\-space-\1\)"` command to detect circularity.

## 🟠 Failure Mode: Regex Overlap / Corrupted Tokens (April 2026)
- **Problem:** Replacing `--spacing-2` corrupted `--spacing-20` (e.g., it became `calc(...)0`).
- **Root Cause:** Lack of boundary anchoring in the `sed` command. The pattern `spacing-2` is a subset of `spacing-20`.
- **Solution:** 
    1. Perform replacements in reverse numerical order (e.g., 64 then 6).
    2. Use strict anchoring or word boundaries if the tool supports them.
    3. Run a cleanup pass specifically for partial overlaps.
- **Prevention:** Post-replace `grep` for unusual strings like `)0` or `var(var(`.

## 🟢 Success Pattern: Strict Radix Alignment
- **Pattern:** Using `calc(var(--space-1) / 2)` instead of defining a new `--space-0-5`.
- **Result:** Maintains 1-9 index purity while allowing for high-precision 2px offsets needed for "Flat-Premium" focus halos.
- **Protocol:** Stick to indices 1-9. Use `calc` for intermediate steps.
