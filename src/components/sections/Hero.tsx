import { Container, CtaButton, Reveal, Screenshot } from './shared';

export function Hero(): React.JSX.Element {
  return (
    <section className="relative pt-28 sm:pt-36">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
            Placeholder headline
            <br />
            <span className="text-foreground/50">goes right here</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            A short placeholder description of what the product does and who it is for. Replace with one or two sentences.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaButton />
            <span className="font-mono text-xs text-muted-foreground">Preview · more platforms coming</span>
          </div>
        </Reveal>
        <Reveal delay={320} className="mt-16">
          <Screenshot />
        </Reveal>
      </Container>
    </section>
  );
}
