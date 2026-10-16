import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import claudeCodeIcon from '@/assets/claude-code.png';
import dummyScreenshot from '@/assets/dummy.png';
import { Button } from '@/components/ui/button';
import { MCP_COMMAND, useCopy } from '@/lib/copy';

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

export function ClaudeIcon({ className = 'size-4' }: { className?: string }): React.JSX.Element {
  return <img src={claudeCodeIcon} alt="" aria-hidden className={`${className} object-contain`} />;
}

/** Copies the Claude MCP install command. */
export function AddToClaude({ small = false }: { small?: boolean }): React.JSX.Element {
  const [copied, copy] = useCopy(MCP_COMMAND);
  return (
    <Button
      onClick={copy}
      title="Copies the MCP install command"
      className={small ? 'h-8 rounded-md px-3.5 text-[13px]' : 'h-11 rounded-lg px-5 text-sm'}
    >
      {copied ? <Check /> : <ClaudeIcon />}
      {copied ? 'Command copied' : 'Add to Claude'}
    </Button>
  );
}

// VS Code Dark+ palette
const TOKEN_COLORS = {
  comment: '#6a9955',
  string: '#ce9178',
  number: '#b5cea8',
  keyword: '#c586c0',
  fn: '#dcdcaa',
  prop: '#9cdcfe',
  flag: '#569cd6',
} as const;

const TS_KEYWORDS = new Set(['export', 'default', 'import', 'from', 'const', 'let', 'return', 'true', 'false', 'null']);
const TOKEN_RE = /(\/\/.*|#.*)|('[^'\n]*'|"[^"\n]*"|“[^”]*”)|(--?[a-zA-Z][\w-]*)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_@][\w@/.:-]*)(\s*:)?/g;

interface TokenParts { text: string; comment?: string; str?: string; flag?: string; num?: string; word?: string; colon?: string }

function wordColor({ word, colon }: TokenParts, shell: boolean, firstWord: boolean): string | undefined {
  if (colon) {return TOKEN_COLORS.prop;}
  if (!shell && word && TS_KEYWORDS.has(word)) {return TOKEN_COLORS.keyword;}
  if (shell && firstWord) {return TOKEN_COLORS.fn;}
  return undefined;
}

function tokenColor(t: TokenParts, shell: boolean, firstWord: boolean): string | undefined {
  if (t.comment && t.text.startsWith(shell ? '#' : '//')) {return TOKEN_COLORS.comment;}
  if (t.str) {return TOKEN_COLORS.string;}
  if (t.flag && shell) {return TOKEN_COLORS.flag;}
  if (t.num) {return TOKEN_COLORS.number;}
  if (t.word) {return wordColor(t, shell, firstWord);}
  return undefined;
}

function highlight(code: string, shell: boolean): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let firstWord = true;
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(code))) {
    if (m.index > last) {
      const gap = code.slice(last, m.index);
      if (gap.includes('\n')) {firstWord = true;}
      out.push(gap);
    }
    const [text, comment, str, flag, num, word, colon] = m;
    const color = tokenColor({ text, comment, str, flag, num, word, colon }, shell, firstWord);
    if (word) {firstWord = false;}
    out.push(color ? <span key={m.index} style={{ color }}>{text}</span> : text);
    last = m.index + text.length;
  }
  if (last < code.length) {out.push(code.slice(last));}
  return out;
}

export function CodeBlock({ code, label }: { code: string; label?: string }): React.JSX.Element {
  const [copied, copy] = useCopy(code);
  return (
    <div className="group relative rounded-lg border border-white/10 bg-surface">
      {label ? <div className="border-b border-white/10 px-4 py-2 font-mono text-[11px] text-muted-foreground">{label}</div> : null}
      <pre className="whitespace-pre-wrap break-words p-4 pr-12 font-mono text-[13px] leading-relaxed text-foreground/85">{highlight(code, label === 'terminal')}</pre>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy"
        className="absolute right-3 bottom-3 rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check className="size-4 text-accent-red" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}

/** Frame for a real product screenshot. Defaults to a dummy image; pass `src` for the real one. */
export function Screenshot({ src = dummyScreenshot, alt = 'Product screenshot', className = '' }: { src?: string; alt?: string; className?: string }): React.JSX.Element {
  return (
    <div className={`fade-edges ${className}`}>
      <img src={src} alt={alt} className="block w-full" />
    </div>
  );
}
