+++
title = "Architecture and evolution"
navTitle = "Architecture & evolution"
description = "Keep dependency direction and system organization aligned with demonstrated needs."
section = "principles"
order = 6
permalink = "/skills/principles-architecture-evolution/index.html"
+++

This supporting guide applies [engineering-principles](/skills/engineering-principles/) to changes that cross module or runtime boundaries.

## Start from the existing system

Inspect how the system is deployed, called, tested, and changed. Identify responsibilities and dependency direction before proposing another layer or service.

A harmful cycle is worth addressing when it makes initialization, testing, or change difficult. A shared directory can be acceptable when its contents are cohesive. Explain the practical consequence rather than judging the arrangement by its name.

## Justify the next boundary

An interface, module split, or service boundary should solve a concrete need. Consider the additional communication, state ownership, deployment, and failure handling it introduces.

Compare alternatives against the current constraints. Separate an observed limitation from a predicted future requirement, and label any proposed relationship that has not been verified.

## Keep evolution bounded

Remove dead code introduced by the current change and report unrelated cleanup separately. Preserve compatibility or make the required migration explicit when changing a public contract.

Use [architecture discussion](/skills/architecture-discuss/) for unresolved choices, [context and containers](/skills/c4-context-container/) for system boundaries, and [component analysis](/skills/c4-component/) for responsibilities inside one container.
