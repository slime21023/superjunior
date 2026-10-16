---
name: workflow-self-review
description: "Use before committing, opening a PR, or handing off code to audit the diff against the Four-Layer Software Design Principles and hygiene gates. Phase 3B of junior-mode."
license: MIT
---

# Workflow: Four-Layer Self-Review

The Self-Review workflow is an objective inspection gate executed prior to committing or submitting code. It runs a systematic audit across all four software design layers to guarantee that newly written or refactored code meets high engineering standards.

---

## 4-Layer Inspection Checklist

<self-review-checklist>
  Run the audit checklist at the end of each layer's principles skill against the diff, and record every unchecked item as a finding:

  1. Layer 1: [principles-lexical-expression](../principles-lexical-expression/SKILL.md)
  2. Layer 2: [principles-function-control-flow](../principles-function-control-flow/SKILL.md)
  3. Layer 3: [principles-module-boundaries](../principles-module-boundaries/SKILL.md)
  4. Layer 4: [principles-architecture-evolution](../principles-architecture-evolution/SKILL.md)
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
