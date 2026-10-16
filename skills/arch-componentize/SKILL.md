---
name: arch-componentize
description: "Use once architecture decisions are confirmed to record layers, component boundaries, and responsibilities in `_adr/base.xml`. Asks the user when a boundary is still undecided and writes no implementation code. Part of senior-mode."
license: MIT
---

# Architecture Componentization & Structural Specification

Synthesize finalized architectural decisions into a formal XML specification (tag-delimited blocks with Markdown fields) and persist it to `_adr/base.xml`. This skill captures system layers, component boundaries, and responsibility scopes.

This skill records structure, not implementation: it produces no class implementations, function bodies, SQL queries, or configuration scripts, and no concrete REST paths, RPC signatures, method parameters, or low-level type schemas.

---

## Operating Posture

If a boundary, component ownership, or dependency direction was not decided in earlier discussion, do not assume one; stop before writing the file and ask the user targeted questions. Give each component one clear responsibility. A component depends only on components in its own layer or lower layers; flag circular or cross-cutting violations as soon as they appear.

---

## Workflow

### Step 1: Decision Inventory & Ambiguity Detection
Analyze the conversational context and recent architectural discussions:
1. Extract established architectural decisions (layering strategy, system boundaries, core subsystems).
2. Scan for unresolved architectural forks:
   - Ambiguous component ownership (e.g., "Where does caching invalidation live?").
   - Unspecified integration patterns between layers.
   - Missing data consistency boundaries between components.
3. **User Clarification Gate:** If ambiguities exist, formulate 1 to 3 precise architectural questions. Wait for the user's decision before proceeding to file generation.

### Step 2: Layer & Component Decomposition
Organize the architecture into hierarchical tiers:
- **Layer Allocation:** Define the vertical tiers (e.g., Presentation/Public Facade, Processing Pipeline, Domain Core, Infrastructure/Adapters).
- **Component Definition:** For each component within a layer:
  - Assign a unique identifier and human-readable name.
  - State the core responsibility scope in one or two clear sentences.
  - Define explicit boundaries: what this component strictly handles (**Owns**) and what it deliberately delegates (**Delegates**).
  - Declare upstream consumers and downstream dependencies (**Depends**).
  - State deliberate non-responsibilities (**Avoids**).

### Step 3: XML Specification Synthesis
Compile the structured findings into the canonical XML specification using `references/xml-component-prompt.md`.

Validate against the following quality rules:
- The root tag is a bare `<architecture>`; no tag carries attributes, and nesting never exceeds `<architecture>` plus one child level.
- All component IDs are unique and hyphen-cased (e.g., `token-normalizer`, `event-dispatcher`).
- Every dependency references a declared component or external system ID.
- No code snippets, method signatures, or data structure implementations appear inside any tag.

### Step 4: File Persistence & Presentation
1. Ensure the `_adr/` directory exists.
2. Write the generated XML specification to `_adr/base.xml`.
3. Present the confirmation, saved file path, and a concise 3-bullet summary to the user.

---

## Output Format

Depending on the resolution state, produce one of two outputs:

### 1. Clarification Request (When Decisions Are Pending)
If Step 1 detects unresolved boundaries or ownership forks, do NOT write to `_adr/base.xml`. Instead, ask 1 to 3 targeted, structured decision questions:
- State the specific boundary/ownership ambiguity.
- Provide the evaluated architectural options (e.g., Option A vs. Option B).
- Ask the user to confirm the preferred direction.

### 2. Final Architectural Specification (When Decisions Are Resolved)
Once all boundaries are confirmed:
1. **File Persistence:** Save the complete XML content directly to `_adr/base.xml`.
2. **File Confirmation & Content:** State that `_adr/base.xml` has been updated, followed by the complete XML document enclosed in a code block.
3. **Structural Takeaways (3 Bullets):**
   - **Hierarchy & Scale:** Total tiers/layers and component count.
   - **Boundary Governance:** The primary unidirectional dependency/data flow rule.
   - **Confirmed Invariants:** Critical architectural decisions or tradeoffs established during the discussion.