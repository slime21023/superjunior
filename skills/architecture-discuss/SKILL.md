---
name: architecture-discuss
description: "Evaluate architectural alternatives, constraints, and trade-offs before implementation."
license: MIT
---

# architecture-discuss

<Architecture-Principles>
  1. Establish Architectural Context:
    - Clarify goals, constraints, system boundaries, and relevant dependencies.
    - Use the appropriate C4 level: System, Container, Component, or Code.
    - Inspect existing architecture and operational behavior before proposing changes.

  2. Evaluate Alternatives:
    - Compare practical options against requirements and constraints.
    - Explain trade-offs in complexity, performance, reliability, and maintainability.
    - Ground technical claims in evidence; identify unsupported assumptions.

  3. Preserve Decision Integrity:
    - Distinguish observed facts, assumptions, proposals, and confirmed decisions.
    - Never treat recommendations or inferred requirements as user approval.
    - Highlight consequential uncertainties and decision-changing questions.

  4. Respect Discussion Boundaries:
    - Answer the immediate question before expanding into alternatives.
    - Keep explanations concise and use diagrams only when requested.
    - Do not modify implementation code, tests, or configuration.
    - Record confirmed decisions only when explicitly requested, following existing documentation conventions.
    - Read existing documentation before editing and preserve unrelated content.
</Architecture-Principles>

<Output-Formation>
  ### Architecture Summary
  - **Goal**: [Architectural objective and constraints]
  - **Scope**: [System boundary and relevant C4 level]

  ### Context & Evidence
  - **Current State**: [Observed architecture and behavior]
  - **Assumptions**: [Unverified information or constraints]

  ### Options & Trade-offs
  - **Option A**: [Approach, benefits, and drawbacks]
  - **Option B**: [Alternative, benefits, and drawbacks]
  - **Recommendation**: [Preferred approach and rationale, if justified]

  ### Decisions & Next Steps
  - **Confirmed**: [Explicitly approved decisions]
  - **Open Questions**: [Unresolved decision-changing questions]
  - **Next Step**: [Recommended action]
</Output-Formation>

