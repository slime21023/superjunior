+++
title = "Architecture and evolution"
description = "Layer 4: dependencies on abstractions, no dependency cycles, folders named by domain, and steady small cleanups."
permalink = "/skills/principles-architecture-evolution/index.html"
section = "principles"
order = 5
source = "skills/principles-architecture-evolution/SKILL.md"
+++

Layer 4 covers the shape of the whole system and how it stays healthy over time: which way dependencies point, how code is organized, and the small cleanups that keep debt from piling up.

## When to apply it

Use it when organizing packages and folders, adding a dependency between modules, connecting business logic to databases or external services, or deciding how much nearby code to tidy during a change.

## The rules

**Depend on abstractions, not infrastructure.** The business core defines interfaces such as `UserRepository` or `PaymentGateway`, and the database or HTTP code implements them. Business rules then stay testable without a network or database and survive a change of technology.

**Allow no dependency cycles.** Module dependencies must form a directed acyclic graph: if B depends on A, directly or through others, A never depends on B. Break a cycle by moving the shared contract into a lower module both can use, or by inverting one dependency through an interface.

**Name folders by domain.** Folders like `billing/`, `auth/`, and `orders/` tell you what the system does. Catch-all folders such as `utils/`, `misc/`, `common/`, and `helpers/` name nothing and collect unrelated code.

```text
before: utils.ts
after:  formatting/currency.ts, crypto/tokens.ts
```

**Leave the code cleaner than you found it.** Spend about 10 to 20 percent of each task tidying the code you touch: rename an unclear variable, delete code your change made dead, name a confusing condition, or fix a misleading comment.

## Boundaries

Cleanups stay small and inside the area your change already tests. The cleanup rule never justifies an unrequested rewrite across modules.

## Review checklist

- Dependencies point inward toward domain abstractions.
- No two modules depend on each other, directly or indirectly.
- New files live in domain folders, not `utils/` or `misc/`.
- The touched files are safely cleaner than before.

## Related

- [Module boundaries](/skills/principles-module-boundaries/), the layer below.
- [Four-layer design](/skills/principles-four-layer-design/) for the full framework.
- [Architecture componentization](/skills/arch-componentize/) for recording layers and dependency direction as a design.
