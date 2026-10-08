+++
title = "Workflow subagents"
navTitle = "The four roles"
description = "Bounded workers return evidence to one owner. Their names have no workflow prefix."
section = "roles"
order = 0
permalink = "/subagents/index.html"
+++

The four workflow roles are portable TOML definitions stored under workflow references. The host supplies execution and permission enforcement. Direct work remains the default; use a worker when a separable assignment materially helps and delegation is authorized.

## Role map

| Role | Assignment | Write boundary |
| --- | --- | --- |
| explorer | Investigate a bounded code path, contract, or history | Read-only |
| implementer | Complete an independently checkable development slice | Assigned product paths and test resources |
| reviewer | Judge requirements, actual contents, contracts, and evidence | Read-only |
| verifier | Observe required behavior or a delivered result | Agreed build outputs, temporary files, isolated test state, and test processes |

`readonly = false` permits only the assignment's declared writes. It does not provide an unrestricted workspace.

## Explorer

Supply the question, inspected version, investigation angle, readable scope, constraints, and return conditions. The explorer traces entrypoints, callers, state changes, and boundaries. It distinguishes observations, inferences, and unknowns.

It returns relevant files and symbols, flow or historical evidence, inspected scope and version, unresolved questions, and the next useful investigation. It preserves repository contents and shared resources.

Definition: [explorer.toml](/source/skills/workflow-develop/references/explorer.toml). Used by [develop](/skills/workflow-develop/) and [how-works](/skills/how-works/).

## Implementer

Supply the outcome, acceptance conditions, starting artifact, stable contracts, writable paths, context, test resources, and return conditions. Without a write boundary, the worker investigates and returns the missing boundary before editing.

It traces the affected flow, preserves unrelated work, and changes only its assigned slice. It returns candidate identity, changed paths, rationale, exact self-checks and observed results, remaining issues, and next action.

Definition: [implementer.toml](/source/skills/workflow-develop/references/implementer.toml). Used by [develop](/skills/workflow-develop/).

## Reviewer

Supply the original requirements, acceptance conditions, baseline and candidate, risks, evidence, readable scope, and return conditions. The reviewer assesses actual contents and affected callers, then reports concrete findings with locations and consequences.

It states whether the assessment is self-review or independent. A reviewer who implemented the candidate cannot satisfy a required independent review. Missing required evidence returns `unverified`.

Definition: [reviewer.toml](/source/skills/workflow-review/references/reviewer.toml). Used by [review](/skills/workflow-review/).

## Verifier

Supply the artifact, destination when relevant, acceptance conditions, assigned observations, existing evidence, test resources, and return conditions. The verifier preserves product source, acceptance conditions, and real user data.

It returns actual procedures, expected and observed results, environment, limitations, artifact identity, outcome, and next action. Missing write scope limits it to read-only observations. Product corrections go back to the owner.

Definition: [verifier.toml](/source/skills/workflow-verify/references/verifier.toml). Used by [verify](/skills/workflow-verify/) and permitted delivered-result checks in [deliver](/skills/workflow-deliver/).

## Write a useful assignment

```text
Role: explorer
Question: Which callers depend on the shared parser's empty-input behavior?
Candidate: current working-tree snapshot supplied with this assignment.
Readable scope: parser module, its callers, and their tests.
Preserve all files and shared resources. Do not delegate further.
Return sourced caller contracts, unknowns, and the inspected candidate.
```

The owner inspects every return, reconciles contradictions, integrates changes, and reruns affected checks. Keep one owner for shared contracts; isolate mutable resources or serialize work. Workers do not broaden the task, advance the pipeline, publish, or start further delegates without an explicit grant.
