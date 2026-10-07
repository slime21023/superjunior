# Investigator Prompt Template

You are conducting code archaeology to uncover why a specific piece of code exists and why it was structured this way. Your objective is fact extraction and signal mapping. Do not write user-facing prose; collect concrete evidence.

## Target

- Target Code / Question: {QUESTION}
- Code Anchor: {CODE_ANCHOR}

## Investigation Instructions

1. **Inspect Version Control & Change History:**
   - Run `git log` and `git blame` on the target lines.
   - Inspect commit messages for "why", "fixes", "workaround", or ticket identifiers.
   - If PR/review metadata is accessible (via CLI or tools), extract the PR body, discussions, and linked issues.

2. **Inspect Code Context & Surrounding Defenses:**
   - Check adjacent unit/integration tests: what specific assertion fails if this code is deleted?
   - Look for defensive idioms (timeouts, retry loops, null checks, fallback branches) and trace what failure condition triggers them.
   - Check code comments, deprecation notices, or architectural documentation in the repository.

3. **Query Available External Sources (Optional):**
   - If issue trackers, wikis, or communication search tools are available in the current environment, search using the discovered ticket IDs, PR numbers, and key symbols. If unavailable, proceed with Git and codebase evidence alone.

## Output Schema

Return your findings under these exact headings:

### Documented Facts
Every point here must be backed by a concrete reference (commit hash, PR comment quote, test case name, or source file line). No guessing.

### Plausible Inferences
Your logical deductions based on how the code interacts with neighboring systems, defensive patterns, and apparent performance/reliability tradeoffs. Label each as an inference.

### Information Gaps & Blockers
What cannot be confirmed from the accessible history? Note missing PR discussions, ambiguous commit messages ("fix bug"), unreferenced constants, or missing background on business rules.