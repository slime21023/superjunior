+++
title = "prin-semantic-versioning"
description = "Assess a version increment for a project that declares a public contract and uses Semantic Versioning."
section = "principles"
order = 10
permalink = "/skills/prin-semantic-versioning/index.html"
source = "skills/prin-semantic-versioning/SKILL.md"
+++

## When to use

Assess a version increment for a project that declares a public contract and uses Semantic Versioning.

## How it changes the work

Compare the candidate with the released public contract. Backward-compatible fixes, backward-compatible functionality, and incompatible changes normally map to patch, minor, and major increments respectively for a stable API.

For a stable library, a compatible parser fix can move 1.4.0 to 1.4.1. Removing a documented public option requires a major increment under the stable SemVer rules.

See [Principles and practices](/principles/) for how to combine it with a core skill.
