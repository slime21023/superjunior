---
name: principles-four-layer-design
description: Use when designing, refactoring, or reviewing software across naming, functions, modules, and architecture.
license: MIT
---

# Four-Layer Software Design Principles

Use these questions to reduce complexity without adding abstractions or changes the task does not need. Apply the layers relevant to the change; their detailed skills give examples and review prompts.

1. **Expression:** Can readers understand the intent, units, and important constraints? [Lexical and expression](../principles-lexical-expression/SKILL.md)
2. **Functions:** Is the flow understandable, and do results and side effects meet callers' expectations? [Function and control flow](../principles-function-control-flow/SKILL.md)
3. **Modules:** Are related responsibilities together and implementation details appropriately hidden? [Module boundaries](../principles-module-boundaries/SKILL.md)
4. **Architecture:** Do dependencies and organization suit the system and its expected changes? [Architecture and evolution](../principles-architecture-evolution/SKILL.md)

Consider boundaries and dependencies while planning, names and behavior while implementing, and the relevant layers when reviewing. Raise a finding when there is a concrete risk, maintenance cost, or unmet requirement, not merely a departure from a preferred pattern.