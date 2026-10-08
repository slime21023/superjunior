+++
title = "Verify"
description = "Establish observable behavior with reliable checks of the identified artifact."
permalink = "/skills/workflow-verify/index.html"
section = "workflows"
order = 3
source = "skills/workflow-verify/SKILL.md"
+++

## Inputs

Provide the candidate, acceptance conditions, relevant review findings, existing evidence, and permitted test environment. Standalone verification can proceed without review and states review status separately.

## Observe required behavior

Confirm actual contents and expected results, including failure and integration paths according to risk. Choose the cheapest reliable checks and reuse prior evidence only when contents, inputs, environment, and assumptions still support the claim.

Confirm what each observation establishes. Compilation, static inspection, unit behavior, and live integration provide different evidence.

Execute existing project checks before adding a harness. Retain procedures, inputs, expected and actual results, environment, and limitations. Investigate failures enough to separate product defects from missing environments, broken harnesses, and unstable signals.

Repair an observation method within assigned test scope when appropriate. If the artifact changes, invalidate and rerun affected checks.

## Write boundaries and delegation

Preserve product source, acceptance conditions, and real user data. Writes are limited to agreed build outputs, temporary reproductions, isolated test state, and required test processes.

Use the [verifier role](/subagents/) when separate environments or bounded independent execution help. Isolate shared databases, ports, files, and processes or serialize checks. Inspect returned evidence and candidate identity. Further delegation needs an explicit grant.

Product corrections return to development. Do not loosen assertions to obtain a passing result.

## Return and outcomes

Return artifact identity, checks, expected and observed results, relevant environment differences, gaps, and next action.

- `pass`: required checks support the acceptance conditions for the identified scope.
- `needs-change`: a confirmed product or test-contract defect needs development.
- `unverified`: a required observation could not be performed or trusted.
- `needs-decision`: expected behavior or a consequential test condition is unresolved.

A verification pass does not imply missing review or external delivery occurred.

## Applicable principles

Read [define done](/skills/principle-define-done/), [use fast feedback](/skills/principle-use-fast-feedback/), [match rigor to risk](/skills/principle-match-rigor-to-risk/), [bind evidence to version](/skills/principle-bind-evidence-to-version/), and [record decisions](/skills/principle-record-decisions/).
