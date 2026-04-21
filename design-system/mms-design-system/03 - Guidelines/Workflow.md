# Systemic Development Workflow

When receiving a request to create a new page or component, both Developers and AI Agents must strictly adhere to the **"MMS Intelligence Workflow"** to protect system consistency and maintain Pixel-Perfect quality.

> [!IMPORTANT]
> If the task is to **fix or rebuild an existing component for Radix parity**, the specialized [[03 - Guidelines/Component Parity Workflow|Component Parity Workflow]] is mandatory in addition to this general workflow.

## 🏗 Execution Workflow

### 1. Research & Audit
- **Check `src/components/ui/`**: Usage of existing components is mandatory. Do not create redundant or duplicate elements.
- **Inventory Mapping**: Before coding, list all components that will be reused within your Implementation Plan.
- **Review `MASTER.md`**: Understand the core Protocols (12-4-8 Nesting, Zero Shadow Strategy).

### 2. Evolution Protocol
> [!IMPORTANT]
> **Golden Rule**: Never create or upgrade components/widgets arbitrarily without explicit user approval.

- **When current components are insufficient**: You must submit an "Evolution Proposal" describing why the current version is inadequate and outlining the proposed upgrade or new creation.
- **Implement only after approval**: Any changes to the library structure or documentation files must only be executed after receiving confirmation from the administrator (User).

### 3. Implementation Standards
- **Pre-Implementation Audit**: If modifying an existing component, run `npm run guard` (or equivalent audit script) to identify current technical debt.
- **Props-Driven Engineering**: Adjust UI states only through Props (`variant`, `size`, `color`).
- **Native-Bound Architecture**: Prioritize Radix-native atomic structures (1px rings, local filters). Maintain 100% Tokenization for Colors and Typography.
- **Standardization Compliance**: Adhere to the Regex Vault defined in the [[03 - Guidelines/Standardization|Standardization Protocol]].
- **Parity Scope Lock**: For existing component fixes, lock the Radix reference, anatomy, variants, states, and allowed MMS deviations before editing.
- **No Silent Expansion**: Do not add undeclared anatomy parts, variants, or states during parity work without explicit approval.

### 4. The 6 Golden Steps
1. **Research & Mapping**: Inventory all reusable components.
2. **Evolution Approval**: If a new creation or upgrade is required, ask the User first.
3. **Documentation-First**: Update or create the component's `.md` specification file (only after being approved).
4. **Skeleton & Logic**: Build the JSX structure and TypeScript Prop logic.
5. **Quality Audit (QC Gate)**: 
   - Utilize the `mms-quality-control` skill.
   - **Post-Implementation Audit**: Run the system audit script. Clear all `❌` errors before proceeding.
   - Take screenshots to verify Pixel-Perfect alignment with the design source.
   - Verify the full variant/state matrix for existing components, not just the default case.
   - Initiate a "Human-in-the-loop" request for the User to confirm aesthetic quality.
6. **Master Sync**: Update links in `MASTER.md` and synchronize all system documentation.

---
[[00 - Introduction|Back to Introduction]] • [[02 - Components/Introduction|Component Library]]
