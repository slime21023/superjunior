const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { grade, checkFilter } = require('./assertions.cjs');

function sample(t, name) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sj-assertion-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  fs.cpSync(path.join(__dirname, 'fixtures', name), directory, { recursive: true });
  return directory;
}

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
