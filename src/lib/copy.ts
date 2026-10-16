import { useState } from 'react';

export const MCP_COMMAND = 'claude mcp add redline -- npx -y @redline/mcp';

export function useCopy(text: string): [boolean, () => void] {
  const [copied, setCopied] = useState(false);
  const copy = (): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch(() => {
        setCopied(false);
      });
  };
  return [copied, copy];
}
