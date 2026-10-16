# SuperJunior

Engineering skills for scoped, verifiable work. Start with potato-mode, or use a workflow, design principle, or specialist skill directly.

## Read the handbook

Requires Node.js 22 or newer and npm. Run these commands from the repository root:

```sh
npm ci
npm run dev
```

Open the local address printed by Eleventy (normally http://localhost:8080). The handbook covers the Four-Layer Software Design Principles, daily engineering workflows, the five specialized agent roles, examples, and host integration.

```sh
npm run build
npm run check
```

The static site is written to `_site/`. Checks rebuild the site, verify skill coverage and internal links, and compare downloadable definitions with their source files.

## Use a skill

Give your coding agent access to the repository and ask it to read the appropriate skill:

```text
Read skills/potato-mode/SKILL.md and use it to fix the reported bug.
Reproduce the failure, verify the corrected behavior, and deliver local files.
```

Definitions are portable repository instructions. Your host must provide discovery, persistent activation, delegation, tools, and permission enforcement. Command registration depends on the host.

## Maintain the handbook

The pages in `docs/` are hand-authored Markdown with `+++` TOML frontmatter. Update the matching reference page when a skill changes, then run `npm run check`. Existing skill definitions keep their original YAML format.
