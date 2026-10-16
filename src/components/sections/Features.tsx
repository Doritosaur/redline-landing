import rankedFixes from '@/assets/features/ranked-fixes.svg';
import comparisons from '@/assets/features/comparisons.svg';
import budgets from '@/assets/features/budgets.svg';
import anyLlm from '@/assets/features/any-llm.svg';
import { Container, Reveal } from './shared';

const ITEMS = [
  {
    art: rankedFixes,
    title: 'Ranked fixes',
    body: 'Lighthouse findings ordered by estimated impact, mapped through source maps to the file or npm package responsible.',
  },
  {
    art: comparisons,
    title: 'Trustworthy comparisons',
    body: 'Every run is saved. The next run shows what changed and separates real change from run-to-run noise.',
  },
  {
    art: budgets,
    title: 'Budgets in CI',
    body: 'Fail the build when score, LCP, CLS or TBT regress, with a PR comment showing what changed and why.',
  },
  {
    art: anyLlm,
    title: 'Works with any LLM',
    body: 'Connect any MCP-capable LLM to get prioritized code changes, or let it measure, edit and re-measure on its own.',
  },
];

export function Features(): React.JSX.Element {
  return (
    <section className="py-28">
      <Container>
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ art, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <img src={art} alt="" className="size-20" />
              <h3 className="mt-7 font-heading text-base font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
