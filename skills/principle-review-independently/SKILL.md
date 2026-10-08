---
name: principle-review-independently
description: Evaluate a software change from its requirements, actual artifact, and evidence rather than adopting the implementer's conclusions. Use for code review, contested assumptions, or high-risk changes that need an independent assessment.
---

# Review Independently

Form a review judgment from the requested behavior and the actual change.

## Apply

- Read the request, acceptance conditions, and relevant artifact or diff. Use the implementer's explanation as context, then verify its consequential claims.
- Inspect affected contracts and sibling paths. Look for concrete failure scenarios involving inputs, state, integrations, or permissions appropriate to the risk.
- Assess whether the design is understandable and whether the verification can detect the important failures.
- State findings with a location, impact, and reproduction or reasoning. Distinguish observed defects from plausible but unconfirmed risks.
- For high-risk work that requires independent review, use a reviewer who did not implement the change when available and authorized. If unavailable, disclose the missing review rather than labeling self-review independent.
- Assess other reviewers' findings on their merits. Resolve or dismiss them with a concrete reason.

## Evidence

Record the reviewed version, material findings, their disposition, and remaining gaps. A favorable review does not replace behavioral verification.

## Boundaries

Keep a review-only task read-only unless fixes are authorized. A different model alone does not establish independent reasoning. Do not block delivery on personal style preferences unless they violate an applicable requirement or have a concrete consequence.
