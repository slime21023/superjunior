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

function report(workspace, skill) {
  const folder = path.join(workspace, '_artifacts', skill);
  if (!fs.existsSync(folder)) return '';
  return fs.readdirSync(folder, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => read(folder, entry.name)).join('\n');
}

function grade(workspace, scenario) {
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
    case 'delivery': {
      const expected = 'notes v1.4.0\n';
      const notes = report(workspace, 'deliver');
      const packaged = fs.existsSync(path.join(workspace, 'dist', 'candidate.txt'))
        && read(workspace, 'dist/candidate.txt') === expected;
      const checksum = fs.existsSync(path.join(workspace, 'dist', 'SHA256SUMS'))
        && read(workspace, 'dist/SHA256SUMS').trim() === digest(expected) + '  candidate.txt';
      return { checks: {
        packaged, checksum,
        blockedReport: /\|\s*\**Publish\**\s*\|[^\r\n|]*\|\s*\**Blocked\**\s*\|[^\r\n]*\b(?:download|acceptance)\b/i.test(notes),
        noPublication: !fs.existsSync(path.join(workspace, 'mock-registry.log')),
        releaseRulesUnchanged: ['RELEASE.md', 'package.cjs', 'publish.cjs'].every(file =>
          read(workspace, file) === read(path.join(fixture, 'delivery'), file)),
      }, evidence: { report: notes } };
    }
    default:
      throw new Error('Unknown scenario: ' + scenario);
  }
}

function assertion(_output, context) {
  const scenario = context.vars.fixture;
  const metadata = context.providerResponse?.metadata;
  let result;
  try {
    if (!metadata?.workingDir) throw new Error('Provider did not expose an isolated working directory');
    result = grade(metadata.workingDir, scenario);
  } catch (error) {
    result = { checks: {}, error: error.message };
  }
  const failed = Object.keys(result.checks).filter(key => !result.checks[key]);
  const pass = !result.error && failed.length === 0;
  const reason = result.error ?? (pass ? 'All workspace checks passed' : 'Failed checks: ' + failed.join(', '));
  if (process.env.SUPERJUNIOR_EVIDENCE) {
    const file = path.join(process.env.SUPERJUNIOR_EVIDENCE, scenario + '-' + randomUUID() + '.json');
    fs.writeFileSync(file, JSON.stringify({ scenario, pass, reason, ...result, skillCalls: metadata?.skillCalls ?? [] }, null, 2));
  }
  return { pass, score: Number(pass), reason };
}

module.exports = assertion;
module.exports.grade = grade;
module.exports.checkFilter = checkFilter;
