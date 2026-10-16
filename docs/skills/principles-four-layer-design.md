+++
title = "Four-layer software design"
description = "The map that connects naming, functions, modules, and architecture into one set of design rules."
permalink = "/skills/principles-four-layer-design/index.html"
section = "principles"
order = 1
source = "skills/principles-four-layer-design/SKILL.md"
+++

This skill gives the agent the whole framework in one place: a short summary of every layer's rules, a link to each detailed layer skill, and guidance on which layers matter in which phase.

## When to apply it

Use it when you are designing a new module, planning a refactor, or reviewing a change and want the agent to consider every level of the code, from names up to package dependencies. When you only care about one level, ask for that layer's skill instead.

## The rules

Each layer collects a few rules. The detailed pages explain each one with examples.

1. **[Lexical and expression](/skills/principles-lexical-expression/)**: names carry intent and units (`retryIntervalMs`), code shows how while comments explain why, and each domain concept has one word.
2. **[Function and control flow](/skills/principles-function-control-flow/)**: a function stays at one level of abstraction, extraction is reserved for real concepts, commands and queries are separate, and return types absorb edge cases (`[]` instead of `null`).
3. **[Module boundaries](/skills/principles-module-boundaries/)**: modules have small interfaces over substantial internals, absorb complexity for their callers, hide their data, and group logic that changes for the same reason.
4. **[Architecture and evolution](/skills/principles-architecture-evolution/)**: the domain defines interfaces that infrastructure implements, dependencies form no cycles, folders are named by domain, and each change leaves nearby code a little cleaner.

## When each layer matters

During planning, layers 3 and 4 decide boundaries and dependency direction. During implementation and testing, layers 1 and 2 shape the code you write. During review, the diff is checked against all four.

## Review checklist

This skill has no checklist of its own. A review runs the checklist at the end of each layer's skill, which is what [self-review](/skills/workflow-self-review/) does.

## Related

- [Principles overview](/principles/) for the layer table and how junior mode uses it.
- [Karpathy guidelines](/skills/karpathy-guidelines/) for keeping changes small and verified.
