# SuperJunior

SuperJunior provides ten skills that coding agents can use throughout software development. Start with the result you need.

| Task | Skill |
| --- | --- |
| Investigate existing behavior, project context, historical rationale, or technical trade-offs. | `explore` |
| Define requirements when a goal, scope, or expected behavior needs clarification. | `specify` |
| Sequence work when a change needs coordinated steps, dependencies, or completion criteria. | `plan-working` |
| Design component responsibilities, interfaces, behavior, or interactions before implementation. | `design-component` |
| Create or modify code or engineering artifacts to implement specified behavior. | `implement-it` |
| Design, write, or run tests to verify behavior against requirements and contracts. | `test-it` |
| Review an existing specification, design, change, or document for defects and risks. | `review` |
| Diagnose an observed failure, intermittent behavior, or unexpected result. | `debug` |
| Create or update documentation for system behavior, decisions, or operating procedures. | `document` |
| Verify delivery readiness or perform authorized commits, packaging, releases, or deployments. | `deliver` |

## Install and try it

Copy the ten directories in `skills/` into your host's project skill directory. See [Host integration](https://slime21023.github.io/superjunior/host-integration/) for paths and troubleshooting. If upgrading, remove the old SuperJunior folders listed in [Skill workflows](https://slime21023.github.io/superjunior/subagents/) first.

```text
Use debug to find why an empty tag filter hides every item.
Then fix the cause and verify that empty and selected tags work.
Leave the edits in my working tree.
```

The [handbook](https://slime21023.github.io/superjunior/) describes each skill and how to combine them.

## Contribute

Run `npm ci` and `npm run check` to build the handbook and validate the skill definitions and links. See [Maintenance](https://slime21023.github.io/superjunior/maintenance/) for details.

## License

MIT. See [LICENSE](LICENSE).
