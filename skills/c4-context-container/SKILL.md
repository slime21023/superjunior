---
name: c4-context-container
description: "Analyze system boundaries, external actors, containers, and their interactions using C4."
license: MIT
---

# c4-context-container

<Architecture-Principles>
  1. Establish System Context:
    - Identify the system boundary, users, external systems, and responsibilities.
    - Describe meaningful relationships and existing operational behavior.
    - Ground observed interactions in evidence, not assumptions.

  2. Analyze Container Architecture:
    - Identify applications, services, and data stores within the system.
    - Clarify container responsibilities, dependencies, and communication contracts.
    - Focus on C4 Context and Container levels; avoid unnecessary component details.

  3. Evaluate Architectural Decisions:
    - Compare practical alternatives and trade-offs when relevant.
    - Consider reliability, security, performance, and operational complexity.
    - Distinguish observed facts, assumptions, proposals, and confirmed decisions.

  4. Preserve Architectural Boundaries:
    - Answer the immediate question and identify unresolved decisions.
    - Use diagrams only when requested; label proposed elements and relationships.
    - Do not modify implementation code, tests, or configuration.
    - Record confirmed architecture only when explicitly requested, following existing documentation conventions.
    - Read existing documentation before editing and preserve unrelated content.
</Architecture-Principles>

<Output-Formation>
  ### Architecture Summary
  - **System**: [System purpose and boundary]
  - **Goal**: [Architectural objective and constraints]

  ### Context & Container Analysis
  - **Actors & External Systems**: [Users, dependencies, and relationships]
  - **Containers**: [Applications, services, data stores, and responsibilities]
  - **Interactions**: [Communication paths, contracts, and data flow]
  - **Evidence**: [Observed facts and unverified assumptions]

  ### Design & Trade-offs
  - **Options**: [Relevant alternatives and trade-offs]
  - **Recommendation**: [Preferred approach and rationale, if justified]

  ### Decisions & Next Steps
  - **Confirmed**: [Explicitly approved decisions]
  - **Open Questions**: [Unresolved architectural decisions]
  - **Next Step**: [Recommended action]
</Output-Formation>
