import { MCP_COMMAND } from '@/lib/copy';
import { CodeBlock, Container, Eyebrow, Heading, Reveal } from './shared';

const CARDS = [
  {
    title: 'In Claude',
    body: 'Add the MCP server, then ask Claude to audit, fix and verify.',
    label: 'terminal',
    code: MCP_COMMAND,
    extra: '“Audit localhost:3000 with Redline, fix the top issue, and verify it improved.”',
  },
  {
    title: 'In your terminal',
    body: 'Audit a dev server or any live URL. Needs Node 22+ and Chrome.',
    label: 'terminal',
    code: 'npx @redline/cli localhost:3000\nnpx @redline/cli https://example.com --runs 3 --html report.html',
  },
  {
    title: 'In CI',
    body: 'Run the GitHub Action on every pull request and fail on budget regressions.',
    label: 'redline.config.ts',
    code: "export default {\n  baseUrl: 'http://localhost:3000',\n  pages: ['/', '/pricing'],\n  runs: 3,\n  budgets: { score: 80, lcp: 2500, cls: 0.1 },\n};",
  },
];

export function Install(): React.JSX.Element {
  return (
    <section id="install" className="py-28">
      <Container>
        <Eyebrow>Get started</Eyebrow>
        <Heading>
          One command
          <br />
          <span className="text-foreground/50">wherever you work</span>
        </Heading>
        <div className="mt-14 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="grid gap-6 py-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12">
                <div>
                  <h3 className="font-heading text-sm font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{c.body}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <CodeBlock label={c.label} code={c.code} />
                  {c.extra ? <p className="font-mono text-xs leading-relaxed text-muted-foreground">{c.extra}</p> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
