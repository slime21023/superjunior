---
name: principle-bind-evidence-to-version
description: Bind review, verification, and delivery conclusions to the software artifact actually checked. Use when results may refer to stale code, uncommitted changes, different builds, or artifacts modified after checks.
---

# Bind Evidence to Version

Identify the artifact behind each consequential result.

## Apply

- Record the checked commit SHA, artifact digest, or identifiable content snapshot. For uncommitted work, retain the relevant diff or snapshot; the base commit alone does not identify the changed contents.
- Record the actual check and result, plus environment or configuration differences that materially affect interpretation. Exclude secrets.
- After an edit, rebase, dependency change, or rebuild, determine which earlier conclusions no longer apply. Re-run the affected review or verification rather than silently carrying results forward.
- Preserve useful earlier results as history and make their applicability clear.
- Before delivery, confirm that the chosen artifact is the one supported by the required evidence, including relevant build inputs.
- Label checks that could not run, and stale results, explicitly. Do not report them as passing for the current artifact.

## Evidence

Keep the artifact identity, procedure, observed result, and limitations together in the existing task record. Re-check only what the change or environment invalidates.

## Boundaries

A branch name, latest build label, or clean working tree does not by itself identify the artifact that was tested. Small tasks can use a simple content snapshot without adding a version-tracking system.
