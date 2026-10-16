+++
title = "Specialized Agent Roles"
navTitle = "The five agent roles"
description = "Bounded worker roles for scope alignment, TDD implementation, debugging, review, and commits."
section = "roles"
order = 0
permalink = "/subagents/index.html"
+++

The five specialized agent roles are portable definitions stored under their respective skill directories. The host supplies execution and permission enforcement. Direct execution by the primary agent remains the default; delegate to a worker when an isolated, bounded assignment improves focus and separation of concerns.

## Role map

- [agent-scope-aligner](/skills/agent-scope-aligner/): Read-only investigator for exploring context, defining Done criteria, and mapping the 3-tier blast radius.
- [agent-tdd-implementer](/skills/agent-tdd-implementer/): Bounded implementation worker executing the Red-Green-Refactor TDD cycle on assigned targets.
- [agent-scientific-debugger](/skills/agent-scientific-debugger/): Diagnostic worker for parsing stack traces, building minimal repro tests, and resolving root causes at caller convergence.
- [agent-code-reviewer](/skills/agent-code-reviewer/): Read-only independent auditor assessing diffs against the Four-Layer Software Design Principles.
- [agent-git-committer](/skills/agent-git-committer/): Version control specialist for selective atomic staging and authoring intention-focused commit messages.

`readonly = false` permits only the assignment's declared writes. It does not provide an unrestricted workspace.

## Scope Aligner (`agent-scope-aligner`)

Supply the user request, ticket description, and codebase entrypoint. The scope aligner explores the code, traces callers, and formulates the plain-language problem, observable Done criteria, and the 3-tier Blast Radius matrix (Direct, Ripple, Untouched).

Definition: [agent.toml](/source/skills/agent-scope-aligner/agent.toml). Used by [workflow-align-scope](/skills/workflow-align-scope/).

## TDD Implementer (`agent-tdd-implementer`)

Supply the aligned scope, contracts, and test targets. The implementer authors regression tests covering Happy Path, Boundary Conditions (empty collections `[]`), and Error Scenarios. It verifies the failure mode (Red), implements minimal code (Green), and refactors under green protection.

Definition: [agent.toml](/source/skills/agent-tdd-implementer/agent.toml). Used by [workflow-context-tdd](/skills/workflow-context-tdd/).

## Scientific Debugger (`agent-scientific-debugger`)

Supply the failing test or exception logs. The debugger parses stack traces, formulates 1~2 falsifiable hypotheses, builds an isolated minimal reproduction test, and resolves the defect at the shared caller convergence point.

Definition: [agent.toml](/source/skills/agent-scientific-debugger/agent.toml). Used by [workflow-scientific-debug](/skills/workflow-scientific-debug/).

## Code Reviewer (`agent-code-reviewer`)

Supply the candidate diff, requirements, and test results. The reviewer performs an objective audit across all four design layers (Lexical, Function, Module Boundaries, and Architecture). It returns structured findings detailing location, consequence, and remediation.

Definition: [agent.toml](/source/skills/agent-code-reviewer/agent.toml). Used by [workflow-self-review](/skills/workflow-self-review/).

## Git Committer (`agent-git-committer`)

Supply the verified working tree and task rationale. The committer inspects `git status` and `diff`, stages targeted files with single responsibility, and authors a Conventional Commit message explaining the "Why" behind the change.

Definition: [agent.toml](/source/skills/agent-git-committer/agent.toml). Used by [workflow-atomic-commit](/skills/workflow-atomic-commit/).

## Write a useful assignment

```text
Role: agent-scope-aligner
Task: Investigate the token refresh flow and map the blast radius for adding a timeoutMs parameter.
Candidate: current working tree snapshot.
Readable scope: auth module, HTTP client, and associated tests.
Preserve all files. Do not delegate further.
Return problem statement, 2-3 Done Criteria, and Blast Radius matrix.
```
