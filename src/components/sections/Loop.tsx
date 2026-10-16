import { Container, Eyebrow, Heading, Reveal, Screenshot } from './shared';

const STEPS = [
  { title: 'Define your task', body: 'Placeholder text describing the first step of the workflow and what the user does here.' },
  { title: 'Run tasks in parallel', body: 'Placeholder text describing how work runs side by side without conflicts.' },
  { title: 'Switch context without losing control', body: 'Placeholder text describing how to jump between tasks and check progress.' },
  { title: 'Review and commit changes', body: 'Placeholder text describing how to review results and ship them.' },
];

export function Loop(): React.JSX.Element {
  return (
    <section id="loop" className="py-20">
      <Container>
        <Eyebrow>Workflow</Eyebrow>
        <Heading>
          A complete loop
          <br />
          <span className="text-foreground/50">for placeholder work</span>
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
                <Screenshot />
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
