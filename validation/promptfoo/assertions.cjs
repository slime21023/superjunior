const fs = require('node:fs');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');
const { spawnSync } = require('node:child_process');

const fixture = path.join(__dirname, 'fixtures');
const digest = data => createHash('sha256').update(data).digest('hex');
const read = (directory, file) => fs.readFileSync(path.join(directory, file), 'utf8');

function checkFilter(workspace) {
  const test = path.join(fixture, 'filter', 'filter.test.cjs');
  return spawnSync(process.execPath, [
    '--permission', '--test-reporter=tap', '--allow-fs-read=' + workspace,
    '--allow-fs-read=' + test, test, workspace,
  ], { cwd: workspace, env: {}, encoding: 'utf8', timeout: 10000 });
}

function markdown(workspace, directory) {
  const folder = path.join(workspace, directory);
  if (!fs.existsSync(folder) || !fs.lstatSync(folder).isDirectory()) return [];
  return fs.readdirSync(folder, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => path.join(directory, entry.name));
}

function report(workspace, skill) {
  return markdown(workspace, path.join('_artifacts', skill)).map(file => read(workspace, file)).join('\n');
}

const handoffDirectories = ['_spec', '_artifacts/plan-working'];
const workItem = /\b(?:W\d+|[A-Z][A-Z0-9]*-\d+)\b/;
const unchanged = (workspace, baseline, files) =>
  files.every(file => read(workspace, file) === read(baseline, file));

