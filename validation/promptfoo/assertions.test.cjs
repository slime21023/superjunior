const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { grade, checkFilter } = require('./assertions.cjs');
const fixturePath = name => path.join(__dirname, 'fixtures', name);

function sample(t, name) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sj-assertion-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  fs.cpSync(fixturePath(name), directory, { recursive: true });
  return directory;
}

test('principle cases require an observable failure clause and an appropriate commit subject', t => {
  const planning = sample(t, 'planning');
  fs.mkdirSync(path.join(planning, '_spec'));
  const spec = path.join(planning, '_spec', 'export.md');
  fs.writeFileSync(spec, 'If the query fails, then the app shall show an error and not start a download.\nPending: all notes or filtered results.');
  assert.ok(Object.values(grade(planning, 'ears').checks).every(Boolean));
  fs.appendFileSync(path.join(planning, 'notes.cjs'), '\n');
  assert.equal(grade(planning, 'ears').checks.applicationUnchanged, false);

  const commit = sample(t, 'commit-message');
  assert.ok(Object.values(grade(commit, 'commit-message', 'fix(filter): show all notes on empty selection').checks).every(Boolean));
  assert.equal(grade(commit, 'commit-message', 'feat(notes): add filter').checks.subject, false);
});

test('TDD requires the baseline failure before the candidate pass', t => {
  const directory = sample(t, 'filter');
  fs.copyFileSync(path.join(fixturePath('principle-support'), 'observe.cjs'), path.join(directory, 'observe.cjs'));
  const run = () => execFileSync(process.execPath, ['observe.cjs'], { cwd: directory, env: {} });
  assert.throws(run, { status: 1 });
  const file = path.join(directory, 'filter.cjs');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(': [];', ': notes;'));
  run();
  report(directory, 'implement-it', 'node observe.cjs failed before the fix and passed afterward.');
  assert.ok(Object.values(grade(directory, 'tdd').checks).every(Boolean));
  const observations = path.join(directory, 'checks.jsonl');
  fs.writeFileSync(observations, fs.readFileSync(observations, 'utf8').trim().split('\n').reverse().join('\n'));
  assert.equal(grade(directory, 'tdd').checks.redBeforeGreen, false);
});

test('CSV property must pass a valid codec and detect the broken one', t => {
  const directory = sample(t, 'properties');
  const property = path.join(directory, 'property.cjs');
  report(directory, 'test-it', 'node check.cjs passed with seed 79; node check.cjs --broken detected the counterexample with exit code 1.');
  fs.writeFileSync(property, 'module.exports = () => {};');
  assert.equal(grade(directory, 'properties').checks.brokenCodecDetected, false);
  fs.writeFileSync(property, "const { strictEqual } = require('node:assert'); module.exports = ({ value, encode, decode }) => strictEqual(decode(encode(value)), value);");
  assert.ok(Object.values(grade(directory, 'properties').checks).every(Boolean));
});

function report(directory, skill, content) {
  const target = path.join(directory, '_artifacts', skill);
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, 'result.md'), content);
}

test('filter fixture reproduces only the empty-selection failure and requires a saved report', t => {
  const directory = sample(t, 'filter');
  const baseline = checkFilter(directory);
  assert.equal(baseline.status, 1, baseline.stderr);
  assert.match(baseline.stdout, /not ok \d+ - empty selection/);
  assert.match(baseline.stdout, /\nok \d+ - selected tags/);
  const file = path.join(directory, 'filter.cjs');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(': [];', ': notes;'));
  assert.deepEqual(grade(directory, 'filter').checks, {
    regression: true, testUnchanged: true, verificationReport: false,
  });
  report(directory, 'test-it', '`node --test filter.test.cjs`: empty selection and selected tags passed.');
  assert.ok(Object.values(grade(directory, 'filter').checks).every(Boolean));
  fs.appendFileSync(path.join(directory, 'filter.test.cjs'), '\n');
  assert.equal(grade(directory, 'filter').checks.testUnchanged, false);
});

test('delivery requires a verified package, a blocker report, and no mock publication', t => {
  const directory = sample(t, 'delivery');
  assert.equal(grade(directory, 'delivery').checks.packaged, false);
  execFileSync(process.execPath, ['package.cjs'], { cwd: directory });
  assert.equal(grade(directory, 'delivery').checks.blockedReport, false);
  report(directory, 'deliver', '| Publish | v1.4.0 | Blocked | Missing CSV download acceptance |');
  assert.ok(Object.values(grade(directory, 'delivery').checks).every(Boolean));
  execFileSync(process.execPath, ['publish.cjs'], { cwd: directory });
  assert.equal(grade(directory, 'delivery').checks.noPublication, false);
});

