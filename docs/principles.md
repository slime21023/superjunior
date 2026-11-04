+++
title = "Apply design guidance where it matters"
navTitle = "Guidance overview"
description = "Choose a question at the scale of the change, then connect the answer to behavior and evidence."
section = "principles"
order = 0
permalink = "/principles/index.html"
+++

Use the [engineering-principles skill](/skills/engineering-principles/) for shared guidance on reasoning, expression, boundaries, and verification. The other pages in this section are supporting explanations, not additional skills to install.

## Start with the concrete risk

A naming question, an unclear result, and a dependency cycle need different kinds of attention. Choose the layer that helps explain the actual change:

| Concern | Guide |
| :--- | :--- |
| A name hides intent, units, or side effects | [Lexical expression](/skills/principles-lexical-expression/) |
| A caller cannot distinguish outcomes or follow control flow | [Functions and control flow](/skills/principles-function-control-flow/) |
| Responsibilities or cleanup have no clear owner | [Module boundaries](/skills/principles-module-boundaries/) |
| Dependencies make change or operation difficult | [Architecture and evolution](/skills/principles-architecture-evolution/) |

The [four-layer guide](/skills/principles-four-layer-design/) explains how these questions connect. The [Karpathy guidelines](/skills/karpathy-guidelines/) focus on working habits that keep a change bounded and checkable.

## Turn a principle into useful feedback

Name the affected behavior or maintenance risk, point to evidence, and suggest the smallest correction. “This function has too many responsibilities” is less useful than explaining which independent reasons for change are entangled and what currently breaks because of that.

Apply existing project conventions where they serve the task. A principle should help resolve a concrete problem, not generate unrelated cleanup or a requirement to apply every pattern.

For a review verdict, use [agent-code-reviewer](/skills/agent-code-reviewer/). For a choice that changes the architecture, use [senior mode](/skills/senior-mode/).
