+++
title = "Close the delivery loop"
description = "Complete the authorized handoff with a usable result and proportionate recovery."
permalink = "/skills/principle-close-delivery-loop/index.html"
section = "principles"
order = 11
source = "skills/principle-close-delivery-loop/SKILL.md"
+++

## When to use it

Apply to local handoff, PRs, releases, publication, or deployment.

## Apply it

Define the requested delivery form and existing authority. Confirm the chosen artifact has required review and verification evidence and the recipient can access and use it.

Provide usage instructions and known limitations. Choose recovery according to consequences: revert an artifact, disable a feature, or restore affected data. Check persistent data and external side effects; older code alone may not reverse them.

Perform a proportionate direct check of the delivered result when possible. If delivery fails, inspect destination state before retrying an operation that may have partly succeeded.

## Example and record

A local package needs an identified file, instructions, and a usable opening or execution path. A migration also needs recovery for changed data.

Record artifact, destination, observed result, recovery where needed, and follow-up status. Turn unresolved feedback into bounded work with an owner. State when real user feedback has not been obtained.

## Boundary

A local task can finish with local delivery. This principle does not authorize external messages, additional writes, or recurring monitoring. Successful delivery and resolution of the user's broader problem are separate observations.
