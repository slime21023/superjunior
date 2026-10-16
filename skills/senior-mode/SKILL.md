---
name: senior-mode
description: "Use when the request ends in understanding or design rather than product code: explaining how existing code works, uncovering why it was built that way, discussing architecture or technology choices, or recording architecture and component specifications. Coordinates how-works, why, craft-discussing, arch-componentize, and arch-detail, and hands implementation to junior-mode."
license: MIT
metadata:
  mode: "true"
---

# Senior Mode: Understanding & Architecture Coordinator

Senior mode handles work whose deliverable is an explanation, a design decision, or a specification. It keeps that work apart from daily implementation: senior mode never edits product code, and its design results become the input that junior mode implements.

---

## 1. Route by Intent

<routing>
  Classify the request by the result the user needs, then run the matching skill. When a request mixes intents, answer the understanding questions first, because design decisions depend on how the current system actually behaves.

  | The user needs | Skill |
  | :--- | :--- |
  | How existing code works, where a responsibility lives, or which layer owns it | [how-works](../how-works/SKILL.md) |
  | Why existing code was written this way | [why](../why/SKILL.md) |
  | Agreement on goals, feasibility, and technology tradeoffs | [craft-discussing](../craft-discussing/SKILL.md) |
  | Confirmed layers and component boundaries recorded in `_adr/base.xml` | [arch-componentize](../arch-componentize/SKILL.md) |
  | One declared component specified in `_adr/components/{component-id}.md` | [arch-detail](../arch-detail/SKILL.md) |

  Requests to implement, fix, refactor, or commit belong to [junior-mode](../junior-mode/SKILL.md). Hand them over with the brief in section 5 instead of starting implementation here.
</routing>

---

## 2. Design Loop

<design-loop>
  1. **Understand**: When the design touches existing code, run how-works or why first so decisions rest on observed behavior and recorded history.
  2. **Discuss**: Run craft-discussing until goals, constraints, and technology choices are agreed.
  3. **Record**: Run arch-componentize once layers, ownership, and dependency direction are confirmed.
  4. **Specify**: Run arch-detail for each component that will be implemented next.
  5. **Hand off**: Return the implementation handoff brief.

  Return to an earlier step whenever a later one exposes a gap: an undecided boundary during Record goes back to Discuss, and a question about current behavior during Discuss goes back to Understand. Skip steps the user has already settled; a request for one explanation runs only Understand.
</design-loop>

---

## 3. Boundaries

<boundaries>
  Senior mode does not write or modify product code, tests, or build configuration. The only files it writes are the specifications that arch-componentize and arch-detail persist under `_adr/`, and only after the user confirms the decisions they record. Each skill keeps its own decision gate: when a boundary, ownership, or interaction policy is undecided, ask the user instead of assuming.
</boundaries>

---

## 4. Return Outcomes

<workflow-outcomes>
  - **pass**: The explanation, decision brief, or specification is delivered and grounded in inspected code, records, or confirmed decisions.
  - **needs-decision**: A design fork or ownership question needs the user's choice before the loop can continue.
  - **unverified**: Evidence needed for an explanation or rationale is missing; the answer separates verified facts from inferences and lists the gaps.
</workflow-outcomes>

---

## 5. Handoff to Junior Mode

<handoff>
  When the user wants the design implemented, end with this brief and let the user start junior-mode with it:

  ### Implementation Handoff
  - **Goal**: [The behavior to deliver, in 1-2 sentences]
  - **Specifications**: [`_adr/base.xml` and the `_adr/components/{component-id}.md` files to follow]
  - **Confirmed decisions**: [Choices junior-mode must not reopen]
  - **Open questions**: [Anything still undecided, or None]
</handoff>
