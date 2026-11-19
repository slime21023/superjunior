---
name: explore
description: "Investigate existing behavior, project context, historical rationale, or technical trade-offs, and discover project-configured development checks."
license: MIT
---

# explore

## Input

A question or decision and any known project boundaries.

## Execution

Trace relevant entry points, callers, tests, and documentation. For historical questions, inspect commits and recorded decisions before attributing intent. Current code establishes current behavior. Attribute historical rationale only when the record supports it. For technical choices, compare options against stated constraints and identify the trade-offs that could change the decision. Keep investigation read-only.

When development checks are relevant, look for linters, formatters, type checkers, and other static analysis tools in the applicable workspace. Read project scripts and manifests, tool configuration, CI workflows, and pre-commit hooks. Trace wrapper tasks to the tools they invoke and check for directory-specific configuration. Confirm CI usage from workflow invocations.

## Completion

When the task calls for an investigation record to be saved, write it under `_artifacts/explore/` at the project root. Create the directory as needed and link to the file in the final reply.

Lead with a direct answer and qualify it if the evidence is incomplete. Place each source beside the claim it supports. Cite file paths and lines for code, commit IDs or decision records for history, and commands with observed results for runtime behavior. Distinguish confirmed findings from inferences. Identify the evidence needed to resolve any remaining gap that affects a decision.

For tool discovery, report each tool’s purpose, scope, project-defined command or task, and evidence path when available. Note where it is invoked and whether the command was verified by execution.

Use this structure for a substantive investigation:

### Result

Answer the question in one or two sentences. Include relevant boundaries or trade-offs when they affect the answer.

### Evidence

List key findings with their sources. Label material inferences and explain what supports them.

### Open questions

Name the missing evidence and the judgment it could change. Omit this section when there are no material gaps.

For a quick explanation, cite the source directly in the answer. When handing off the investigation, pass along the findings, sources, and any unresolved decision. For a durable report, include the investigation question, inspected scope, and revision or version when available.

See [worked examples](references/examples.md) for a short execution trace and a historical investigation with an unresolved rationale.
