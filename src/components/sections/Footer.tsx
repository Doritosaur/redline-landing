import githubIcon from '@/assets/github.svg';
import { AddToClaude, Container, Reveal } from './shared';

const GITHUB_URL = 'https://github.com/Doritosaur/redline';

export function Footer(): React.JSX.Element {
  return (
    <footer className="relative overflow-hidden pt-28 pb-10">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgb(255_45_45/0.16),rgb(163_0_0/0.10)_50%,transparent_75%)]"
        aria-hidden
      />
      <Container>
        <Reveal>
          <h2 className="font-heading text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
            Find it. Fix it.
            <br />
            <span className="text-foreground/50">Prove it.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <AddToClaude />
            <span className="font-mono text-xs text-muted-foreground">or run npx redline-dev localhost:3000</span>
          </div>
        </Reveal>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <div className="flex gap-6">
            <a href="#install" className="transition-colors hover:text-foreground">Install</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Redline on GitHub"
              className="group"
            >
              <img src={githubIcon} alt="" className="size-5 opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
            <p>© 2026 Redline. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
