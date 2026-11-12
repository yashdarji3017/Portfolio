import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

/**
 * Compact horizontal project row: index, name, category, one-line summary,
 * stack — with a quiet hover that shifts the arrow and tints the title.
 */
export function ProjectRow({ project }: { project: Project }) {
  const href = project.github ?? project.demo ?? "#";
  const isExternal = Boolean(project.github ?? project.demo);

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-3 py-5 sm:grid-cols-[2.25rem_1fr_auto] sm:gap-6 sm:py-6"
    >
      <span
        aria-hidden
        className="font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:text-brand"
      >
        {project.index}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <h3 className="text-[15px] font-medium tracking-tight transition-colors duration-200 group-hover:text-brand">
            {project.name}
          </h3>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[10px]">
            {project.category}
          </span>
        </div>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        <p className="mt-2 break-words font-mono text-[11px] leading-relaxed text-muted-foreground/70 sm:mt-2.5">
          {project.stack.join(" / ")}
        </p>
      </div>

      <div className="flex shrink-0 items-baseline gap-3 pl-1">
        <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">
          {project.year}
        </span>
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>
    </a>
  );
}
