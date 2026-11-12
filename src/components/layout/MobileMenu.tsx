"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Compact mobile navigation: disclosure panel under the fixed bar.
 *
 * The panel animates on open only — when a link is chosen it unmounts
 * immediately. (An exit animation here races the browser's native
 * fragment scroll and swallows the jump-to-section, so closing is
 * deliberately instant.)
 */
export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-border text-foreground transition-colors duration-200 hover:bg-foreground/[0.04]"
      >
        {open ? (
          <X aria-hidden className="h-4 w-4" />
        ) : (
          <Menu aria-hidden className="h-4 w-4" />
        )}
      </button>

      {open ? (
        <motion.div
          initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute inset-x-0 top-14 overflow-hidden border-b border-border bg-background"
        >
          <nav aria-label="Mobile" className="flex flex-col px-5 py-3 sm:px-6">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border py-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </nav>
        </motion.div>
      ) : null}
    </div>
  );
}
