+++
title = "Module boundaries"
description = "Layer 3: deep modules, complexity pushed down, information hiding, and grouping by what changes together."
permalink = "/skills/principles-module-boundaries/index.html"
section = "principles"
order = 4
source = "skills/principles-module-boundaries/SKILL.md"
+++

Layer 3 covers the boundary between a module and its callers. Good boundaries let callers use a module without knowing how it works, so internal changes stay internal.

## When to apply it

Use it when designing or reviewing classes, modules, services, or public APIs, and when callers keep repeating the same setup, retry, or error handling around a module.

## The rules

**Build deep modules.** A deep module offers a small, simple interface over substantial work such as caching, retries, or concurrency. A shallow one, like a class with twenty getters and setters mirroring raw fields, costs callers a lot to learn and gives little back. The idea comes from John Ousterhout's *A Philosophy of Software Design*.

**Push complexity down.** When either the caller or the module could handle something, the module should. Sensible defaults, thread safety, resource cleanup, and transient-failure retries belong inside, because one author handling them once beats fifty callers each writing the same boilerplate.

**Hide information.** Internal state that leaks becomes a contract you can no longer change.

```text
before: getItems() returns the internal mutable array
after:  getItems() returns a read-only view or a copy
```

File formats, wire protocols, and vendor schemas stay inside the adapter module, so third-party data types never reach your domain entities. Keep fields, helpers, and internal types private until an external consumer actually needs them.

**Group what changes together.** Logic that changes for the same business reason, at the same pace, belongs in one module. Logic driven by different people or systems stays apart even when it looks similar: two different calculations that both use a loop are not duplicates, and merging them ties two independent futures together.

## Review checklist

- The interface is narrow relative to the work the module does.
- Error handling, defaults, and cleanup happen inside the module, not in every caller.
- Mutable collections and vendor protocols are not reachable from outside.
- Each class groups logic that changes for one business reason.

## Related

- [Function and control flow](/skills/principles-function-control-flow/), the layer below.
- [Architecture and evolution](/skills/principles-architecture-evolution/), the layer above.
- [Four-layer design](/skills/principles-four-layer-design/) for the full framework.
