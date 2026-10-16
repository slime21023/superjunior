+++
title = "Maintain the handbook"
navTitle = "Maintenance"
description = "For contributors: preview the site, keep pages in step with the skills, and run the checks and evals."
section = "practice"
order = 1
permalink = "/maintenance/index.html"
+++

## Preview and build

Use Node.js 22 or newer. From the repository root, install the locked dependencies and start a local preview, then open the address Eleventy prints:

```sh
npm ci
npm run dev
```

For a production build and its checks:

```sh
npm run build
npm run check
```

Eleventy reads `docs/` and writes `_site/`. The build copies the assets and every checked-in skill file as-is, without transforming their contents. The lockfile fixes dependency resolution.

The site uses origin-root URLs, so preview or host it at an origin root. Deploying under a subpath would need coordinated URL handling and link verification.

## How pages map to skills

Every skill under `skills/` has exactly one reference page in `docs/skills/`, and that page names the skill's definition in its `source` field. Guide and role overview pages do not set `source`; they link the definitions they discuss in their body. Pages are hand-written Markdown: navigation is built from page metadata, but no page content is generated from the skill definitions.

## Front matter

Pages use TOML front matter between `+++` lines. The layout shows the title and description, so body headings start at level two.

```toml
+++
title = "Lexical & expression"
description = "Precise naming, code/comment division, and unified domain vocabulary."
permalink = "/skills/principles-lexical-expression/index.html"
section = "principles"
order = 1
source = "skills/principles-lexical-expression/SKILL.md"
+++
```

`title`, `description`, and `permalink` describe the page. `section` and `order` place it in the navigation, and the optional `navTitle` gives a shorter label there. `source` appears only on a skill's reference page.

Available sections are `start`, `mode`, `senior`, `principles`, `workflows`, `roles`, and `practice`.

## Keep pages and skills aligned

When a skill changes, update its reference page and any examples or workflow guidance it affects. Keep the actual rules, scope, artifacts, outcome meanings, and write boundaries accurate. If the repository contradicts itself, say so on the page instead of inventing a capability.

## Write skill definitions

Skill definitions use XML tags only to mark blocks. Tags stay bare: no attributes, no self-closing tags, and at most two levels of nesting. A first-level tag marks a block the agent must find as a whole, such as constraints, a procedure, or an output contract; a second level is only for repeated items with several fields. Metadata belongs in the front matter.

Inside a tag, write prose by default, because connected sentences keep the reasons, conditions, and exceptions that bullet fragments drop. Use other forms only where they fit:

- an ordered list for steps the agent runs in sequence;
- a checklist for items it must verify one by one;
- a table for items compared along the same dimensions;
- named items only when the name is referenced elsewhere, such as outcome codes or template fields;
- a template for output the agent must fill in.

State each rule directly and give its reason instead of relying on emphatic wording.

## What `npm run check` verifies

The command builds the site and runs Node's test runner to confirm that:

- every checked-in skill has exactly one reference page;
- internal page, fragment, source, and asset links resolve;
- copied skill definitions keep their original bytes;
- skill definitions use Agent Skills front matter whose name matches the directory, agent role files parse, references inside skills resolve, and XML block tags stay bare and at most two levels deep.

The checks do not judge whether the prose is accurate or the pages look right. Compare changed guidance with its source, and when layout or navigation changes, review desktop and mobile pages, keyboard navigation, visible focus, and horizontal overflow.

## Run the evals

`npm run eval:discovery`, `npm run eval:routing`, and `npm run eval:behavior` run promptfoo 0.124.1 against Claude Code, Codex CLI, and Antigravity CLI (`agy`). Those tools must be installed and signed in, and the runs use your own accounts and quotas.

| Eval | What it asks the agent | Passes when |
| :--- | :--- | :--- |
| Discovery | List its skills | Every directory under `skills/` appears in the reply |
| Routing | Which skill it would load first for a request | The first repository skill named is one the case allows |
| Behavior | Load that skill and report its first decision as JSON: skill, route, outcome, and first action | Each field the case sets matches its allowed values or pattern |

Every agent call gets a fresh workspace in the system temp directory containing `evals/fixture/` and the skills copied into that tool's discovery directory; the workspace is deleted afterwards. The graders in `evals/assertions.cjs` are deterministic. Every prompt forbids edits, so any file the agent creates or changes fails the case.

The agents also see skills installed in your personal directories, and those can win routing over SuperJunior's skills. A provider's `args` config passes extra CLI flags, for example `args: ["--disable", "plugins"]` to run Codex without installed plugins. agy runs at medium effort, because at its default effort it keeps exploring past the time limit. It also runs with tool approval and `--sandbox`, because headless agy ends the turn without output when a tool needs a permission prompt.

Replies vary between runs, so judge a case by its pass rate over repeated runs (`--repeat`), not by a single failure. Results go to `evals/results/`, which git ignores; `npx promptfoo@0.124.1 view` opens them in a browser.
