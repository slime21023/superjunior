+++
title = "System context and containers"
navTitle = "Context & containers"
description = "Identify the system boundary, external participants, and major applications and data stores."
section = "senior"
order = 3
permalink = "/skills/c4-context-container/index.html"
source = "skills/c4-context-container/SKILL.md"
+++

Use `c4-context-container` when you need a system-level view before discussing internal components. Here, a container is an application, service, or data store within the system boundary.

## Set the system boundary

Name the system, the question the analysis should answer, and any known actors or integrations. State whether you want an explanation, a design discussion, or a record of confirmed architecture.

```text
Use c4-context-container to map the notification system.
Identify users, external providers, the API, workers, and data stores.
Explain responsibilities and communication paths from repository evidence.
Keep proposed relationships separate and do not write a document.
```

The analysis starts with external actors and systems, then describes the containers inside the boundary, their responsibilities, and meaningful interactions. It avoids unnecessary component-level detail.

## Inspect the relationships

The result describes the system and goal, actors and external systems, containers, interactions, and evidence. Communication contracts and data flow should be grounded in the inspected material; unknown protocols or relationships should remain explicit.

When design alternatives are relevant, the result includes their tradeoffs and any recommendation. Confirmed decisions and open questions remain separate from the observed architecture.

## Go deeper or create a record

Choose [c4-component](/skills/c4-component/) after identifying the containing application or data store. Use [architecture-discuss](/skills/architecture-discuss/) when a choice between designs is the main question.

Request a diagram if you need one; proposed elements and relationships must be labeled. Recording architecture requires confirmed decisions and an explicit documentation request. Existing documents are read before editing and unrelated content is preserved. Product code, tests, and configuration are outside this skill's write scope.
