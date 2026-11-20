+++
title = "prin-code-readability"
description = "Assess or improve code whose intent, units, responsibilities, or side effects are hard to read."
section = "principles"
order = 5
permalink = "/skills/prin-code-readability/index.html"
source = "skills/prin-code-readability/SKILL.md"
+++

## When to use

Assess or improve code whose intent, units, responsibilities, or side effects are hard to read.

## How it changes the work

Make names express domain intent and units at the call site. Keep responsibility with the component that owns the behavior. Give an abstraction a concrete purpose such as hiding a detail likely to change.

Rename an ambiguous timeout argument to timeoutMs when it is measured in milliseconds. Check all affected callers and keep the represented duration unchanged.

See [Principles and practices](/principles/) for how to combine it with a core skill.
