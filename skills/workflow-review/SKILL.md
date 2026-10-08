+++
name = "workflow-review"
description = "Review a specific software candidate against its requirements, actual change, affected contracts, and verification evidence. Use for review-only requests or the review phase of a development loop; preserve the candidate and return actionable findings."
outcomes = ["pass", "needs-change", "unverified", "needs-decision"]

[subagents.reviewer]
file = "references/reviewer.toml"
readonly = true
+++

# Review a Candidate

Form a judgment from the requirements and artifact. Preserve the reviewed product contents and return findings to the owner.

## Inputs and Principles

Identify the acceptance conditions, baseline and candidate contents, relevant constraints, and available self-check evidence. A standalone review does not require running the other workflows.

Read the applicable principles:
- [Review independently](../principle-review-independently/SKILL.md).
- [Understand before changing](../principle-understand-before-changing/SKILL.md).
- [Keep solutions simple](../principle-keep-solutions-simple/SKILL.md).
- [Match rigor to risk](../principle-match-rigor-to-risk/SKILL.md).
- [Record decisions](../principle-record-decisions/SKILL.md).
- [Bind evidence to version](../principle-bind-evidence-to-version/SKILL.md).

## Execute

1. Confirm the reviewed version, original requirement, and acceptance conditions. Treat the implementer's explanation as claims to assess.
2. Inspect the actual diff and affected callers or contracts. Check meaningful edge cases and failure paths according to the risk.
3. Evaluate whether the design is understandable, the change is complete, and the proposed checks can detect consequential failures.
4. Establish findings with a location, affected behavior, consequence, and reproduction or reasoning. Label an unconfirmed risk as such.
5. Assess findings from other reviewers on their merits. Resolve or dismiss each material issue with evidence or a concrete rationale.
6. Return the review judgment and gaps for the identified candidate. If the artifact changes during review, identify affected conclusions before carrying them forward.

## Delegation

Direct self-review is sufficient when the task and risk allow it; label it self-review. Use the declared reviewer role for required independence or separable risk investigations.

Give a reviewer the original requirements, candidate and baseline, known constraints and risks, relevant evidence, and read-only scope. Let it form its own conclusion. A different model alone does not establish independence.

For required independent review, choose a reviewer who did not implement the change. If this review cannot be obtained, report the gap as unverified.

The owner reconciles findings and retains responsibility for the judgment. Workers return findings without fixing the product, advancing the pipeline, or starting further delegates unless explicitly permitted.

## Return

Report the reviewed artifact, self-review or independent-review status, material findings and their disposition, evidence gaps, and next action.

- pass: no unresolved blocking finding or required review gap remains for the reviewed scope.
- needs-change: a confirmed issue requires a product or test change.
- unverified: the artifact, necessary evidence, or required independent assessment is unavailable.
- needs-decision: a consequential requirement or acceptable tradeoff needs its owner to decide.

A review pass establishes the review judgment; behavioral verification and delivery retain their own conditions. Personal style preferences block only when they violate an applicable requirement or have a concrete consequence.
