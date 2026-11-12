import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds (optional) */
  delay?: number;
}

/**
 * Editorial reveal wrapper. Renders clean, immediate markup so the
 * page is never stuck at opacity 0 if IntersectionObserver or client JS
 * is throttled or suspended on mobile devices.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
