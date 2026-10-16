import { Eye, Gauge, GitPullRequestArrow, Split } from 'lucide-react';
import { Container, Reveal } from './shared';

const ITEMS = [
  { Icon: Gauge, title: 'Higher velocity', body: 'Placeholder text about moving faster with the product.' },
  { Icon: Split, title: 'Better delegation', body: 'Placeholder text about splitting work and assigning it to the right tool.' },
  { Icon: Eye, title: 'More oversight', body: 'Placeholder text about visibility into progress and course-correcting.' },
  { Icon: GitPullRequestArrow, title: 'Smarter reviews', body: 'Placeholder text about improving review workflows in one place.' },
];

export function Features(): React.JSX.Element {
  return (
    <section className="py-28">
      <Container>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 80} className="bg-background">
            <div className="h-full p-7">
              <Icon className="size-5 text-accent-red" strokeWidth={1.5} />
              <h3 className="mt-8 font-heading text-sm font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{body}</p>
            </div>
          </Reveal>
        ))}
        </div>
      </Container>
    </section>
  );
}
