+++
title = "Engineering principles"
description = "Apply shared reasoning, expression, boundary, and verification guidance to the task at hand."
section = "principles"
order = 1
permalink = "/skills/engineering-principles/index.html"
source = "skills/engineering-principles/SKILL.md"
+++

Use `engineering-principles` while analyzing, implementing, debugging, refactoring, or reviewing code. It favors existing conventions and concrete evidence, with the smallest change that satisfies the requirement.

## Focus the request

Name the code or decision and the concern you want examined. The skill can support a larger task or answer a focused question directly.

```text
Use engineering-principles to assess the retry helper's interface.
Check whether callers can distinguish exhaustion from cancellation,
and whether the argument names make their units clear.
Explain concrete risks before proposing changes.
```

## Apply the relevant principles

Reasoning starts with existing behavior, assumptions, and observable requirements. Expression concerns intent, vocabulary, units, outcomes, and predictable side effects. Boundaries concern cohesive ownership, validation, error handling, dependency direction, and cleanup.

Verification connects a finding or change to observable behavior, relevant boundary cases, and failure paths. Unrelated cleanup stays separate, and evidence must be rechecked when a correction changes what was tested.

The [supporting guides](/principles/) explore these concerns at lexical, function, module, and architecture scales. They are prompts for judgment rather than mandatory patterns.

## Read the result

The skill's output covers the finding, change, or decision; supporting evidence; material risks or assumptions; and any next action. A useful finding explains what can go wrong and why the proposed correction is proportionate.

For a formal assessment of a diff, use [code review](/skills/agent-code-reviewer/). For an implementation workflow, use [junior mode](/skills/junior-mode/).
