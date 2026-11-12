import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Monospace section number, e.g. "01" */
  index: string;
  title: string;
  /** Right-aligned annotation, hidden on small screens */
  note?: string;
  className?: string;
}

/**
 * Editorial section opener: numbered monospace label, uppercase tracking,
 * and a single hairline rule underneath.
 */
export function SectionHeading({
  index,
  title,
  note,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-10 md:mb-14", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-brand" aria-hidden>
            {index}
          </span>
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-foreground">
            {title}
          </h2>
        </div>
        {note ? (
          <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">
            {note}
          </span>
        ) : null}
      </div>
      <div className="mt-4 h-px w-full bg-border" />
    </Reveal>
  );
}
