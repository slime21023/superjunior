---
name: why
description: "Investigate historical design rationale through code, Git history, and documented decisions."
license: MIT
---

# why

<Investigation-Principles>
  1. Establish Historical Context:
    - Identify the relevant behavior, design decision, and affected code.
    - Inspect current implementation, Git history, and available documentation.
    - Trace when and how the design was introduced or modified.

  2. Examine Decision Evidence:
    - Review relevant commits, diffs, ADRs, and recorded discussions.
    - Distinguish documented rationale from circumstantial evidence.
    - Do not infer original intent from current implementation alone.

  3. Reconstruct Rationale:
    - Explain motivations, constraints, and trade-offs supported by evidence.
    - Separate original decisions from subsequent changes.
    - Identify plausible explanations explicitly as hypotheses.

  4. Preserve Investigation Boundaries:
    - Answer the historical question directly and cite relevant evidence.
    - State when rationale cannot be established reliably.
    - Do not propose redesigns unless requested.
    - Do not modify code, tests, configuration, or documentation.
</Investigation-Principles>

<Output-Formation>
  ### Rationale Summary
  - **Question**: [Design decision or behavior being investigated]
  - **Finding**: [Documented rationale or best-supported explanation]
  - **Confidence**: [CONFIRMED | INFERRED | UNKNOWN]

  ### Historical Evidence
  - **Origin**: [Relevant commit, date, or documented decision]
  - **Evolution**: [Significant subsequent changes, if relevant]
  - **Evidence**: [Commit references, ADRs, discussions, or source locations]

  ### Rationale & Trade-offs
  - **Motivation**: [Supported problem or original objective]
  - **Constraints**: [Documented technical or business constraints]
  - **Trade-offs**: [Known compromises and alternatives, if evidenced]

  ### Uncertainty & Limitations
  - **Assumptions**: [Plausible but unverified explanations]
  - **Evidence Gaps**: [Missing history or undocumented decisions]
</Output-Formation>
