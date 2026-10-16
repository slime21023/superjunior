+++
title = "Example tasks"
navTitle = "Examples"
description = "Portable prompts for a complete loop, bounded phases, architecture, and resumption."
section = "practice"
order = 0
permalink = "/examples/index.html"
+++

These prompts ask the agent to read repository instructions. Replace the illustrative behavior and paths with your real task and available artifacts. Registered commands depend on your [host](/host-integration/).

## Complete a bug fix locally

```text
Read skills/junior-mode/SKILL.md.
Fix the shared parser: an empty input must return an empty collection.
Preserve valid nonempty-input behavior and inspect all affected callers.
Align scope, follow context-first TDD, perform four-layer self-review, and deliver via atomic commit.
```

Expected route: align scope → context TDD (scientific debug on failure) → self-review → atomic commit.

## Align scope before touching code

```text
Read skills/workflow-align-scope/SKILL.md.
Analyze the requested payment retry timeout feature.
State the problem, define 2-3 Done Criteria, map the blast radius (direct, ripple, untouched), and sequence steps.
```

## Review without modifying code

```text
Read skills/workflow-self-review/SKILL.md.
Audit the candidate pull request against the Four-Layer Software Design Principles.
Inspect naming, SLAP, CQS, deep module boundaries, and DIP/ADP compliance.
Preserve product contents. Return actionable findings and review status.
```

A confirmed smell returns `needs-change`, even when the findings report completes the review request.

## Execute TDD with strict boundaries

```text
Read skills/workflow-context-tdd/SKILL.md.
Implement the new batch token validator using Context-First TDD.
Author test specs for Happy Path, Boundary Conditions (empty collections), and Error Scenarios.
Run Red-Green-Refactor with zero assertion weakening.
```

## Deliver via atomic commit

```text
Read skills/workflow-atomic-commit/SKILL.md.
Inspect staged changes and verify that all automated tests pass.
Ensure single responsibility and format a Conventional Commit message explaining the "Why".
```

## Resume after a handoff

```text
Read skills/junior-mode/SKILL.md and .superjunior/task.md.
Resume the agreed task using the current working-tree contents.
Revalidate the recorded candidate and any destination state.
Continue from the earliest required phase with missing or invalid evidence.
```

A recorded passing test is historical evidence. Changes to contents, dependencies, inputs, or environment can require affected checks to run again.

## Discuss architecture before implementation

```text
Read skills/senior-mode/SKILL.md.
Compare viable architectures for the stated workload and constraints.
Agree on boundaries and technology tradeoffs, record them, and hand off the first component.
```

Senior mode runs craft-discussing, arch-componentize, and arch-detail in turn and ends with a handoff brief for junior mode.
