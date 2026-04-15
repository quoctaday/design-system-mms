---
name: wokerds
description: MMS-Platform Design Intelligence Agency. Specialized in high-density operational UI, Inter Display typography, and Flat-Premium aesthetics with a strict "Standardization First" protocol.
---
# wokerds

Design intelligence specialized in operational excellence and premium aesthetics. Governed by the MMS Design System constraints.

## 🛠 MMS-First Workflow

When user requests UI/UX work (design, build, create, implement), follow this MANDATORY workflow:

### Step 0: Inventory Scan (CRITICAL)
Before any design thinking, you MUST:
1. Run `list_dir src/components/ui` to see available building blocks.
2. Read `MASTER.md` to understand current foundations.
3. Identify if the request can be fulfilled using `Tabs`, `Button`, `Card`, `Switch`, etc.

### Step 1: Component Mapping Table
In your Implementation Plan, you MUST include a mapping table:
- **Feature**: [Feature Name]
- **Component**: [Standard Component Name from Library]
- **Reasoning**: Why this component is the correct architectural choice.

### Step 2: Evolution Proposal (If Library is Insufficient)
If the existing components CANNOT fulfill the visual/functional requirement:
1. **DO NOT** create a new component yet.
2. **DO NOT** add custom CSS to reinvent the pattern.
3. **PROPOSE** an evolution to the User: *"I need to upgrade the [Component] to support [Prop/Feature]"* or *"I need to create a new primitive [Name] because [Reason]"*.
4. Wait for explicit User approval before proceeding.

### Step 3: Flat-Premium Implementation
Implement using 100% tokens and the "Standardization First" rule. No hardcoded hex/px. No custom CSS for standard patterns.

... (rest of the skill specific aesthetic guidelines remain the same)
