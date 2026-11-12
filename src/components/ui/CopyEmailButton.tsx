"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Copies the email address to the clipboard, then confirms for two seconds.
 * Kept as its own tiny client component so the contact section stays a
 * server component.
 */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions / insecure context) — fail silently,
      // the mailto link right next to it still works.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address to clipboard"
      className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-[4px] border border-border px-2.5 font-mono text-[11px] text-muted-foreground transition-colors duration-200 hover:bg-foreground/[0.04] hover:text-foreground"
    >
      {copied ? (
        <>
          <Check aria-hidden className="h-3 w-3 text-emerald-500" />
          Copied
        </>
      ) : (
        <>
          <Copy aria-hidden className="h-3 w-3" />
          Copy
        </>
      )}
    </button>
  );
}
