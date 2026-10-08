+++
title = "Review"
description = "Assess a specific candidate against requirements, contracts, risks, and evidence."
permalink = "/skills/workflow-review/index.html"
section = "workflows"
order = 2
source = "skills/workflow-review/SKILL.md"
+++

## Inputs

Identify the original acceptance conditions, baseline, actual candidate, constraints, and self-check evidence. Review-only work does not require executing the other workflows.

## Form the judgment

Confirm the reviewed contents, including relevant uncommitted changes. Treat implementation explanations as claims to assess.

Inspect the actual diff, affected callers and contracts, meaningful edge cases, and failure paths. Judge whether the design is understandable and the checks can detect consequential failures.

Establish findings with a location, affected behavior, consequence, and reproduction or reasoning. Label unconfirmed risks. Resolve or dismiss material findings from other reviewers with evidence or a concrete rationale.

If contents change during review, reassess affected conclusions before carrying them forward.

## Preserve the candidate

Review preserves product contents. Fixes return to the owner and require an authorized development scope.

Self-review is sufficient when task and risk allow it; label it accurately. Use the [reviewer role](/subagents/) for useful separable investigations or required independence. Supply original requirements and artifacts so the reviewer can form its own conclusion.

A required independent reviewer must not have implemented the candidate. A different model alone does not establish independence. If the required assessment is unavailable, return `unverified`.

## Return and outcomes

Return reviewed identity, independence status, findings and dispositions, evidence gaps, and next action.

- `pass`: no blocking finding or required review gap remains.
- `needs-change`: a confirmed issue requires product or test changes.
- `unverified`: required artifact, evidence, or assessment is unavailable.
- `needs-decision`: a consequential requirement or tradeoff needs its owner.

Personal style preferences block only when they violate a requirement or have a concrete consequence. Review pass retains separate verification and delivery conditions.

## Applicable principles

Read [review independently](/skills/principle-review-independently/), [understand before changing](/skills/principle-understand-before-changing/), [keep solutions simple](/skills/principle-keep-solutions-simple/), [match rigor to risk](/skills/principle-match-rigor-to-risk/), [record decisions](/skills/principle-record-decisions/), and [bind evidence to version](/skills/principle-bind-evidence-to-version/).
