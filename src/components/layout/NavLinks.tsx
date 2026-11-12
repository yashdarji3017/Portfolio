"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "./MobileMenu";

/**
 * Desktop nav links with scroll-spy: the link for the section currently
 * crossing the viewport's middle band is marked active (aria-current +
 * steady underline). No section in the band — e.g. at the hero — means no
 * active link, which is honest. Pure IntersectionObserver, no scroll
 * listeners, no motion; reduced-motion safe by construction.
 */
export function NavLinks({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.split("#")[1] ?? ""))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveId((current) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );
          if (visible.length > 0) return visible[0].target.id;
          // Nothing crosses the band: only clear if the active section
          // itself just left the viewport.
          const currentStillVisible = sections.some(
            (section) => section.id === current,
          );
          return currentStillVisible ? current : null;
        });
      },
      // A narrow horizontal band around the upper-middle of the viewport —
      // the "reading line". A section is active while it crosses it.
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {items.map((item) => {
        const isActive = activeId !== null && item.href === `/#${activeId}`;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "true" : undefined}
            className={`group relative text-[13px] transition-colors duration-200 ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
            <span
              aria-hidden
              className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-foreground transition-transform duration-200 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </a>
        );
      })}
    </>
  );
}
