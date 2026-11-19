+++
title = "Maintain skills and the handbook"
navTitle = "Maintenance"
description = "Maintain the handbook and skill definitions."
section = "practice"
order = 0
permalink = "/maintenance/index.html"
+++

## Build and check the handbook

Use Node.js 22 or newer. Run `npm ci` and `npm run check` from the repository root. The check builds the handbook and verifies skill front matter, local references, the skill list, internal links, and byte-for-byte copies of downloadable definitions. Run `npm run dev` to preview the site and `npm run build` to build it on its own. Pages publishes after the checks pass.

## Update a skill

Keep the skill name and trigger in YAML front matter. State the input, execution boundary, and completion evidence in its definition. Keep the [handbook page](/) aligned with the contract and preserve the skill's directory layout for installation. Each installable skill has one handbook page with `source` pointing to its definition. Supporting pages omit `source`.

Handbook pages use TOML front matter. Preserve published permalinks and use root-relative links so Eleventy can apply the site prefix. When linking to a heading, give it an explicit HTML ID.

## Check a workflow change

Read examples against the skill contract. Check that each handoff supplies what the next skill needs and that completion claims have evidence. To check a host, install the skill folders in a fresh project and try relevant requests from the [examples](/examples/). Record the host, observed skill selection, and task result if reporting a compatibility finding.

## Run local Promptfoo verification

Use Node.js 22.22 or newer. For local ChatGPT authentication, check `codex login status` in your terminal. Promptfoo can reuse that login when Codex and OpenAI API keys are unset.

```sh
npm ci --prefix validation/promptfoo
npm --prefix validation/promptfoo test
npm --prefix validation/promptfoo run check
```

The first test command checks the graders without calling an agent. The live check uses your Codex quota. It runs a workspace preflight before testing a tag-filter fix and a release whose packaging can proceed while mock publication is blocked. The check repeats both cases twice after their initial pass. Every attempt uses a fresh copy of the fixture.

Find the report and per-case evidence under `_artifacts/test-it/promptfoo/`. If preflight fails, inspect its JSON result for login, command, or filesystem errors and rerun from a regular terminal that can execute Codex in a writable sandbox. For behavior failures, read the specific workspace checks in the evidence directory. Skill-read signals help diagnose routing. Runtime behavior and saved artifacts determine the case result.
