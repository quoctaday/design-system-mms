# Component Parity Workflow

> [!IMPORTANT]
> This workflow is mandatory when fixing, upgrading, or rebuilding an existing MMS component that must preserve **Radix mechanical parity** while using **MMS semantic tokens**.

## Core Principle

**Radix defines component behavior. MMS defines token meaning.**

- **Clone from Radix**: anatomy, interaction logic, size logic, variant behavior, state behavior, border/ring/shadow mechanics, and spatial math.
- **Map into MMS**: accent semantics, status semantics, high-level surface/content/border tokens, white-label readiness.
- **Do not invent silently**: no undeclared anatomy parts, variants, states, or color systems may be introduced during a parity fix.

## Step 0: Parity Scope Lock

Before editing code, capture the component contract in writing:

- **Reference source**: exact Radix reference file or component entry.
- **Official anatomy**: root, slots, indicators, labels, thumbs, tracks, or other sanctioned parts.
- **Official variants**: all variants that MMS must support.
- **Official states**: hover, active, focus, disabled, checked, open, selected, invalid, loading, etc.
- **Official mechanics**: border strategy, ring strategy, shadow usage, radius behavior, inset logic, and transition behavior.
- **Allowed MMS deviations**: semantic color mapping, white-label accent injection, documentation naming, and explicit MMS-only tokens.

If this scope is not locked first, implementation must not start.

## Step 1: Anatomy Contract

The agent must verify:

- Every rendered part exists in the Radix anatomy or in an approved MMS extension.
- No helper wrapper is introduced unless it is structurally necessary.
- Every CSS selector maps to a declared part.
- Every new part added beyond the contract is treated as an **Evolution Proposal**, not a hidden refactor.

## Step 2: Variant Completeness Gate

Before touching styles, list the full matrix:

- `variant`
- `size`
- `color`
- `state`
- `theme mode`

For each component, the goal is not "the default variant looks correct". The goal is:

- all declared variants exist
- all declared states exist
- all supported sizes remain coherent
- no variant is partially implemented
- no variant is silently removed

If the matrix is incomplete, the component is not ready for delivery.

## Step 3: Color Mapping Contract

MMS does **not** copy Radix colors directly.

### Mechanical Parity

Preserve:

- contrast relationships
- hover and active intensity
- border-to-surface hierarchy
- solid vs subtle treatment
- focus visibility

### Semantic Mapping

Map into MMS using the token system in `src/styles/theme.css`:

- **Brand / primary intent** -> `--accent-*`
- **Danger / destructive** -> `--error-*` and `--surface-danger-*` / `--border-danger-*`
- **Success** -> `--success-*` and `--surface-success-*` / `--border-success-*`
- **Warning** -> `--warning-*` and `--surface-warning-*` / `--border-warning-*`
- **Neutral surfaces and readable content** -> `--surface-*`, `--content-*`, `--border-*`

### Rule

Never port Radix hues literally when MMS already exposes a semantic token for that purpose.

## Step 4: Token Layering Rules

Use the highest valid token layer first:

1. semantic tokens such as `--surface-*`, `--content-*`, `--border-*`
2. semantic status tokens such as `--error-*`, `--success-*`, `--warning-*`
3. accent tokens such as `--accent-*`
4. primitive scales only when required for parity-level internals

Hardcoded values are forbidden except for approved structural primitives:

- `1px`
- `0.5px`

These are allowed only when they mirror Radix mechanical implementation.

## Step 5: Implementation Rules

- Keep external spacing token-strict with `--space-*`.
- Keep component dimensions token-strict with `--size-*`.
- Keep typography token-strict with `--font-size-*`, `--font-weight-*`, `--line-height-*`.
- Preserve the MMS radius system and the dynamic nesting logic from `MASTER.md`.
- Use shadows only where the component's elevation role requires them.
- Keep interaction filters local when they are component-specific.

## Step 6: Pre-Delivery Verification

Run the component through this sequence:

1. `npm run guard`
2. `npm run architecture`
3. `npm run audit` or the relevant targeted audit
4. parity review against the Radix reference
5. visual verification of all declared variants and key states

## Required Review Questions

Before a parity fix is considered complete, the reviewer or agent must answer:

- Does the component still match Radix mechanics?
- Are all declared variants present?
- Were any undeclared anatomy parts introduced?
- Are MMS semantic colors used instead of copied Radix hues?
- Are radius, border, ring, and shadow relationships still mathematically consistent?
- Is the result white-label safe?

## Delivery Standard

A component parity task is complete only when all of the following are true:

- the component matches the locked reference behavior
- the MMS token mapping is correct
- the full supported matrix is present
- no hidden anatomy drift was introduced
- audits pass without unresolved errors

---
[[03 - Guidelines/Workflow|Back to Workflow]] • [[03 - Guidelines/Checklist|Audit Checklist]] • [[00 - Introduction|Back to Introduction]]
