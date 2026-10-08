+++
title = "Understand before changing"
description = "Trace affected behavior and shared callers before locating the fix."
permalink = "/skills/principle-understand-before-changing/index.html"
section = "principles"
order = 2
source = "skills/principle-understand-before-changing/SKILL.md"
+++

## When to use it

Apply to existing software, especially defects, shared functions, ownership questions, and changes with unclear consequences.

## Apply it

Read the relevant implementation, tests, and project instructions. Trace the entrypoint, state or data changes, and observable result. Find callers of shared behavior and inspect their contracts, including sibling paths beyond the reported symptom.

Look for an existing helper or established pattern before adding another implementation. For a defect, obtain the smallest feasible reproduction and describe the gap between expected and observed behavior.

Treat an unconfirmed cause as a hypothesis. Fix the shared cause where the contract breaks while preserving valid differences between callers. Stop exploring once you can explain the relevant flow, proposed change, and affected contracts; expand when new evidence requires it.

## Example and record

If both import and search use a shared parser, an empty-input bug needs investigation of both callers. A shared correction may be appropriate; caller-specific policies still need to be preserved.

Record inspected entrypoints, callers, reproduction, and why the chosen location addresses the cause.

## Boundary

Follow the affected flow. Reading the entire repository is unnecessary. If reproduction is unavailable, disclose the gap before claiming a confirmed cause.
