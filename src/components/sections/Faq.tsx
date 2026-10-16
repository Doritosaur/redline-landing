import { Accordion } from '@base-ui/react/accordion';
import { Plus } from 'lucide-react';
import { Container, Eyebrow, Heading, Reveal } from './shared';

const QUESTIONS = [
  {
    q: 'What is Redline?',
    a: 'A frontend performance auditor for localhost and live URLs. It tells you what to change in your code, proves the change worked, and keeps it from regressing.',
  },
  {
    q: 'How does it work with Claude?',
    a: 'Redline ships an MCP server. Add it once, then Claude can audit a page, edit your code and re-measure. You can also run redline explain to get prioritized code-level fixes from Claude.',
  },
  {
    q: 'Does it work on localhost?',
    a: 'Yes. On localhost, cache and compression findings are flagged as likely dev-server artifacts and ranked last, so real issues stay on top.',
  },
  {
    q: 'What do I need to run it?',
    a: 'Node 22 or newer and Chrome or Chromium installed locally. Cross-browser checks also use Firefox and WebKit.',
  },
  {
    q: 'How reliable are the numbers?',
    a: 'Lab metrics vary between runs. Use three or more runs before trusting small changes. Single-run comparisons are labelled as low confidence.',
  },
  {
    q: 'Can I self-host it?',
    a: 'Yes. The server package is a self-hostable audit service with a JSON API and report pages, available as a Docker image.',
  },
];

export function Faq(): React.JSX.Element {
  return (
    <section id="faq" className="py-28">
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <Heading>Questions</Heading>
        <Reveal className="mt-12">
          <Accordion.Root className="grid items-start gap-x-16 md:grid-cols-2">
            {QUESTIONS.map(({ q, a }) => (
              <Accordion.Item key={q} className="border-b border-white/10">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 py-5 text-left text-sm transition-colors hover:text-accent-red">
                    {q}
                    <Plus className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[panel-open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-sm text-foreground/60 transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
                  <p className="pb-5 leading-relaxed">{a}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </Container>
    </section>
  );
}
