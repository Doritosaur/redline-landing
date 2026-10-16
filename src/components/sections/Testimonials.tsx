import { Container, Eyebrow, Heading, Reveal } from './shared';

const QUOTES = [
  { name: 'Person One', role: 'Role, Company' },
  { name: 'Person Two', role: 'Role, Company' },
  { name: 'Person Three', role: 'Role, Company' },
];

export function Testimonials(): React.JSX.Element {
  return (
    <section className="py-28">
      <Container>
        <Eyebrow>Testimonials</Eyebrow>
        <Heading>
          Using Redline
          <br />
          <span className="text-foreground/50">at placeholder</span>
        </Heading>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between gap-10 rounded-xl border border-white/10 p-7">
                <blockquote className="text-sm leading-relaxed text-foreground/80">
                  “Placeholder testimonial. Replace with a short, real quote about the experience of using the product.”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-white/10" />
                  <div>
                    <div className="text-sm font-medium">{q.name}</div>
                    <div className="text-xs text-muted-foreground">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
