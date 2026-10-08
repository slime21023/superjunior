+++
name = "workflow-verify"
description = "Verify observable behavior of an identified software artifact with reliable, risk-appropriate checks. Use for verification-only requests or the verification phase; preserve product contents, record actual results, and expose missing evidence."
outcomes = ["pass", "needs-change", "unverified", "needs-decision"]

[subagents.verifier]
file = "references/verifier.toml"
readonly = false
+++

# Verify Observable Behavior

Check the assigned artifact against its acceptance conditions. Product corrections return to development.

## Inputs and Principles

Identify the candidate, acceptance conditions, relevant review findings, existing evidence, and permitted test environment. A standalone verification may proceed without a prior review, but must state that review status separately.

Read the applicable principles:
- [Define done](../principle-define-done/SKILL.md).
- [Use fast feedback](../principle-use-fast-feedback/SKILL.md).
- [Match rigor to risk](../principle-match-rigor-to-risk/SKILL.md).
- [Bind evidence to version](../principle-bind-evidence-to-version/SKILL.md).
- [Record decisions](../principle-record-decisions/SKILL.md).

## Execute

1. Confirm the actual candidate and expected observable results. Include relevant failure and integration paths according to risk.
2. Select the cheapest reliable checks. Reuse prior results when artifact, environment, inputs, and assumptions still support the claim.
3. Confirm the check can observe the claimed behavior. Distinguish compilation, static inspection, unit behavior, and live integration evidence.
4. Execute the necessary checks and retain the actual procedure, inputs, result, and relevant environment. Use existing project checks before creating another harness.
5. Investigate failures enough to distinguish a product defect from an unavailable environment, broken harness, or unstable signal. Repair the observation within the assigned test scope when appropriate.
6. Confirm the product artifact remains the intended candidate. If the candidate changed, invalidate and rerun affected checks.

## Delegation and Writes

Work directly unless checks benefit from independent execution, separate environments, or bounded parallel work. Use the declared verifier role with the candidate, acceptance conditions, assigned checks, permitted resources, evidence requirements, and return conditions.

Preserve product source, acceptance conditions, and real user data. Permit only agreed build outputs, temporary reproduction files, isolated test state, and required test processes. If a check cannot respect those limits, obtain an appropriate environment or return the gap.

Parallel checks need independent mutable resources. Isolate shared databases, ports, files, and processes, or serialize. Inspect returned evidence and its artifact identity.

A delegated worker returns its results; further delegation requires the owner's explicit grant.

## Return

Report the tested artifact, checks performed, expected and actual results, meaningful environment differences, gaps, and next action. Label skipped or unavailable checks explicitly.

- pass: required checks support the acceptance conditions for the identified artifact and scope.
- needs-change: a confirmed product or test-contract defect requires development work.
- unverified: required observation could not be performed or trusted.
- needs-decision: expected behavior or a consequential test condition is unresolved.

Do not silently weaken assertions or change the product to obtain a passing result. A verification pass does not imply a missing review or external delivery has occurred.
