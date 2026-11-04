+++
title = "Compare architecture options"
navTitle = "Architecture choices"
description = "Evaluate alternatives against actual constraints and separate recommendations from decisions."
section = "senior"
order = 2
permalink = "/skills/architecture-discuss/index.html"
source = "skills/architecture-discuss/SKILL.md"
+++

Use `architecture-discuss` before implementation when a consequential design choice remains open. It inspects the existing architecture and compares practical options without changing implementation code, tests, or configuration.

## Frame the choice

Provide the goal, current system boundary, constraints, and any decisions already made. State what evidence would change the choice.

```text
Use architecture-discuss to compare synchronous notification delivery with a queue.
We need retries without keeping the HTTP request open.
Inspect the current failure handling and deployment constraints.
Give a recommendation and unresolved questions; do not write files.
```

The skill selects the level of detail needed for the decision. It considers complexity, performance, reliability, and maintainability, while labeling unsupported assumptions.

## Evaluate the response

Expect the goal and scope, current state and evidence, relevant alternatives, tradeoffs, and a recommendation when justified. Confirmed decisions and open questions must remain separate.

A recommendation does not become an approved requirement merely because the agent prefers it. If the evidence cannot support a comparison, the response should identify the uncertainty that matters.

For a system map, use [context and containers](/skills/c4-context-container/). For responsibilities within one application or store, use [component analysis](/skills/c4-component/).

## Record or implement the decision

Once you confirm the choice, explicitly request a record and identify the destination or existing document. The skill follows project documentation conventions, reads the existing content, and preserves unrelated sections.

Diagrams are optional and require a request. Implementation belongs to [junior mode](/skills/junior-mode/); carry confirmed decisions, open questions, and verification needs into that handoff.
