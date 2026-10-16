import { Container, CtaButton, Reveal } from './shared';

export function Footer(): React.JSX.Element {
  return (
    <footer className="relative overflow-hidden pt-28 pb-10">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgb(255_68_56/0.16),rgb(179_18_43/0.10)_50%,transparent_75%)]"
        aria-hidden
      />
      <Container>
        <Reveal>
          <h2 className="font-heading text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
            Get Redline
            <br />
            <span className="text-foreground/50">placeholder line</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaButton />
            <span className="font-mono text-xs text-muted-foreground">Preview · more platforms coming</span>
          </div>
        </Reveal>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Documentation</a>
            <a href="#" className="transition-colors hover:text-foreground">Follow us</a>
          </div>
          <p>© 2026 Redline. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
