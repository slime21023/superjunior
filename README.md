# SuperJunior

SuperJunior provides eleven composable skills for coding agents across the software development lifecycle. Use the [skill overview](https://slime21023.github.io/superjunior/) to choose the result you need, then see the [workflow guide](https://slime21023.github.io/superjunior/workflows/) for examples of combining skills.

## Install and try it

Copy the eleven core folders in `skills/`, including their `references/`, into your host's project skill directory. Select any additional `prin-*` folders you want to install. See [Host integration](https://slime21023.github.io/superjunior/host-integration/) for paths and [Principles and practices](https://slime21023.github.io/superjunior/principles/) for optional methods.

```text
Use debug to reproduce why clearing the last tag hides every note.
Fix the cause with implement-it, then use test-it to verify empty and selected tag cases.
Leave the edits in my working tree.
```

## Contribute

Use Node.js 22 or newer for the handbook. Run `npm ci` followed by `npm run check` to build it and check skill definitions, downloadable files, and internal links. Use `npm run dev` for a local preview and `npm run build` to produce the site. Pages publishes after the checks pass.

Each installable skill has one hand-authored page in `docs/skills/` with `source` pointing to its definition. Use root-relative links so Eleventy can apply the project path prefix. Use explicit IDs for headings linked from other pages.

See the [Promptfoo instructions](validation/promptfoo/README.md) to run local behavior and handoff validation.

## License

MIT. See [LICENSE](LICENSE).
