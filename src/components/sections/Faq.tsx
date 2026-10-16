import { Accordion } from '@base-ui/react/accordion';
import { Plus } from 'lucide-react';
import { Container, Eyebrow, Heading, Reveal } from './shared';

const QUESTIONS = [
  'What is Redline?',
  'How is Redline different from alternatives?',
  'Which platforms are supported?',
  'Can I switch between options?',
  'Can I use it with my existing account?',
  'What are workspaces?',
];

export function Faq(): React.JSX.Element {
  return (
    <section id="faq" className="py-28">
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <Heading>Questions</Heading>
        <Reveal className="mt-12">
          <Accordion.Root className="grid items-start gap-x-16 md:grid-cols-2">
            {QUESTIONS.map((q) => (
              <Accordion.Item key={q} className="border-b border-white/10">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 py-5 text-left text-sm transition-colors hover:text-accent-red">
                    {q}
                    <Plus className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[panel-open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-sm text-foreground/60 transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
                  <p className="pb-5">Placeholder answer. Replace with a short, helpful response.</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </Container>
    </section>
  );
}
