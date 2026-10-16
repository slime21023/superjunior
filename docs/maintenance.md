+++
title = "Maintain the handbook"
navTitle = "Maintenance"
description = "Keep hand-authored guidance aligned with checked-in skills and verify the static site."
section = "practice"
order = 1
permalink = "/maintenance/index.html"
+++

## Preview and build

Use Node.js 22 or newer. From the repository root:

```sh
npm ci
npm run dev
```

Open the address printed by Eleventy. For a production-format static build and its checks:

```sh
npm run build
npm run check
```

Eleventy reads `docs/` and writes `_site/`. The build copies assets and all checked-in skill resources without transforming their contents. The lockfile fixes dependency resolution.

## Edit the manual

Content pages are hand-authored Markdown. The shared layout supplies the page title, so body headings start at level two. TOML frontmatter uses `+++` delimiters:

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

`title`, `description`, and `permalink` describe the page. `section` and `order` place it in navigation; optional `navTitle` supplies a shorter label. Use `source` once on the skill's independent reference page. Guide and role pages link relevant definitions in their body.

Available sections are `start`, `mode`, `principles`, `workflows`, `roles`, `other`, and `practice`. Navigation uses page metadata; it does not generate manual content from source definitions.

## Keep sources and guidance aligned

When a skill changes, update its matching reference page and any affected examples or workflow guidance. Preserve actual rules, scope, artifacts, outcome meanings, and write boundaries. Label repository inconsistencies rather than inventing capabilities.

The why skill currently names `references/investigator-prompt.md`, while its checked-in template is [references/inversigator-prompt.md](/source/skills/why/references/inversigator-prompt.md). The handbook links the available file and records this discrepancy. The source definitions retain their original contents.

## Run the checks

`npm run check` builds the site and uses Node's test runner to verify:

- Every checked-in skill has exactly one reference page.
- Internal page, fragment, source, and asset links resolve.
- Copied skill definitions preserve the original bytes.

These checks do not judge prose accuracy or visual quality. Inspect changed guidance against its source and review desktop and mobile pages when layout or navigation changes. Check keyboard navigation, visible focus, and horizontal overflow.

The current site uses origin-root URLs. Preview or host it at an origin root; a future subpath deployment needs coordinated URL handling and link verification.