function grade(workspace, scenario, output = '') {
  switch (scenario) {
    case 'preflight': {
      const expected = process.env.SUPERJUNIOR_PROBE_DIGEST;
      const file = path.join(workspace, 'probe-result.txt');
      return { checks: { probe: !!expected && fs.existsSync(file)
        && read(workspace, 'probe-result.txt').trim() === expected } };
    }
    case 'filter': {
      const result = checkFilter(workspace);
      const notes = report(workspace, 'test-it');
      return { checks: {
        regression: result.status === 0 && /^ok \d+ - empty selection$/m.test(result.stdout)
          && /^ok \d+ - selected tags$/m.test(result.stdout),
        testUnchanged: read(workspace, 'filter.test.cjs') === read(path.join(fixture, 'filter'), 'filter.test.cjs'),
        verificationReport: /node\s+(?:--test\s+)?[^\r\n]*filter\.test\.cjs/i.test(notes)
          && /\bpass(?:ed|ing)?\b/i.test(notes) && /empty selection|empty[- ]selection/i.test(notes)
          && /selected[- ]tags?|non[- ]empty/i.test(notes),
      }, evidence: { regression: result.stdout + (result.stderr ?? ''), report: notes } };
    }
    case 'ears': {
      const spec = markdown(workspace, '_spec').map(file => read(workspace, file)).join('\n');
      return { checks: {
        failureRequirement: spec.split('\n').some(line =>
          /\bif\b.*query.*fail.*\bthen\b.*\bshall\b/i.test(line)
          && /error/i.test(line) && /(?:not|no|without|prevent|refrain).*download/i.test(line)),
        pendingScope: /all notes/i.test(spec) && /filter/i.test(spec)
          && /pending|open decision|unresolved|to confirm/i.test(spec),
        applicationUnchanged: unchanged(workspace, path.join(fixture, 'planning'), ['notes.cjs']),
      }, evidence: { spec } };
    }
    case 'tdd': {
      const result = grade(workspace, 'filter');
      const logPath = path.join(workspace, 'checks.jsonl');
      const log = fs.existsSync(logPath) ? read(workspace, 'checks.jsonl').trim().split('\n').map(JSON.parse) : [];
      const baseline = digest(fs.readFileSync(path.join(fixture, 'filter', 'filter.cjs')));
      const candidate = digest(fs.readFileSync(path.join(workspace, 'filter.cjs')));
      const red = log.findIndex(entry => entry.source === baseline && entry.status === 1);
      const notes = report(workspace, 'implement-it');
      return { checks: {
        regression: result.checks.regression,
        testUnchanged: result.checks.testUnchanged,
        observationScriptUnchanged: unchanged(workspace, path.join(fixture, 'principle-support'), ['observe.cjs']),
        redBeforeGreen: red >= 0 && candidate !== baseline
          && log.slice(red + 1).some(entry => entry.source === candidate && entry.status === 0),
        implementationRecord: /observe\.cjs/i.test(notes) && /fail/i.test(notes) && /pass/i.test(notes),
      }, evidence: { observations: log, regression: result.evidence.regression, report: notes } };
    }
    case 'properties': {
      const harness = path.join(fixture, 'properties', 'check.cjs');
      const run = (...args) => spawnSync(process.execPath, [
        '--permission', '--allow-fs-read=' + workspace, '--allow-fs-read=' + harness,
        harness, workspace, ...args,
      ], { cwd: workspace, env: {}, encoding: 'utf8', timeout: 10000 });
      const normal = run();
      const broken = run('--broken');
      const notes = report(workspace, 'test-it');
      return { checks: {
        validCodecPasses: normal.status === 0 && /60 generated cases with seed 79/.test(normal.stdout),
        brokenCodecDetected: broken.status === 1 && /Counterexample seed 79:/.test(broken.stderr),
        harnessUnchanged: unchanged(workspace, path.join(fixture, 'properties'), ['README.md', 'check.cjs']),
        reproducibleReport: /check\.cjs/i.test(notes) && /--broken/.test(notes)
          && /\b79\b/.test(notes) && /pass|exit code 0/i.test(notes)
          && /fail|exit code 1|counterexample/i.test(notes),
      }, evidence: { normal: normal.stdout, broken: broken.stderr, report: notes } };
    }
    case 'commit-message':
      return { checks: {
        subject: /(?:^|[\s`])fix\(filter\):[^\r\n]*(?:empty|last tag|no tag|clear)/i.test(output),
        filesUnchanged: fs.readdirSync(workspace).filter(name => name !== '.agents').join() === 'CHANGE.md'
          && unchanged(workspace, path.join(fixture, 'commit-message'), ['CHANGE.md']),
      }, evidence: { subject: output } };
    case 'planning': {
      const spec = markdown(workspace, '_spec').map(file => read(workspace, file)).join('\n');
      const plan = report(workspace, 'plan-working');
      const investigate = report(workspace, 'explore');
      return { checks: {
        observedBehavior: /notes\.cjs/i.test(investigate) && /filter|tag/i.test(investigate)
          && /paginat|page|slice/i.test(investigate),
        pendingScope: /acceptance/i.test(spec) && /all notes/i.test(spec) && /filter/i.test(spec)
          && /pending|open decision|unresolved|to confirm|blocked/i.test(spec),
        actionablePlan: workItem.test(plan) && /csv/i.test(plan)
          && /block|pending|depend/i.test(plan) && /can (?:start|proceed)|independent|unblocked|while/i.test(plan)
          && /_spec[/\\]/i.test(plan),
        applicationUnchanged: unchanged(workspace, path.join(fixture, 'planning'), ['notes.cjs']),
      }, evidence: { spec, plan, investigate } };
    }
    case 'pr': {
      const notes = report(workspace, 'review');
      const guide = read(workspace, 'docs/notes.md');
      return { checks: {
        truncationFinding: /notes\.cjs/i.test(notes) && /AC2/i.test(notes)
          && /page|paginat/i.test(notes) && /exportRows|export/i.test(notes)
          && /verify|check|test/i.test(notes),
        guideInPlace: /\bExport CSV\b/.test(guide) && !/\*\*Download\*\*/.test(guide)
          && guide.includes('## Editing a note') && guide.includes('Changes are saved when you select Save.'),
        reviewedFilesUnchanged: unchanged(workspace, path.join(fixture, 'pr'), ['notes.cjs', '_spec/csv-export.md']),
      }, evidence: { review: notes, guide } };
    }
    case 'handoff': {
      const files = handoffDirectories.flatMap(directory => markdown(workspace, directory));
      const baseline = path.join(process.env.SUPERJUNIOR_FIXTURES, 'handoff');
      const expected = handoffDirectories.flatMap(directory => markdown(baseline, directory));
      const cited = output.replaceAll('\\', '/');
      const plan = report(workspace, 'plan-working');
      const item = plan.match(workItem)?.[0];
      return { checks: {
        specAndPlanCited: expected.length >= 2 && expected.every(file => cited.includes(file.replaceAll('\\', '/'))),
        firstItem: !!item && new RegExp('\\b' + item + '\\b', 'i').test(output),
        pendingScope: /all notes/i.test(output) && /filter|match(?:es|ing)[^\r\n]*tag/i.test(output)
          && /block|pending|decid|confirm/i.test(output),
        inputsUnchanged: files.length === expected.length && unchanged(workspace, baseline, ['notes.cjs', ...expected]),
      }, evidence: { response: output } };
    }
    case 'delivery':
    case 'ready': {
      const ready = scenario === 'ready';
      const expected = 'notes v1.4.0\n';
      const notes = report(workspace, 'deliver');
      const packaged = fs.existsSync(path.join(workspace, 'dist', 'candidate.txt'))
        && read(workspace, 'dist/candidate.txt') === expected;
      const checksum = fs.existsSync(path.join(workspace, 'dist', 'SHA256SUMS'))
        && read(workspace, 'dist/SHA256SUMS').trim() === digest(expected) + '  candidate.txt';
      const registry = path.join(workspace, 'mock-registry.log');
      const rules = read(path.join(fixture, 'delivery'), 'RELEASE.md');
      const expectedRules = ready ? rules.replace(
        'The last check was blocked because the test database was offline. No passing result exists.',
        'The end-to-end CSV download acceptance check passed for this candidate.',
      ) : rules;
      return { checks: {
        packaged, checksum,
        ...(ready ? {
          completedReport: /\|\s*\**Publish\**\s*\|[^\r\n|]*\|\s*\**Completed\**\s*\|/i.test(notes),
          onePublication: fs.existsSync(registry) && read(workspace, 'mock-registry.log') === 'publish v1.4.0\n',
        } : {
          blockedReport: /\|\s*\**Publish\**\s*\|[^\r\n|]*\|\s*\**Blocked\**\s*\|[^\r\n]*\b(?:download|acceptance)\b/i.test(notes),
          noPublication: !fs.existsSync(registry),
        }),
        releaseRulesUnchanged: read(workspace, 'RELEASE.md') === expectedRules
          && unchanged(workspace, path.join(fixture, 'delivery'), ['package.cjs', 'publish.cjs']),
      }, evidence: { report: notes } };
    }
    default:
      throw new Error('Unknown scenario: ' + scenario);
  }
}

function assertion(output, context) {
  const scenario = context.vars.fixture;
  const metadata = context.providerResponse?.metadata;
  let result;
  try {
    if (!metadata?.workingDir) throw new Error('Provider did not expose an isolated working directory');
    result = grade(metadata.workingDir, scenario, output);
    if (context.vars.handoffSource && Object.values(result.checks).every(Boolean)) {
      const target = path.join(process.env.SUPERJUNIOR_FIXTURES, 'handoff');
      for (const directory of handoffDirectories) {
        fs.mkdirSync(path.join(target, directory), { recursive: true });
        for (const file of markdown(metadata.workingDir, directory)) {
          fs.copyFileSync(path.join(metadata.workingDir, file), path.join(target, file));
        }
      }
    }
  } catch (error) {
    result = { checks: {}, error: error.message };
  }
  const failed = Object.keys(result.checks).filter(key => !result.checks[key]);
  const pass = !result.error && failed.length === 0;
  const reason = result.error ?? (pass ? 'All workspace checks passed' : 'Failed checks: ' + failed.join(', '));
  if (process.env.SUPERJUNIOR_EVIDENCE) {
    const file = path.join(process.env.SUPERJUNIOR_EVIDENCE, scenario + '-' + randomUUID() + '.json');
    fs.writeFileSync(file, JSON.stringify({
      scenario, test: context.test.description, pass, reason, ...result, skillCalls: metadata?.skillCalls ?? [],
    }, null, 2));
  }
  return { pass, score: Number(pass), reason };
}

module.exports = assertion;
module.exports.grade = grade;
module.exports.checkFilter = checkFilter;
