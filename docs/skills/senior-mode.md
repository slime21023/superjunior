+++
title = "Senior mode"
description = "Explain existing code, investigate design rationale, and agree on and record architecture before implementation."
permalink = "/skills/senior-mode/index.html"
section = "senior"
order = 0
source = "skills/senior-mode/SKILL.md"
+++

Senior mode handles requests that end in understanding or a design decision rather than changed code. It coordinates five specialist skills and hands implementation to [junior mode](/skills/junior-mode/).

## When to use it

Use senior mode when the answer you want is an explanation, a rationale, an agreed architecture, or a written specification. Use junior mode when you want code changed: a feature, a fix, a refactor, or a commit.

| You want | Mode |
| :--- | :--- |
| To know how a subsystem works or why it was built that way | Senior mode |
| To agree on goals, technology choices, and component boundaries | Senior mode |
| A feature, bug fix, refactor, or commit | Junior mode |

If you ask senior mode to implement something, it does not start coding. It gives you a handoff brief to start junior mode with.

## Route by intent

Senior mode picks a skill by the result you need.

| You need | Skill |
| :--- | :--- |
| How existing code works, where a responsibility lives, or which layer owns it | [How works](/skills/how-works/) |
| Why existing code was written this way | [Why](/skills/why/) |
| Agreement on goals, feasibility, and technology tradeoffs | [Craft discussing](/skills/craft-discussing/) |
| Confirmed layers and component boundaries written to `_adr/base.xml` | [Architecture componentization](/skills/arch-componentize/) |
| One component's contracts written to `_adr/components/{component-id}.md` | [Architecture detail](/skills/arch-detail/) |

When a request mixes these, the understanding questions come first, because a design decision should rest on how the current system actually behaves.

## The design loop

1. **Understand**: when the design touches existing code, explain how it works or why it was written that way.
2. **Discuss**: agree on goals, constraints, and technology choices.
3. **Record**: write down the confirmed layers, ownership, and dependency direction.
4. **Specify**: detail each component that will be built next.
5. **Hand off**: return the implementation brief.

A gap found later sends the loop back. An undecided boundary while recording returns to discussion, and a question about current behavior during discussion returns to understanding. Steps you have already settled are skipped, so a single explanation runs only the first step.

## Boundaries

Senior mode never edits product code, tests, or build configuration. The only files it writes are the architecture and component specifications under `_adr/`, and only after you confirm the decisions they record. When a boundary, ownership, or interaction policy is still open, it asks you instead of assuming.

## What you get

Every run ends with one of three outcomes:

- `pass`: the explanation, decision brief, or specification is delivered and grounded in inspected code, records, or decisions you confirmed.
- `needs-decision`: a design fork or ownership question needs your choice before the loop can continue.
- `unverified`: evidence is missing; the answer separates verified facts from inferences and lists the gaps.

When you want the design built, the run ends with an implementation handoff brief. It states the goal in a sentence or two, the specification files to follow, the confirmed decisions junior mode must not reopen, and any open questions. Start junior mode with that brief.

## Example request

```text
Use senior-mode to explain how the import pipeline handles retries today, then compare two ways to move it to a queue.
Record the agreed boundaries and specify the first component to build.
```
