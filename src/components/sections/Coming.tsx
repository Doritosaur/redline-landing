import { Container, Eyebrow, Heading, Reveal, Screenshot } from './shared';

export function Coming(): React.JSX.Element {
  return (
    <section className="py-28">
      <Container>
        <Eyebrow>Roadmap</Eyebrow>
        <Heading>What&apos;s coming</Heading>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <Reveal>
            <div className="font-mono text-xs text-accent-red">Soon</div>
            <h3 className="mt-3 font-heading text-lg leading-snug font-medium">Upcoming feature</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">
              Placeholder text about what is on the roadmap and why it matters.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Screenshot />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
