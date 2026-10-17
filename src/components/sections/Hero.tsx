import runDesk from '@/assets/run_desk.png';
import { AddToClaude, Container, Reveal, Screenshot } from './shared';

export function Hero(): React.JSX.Element {
  return (
    <section className="relative pt-28 sm:pt-36">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
            Know exactly what to fix.
            <br />
            <span className="text-foreground/50">Then prove it worked.</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Redline audits localhost and live URLs, ranks fixes by impact, and points to the source file or npm package
            responsible. Use it from the CLI, in CI, or straight from Claude.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <AddToClaude />
            <span className="font-mono text-xs text-muted-foreground">or run npx redline-dev localhost:3000</span>
          </div>
        </Reveal>
        <Reveal delay={320} className="mt-16">
          <Screenshot src={runDesk} alt="Redline CLI audit of a desktop page showing Core Web Vitals and ranked fixes" />
        </Reveal>
      </Container>
    </section>
  );
}
