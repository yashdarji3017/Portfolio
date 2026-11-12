"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds — keep small (≤ 0.2s) */
  delay?: number;
}

/**
 * Subtle entrance animation: 12px rise + fade, plays once when the block
 * scrolls into view. Fully disabled when the visitor prefers reduced motion.
 * Includes a safety timeout fallback to prevent blank content on mobile/WebKit
 * if IntersectionObserver is delayed or fails to compute root bounds.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    // Safety fallback: guaranteed visibility even if viewport calculation fails on mobile
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const isVisible = isInView || forceVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
