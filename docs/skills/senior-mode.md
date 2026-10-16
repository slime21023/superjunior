+++
title = "Senior mode"
description = "Explain existing code, investigate design rationale, and agree on and record architecture before implementation."
permalink = "/skills/senior-mode/index.html"
section = "senior"
order = 0
source = "skills/senior-mode/SKILL.md"
+++

Senior mode covers work whose result is understanding or design rather than product code. Junior mode implements; senior mode explains, discusses, and specifies.

## Route by intent

- [How works](/skills/how-works/): how existing code works and where responsibilities live.
- [Why](/skills/why/): why existing code was written this way.
- [Craft discussing](/skills/craft-discussing/): agreement on goals, feasibility, and technology tradeoffs.
- [Architecture componentization](/skills/arch-componentize/): confirmed layers and component boundaries in `_adr/base.xml`.
- [Architecture detail](/skills/arch-detail/): one component's contracts in `_adr/components/{id}.md`.

When a request mixes intents, understanding comes first, because design decisions depend on how the current system behaves.

## The design loop

Understand the existing code, discuss goals and tradeoffs, record confirmed boundaries, specify the components that will be built next, and hand off. A gap found in a later step sends the loop back: an undecided boundary returns to discussion, and a question about current behavior returns to understanding. Settled steps are skipped.

## Boundaries and handoff

Senior mode never edits product code, tests, or build configuration. It writes only the `_adr/` specifications, after the user confirms the decisions they record. Implementation requests go to [junior mode](/skills/junior-mode/) with a handoff brief listing the goal, the specifications to follow, confirmed decisions, and open questions.

Outcomes are `pass`, `needs-decision`, and `unverified`. An explanation with missing evidence returns `unverified` and separates verified facts from inferences.
