---
name: arch-detail
description: "Use to specify one component declared in `_adr/base.xml`: public contracts, data models, a Mermaid runtime sequence, invariants, and failure handling, saved to `_adr/components/{component-id}.md` without implementation bodies. Part of senior-mode."
license: MIT
---

# Component Detailed Design Specification

Create a detailed structural and behavioral specification for a single target component. This skill translates the high-level boundary definitions from `_adr/base.xml` into a concrete design document ready for subsequent implementation.

Define type definitions, data structures, and interface signatures only, with no business logic, function bodies, or framework plumbing. Stay inside the component's boundary in `_adr/base.xml`: never design capabilities that violate its **Avoids** field or overlap another component's **Owns** field. If an interaction protocol, consistency model, or error policy is undecided, stop and ask the user.

---

## Operating Posture

This skill bridges architecture and implementation with interfaces, sequence flows, and error contracts. Treat `_adr/base.xml` as fixed for this step; if a requirement breaks a boundary, recommend changing `_adr/base.xml` first. Model timeouts, fallback states, and domain error hierarchies explicitly instead of describing only the happy path.

---

## Workflow

### Step 1: Base Anchor & Context Ingestion
1. Read `_adr/base.xml` and locate the `<component>` block whose **ID** field matches the target component.
2. Extract the boundary constraints:
   - **Scope** and **Owns**: Core capabilities requiring interface modeling.
   - **Delegates** and **Depends**: Required outbound interactions and service provider dependencies.
   - **Avoids**: Out-of-bounds responsibilities to explicitly guard against.
3. Review the `<layers>` and `<cross-cutting>` blocks.

### Step 2: Scenario Exploration & User Decision Gate
Identify operational ambiguities before drafting the specification:
- **Interaction Style:** Synchronous request/response vs. asynchronous message publishing.
- **Data Lifecycle & Invariants:** Ephemeral in-memory state vs. durable entities; concurrency assumptions.
- **Failure Tolerances:** Retry expectations, idempotency requirements, and circuit-breaking needs.

*If any critical operational forks are unresolved, present 1 to 3 targeted decision questions to the user and await confirmation.*

### Step 3: Detailed Specification Modeling
Synthesize the component specification using `references/component-detail-prompt.md`.

Model the following five dimensions:
1. **Public Contracts & Data Models:** Abstract interfaces, operation signatures, and input/output payload shapes (pure signatures only).
2. **Runtime Sequence Flow:** Mermaid sequence diagram illustrating the primary execution path and interactions with dependencies.
3. **Internal State & Invariants:** Required pre-conditions, post-conditions, and state transition rules.
4. **Error & Fault Handling Matrix:** Complete taxonomy of expected failure modes, categorizing domain errors versus system faults with designated recovery actions.
5. **Testability & Verification Anchors:** Key observable behaviors to guide future regression and TDD checks.

### Step 4: File Persistence & Delivery
1. Ensure the directory `_adr/components/` exists.
2. Persist the generated document to `_adr/components/{component-id}.md`.
3. Present confirmation, the file path, and a concise 3-bullet summary of the finalized design.

---

## Output Format

Depending on resolution state, produce one of two outputs:

### 1. Decision Request (When Choices Are Pending)
If operational mechanisms remain undecided in Step 2, do NOT create or write files. Ask 1 to 3 structured questions:
- State the design choice (e.g., sync RPC vs. event publication).
- Compare evaluated options along with their architectural tradeoffs.
- Solicit the user's decision.

### 2. Final Component Specification (When Decisions Are Resolved)
1. **File Persistence:** Write the content directly to `_adr/components/{component-id}.md`.
2. **File Confirmation:** State that `_adr/components/{component-id}.md` has been created or updated.
3. **Specification Content:** Render the full Markdown document in a fenced code block.
4. **Design Takeaways (3 Bullets):**
   - **Primary Interface:** The core operational entry point and signature.
   - **Outbound Dependency Flow:** Downstream dependencies and interaction models.
   - **Critical Invariant:** The most important business invariant or failure recovery rule established.