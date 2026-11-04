+++
title = "Senior mode"
description = "Understand a system, compare choices, and hand confirmed decisions to implementation."
section = "mode"
order = 1
permalink = "/skills/senior-mode/index.html"
source = "skills/senior-mode/SKILL.md"
+++

Use `senior-mode` when the immediate result should be an explanation, a design decision, or a requested architecture record. It inspects evidence and coordinates the relevant analysis skills without changing product code, tests, or build configuration.

## Start with a question and a boundary

Name the system, behavior, or decision you want to understand. Include constraints that could change the answer, such as compatibility, expected workload, or an existing decision you want to preserve.

```text
Use senior-mode to compare synchronous delivery and a queue for notifications.
Inspect the current request path first.
We need retries without delaying the HTTP response.
Explain the tradeoffs and open decisions; do not write files.
```

For a small question, a file or symbol and the behavior of interest are enough. The mode should answer the immediate question before expanding the scope.

<h2 id="follow-the-relevant-analysis">Follow the relevant analysis</h2>

| Question | Skill used |
| :--- | :--- |
| What happens when this code runs? | [How it works](/skills/how-works/) |
| Why was this behavior introduced? | [Historical rationale](/skills/why/) |
| Which design fits our constraints? | [Architecture discussion](/skills/architecture-discuss/) |
| Where are the system boundary and major applications or stores? | [Context and containers](/skills/c4-context-container/) |
| How do components inside one container collaborate? | [Component analysis](/skills/c4-component/) |

The mode can combine relevant skills. It works directly by default and integrates evidence from any authorized delegation.

## Read facts, proposals, and decisions separately

The response identifies the goal and scope, supporting evidence, relevant options, confirmed decisions, open questions, and the next action. Sections that do not apply need little or no detail.

A recommendation is a proposal until you confirm it. Source code can establish current behavior without proving historical intent. Claims about persistence, concurrency, performance, and protocols need evidence; unknowns remain explicit.

Senior mode uses its own analysis fields. The junior workflow's outcome vocabulary is not a required senior response format.

## Request a record when the decision is ready

A discussion does not itself create documentation. Once the relevant decisions are confirmed, request the record and destination:

```text
We choose queued delivery with at-least-once processing.
Record that decision and the remaining idempotency question in docs/architecture.md.
Preserve unrelated sections. Do not change implementation code.
```

The mode follows your path and format or existing project conventions; its fallback path is `docs/architecture.md`. It reads existing documents before editing, preserves unrelated content, and treats existing `_adr/` records as evidence without migrating or deleting them.

Text is the default explanation. Request a diagram when it would help, and expect proposed or unverified relationships to be labeled.

## Hand the work to implementation

When you are ready to build, the handoff should identify confirmed decisions, unresolved questions, and verification needs. Start [junior mode](/skills/junior-mode/) with that handoff and your intended delivery.

A question routed here during a junior task does not automatically replace that task. Make an explicit switch when the new assignment changes what work should continue.
