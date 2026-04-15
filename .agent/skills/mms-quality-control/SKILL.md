---
name: mms-quality-control
description: MMS-QC Design Agency Gatekeeper. Specializes in Pixel-Perfect audits, Flat-Premium compliance, and ensuring 100% architectural integrity before delivery.
---
# MMS Quality Control (MMS-QC)

This skill is the "Quality Gatekeeper" for the MMS Design System. It must be invoked after any component creation or modification to ensure 100% adherence to our premium design standards.

## 💎 The Pure-Aesthetic Standard

### 1. The Pixel-Perfect Rule (12-4-8)
Every component container must satisfy the nesting law:
- **Outer Radius**: `12px` (Standard)
- **Container Padding**: `4px` (Gutter)
- **Inner Element Radius**: `8px` (Child)
- *Variation*: `16 - 4 = 12` or `20 - 4 = 16`.

### 2. Flat-Premium Integrity
- **Shadows**: Forbidden. Use `--border-subtle` or background surface shifts to define depth.
- **Borders**: 1px hairline using `var(--border-subtle)`.
- **Transparency**: Use `--gray-a` scale for neutral overlays to ensure theme-agnostic inversion.
- **Typography**: `Inter Display` for headers (SemiBold/Bold), `Inter` for body. Base size `14px`.

---

## 🔍 Audit Workflow

### Phase 1: Architectural Integrity (NEW)
1. **Library Reuse**: Scan `src/components/ui/` before any development. Verify that standard patterns (Tabs, Buttons, Inputs) are not being reinvented with custom CSS.
2. **Evolution Gate**: Verify that any NEW primitive or widget added to the system has been explicitly approved by the User in the conversation history.
3. **Documentation Alignment**: Ensure that new components are added to docs ONLY after approval.

### Phase 2: Compliance (Static Audit)
1. **Foundation Standards**: Cross-reference all changes with `knowledge/foundation_standards.md`.
2. **Token Verification**: Run `node scripts/mms-audit-pixel.mjs` (Mandatory). Ensure 0 errors for Typography, Spacing, and Colors.
3. **Hardcode Detection**: Scan CSS/TSX for any fixed hex codes or pixel values (e.g., `#FFF`, `13px`) not mapped to tokens.
... (rest of the phases remain the same)
