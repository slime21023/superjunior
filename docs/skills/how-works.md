+++
title = "How works"
description = "Explain runtime mechanics, ownership, and subsystem structure from inspected code."
permalink = "/skills/how-works/index.html"
section = "senior"
order = 1
source = "skills/how-works/SKILL.md"
+++

## When to use it

Use for “how does this work,” subsystem onboarding, and questions about code placement, package ownership, or layering. Use [why](/skills/why/) for historical motivation.

Investigation preserves repository contents. The target is a senior engineer's mental model, with a useful description of collaborating components.

## Select the exploration path

For an isolated function or localized flow, usually up to two files, inspect and explain directly. Default to this simple path when uncertain.

For a subsystem spanning files or services, identify useful angles such as entrypoint and lifecycle, core state, dependencies, and error boundaries. Delegate bounded exploration only when it materially helps and the host supports authorized delegation; otherwise investigate directly.

Use the shared [explorer role](/subagents/) with the original question, angle, source identity, readable scope, constraints, and return conditions. Workers return sourced findings. The owner synthesizes the answer and checks contradictions against the same source version.

## Return the mental model

Follow the [synthesis guide](/source/skills/how-works/references/explainer-prompt.md), omitting sections that do not apply:

- Overview: purpose and boundary.
- Key concepts: primitives and vocabulary.
- How it works: runtime flow.
- Where things live: ownership and layers.
- Gotchas: failure modes and tricky invariants.

The [exploration assignment template](/source/skills/how-works/references/explorer-prompt.md) supports complex investigations.

## Boundary

Answer the original question from actual observations. Preserve unknowns and avoid multi-page code dumps or line-by-line narration. Use diagrams or snippets of five lines or fewer when they anchor a concept. Further delegation requires an explicit grant.
