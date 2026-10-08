---
name: principle-understand-before-changing
description: Trace the relevant execution flow before changing existing software, especially for defects, shared functions, ownership questions, or changes with unclear effects. Find existing solutions and fix the cause where affected callers converge.
---

# Understand Before Changing

Locate the behavior and its cause before choosing the size or location of a fix.

## Apply

- Read the relevant implementation, tests, and project instructions. Trace the entrypoint, data or state changes, and the observable result.
- Before editing shared behavior, find its callers and inspect the affected contracts, including sibling paths beyond the reported symptom.
- Look for an existing helper, platform capability, or established pattern that already solves the problem.
- For a defect, obtain the smallest feasible reproduction and explain the gap between expected and observed behavior. Mark an unconfirmed cause as a hypothesis.
- Change the shared cause when that is where the contract breaks. Preserve valid differences between callers.
- Stop exploration once you can explain the relevant flow, proposed change, and affected contracts. Expand the investigation when new evidence requires it.

## Evidence

Record the relevant entrypoint and callers, the observed behavior or reproduction, and why the proposed location addresses the cause. Cite files or results actually inspected.

## Boundaries

Investigation should follow the task's affected flow rather than require reading the entire repository. If reproduction is unavailable, disclose the gap and choose another reliable observation before claiming the cause is confirmed.
