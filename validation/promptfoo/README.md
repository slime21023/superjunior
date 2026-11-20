# SuperJunior Promptfoo validation

## Run local Promptfoo verification

Use Node.js 22.22 or newer. For local ChatGPT authentication, check `codex login status` in your terminal. Promptfoo can reuse that login when Codex and OpenAI API keys are unset.

```sh
npm ci --prefix validation/promptfoo
npm --prefix validation/promptfoo test
npm --prefix validation/promptfoo run check
```

The test command checks the graders without calling an agent. The live check uses your Codex quota. It runs a workspace preflight, then evaluates feature planning, a tag-filter fix, PR review with a documentation update, and both blocked and eligible mock publication. Each case runs with named skills and with a natural task description. A fresh session attempts the feature handoff using the verified specification and work plan from the named planning case. Each evaluation gets a fresh copy of its inputs.

Find the report and per-case evidence under `_artifacts/test-it/promptfoo/`. If preflight fails, inspect its JSON result for login, command, or filesystem errors and rerun from a regular terminal that can execute Codex in a writable sandbox. For behavior failures, read the specific workspace checks in the evidence directory. Skill-read signals help diagnose routing. Runtime behavior and saved artifacts determine the case result.
