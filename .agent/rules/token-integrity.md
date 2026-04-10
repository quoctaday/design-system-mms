# Rule: Token Integrity & Safety Contract

To prevent "undefined variable" errors and visual regressions in the Woker Design System, the following protocol MUST be followed during any CSS refactoring or component creation.

## 1. Zero-Discovery Rule
- **NEVER** assume a token exists because it "sounds" standard (e.g., `--size-2`).
- **ALWAYS** check `src/styles/theme.css` before using a variable in any component CSS.

## 2. Refactor Protocol (Mandatory Check)
Each time a component is updated:
1.  **Draft**: Identify tokens to be used.
2.  **Verify**: Search `theme.css` for each token.
3.  **Correct**: If a token is missing:
    - Add it to the appropriate section in `theme.css` first.
    - Commit/Save `theme.css`.
    - Then proceed with the component update.

## 3. Auditing Requirement
- After any batch of refactors, run the `scripts/audit-tokens.mjs` script to ensure 100% compliance.
- No hardcoded values (`px`, `hex`, `rgba`) should be introduced during this process.

## 4. Spacing Logic
- Preference should be given to `--spacing-X` tokens.
- Component dimensions (heights) must only use `--size-X` tokens.
- Use the standard multipliers for consistent airiness (e.g., use `--spacing-12` or `--spacing-16` for vertical padding).
