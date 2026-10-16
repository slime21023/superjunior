+++
title = "Design principles"
navTitle = "Principles overview"
description = "Four layers of design rules, from names to architecture, that keep code readable and changes contained."
section = "principles"
order = 0
permalink = "/principles/index.html"
+++

Code gets hard to change when readers have to hold too much in their heads at once. These skills split design advice into four layers, each answering a different question, so you can apply the right rules at the right moment instead of reciting everything everywhere.

## The four layers

Layer 1 is the smallest unit you read, a name or a comment. Layer 4 is the shape of the whole system. Each layer has its own skill with rules and a short review checklist.

| Layer | Concern | Key rules | Page |
| :--- | :--- | :--- | :--- |
| 1. Lexical and expression | Can a reader understand this line? | Units in names, comments explain why, one word per concept | [Lexical and expression](/skills/principles-lexical-expression/) |
| 2. Function and control flow | Does this function read top to bottom without surprises? | One level of abstraction, extract real concepts, separate commands from queries, design errors away | [Function and control flow](/skills/principles-function-control-flow/) |
| 3. Class and module boundaries | Does the caller need to know how this works? | Deep modules, push complexity down, hide information, group what changes together | [Module boundaries](/skills/principles-module-boundaries/) |
| 4. Architecture and evolution | Do dependencies point the right way, and is the code getting healthier? | Depend on abstractions, no cycles, folders named by domain, leave code cleaner | [Architecture and evolution](/skills/principles-architecture-evolution/) |

The [four-layer design](/skills/principles-four-layer-design/) skill is the map that ties the layers together. Load it when you want the whole picture; load a single layer when you only need its rules.

## How they are applied across the loop

You rarely need all four layers at once. [Junior mode](/skills/junior-mode/) uses them by phase:

- **Planning**: during [scope alignment](/skills/workflow-align-scope/), layers 3 and 4 shape where the change belongs and which way new dependencies point.
- **Implementation**: during [context-first TDD](/skills/workflow-context-tdd/), layers 1 and 2 guide the names, functions, and return types you write.
- **Review**: during [self-review](/skills/workflow-self-review/), the agent runs each layer's review checklist against the diff and reports every unchecked item as a finding.

You can also ask for any principle skill directly, for example to review one file against the module boundary rules.

## Where Karpathy guidelines fit

The four layers describe what good code looks like. The [Karpathy guidelines](/skills/karpathy-guidelines/) describe how an agent should behave while producing it: state assumptions, write the minimum code, touch only what the task needs, and verify the result. They apply across every phase and keep the principles from becoming an excuse for unrequested rewrites.
