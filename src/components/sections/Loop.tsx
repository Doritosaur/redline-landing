import loopCi from '@/assets/loop_ci.png';
import loopFixes from '@/assets/loop_fixes.png';
import loopMcp from '@/assets/loop_mcp.png';
import runMobile from '@/assets/run_mobile.png';
import { Container, Eyebrow, Heading, Reveal, Screenshot } from './shared';

const STEPS: { title: string; body: string; src?: string; alt?: string }[] = [
  {
    title: 'Audit any page',
    body: 'Point Redline at a dev server or a live URL. It runs Lighthouse across multiple runs and takes the medians, so one bad run does not mislead you.',
    src: runMobile,
    alt: 'Redline CLI audit of a mobile page showing the median of three runs',
  },
  {
    title: 'See what to change in your code',
    body: 'Fixes are ranked by estimated impact. Each one names the element, the URL, and the source file or package behind it.',
    src: loopFixes,
    alt: 'Ranked fixes with source file references',
  },
  {
    title: 'Let Claude fix it and re-measure',
    body: 'With the MCP server, ask Claude to audit, fix the top issue and verify it improved. It measures, edits and measures again.',
    src: loopMcp,
    alt: 'An LLM using Redline through MCP',
  },
  {
    title: 'Keep it from regressing',
    body: 'Set budgets and run Redline in CI. Pull requests get one comment showing what regressed and why, and the check fails when a budget is exceeded.',
    src: loopCi,
    alt: 'Redline pull request comment',
  },
];

export function Loop(): React.JSX.Element {
  return (
    <section id="loop" className="py-20">
      <Container>
        <Eyebrow>How it works</Eyebrow>
        <Heading>
          Measure, fix, verify,
          <br />
          <span className="text-foreground/50">and keep it fixed</span>
        </Heading>
        <div className="mt-20 flex flex-col gap-24">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-10 lg:gap-16 ${i % 2 ? 'lg:grid-cols-[1fr_300px]' : 'lg:grid-cols-[300px_1fr]'}`}
            >
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <div className="font-mono text-xs text-accent-red">0{i + 1}</div>
                <h3 className="mt-3 font-heading text-lg leading-snug font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.body}</p>
              </Reveal>
              <Reveal delay={100} className={i % 2 ? 'lg:order-1' : ''}>
                <Screenshot {...(s.src ? { src: s.src } : {})} alt={s.alt ?? ''} />
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
