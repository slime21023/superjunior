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
  <layer id="1" name="Lexical & Expression Layer">
    <check item="units">Are numeric time, size, and duration variables explicit with units (e.g., timeoutMs, maxPayloadBytes)?</check>
    <check item="how-vs-why">Does the code explain How clearly without comments that merely translate code into English?</check>
    <check item="why-comments">Are non-obvious workarounds, business invariants, and deferred optimizations documented with Why comments?</check>
    <check item="vocabulary">Does the code strictly adhere to the project ubiquitous domain verbs (e.g., no mixing get/fetch/retrieve)?</check>
  </layer>
  <layer id="2" name="Function & Control Flow Layer">
    <check item="slap">Do orchestrator functions coordinate high-level steps without mixing in low-level regex or byte manipulation?</check>
    <check item="indirection">Are extracted functions hiding real conceptual complexity rather than creating useless 1-line jumps?</check>
    <check item="cqs">Are commands void of return data, and are queries strictly pure, idempotent, and side-effect free?</check>
    <check item="null-elimination">Do collection-returning methods return empty collections [] instead of null or undefined?</check>
    <check item="nesting">Are guard clauses used to exit early, keeping nested indentation levels at ≤ 2?</check>
  </layer>
  <layer id="3" name="Class & Module Boundaries Layer">
    <check item="deep-module">Is the public interface small and clean relative to the internal complexity it encapsulates?</check>
    <check item="complexity-down">Does the module handle sensible defaults, retries, and state transitions internally rather than pushing to callers?</check>
    <check item="information-hiding">Are internal mutable collections and vendor protocols completely encapsulated and inaccessible from outside?</check>
    <check item="cohesion">Does this class group logic that changes for the same business reason, keeping separate actors decoupled?</check>
  </layer>
  <layer id="4" name="System Architecture & Evolution Layer">
    <check item="dip">Does the core domain remain free of direct dependencies on infrastructure adapters, databases, or third-party SDKs?</check>
    <check item="adp">Is the module dependency graph a strict Directed Acyclic Graph (DAG) with zero circular imports?</check>
    <check item="directories">Are new files located in domain-named directories rather than dumped into catch-all utils/ or misc/ folders?</check>
    <check item="boy-scout">Did this change safely tidy up immediate surrounding dead code or formatting (10%~20% budget)?</check>
  </layer>
</self-review-checklist>

---

## Cleanliness & Hygiene Verification

<hygiene-gates>
  <gate check="debug-artifacts">All temporary console.log, debugger statements, and scratch comments have been removed.</gate>
  <gate check="test-suite">The automated regression test suite executes and passes 100% green.</gate>
  <gate check="diff-purity">The Git diff contains only lines directly traceable to the agreed task scope.</gate>
</hygiene-gates>

---

## Return Outcomes

<workflow-outcomes>
  <outcome code="pass">Code cleanly satisfies all four design layers with zero unresolved defects or regressions. Advance to workflow-atomic-commit.</outcome>
  <outcome code="needs-change">Specific design smells, boundary leaks, or naming violations identified; return list of concrete corrections needed.</outcome>
</workflow-outcomes>
