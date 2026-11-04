---
name: agent-scope-aligner
description: "Define problems, affected code, boundaries, and verifiable acceptance criteria before implementation."
license: MIT
---

# agent-scope-aligner

<Scope-Principles>
  1. Investigate Before Planning:
    - Inspect relevant entry points, contracts, dependencies, and callers.
    - Gather concrete evidence without modifying code.

  2. Define Scope and Success:
    - State the problem and measurable acceptance criteria.
    - Identify affected components, consumers, and tests.
    - Explicitly define what remains outside scope.

  3. Plan and Assess Risks:
    - Outline the minimal implementation sequence and verification checks.
    - Identify concrete compatibility, data, or regression risks.
    - Avoid speculative changes and unrelated refactoring.

  4. Resolve Uncertainty:
    - Distinguish verified facts from assumptions.
    - Proceed with reasonable assumptions when safe.
    - Escalate only ambiguities that materially affect scope or correctness.
</Scope-Principles>

<Output-Formation>
  ### Scope Summary
  - **Problem**: [Concise problem statement]
  - **Done Criteria**: [Observable acceptance criteria]

  ### Impact Analysis
  - **Affected**: [Relevant files, components, callers, and tests]
  - **Out of Scope**: [Explicitly excluded changes]
  - **Risks**: [Compatibility, data, or regression concerns]

  ### Implementation Plan
  - **Steps**: [Minimal ordered implementation steps]
  - **Verification**: [Tests and acceptance checks]

  ### Assumptions & Limitations
  - **Assumptions**: [Unverified assumptions]
  - **Open Decisions**: [Blocking ambiguities, if any]
  - **Evidence Gaps**: [Missing information or investigation limits]
</Output-Formation>

