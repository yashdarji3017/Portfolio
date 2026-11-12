"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Dark / light toggle. The active icon is driven purely by the `.dark`
 * class on <html> (set by next-themes), so there is no mounted-state
 * bookkeeping and no hydration mismatch. The crossfade animates
 * transform + opacity only.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border border-border text-muted-foreground transition-colors duration-200 hover:bg-foreground/[0.04] hover:text-foreground"
    >
      {/* Sun — visible in dark mode; clicking switches to light */}
      <Sun
        aria-hidden
        className="absolute h-4 w-4 rotate-90 scale-75 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
      {/* Moon — visible in light mode; clicking switches to dark */}
      <Moon
        aria-hidden
        className="absolute h-4 w-4 -rotate-90 scale-75 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100 rotate-0 scale-100 opacity-100"
      />
    </button>
  );
}
