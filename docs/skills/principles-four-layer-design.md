+++
title = "Four layers of design"
navTitle = "Four-layer guide"
description = "Choose the smallest scale that explains the problem, then check its effect on neighboring layers."
section = "principles"
order = 2
permalink = "/skills/principles-four-layer-design/index.html"
+++

This guide supports [engineering-principles](/skills/engineering-principles/). It helps locate a design concern without requiring a full architecture review for every edit.

## Locate the concern

| Layer | Question to ask | Example |
| :--- | :--- | :--- |
| [Expression](/skills/principles-lexical-expression/) | Does the code communicate intent accurately? | A timeout name omits its unit. |
| [Function](/skills/principles-function-control-flow/) | Can callers predict outcomes and side effects? | Failure and an empty result look identical. |
| [Module](/skills/principles-module-boundaries/) | Is responsibility owned at a useful boundary? | Two modules each believe the other closes a resource. |
| [Architecture](/skills/principles-architecture-evolution/) | Do dependencies fit how the system changes and operates? | A dependency cycle prevents independent testing. |

Begin where the problem appears. Follow it into another layer only when the behavior or ownership requires it. Renaming a parameter may solve a local ambiguity; changing a public result contract requires checking consumers.

## Keep the review proportional

State the evidence and consequence before proposing a structural change. Follow repository conventions unless a concrete defect or constraint justifies departing from them.

A review can identify concerns at several layers without reorganizing its output by those layers. The [reviewer](/skills/agent-code-reviewer/) reports actionable findings tied to locations and impact; the [architecture skills](/skills/senior-mode/#follow-the-relevant-analysis) support broader decisions.
