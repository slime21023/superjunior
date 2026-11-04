---
name: agent-git-committer
description: "Prepare and create authorized, coherent commits from verified changes."
license: MIT
---

# agent-git-committer

<Commit-Principles>
  1. Atomic Commit Discipline:
     - Single Logical Change: One commit must represent exactly one logical intention. If a change fixes a bug AND reformats unrelated code, split them into two commits.
     - Separation of Concerns: Never mix behavioral modifications (new logic, bug fixes) with structural refactoring or pure formatting (indentation, import sorting).
     - Bisectability: Every single commit must leave the repository in a buildable and test-passing state (clean `git bisect`).

  2. Subject Line Semantics:
     - Format: `<type>(<scope>): <imperative summary>` (Max 50-72 chars, no trailing period).
     - Types:
       * `feat`: New user-facing or API capability.
       * `fix`: Bug fix restoring intended behavior.
       * `refactor`: Code change that neither fixes a bug nor adds a feature.
       * `perf`: Performance enhancement without altering external semantics.
       * `test`: Adding or correcting tests without functional code change.
       * `chore`: Build scripts, CI pipelines, or auxiliary tool configs.
     - Mood: Always use the imperative mood (e.g., "Add timeout guard", not "Added timeout guard" or "Adds timeout guard").

  3. Body Context & Intent:
     - Focus on "Why": Explain the root cause of the problem and the rationale behind the chosen solution.
     - Address Alternatives & Trade-offs: Note any rejected alternatives or known trade-offs if the implementation is non-obvious.
     - Avoid Diff Repetition: Do NOT merely list the modified files or repeat what `git diff` clearly shows.

  4. Breaking Changes & Footers:
     - Explicit Breakage: If an API contract, database schema, or CLI signature breaks backwards compatibility, mark with `!` (e.g., `feat(api)!: ...`) and append a `BREAKING CHANGE:` explanation in the footer.
     - Issue Linkage: Reference tracking IDs, issues, or PR numbers using standard footers (e.g., `Closes #123`, `Refs #456`).

  5. Prepare, Commit, and Verify:
     - Inspect the working tree and staged diff; selectively stage only authorized changes and preserve unrelated work, including existing staged changes.
     - Verify the staged snapshot with relevant checks. Revalidate when existing evidence covers different content, and exclude unrelated staged changes from the commit without discarding them.
     - Create commits only within existing authorization; a message-only request ends at preparation. If a command or hook fails, report the failure and remaining work.
     - Confirm each created commit's SHA and contents, then inspect the remaining working tree. A prepared message is not evidence of a created commit.
</Commit-Principles>

<Output-Formation>
  ### Commit Message

  ```text
  <type>(<scope>): <short imperative summary>

  [Why]
  - {Problem or motivation}

  [What]
  - {Key changes}

  [Impact / Trade-offs] (Optional)
  - {Breaking changes, migrations, or side effects}

  Refs: #{issue_id} (Optional)
  BREAKING CHANGE: {description} (Optional)
  ```

  ### Commit Result
  - **Status**: [CREATED | PREPARED | BLOCKED]
  - **Commits**: [Actual commit SHAs and summaries, or None]
  - **Verification**: [Checks and results for the committed or prepared snapshot; identify missing evidence]
  - **Remaining**: [Uncommitted changes, failures, limitations, or None]

  Use CREATED only after confirming the commits exist, PREPARED for messages or changes awaiting commit, and BLOCKED when the requested work cannot proceed. Report any commits already created even if a later commit fails.
</Output-Formation>
