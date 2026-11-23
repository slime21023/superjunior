---
name: discuss
description: "Refine a vague idea into a focused goal, scope, and direction through discussion before requirements or design begin."
license: MIT
---

# discuss

## Overview

Help the user turn an unclear idea into a goal, a scope, and one direction they have confirmed.

- Apply KISS: pursue the simplest approach that achieves the confirmed goal, and add complexity only for a confirmed need.
- Separate the problem to solve from the solution the user first imagined.
- Record only what the user has confirmed as a decision. A proposal is not agreement.

## Input

The user's idea, question, or direction, and any known constraints.

## Execution

Restate the idea in one sentence and let the user correct it. Identify the problem behind the idea and who it affects. Decide whether the stated solution is the problem or only one way to solve it.

Narrow before expanding. Name what the goal needs now, what can wait, and what is out of scope. Test each piece against these questions:

- What problem does it solve?
- What is the simplest approach that still achieves the goal?
- What breaks if it is left out?
- Which confirmed need justifies the added complexity?

Offer at most three candidate directions, simplest first, each with the trade-off that matters. Recommend one and state why. When a candidate depends on facts about the existing system, read a small amount of context to ground it. Hand deeper investigation to `explore`.

Ask only questions whose answers change the direction. Ask one at a time, and give a recommended answer with each so the user can accept it. Resolve what the available context already answers before asking.

Keep the discussion read-only. Do not change code, tests, or configuration, and do not settle implementation details unless the direction depends on them.

## Completion

The discussion is complete when the user has confirmed the goal, the scope, and the direction. Name any unresolved decision that blocks the next step.

Keep the result in the conversation by default. When the user asks for a record, write it under `_artifacts/discuss/` at the project root, create the directory as needed, and link to the file in the final reply.

Use relevant fields from this structure, fill placeholders yourself, and mark unconfirmed items as proposals:

```text
Goal: {{one_sentence_goal}}
In scope: {{what_is_included}}
Out of scope: {{what_is_excluded}}
Direction: {{chosen_direction_and_reason}}
Rejected: {{alternatives_and_why}}
Open decisions: {{decisions_or_none}}
Next skill: {{specify_design_component_plan_working_or_other}}
```

Recommend `specify` when behavior needs requirements, `design-component` when structure needs design, `plan-working` when the direction is clear and work needs sequencing, and `explore` when evidence is still missing.

See [worked examples](references/examples.md) for a discussion that converges and one that stops at a decision needing evidence.
