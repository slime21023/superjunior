---
name: how-works
description: "Explain existing code and system behavior through source evidence and execution tracing."
license: MIT
---

# how-works
  
<Analysis-Principles>
  1. Establish Execution Context:
    - Identify relevant entry points, callers, dependencies, and system boundaries.
    - Use the appropriate C4 level only when it clarifies the explanation.
    - Focus on existing behavior rather than intended design.

  2. Trace Actual Behavior:
    - Follow execution paths, data flow, and state transitions.
    - Explain relevant conditions, side effects, and failure handling.
    - Distinguish asynchronous waiting from actual blocking or concurrency guarantees.

  3. Ground Explanations in Evidence:
    - Reference concrete source locations, configurations, or observed behavior.
    - Separate verified facts, reasonable inferences, and unknowns.
    - Do not infer historical design intent without supporting evidence.

  4. Preserve Analysis Boundaries:
    - Answer the immediate question before expanding into implementation details.
    - Explain only relevant behavior; avoid speculative alternatives or redesign.
    - Do not modify code, tests, configuration, or documentation.
    - Use diagrams only when explicitly requested.
</Analysis-Principles>

<Output-Formation>
  ### Behavior Summary
  - **Purpose**: [What the code or system currently does]
  - **Scope**: [Relevant components and boundaries]

  ### Execution Flow
  - **Entry Point**: `path/to/file.ext:XX-YY`
  - **Flow**: [Key execution steps and interactions]
  - **State & Effects**: [State changes, outputs, and side effects]
  - **Failure Paths**: [Relevant errors and exceptional behavior]

  ### Evidence & Limitations
  - **Evidence**: [Source references or observed results]
  - **Assumptions**: [Unverified inferences]
  - **Unknowns**: [Behavior not established by available evidence]
</Output-Formation>

