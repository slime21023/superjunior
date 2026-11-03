---
name: principles-architecture-evolution
description: Use when reviewing dependencies, code organization, and the scope of architectural changes.
license: MIT
---

# Principles: System Architecture & Evolution Layer

Choose dependencies and organization that fit the system and its expected changes.

- Protect important domain boundaries from unwanted infrastructure coupling. Introduce an interface when it solves a concrete boundary, testing, or substitution need, not for every dependency.
- Avoid dependency cycles that make modules difficult to understand, build, or change; consider the language and module system when choosing a remedy.
- Organize code so related behavior is easy to find. A shared directory is acceptable when its contents are cohesive; avoid catch-alls containing unrelated code.
- Remove dead code created by the change and keep necessary cleanup within the task's scope. Report unrelated issues rather than requiring a fixed cleanup budget.

## Review prompts

- Do dependencies or organization create a concrete coupling or maintenance risk?
- Is cleanup necessary for the change and covered by appropriate verification?