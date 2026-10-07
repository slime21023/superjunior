+++
name = "arch-detail"
description = "Produces detailed structural and behavioral specifications for a single component defined in '_adr/base.xml'. Establishes public contracts, data models (DTOs), runtime sequences (Mermaid), invariants, and failure handling without writing business implementations. Persists specifications to '_adr/components/{component-id}.md'."
disable_model_invocation = true

[subagents.designer]
tier = "deep-reasoning"
readonly = false
+++

# Component Detailed Design Specification

Create a detailed structural and behavioral specification for a single target component. This skill translates the high-level boundary definitions from `_adr/base.xml` into a concrete design document ready for subsequent implementation.

**Strict Negative Constraints:**
- **Zero Method Bodies:** Define type definitions, data structures, and interface signatures only. Never write business logic algorithms, function bodies, or framework plumbing.
- **Strict Boundary Confinement:** Never design capabilities that violate the component's `<avoids>` list or overlap another component's `<owns>` in `_adr/base.xml`.
- **No Speculative Assumptions:** If an interaction protocol, consistency model, or error policy is undecided, halt and prompt the user.

---

## Operating Posture

- **Specification over Code:** Serve as the bridge between system architecture and implementation. Deliver clear interfaces, sequence flows, and error contracts.
- **Anchor in `base.xml`:** Treat `_adr/base.xml` as an immutable boundary contract for this step. If a requirement breaks the boundary, advise modifying `_adr/base.xml` first.
- **Fail-Fast Boundary Defense:** Explicitly model timeouts, fallback states, and domain error hierarchies rather than treating the happy path in isolation.

---

## Workflow

### Step 1: Base Anchor & Context Ingestion
1. Read `_adr/base.xml` and locate the target component by its unique `id`.
2. Extract the boundary constraints:
   - `<scope>` and `<owns>`: Core capabilities requiring interface modeling.
   - `<delegates>` and `<depends>`: Required outbound interactions and service provider dependencies.
   - `<avoids>`: Out-of-bounds responsibilities to explicitly guard against.
3. Review related layers and cross-cutting policies.

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