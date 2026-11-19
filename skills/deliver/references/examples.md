# Worked examples

Versions, paths, and results are illustrative.

## Complete a local commit

### Delivery result

The tag-filter fix is committed locally on `fix/tag-filter` as `a1b2c3d`.

### Readiness evidence

- **Filter regression.** `node --test test/filter.test.js` passed for the staged changes. The staged diff contains only the shared filter and its regression tests.

### Delivery record

- **Local commit completed.** `git show --stat a1b2c3d` confirmed the intended files. `git rev-parse --short HEAD` confirmed the commit on the target branch.

## Report a publication failure after packaging

### Delivery result

The CSV export package for v1.4.0 is built and available for reuse. The registry rejected the publish request, and v1.4.0 is absent from the registry.

### Readiness evidence

- **Package check.** Installation and a CSV export smoke test passed using `dist/notes-1.4.0.tgz`.

### Delivery record

| Action | Target | Status | Verification evidence |
| --- | --- | --- | --- |
| Package | `dist/notes-1.4.0.tgz` | Completed | Package contents verified. SHA-256 recorded in `dist/SHA256SUMS`. |
| Publish | Project registry, v1.4.0 | Failed | Registry rejected the request for insufficient permissions. A version lookup confirmed v1.4.0 was absent. |

### Remaining work

- **Publish v1.4.0.** Once publish access is restored, recheck version availability and the tarball checksum, then retry with the verified package.

## Package a release candidate while publication is blocked

### Delivery result

The v1.4.0 candidate is packaged and available for reuse. Publication is blocked pending CSV download acceptance.

### Readiness evidence

- **Package | Build and artifact checks.** The v1.4.0 candidate built successfully. The package contents and checksum were verified.
- **Publish | CSV download acceptance.** The end-to-end download check for the same candidate was blocked because the test database was offline.

### Delivery record

| Action | Target | Status | Verification evidence or blocker |
| --- | --- | --- | --- |
| Package | `dist/notes-1.4.0.tgz` | Completed | SHA-256 recorded in `dist/SHA256SUMS`. |
| Publish | Project registry, v1.4.0 | Blocked | The required CSV download check still needs a passing result. No publish request was sent. |

### Remaining work

- **Publish v1.4.0.** Restore the test database and rerun CSV download acceptance against the same candidate. After it passes, verify the tarball checksum and reuse the package for publication.
