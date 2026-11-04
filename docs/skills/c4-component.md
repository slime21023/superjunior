+++
title = "Components within a container"
navTitle = "Component analysis"
description = "Clarify responsibilities, contracts, state ownership, and failure handling inside one application or store."
section = "senior"
order = 4
permalink = "/skills/c4-component/index.html"
source = "skills/c4-component/SKILL.md"
+++

Use `c4-component` when the containing application or data store is known and you need to understand or discuss its internal responsibilities. Begin with [context and containers](/skills/c4-context-container/) if that boundary is still unclear.

## Name the container and question

Provide the containing application or store, relevant code or existing design, and the interactions or failure cases you want examined.

```text
Use c4-component to analyze the notification worker.
Explain how its scheduler, delivery handler, and retry storage collaborate.
Identify state ownership, contracts, and failure handling from the code.
Discuss gaps without modifying files.
```

The skill inspects components and external interactions before describing responsibilities. It looks for overlapping ownership, unnecessary coupling, and unclear interfaces at the level relevant to the question.

## Read the component analysis

Expect a named container and goal, component responsibilities, interaction paths, state and failure handling, and supporting evidence. Claims about concurrency, performance, or runtime behavior need evidence.

Where design work is requested, the response compares relevant alternatives and distinguishes observations, assumptions, proposals, and confirmed decisions. A proposed interface should not be presented as an existing guarantee.

## Carry the result forward

For implementation, give [junior mode](/skills/junior-mode/) the confirmed component boundaries, behavior, unresolved questions, and verification needs.

For documentation, explicitly request a record after confirming the design. The skill follows existing documentation conventions and preserves unrelated content. It does not modify implementation code, tests, or configuration. Diagrams are produced only when requested and must label proposed elements.
