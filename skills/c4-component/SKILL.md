---
name: c4-component
description: "Analyze component responsibilities, contracts, and interactions within a C4 container."
license: MIT
---

# c4-component

<Component-Principles>
  1. Establish Container Context:
    - Identify the containing application or data store and its boundaries.
    - Inspect existing components, dependencies, and external interactions.
    - Focus on C4 Component level; reference other levels only when necessary.

  2. Define Component Responsibilities:
    - Identify each component's purpose, ownership, and dependencies.
    - Clarify interfaces, data flow, state ownership, and failure handling.
    - Avoid overlapping responsibilities and unnecessary coupling.

  3. Evaluate Component Design:
    - Compare practical alternatives and their trade-offs when relevant.
    - Ground behavioral, concurrency, and performance claims in evidence.
    - Distinguish observed facts, assumptions, proposals, and confirmed decisions.

  4. Preserve Architectural Boundaries:
    - Answer the immediate question and highlight unresolved decisions.
    - Use diagrams only when requested; label proposed elements explicitly.
    - Do not modify implementation code, tests, or configuration.
    - Record confirmed designs only when explicitly requested, following existing documentation conventions.
</Component-Principles>

<Output-Formation>
  ### Component Summary
  - **Container**: [Containing application or data store]
  - **Goal**: [Component-level objective and boundaries]

  ### Component Analysis
  - **Components**: [Responsibilities and ownership]
  - **Interactions**: [Interfaces, dependencies, and data flow]
  - **State & Failures**: [State ownership and failure handling]
  - **Evidence**: [Observed facts and unverified assumptions]

  ### Design & Trade-offs
  - **Options**: [Relevant alternatives and trade-offs]
  - **Recommendation**: [Preferred design and rationale, if justified]

  ### Decisions & Next Steps
  - **Confirmed**: [Explicitly approved decisions]
  - **Open Questions**: [Unresolved design decisions]
  - **Next Step**: [Recommended action]
</Output-Formation>
