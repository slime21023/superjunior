+++
title = "Combine skills around your work"
navTitle = "Workflow guide"
description = "Start at the step your task needs and pass evidence when someone else takes over."
section = "workflows"
order = 0
permalink = "/workflows/index.html"
+++

## Give the agent a task

State the **goal**, point to the **basis** such as an issue, specification, or diff, name the **constraints**, and say what **result** you want. A task can start at any skill whose input you already have. You can describe the work naturally or name the skills you want to use.

Read the response in the order **Result → Evidence → Next step or blocker**. A short PR note is enough for a small change. A handoff needs links to the current documents, relevant checks, and decisions still open.

## Choose the combination that fits

| Scenario | Skills to combine | What to pass forward | Completion evidence |
| --- | --- | --- | --- |
| Shape a vague idea | [discuss](/skills/discuss/) → [specify](/skills/specify/) or [explore](/skills/explore/) when evidence is missing | The confirmed goal, scope, chosen direction, and decisions still open | A confirmed goal and direction, with the next skill named. |
| Clarify a feature | [explore](/skills/explore/) → [specify](/skills/specify/) → [design-component](/skills/design-component/) and [plan-working](/skills/plan-working/) as needed | Current behavior, approved criteria, and decisions that affect component contracts or sequencing | A spec with observable criteria. For dependent work, an ordered plan identifies what can start and what is blocked. |
| Fix a defect | [debug](/skills/debug/) → [implement-it](/skills/implement-it/) → [test-it](/skills/test-it/) | The failing case, expected behavior, and affected entry point | The original case passes after the fix and related regressions still pass. |
| Review a PR and update docs | [review](/skills/review/) + [document](/skills/document/) | The exact diff, relevant acceptance criteria, and behavior confirmed for the docs | Location-specific findings and a verified update to the existing document when needed. |
| Package or release a version | [test-it](/skills/test-it/) → [deliver](/skills/deliver/) | The exact candidate, authorized actions, and evidence for each prerequisite | Verified package or publication records, with any blocked action and its missing prerequisite. |
| Resume in a new session | [plan-working](/skills/plan-working/) → [implement-it](/skills/implement-it/) → [test-it](/skills/test-it/) | Current revision, plan, last verified result, and unresolved decisions | The next unblocked item is completed and verified, or the missing prerequisite is identified. |

Skip design and planning when a small fix has clear requirements and a repeatable check. Reuse an applicable test result when it covers the exact release candidate. See [worked requests](/examples/) for concrete prompts and outcomes.

## Work from an existing specification

If you want a particular method, pair the task with an [optional principle](/principles/). For example, ask `implement-it` to apply `prin-tdd` and include the observed test results in the implementation report.

Use the team's existing Issue, [Spec Kit](https://github.github.com/spec-kit/), or [OpenSpec](https://github.com/Fission-AI/OpenSpec) artifacts as input. For example, give `implement-it` the spec, the approved design, and one task from the team's task list. Give `test-it` the same acceptance criteria when checking the result. If a decision remains open, identify the work it blocks and use `specify` for any new specification needed to clarify it.

## Save files for a handoff

New specification documents and drafts from `specify` go under root `_spec/`. Save other records under root `_artifacts/<skill>/` when a file is requested or useful for a handoff. Update maintained documents in place. Keep code, tests, and build outputs in their normal project locations.

To resume, share the work item's reference, the current revision, links to the accepted criteria and plan, the last observed check and command, and a specific next step. If the working tree differs from the evidence, rerun the checks affected by the difference. Carry open decisions forward with the items they block.
