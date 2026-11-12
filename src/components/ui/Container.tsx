import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Centered content column — the site's 1100px grid. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1100px] px-5 sm:px-6", className)}>
      {children}
    </div>
  );
}
