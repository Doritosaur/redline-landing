import { Container, Eyebrow, Heading, Reveal, Screenshot } from './shared';

const ITEMS = [
  { title: 'Cross-browser', body: 'Load a page in Chromium, Firefox and WebKit and compare timings, JS errors and failed requests per engine.' },
  { title: 'Compatibility', body: 'Find JS APIs and CSS features your browserslist targets do not support, with file and line.' },
  { title: 'User flows', body: 'Script clicks and typing, then measure INP and where its time goes: input delay, processing, presentation.' },
  { title: 'Field data', body: 'Real-user p75 Core Web Vitals from the Chrome UX Report, next to your lab numbers.' },
];

export function Beyond(): React.JSX.Element {
  return (
    <section className="py-28">
      <Container>
        <Eyebrow>More than a score</Eyebrow>
        <Heading>
          Beyond Lighthouse
          <br />
          <span className="text-foreground/50">the rest of the picture</span>
        </Heading>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal>
            <Screenshot alt="Redline cross-browser results" />
          </Reveal>
          <div className="flex flex-col gap-7">
            {ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <h3 className="font-heading text-sm font-medium">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{it.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
