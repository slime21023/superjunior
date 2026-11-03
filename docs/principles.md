+++
title = "Design principles"
navTitle = "Principles overview"
description = "Four questions that guide design, from names to architecture."
section = "principles"
order = 0
permalink = "/principles/index.html"
+++

The four layers help identify design risks at the scale relevant to a change. Use their questions as guidance, not as a requirement to apply every pattern.

| Layer | Question | Page |
| :--- | :--- | :--- |
| 1. Expression | Are intent, units, and constraints clear? | [Lexical and expression](/skills/principles-lexical-expression/) |
| 2. Functions | Are flow, results, and side effects understandable? | [Function and control flow](/skills/principles-function-control-flow/) |
| 3. Modules | Are related responsibilities together and details appropriately hidden? | [Module boundaries](/skills/principles-module-boundaries/) |
| 4. Architecture | Do dependencies and organization suit the system? | [Architecture and evolution](/skills/principles-architecture-evolution/) |

The [four-layer design](/skills/principles-four-layer-design/) skill connects the layers; each layer can also be used independently. [Junior mode](/skills/junior-mode/) considers relevant boundaries during planning, code clarity during implementation, and concrete risks during [self-review](/skills/agent-code-reviewer/).

The [Karpathy guidelines](/skills/karpathy-guidelines/) complement these principles: make assumptions visible, keep changes small, and verify results.