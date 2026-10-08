+++
title = "Record decisions"
description = "Preserve consequential choices, supporting evidence, and the conditions that could change them."
permalink = "/skills/principle-record-decisions/index.html"
section = "principles"
order = 6
source = "skills/principle-record-decisions/SKILL.md"
+++

## When to use it

Apply to meaningful tradeoffs, changed direction, failed experiments, review decisions, and handoffs where the next owner would otherwise reconstruct the reasoning.

## Apply it

Record the problem, chosen approach, and constraint or evidence that made the choice consequential. Include alternatives when they explain a real tradeoff; ordinary implementation steps need no decision log.

Distinguish observations, inferences, and untested assumptions. Preserve important failed experiments and the reason for changing direction. Update the current decision when new evidence changes it.

Use the existing task record, PR, or suitable project document. Link inspected artifacts and reproducible checks rather than copying large outputs. Keep limitations and unresolved decisions visible.

## Example and record

“We reused the existing parser because all three callers require the same empty-input contract; the caller checks passed” records a decision and evidence. “This seemed better” leaves the next engineer guessing.

A useful entry identifies what was chosen, why, evidence, and a reconsideration condition.

## Boundary

Keep records local until sharing is authorized. Do not fabricate links, approvals, measurements, or results. Identify the checked artifact when version affects the conclusion.
