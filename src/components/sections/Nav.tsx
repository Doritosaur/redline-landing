import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from './shared';

export function Nav(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled ? 'border-white/10 bg-background/70 py-3 backdrop-blur-xl' : 'border-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="font-heading text-lg font-medium tracking-tight">
          redline
        </a>
        <nav className="flex items-center gap-7 text-sm text-foreground/70">
          <a href="#loop" className="hidden transition-colors hover:text-foreground sm:inline">Workflow</a>
          <a href="#faq" className="hidden transition-colors hover:text-foreground sm:inline">FAQ</a>
          <a href="#" className="hidden transition-colors hover:text-foreground sm:inline">Docs</a>
          <Button className="h-8 rounded-md px-3.5 text-[13px]">Get Redline</Button>
        </nav>
      </Container>
    </header>
  );
}
