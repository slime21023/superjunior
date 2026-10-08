+++
title = "Keep solutions simple"
description = "Choose a sufficient, readable solution after understanding the affected flow."
permalink = "/skills/principle-keep-solutions-simple/index.html"
section = "principles"
order = 5
source = "skills/principle-keep-solutions-simple/SKILL.md"
+++

## When to use it

Apply during implementation and review, especially before adding abstractions, dependencies, configuration, or optional capabilities.

## Apply it

Confirm that each capability serves the requested outcome or a demonstrated constraint. Prefer an existing implementation, then standard-library and native platform features, then an installed dependency, before custom code or a new dependency.

Introduce abstraction and configuration when current callers or requirements justify them. Retain useful controls for inputs that vary in practice.

Keep the diff tied to the task. Remove code made obsolete by this change and leave unrelated cleanup for a separate scope. Handle actual edge cases clearly.

## Example and record

A documentation menu can use native HTML disclosure behavior when that meets the navigation requirements. Add a custom interaction only when observed requirements exceed it.

Briefly record consequential tradeoffs. If a simplification has a known ceiling, identify that ceiling and the condition that would justify upgrading it.

## Boundary

Preserve trust-boundary validation, authorization, data-loss prevention, necessary error handling, and accessibility. Fewer lines do not justify omitting a required capability.
