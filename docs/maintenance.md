+++
title = "Maintain skills and the handbook"
navTitle = "Maintenance"
description = "Keep instructions, explanations, checks, and host evaluations aligned."
section = "practice"
order = 0
permalink = "/maintenance/index.html"
+++

This page is for contributors. To use the skills in another project, follow [Getting started](/getting-started/); building this website is not part of skill installation.

## Preview and build

Use Node.js 22 or newer and install the locked dependencies from the repository root:

```sh
npm ci
npm run dev
```

Open the address Eleventy prints, normally `http://localhost:8080/superjunior/`. Run the complete local checks with:

```sh
npm run check
```

That command builds the site and runs the site, skill, eval-grader, and workspace-integrity tests without calling an agent. The workspace tests require Git on PATH. `npm run build` builds without running those tests. Eleventy reads `docs/`, writes `_site/`, and copies assets and skill definitions without transforming their contents.

## Keep each kind of information in one place

| Content | Owner |
| :--- | :--- |
| Agent instructions and output contracts | `skills/<name>/SKILL.md` |
| User-facing explanation of a skill | Its reference page in `docs/skills/` |
| Installation, host capabilities, and recorded compatibility | [Host integration](/host-integration/) |
| Request examples and expected results | [Examples](/examples/) |
| Supporting design explanations | [Design guidance](/principles/) |
| Build, eval, and publishing procedures | This page |

Documentation explains the existing contract. When a behavior changes, update the relevant skill, callers or modes that interpret it, its reference page, and affected examples or evals. Avoid adding a capability to prose that the skill does not define.

## Write useful skill pages

A reference page should help someone decide when to use the skill, provide the needed context, interpret the result, and choose a next step. Headings and detail can vary with the role.

Skill definitions likewise need a recognizable purpose, operating guidance, and usable result. They do not need identical templates or shared status fields. Modes may add routing and orchestration. Explain how handoffs are interpreted where the coordinating mode owns that decision.

Keep front matter for metadata. XML tags in skill definitions mark blocks: no attributes, no self-closing tags, and at most two levels of nesting. Preserve meaningful tag names and case. Put literal angle-bracket templates in inline code or fenced `text` blocks.

## Page metadata and links

Handbook pages use TOML front matter:

```toml
+++
title = "Engineering principles"
description = "Shared guidance for scoped, verified changes."
section = "principles"
order = 1
permalink = "/skills/engineering-principles/index.html"
source = "skills/engineering-principles/SKILL.md"
+++
```

The layout displays `title` and `description`; begin body headings at level two. Optional `navTitle` shortens a navigation label. `section` selects a group from `docs/_data/site.json`, and `order` controls the order within that group.

Every skill has exactly one reference page with its `source`. Supporting guides and overview pages omit `source` and link to the relevant reference page. Page content is hand-written; navigation comes from metadata.

Keep existing permalinks when rewriting a page. Write internal links as root paths such as `/skills/junior-mode/`; the build adds the configured `/superjunior/` prefix. For a link to a section, give its heading an explicit HTML ID, such as `<h2 id="verification">Verification</h2>`; this renderer does not generate heading IDs automatically. Update fragment links when headings change. The prefix is defined in `eleventy.config.mjs`.

## Check what changed

`npm run check` verifies that each skill has one reference page, internal links resolve under the path prefix, copied definitions preserve their bytes, skill front matter and references are valid, XML blocks meet the structural rules, and eval expectations refer to existing skills.

It also exercises the eval graders against valid and invalid replies, checks behavior-case expectations, and tests workspace comparison in disposable Git repositories. These regression tests cover committed changes, staged-only changes, ignored skill files, additions, deletions, and directory links.

Those checks do not prove that prose describes the contract accurately. Read changed examples against the source: review verdicts, diagnosis confidence, implementation status, and workflow outcomes have different meanings. Check write boundaries and the evidence needed to claim completion.

When navigation or rendered content changes, inspect desktop and mobile pages. Check keyboard access, visible focus, internal and source links, and unwanted horizontal overflow. Review tables and code samples at narrow widths.

<h2 id="run-the-optional-cli-evals">Run the optional CLI evals</h2>

The evals call real installed and signed-in coding agents and use your account quotas. They require the named CLIs on PATH as well as the project's dependencies.

```sh
npm run eval:discovery
npm run eval:routing
npm run eval:behavior
```

The scripts use promptfoo 0.124.1 and configurations under `evals/`:

| Suite | What it checks |
| :--- | :--- |
| Discovery | Whether a reply containing one skill name per line lists every repository skill; other installed skills are allowed |
| Routing | Whether the entire reply is exactly one allowed skill name |
| Behavior | Whether a complete JSON decision uses valid values and matches the case's route, outcome, next action, or native role result |

Behavior replies use fixed action categories, such as `inspect-history` and `reproduce`, instead of keyword matching in prose. Cases that assess a role result retain that role's fields and vocabulary: reviewer `Verdict`, debugger `Status` and verification `Result`, implementer and committer `Status`, or `why`'s `Confidence`. The common JSON object is an evaluation envelope, not a required format for normal skill use. A role result does not automatically become a workflow outcome; use `none` when no such outcome is being assessed.

The provider creates a temporary Git workspace from `evals/fixture/`, copies the skills to the host's discovery directory, and removes the workspace after the call. All three graders require integrity metadata and reject changes to final file contents or paths, Git HEAD, or the staged index. The snapshot includes ignored skill directories and records symbolic links without following them. A clean `git status` alone is insufficient because a commit can hide a changed worktree.

This comparison does not detect a write that is fully reverted before the final snapshot, changes to other Git internals, or writes outside the workspace. It is an integrity check, not a sandbox or a tool-execution trace. Discovery and routing forbid file reads and commands, but these graders cannot prove those instructions were followed.

Read `evals/providers/agent-cli.mjs` before changing execution settings. Codex runs in read-only mode; agy uses plan mode, sandboxing, and automatic tool approval in the temporary workspace. These settings are specific to evaluation, not installation instructions.

Personal skills or plugins can affect selection. Provider `args` can pass additional CLI flags, but support depends on the installed host. Record the versions and configuration used when comparing results.

Results are written to `evals/results/`, which Git ignores. Rerun affected cases without cached provider responses after changing the provider or its metadata contract, for example `npm run eval:behavior -- --no-cache`. Repeat cases when evaluating consistency; a single model response does not establish a reliable pass rate. These suites test discovery and stated decisions, not end-to-end editing, testing, committing, or publishing.

## Publish

The workflow in `.github/workflows/pages.yml` runs on pushes to `main` or manual dispatch. It installs dependencies, runs `npm run check`, and deploys `_site/` only after the checks pass.

The handbook is served at [SuperJunior on GitHub Pages](https://slime21023.github.io/superjunior/). If its hosting path changes, update `pathPrefix`, affected links, and preview instructions together. Publishing is a separate action from editing or locally building documentation.
