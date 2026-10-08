+++
title = "Bind evidence to version"
description = "Keep conclusions attached to the contents, inputs, and environment actually checked."
permalink = "/skills/principle-bind-evidence-to-version/index.html"
section = "principles"
order = 10
source = "skills/principle-bind-evidence-to-version/SKILL.md"
+++

## When to use it

Apply whenever checks may concern stale code, dirty working trees, different builds, or an artifact changed after review.

## Apply it

Identify the checked artifact with a commit SHA, digest, or content snapshot. For uncommitted work, retain the relevant diff or snapshot; the base commit does not describe changed contents.

Record the actual procedure and observation, along with environment or configuration differences that affect interpretation. Exclude secrets.

After edits, integration, rebases, dependency changes, or rebuilds, assess which conclusions no longer apply. Rerun affected review or verification. Keep earlier results as history and preserve unaffected evidence when its assumptions remain valid.

Before delivery, reconcile the chosen artifact and relevant build inputs with required evidence.

## Example and record

Tests on commit A do not establish a modified working tree's behavior. Tests on a candidate still apply after a purely unrelated documentation edit when their claim and inputs remain unchanged.

Keep artifact identity, procedure, result, and limitations together.

## Boundary

A branch name, “latest build,” or clean working tree does not identify the tested artifact by itself. Small tasks can use a simple snapshot without a new tracking system. Stale or unavailable checks remain explicit.
