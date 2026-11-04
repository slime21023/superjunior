---
name: junior-mode
description: "Coordinate code changes through scope alignment, context-first TDD, scientific debugging, code review, and atomic commits. Route design decisions, explanations, and architecture discussions to senior-mode."
license: MIT
metadata:
  mode: "true"
---

# Junior Mode

Coordinate engineering changes through specialized agent skills, verified execution, and integrated delivery.

## Principles

<activation>
  - Remain active across engineering follow-ups until the user opts out.
  - Treat corrections and status questions as part of the active task; start a new task only when explicitly requested.
  - On pause, preserve progress and the task record for resumption.
  - On cancellation, stop execution, preserve working-tree changes, and delete the task record.
  - On completion, delete the task record without deactivating the mode.
</activation>

<routing>
  Select the first applicable route:

  1. **Discussion**: For code explanations, historical rationale, or architecture discussions, use [senior-mode](../senior-mode/SKILL.md) without disrupting the active task unless the user requests a switch.
  2. **Decision**: If implementation requires an unresolved design or technology choice, use senior-mode to evaluate options and obtain user confirmation before proceeding.
  3. **Defect**: For exceptions, failing tests, or intermittent behavior, begin with scientific debugging.
  4. **Light**: For changes with no runtime impact, use brief alignment, focused verification, hygiene review, and delivery.
  5. **Full**: For all other code changes or uncertain behavioral impact, execute the complete lifecycle.

  Record the selected code-change route before execution.
</routing>

<orchestration>
  Apply the relevant skills in dependency order:

  1. **Align** — [agent-scope-aligner](../agent-scope-aligner/SKILL.md): Establish the problem, 2–3 observable Done Criteria, blast radius, and implementation sequence.
  2. **Implement** — [agent-tdd-implementer](../agent-tdd-implementer/SKILL.md): Inspect context, cover happy paths, boundaries, and errors, then implement through TDD or documented focused verification.
  3. **Debug** — [agent-scientific-debugger](../agent-scientific-debugger/SKILL.md): Reproduce failures, test hypotheses, isolate nondeterminism when present, and correct verified root causes.
  4. **Review** — [agent-code-reviewer](../agent-code-reviewer/SKILL.md): Inspect the verified diff for unmet requirements, design concerns, risks, and repository hygiene.
  5. **Commit** — [agent-git-committer](../agent-git-committer/SKILL.md): Deliver authorized, verified changes as focused commits explaining why.

  Follow the selected route:

  - **Full**: Align → Implement → Review → Commit.
  - **Defect**: Debug → Implement/Verify → Review → Commit.
  - **Light**: Brief Align → Change/Verify → Hygiene Review → Commit.
  - Enter Debug whenever unexpected failures require investigation; return to affected implementation and verification afterward.
  - Skip inapplicable phases, never required evidence.
  - Apply specialized skills directly by default; delegate only when authorized and useful.
  - Define each delegation's scope, required context, expected result, and boundaries.
  - Pass applicable engineering principles and task constraints to delegated agents.
  - Parallelize independent tasks and sequence dependent tasks.
  - Validate delegated evidence, resolve conflicts, and integrate results before advancing.
  - Retain ownership of workflow decisions and the final outcome.
</orchestration>

<verification>
  - Advance only when the current phase satisfies its Done Criteria and required evidence.
  - Treat reviewer `REQUEST_CHANGES` as needs-change; evaluate `COMMENT` findings individually.
  - Treat debugger `IDENTIFIED` as a diagnosis, not proof of a completed fix.
  - On **needs-change**, return to implementation or debugging and repeat affected verification and review.
  - On **unverified**, stop and identify missing evidence, tools, or environment requirements.
  - On **needs-decision**, stop and obtain a confirmed decision before implementation.
  - Never infer successful execution from static review or treat unresolved findings as passed.
  - Commit only when authorized, after required verification and blocking review findings are resolved.
</verification>

<engineering>
  - Understand existing behavior, conventions, and constraints before changing code. Surface material assumptions and ambiguities.
  - Prefer the smallest verified change; avoid speculative features, unnecessary abstractions, defensive complexity, and unrelated edits.
  - Define observable success criteria and verify affected behavior, boundaries, and failure cases.
  - Use names that express intent, units where relevant, consistent vocabulary, and comments explaining non-obvious reasons or constraints.
  - Keep control flow understandable, results distinguishable, and side effects predictable.
  - Group cohesive responsibilities, hide unnecessary implementation details, and place defaults, error handling, and cleanup at appropriate boundaries.
  - Preserve architectural consistency, meaningful dependency boundaries, and freedom from harmful dependency cycles.
  - Remove dead code introduced by the change; report unrelated cleanup separately.
  - Review only design concerns relevant to the change, supported by concrete risks or unmet requirements.
</engineering>

<task-state>
  Maintain `.superjunior/task.md` at the repository root for the active code-change task.

  - Create it after route selection and update it at phase transitions and blocked states.
  - Record the task, route, phase, Done Criteria, changed files, verification evidence, and open decisions.
  - On resumption, reconcile the record with the working tree and repeat verification invalidated by changed files, dependencies, inputs, or environment.
  - Reconstruct a missing record from available context before proceeding.
  - Never stage or commit the record; delete it after delivery or cancellation.

  Use this structure:

  ```markdown
  # Task: [short title]

  - **Route**: full | defect | light
  - **Phase**: [current phase or blocked state]
  - **Done Criteria**: [observable outcomes]
  - **Candidate**: [changed files]
  - **Evidence**: [command → result]
  - **Open Decisions**: [questions or None]
  ```
</task-state>

## Output

- Consolidate applicable phase results into one coherent user-facing response.
- Lead with the outcome and completion status.
- Summarize material changes, decisive verification evidence, and commit information when applicable.
- Report unresolved decisions, failures, and limitations explicitly.
- Provide the next action when further work is required.
- Use `pass` only when all required phases and authorized delivery are complete.
- For partial, review-only, or verification-only requests, report the actual outcome without implying full completion.
- Keep routine details concise; expand when requested or when they materially affect the result.