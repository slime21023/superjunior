---
name: workflow-self-review
description: Phase 3B daily engineering workflow. Systematic self-review checklist mapped directly to the Four-Layer Software Design Principles. Use before committing code, opening a PR, or handing off deliverables to catch code smells, abstraction leaks, and structural anti-patterns.
outcomes: ["pass", "needs-change"]
license: MIT
---

# Workflow: Four-Layer Self-Review

The Self-Review workflow is an objective inspection gate executed prior to committing or submitting code. It runs a systematic audit across all four software design layers to guarantee that newly written or refactored code meets high engineering standards.

---

## 4-Layer Inspection Checklist

<self-review-checklist>
  <layer>
    **Layer 1 — Lexical & Expression Layer**
    - [ ] Are numeric time, size, and duration variables explicit with units (e.g., timeoutMs, maxPayloadBytes)?
    - [ ] Does the code explain How clearly without comments that merely translate code into English?
    - [ ] Are non-obvious workarounds, business invariants, and deferred optimizations documented with Why comments?
    - [ ] Does the code strictly adhere to the project ubiquitous domain verbs (e.g., no mixing get/fetch/retrieve)?
  </layer>
  <layer>
    **Layer 2 — Function & Control Flow Layer**
    - [ ] Do orchestrator functions coordinate high-level steps without mixing in low-level regex or byte manipulation?
    - [ ] Are extracted functions hiding real conceptual complexity rather than creating useless 1-line jumps?
    - [ ] Are commands void of return data, and are queries strictly pure, idempotent, and side-effect free?
    - [ ] Do collection-returning methods return empty collections [] instead of null or undefined?
    - [ ] Are guard clauses used to exit early, keeping nested indentation levels at ≤ 2?
  </layer>
  <layer>
    **Layer 3 — Class & Module Boundaries Layer**
    - [ ] Is the public interface small and clean relative to the internal complexity it encapsulates?
    - [ ] Does the module handle sensible defaults, retries, and state transitions internally rather than pushing to callers?
    - [ ] Are internal mutable collections and vendor protocols completely encapsulated and inaccessible from outside?
    - [ ] Does this class group logic that changes for the same business reason, keeping separate actors decoupled?
  </layer>
  <layer>
    **Layer 4 — System Architecture & Evolution Layer**
    - [ ] Does the core domain remain free of direct dependencies on infrastructure adapters, databases, or third-party SDKs?
    - [ ] Is the module dependency graph a strict Directed Acyclic Graph (DAG) with zero circular imports?
    - [ ] Are new files located in domain-named directories rather than dumped into catch-all utils/ or misc/ folders?
    - [ ] Did this change safely tidy up immediate surrounding dead code or formatting (10%~20% budget)?
  </layer>
</self-review-checklist>

---

## Cleanliness & Hygiene Verification

<hygiene-gates>
  - [ ] All temporary console.log, debugger statements, and scratch comments have been removed.
  - [ ] The automated regression test suite executes and passes 100% green.
  - [ ] The Git diff contains only lines directly traceable to the agreed task scope.
</hygiene-gates>

---

## Return Outcomes

<workflow-outcomes>
  - **pass**: Code cleanly satisfies all four design layers with zero unresolved defects or regressions. Advance to workflow-atomic-commit.
  - **needs-change**: Specific design smells, boundary leaks, or naming violations identified; return list of concrete corrections needed.
</workflow-outcomes>
