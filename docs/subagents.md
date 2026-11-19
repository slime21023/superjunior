+++
title = "Skill workflows"
navTitle = "Skill workflows"
description = "Choose and combine skills for an engineering task."
section = "roles"
order = 0
permalink = "/subagents/index.html"
+++

## Combine skills around the requested result

- **Feature.** Use `specify` for acceptance criteria and `plan-working` to sequence dependent work. Pass those results to `implement-it` and the changes to `test-it`. Use `review` for requested findings and `deliver` for the authorized delivery outcome.
- **Defect.** Give `debug` the symptom and expected behavior. Pass its reproduction and supported cause to `implement-it`, then give the change and reproduction to `test-it` for regression verification.
- **Understanding and design.** Use `explore` to gather evidence and compare trade-offs. Use `design-component` to turn a chosen direction into a component contract and `document` to record the confirmed result.

For each handoff, pass the accepted scope, current artifact, verification evidence, and open decisions. Start at the step that matches the request. Delegation depends on [host support and authorization](/host-integration/#direct-work-and-delegation).

## Save records and documents

Save newly generated records and documents under `_artifacts/<skill>/` at the project root when the task calls for a file. Specifications and specification drafts go under the root `_spec/`. Revise existing project documents in place. Use normal project locations for code, tests, and build outputs. Link to saved records in the final reply.

## Migrate from older skill names

Remove old SuperJunior folders from your host's skill directory before copying the new set. Preserve unrelated installed skills.

| Older skill | Where to start now |
| --- | --- |
| `agent-code-reviewer` | [review](/skills/review/) |
| `agent-git-committer` | [deliver](/skills/deliver/) |
| `agent-scientific-debugger` | [debug](/skills/debug/), [implement-it](/skills/implement-it/), [test-it](/skills/test-it/) |
| `agent-scope-aligner` | [explore](/skills/explore/), [specify](/skills/specify/), [plan-working](/skills/plan-working/) |
| `agent-tdd-implementer` | [implement-it](/skills/implement-it/), [test-it](/skills/test-it/) |
| `architecture-discuss` | [explore](/skills/explore/), [design-component](/skills/design-component/) |
| `c4-component` | [design-component](/skills/design-component/), [document](/skills/document/) |
| `c4-context-container` | [explore](/skills/explore/), [document](/skills/document/) |
| `how-works` | [explore](/skills/explore/) |
| `why` | [explore](/skills/explore/) |
| `junior-mode` | [specify](/skills/specify/), [implement-it](/skills/implement-it/), [test-it](/skills/test-it/) |
| `senior-mode` | [explore](/skills/explore/), [design-component](/skills/design-component/), [document](/skills/document/) |
| `engineering-principles` | [Design guidance](/principles/) |
