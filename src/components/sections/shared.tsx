import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }): React.JSX.Element {
  return <div className={`relative mx-auto w-full max-w-[1120px] px-6 ${className}`}>{children}</div>;
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

export function Heading({ children, className = '' }: { children: React.ReactNode; className?: string }): React.JSX.Element {
  return (
    <Reveal>
      <h2 className={`font-heading text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl ${className}`}>{children}</h2>
    </Reveal>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <div className="mb-5 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">{children}</div>;
}

export function CtaButton({ label = 'Download for macOS' }: { label?: string }): React.JSX.Element {
  return (
    <Button className="h-11 rounded-lg px-5 text-sm">
      {label}
      <ArrowDown />
    </Button>
  );
}

/** Frame for a real product screenshot. Pass `src` once the image exists. */
export function Screenshot({ src, alt = '', className = '' }: { src?: string; alt?: string; className?: string }): React.JSX.Element {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl shadow-black/40 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="block w-full" />
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center font-mono text-xs text-muted-foreground">
          screenshot
        </div>
      )}
    </div>
  );
}
