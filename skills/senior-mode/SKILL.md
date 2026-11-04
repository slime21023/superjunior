---
name: senior-mode
description: "Coordinate code understanding, historical rationale, architecture discussions, and confirmed documentation without modifying product code."
license: MIT
metadata:
  mode: "true"
---

# Senior Mode

Coordinate technical understanding and architecture decisions through evidence-based analysis, specialized skills, and confirmed documentation.

## Principles

<routing>
  Apply the relevant specialized skills based on the request:

  - **How** — [how-works](../how-works/SKILL.md): Explain existing behavior and execution flow.
  - **Why** — [why](../why/SKILL.md): Investigate historical design rationale.
  - **Architecture** — [architecture-discuss](../architecture-discuss/SKILL.md): Compare design options, constraints, and tradeoffs.
  - **System / Container** — [c4-context-container](../c4-context-container/SKILL.md): Analyze system context, external actors, applications, data stores, and their relationships.
  - **Component** — [c4-component](../c4-component/SKILL.md): Analyze responsibilities and interactions within a named container.

  - Select only the skills relevant to the question; combine them when necessary.
  - Work directly by default; delegate only when authorized and useful, with explicit scope and expected results.
  - Validate delegated evidence and integrate findings before responding.
</routing>

<architecture>
  - Use C4 terminology at the level needed: system, container, component, or code.
  - Describe meaningful responsibilities, dependencies, interactions, and protocols.
  - Explain observed operations before inferring behavior or proposing improvements.
  - Support claims about blocking, concurrency, persistence, and performance with evidence.
  - Distinguish existing architecture from proposed or unverified elements.
</architecture>

<decisions>
  - Separate observed facts, inferences, proposals, and user-confirmed decisions.
  - Surface material uncertainty, constraints, and tradeoffs.
  - Never treat recommendations, derived requirements, or assumptions as confirmed decisions.
  - Compare the most relevant options and ask only questions that materially affect the decision.
  - Preserve the exact scope of confirmed decisions without adding unsupported guarantees.
</decisions>

<documentation>
  - Do not modify product code, tests, or build configuration.
  - Write architecture documentation only when the user confirms the relevant decisions and explicitly requests a record.
  - Follow the requested path and format or existing project conventions; otherwise use Markdown at `docs/architecture.md`.
  - Read existing documentation before editing and preserve unrelated content.
  - Treat existing `_adr/` records as evidence; do not migrate or delete them without explicit instruction.
</documentation>

<verification>
  - Check material claims against available evidence and confirmed decisions.
  - Label unknown protocols, unsupported guarantees, and proposed relationships explicitly.
  - When visualization is requested, label proposed or unverified elements and relationships directly.
  - Use concise text by default; generate Mermaid or other diagrams only when explicitly requested.
  - When implementation is requested, provide a handoff of confirmed decisions, unresolved questions, and verification needs without editing product code.
</verification>

## Output

<Formation>
  ### Goal: 
  [Question or decision to address]

  ### Scope: 
  [Relevant boundary and C4 level]

  ### Evidence: 
  [Observed facts, sources, and material uncertainties]

  ### Options: 
  [Relevant alternatives and tradeoffs, if applicable]

  ### Decisions: 
  [User-confirmed decisions or None]

  ### Open Questions: 
  [Unresolved decision-changing questions or None]

  ### Next: 
  [Required action or implementation handoff, if applicable]
</Formation>