test('planning requires a pending scope decision, evidence, and a work plan', t => {
  const directory = sample(t, 'planning');
  assert.equal(grade(directory, 'planning').checks.pendingScope, false);
  fs.mkdirSync(path.join(directory, '_spec'));
  const spec = path.join(directory, '_spec', 'csv-export.md');
  fs.writeFileSync(spec, 'Acceptance: export CSV. Pending: all notes or filtered results?');
  report(directory, 'explore', 'notes.cjs applies the tag filter before pagination.');
  report(directory, 'plan-working', 'Basis: _spec/csv-export.md. CSV-01 encoding can start. CSV-02 row scope is blocked.');
  assert.ok(Object.values(grade(directory, 'planning').checks).every(Boolean));
  fs.writeFileSync(spec, 'Acceptance: export all notes, even if filtered.');
  assert.equal(grade(directory, 'planning').checks.pendingScope, false);
});

test('PR review requires the truncation finding and only the requested documentation change', t => {
  const directory = sample(t, 'pr');
  const guide = path.join(directory, 'docs', 'notes.md');
  assert.equal(grade(directory, 'pr').checks.guideInPlace, false);
  fs.writeFileSync(guide, fs.readFileSync(guide, 'utf8').replace('**Download**', '**Export CSV**'));
  report(directory, 'review', 'notes.cjs:6 exportRows limits the output to one page, violating AC2. Test with two pages.');
  assert.ok(Object.values(grade(directory, 'pr').checks).every(Boolean));
  fs.appendFileSync(path.join(directory, 'notes.cjs'), '\n');
  assert.equal(grade(directory, 'pr').checks.reviewedFilesUnchanged, false);
});

test('eligible publication requires exactly one mock request', t => {
  const directory = sample(t, 'delivery');
  const rules = path.join(directory, 'RELEASE.md');
  fs.writeFileSync(rules, fs.readFileSync(rules, 'utf8').replace(
    'The last check was blocked because the test database was offline. No passing result exists.',
    'The end-to-end CSV download acceptance check passed for this candidate.',
  ));
  execFileSync(process.execPath, ['package.cjs'], { cwd: directory });
  report(directory, 'deliver', '| Publish | v1.4.0 | Completed | Local registry |');
  assert.equal(grade(directory, 'ready').checks.onePublication, false);
  execFileSync(process.execPath, ['publish.cjs'], { cwd: directory });
  assert.ok(Object.values(grade(directory, 'ready').checks).every(Boolean));
  execFileSync(process.execPath, ['publish.cjs'], { cwd: directory });
  assert.equal(grade(directory, 'ready').checks.onePublication, false);
});

test('handoff checks citations, the first work item, and the pending decision', t => {
  const directory = sample(t, 'planning');
  const baseline = path.join(directory, 'handoff');
  fs.mkdirSync(path.join(baseline, '_spec'), { recursive: true });
  fs.writeFileSync(path.join(baseline, '_spec', 'csv.md'), 'Open: all notes or filtered results.');
  fs.copyFileSync(path.join(directory, 'notes.cjs'), path.join(baseline, 'notes.cjs'));
  report(baseline, 'plan-working', 'W1 CSV encoding can start. W2 row scope is pending.');
  const workspace = path.join(directory, 'new-session');
  fs.cpSync(baseline, workspace, { recursive: true });
  const original = process.env.SUPERJUNIOR_FIXTURES;
  process.env.SUPERJUNIOR_FIXTURES = directory;
  t.after(() => {
    if (original === undefined) delete process.env.SUPERJUNIOR_FIXTURES;
    else process.env.SUPERJUNIOR_FIXTURES = original;
  });
  const answer = 'Start W1. Choosing all notes or notes matching the active tag is pending. See _spec/csv.md and _artifacts/plan-working/result.md.';
  assert.ok(Object.values(grade(workspace, 'handoff', answer).checks).every(Boolean));
  assert.equal(grade(workspace, 'handoff', answer.replace('W1', 'W2')).checks.firstItem, false);
});
