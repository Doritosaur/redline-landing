import { useEffect, useRef, useState } from 'react';

export const MCP_COMMAND = 'claude mcp add redline -- npx -y @redline/mcp';

export function useCopy(text: string): [boolean, () => void] {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
    },
    [],
  );

  const copy = (): void => {
    try {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          window.clearTimeout(timer.current);
          timer.current = window.setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch(() => {
          setCopied(false);
        });
    } catch {
      // Clipboard API is unavailable (insecure context or old browser).
      setCopied(false);
    }
  };
  return [copied, copy];
}
