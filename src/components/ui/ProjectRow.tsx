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
      className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-4 py-6 sm:gap-6"
    >
      <span
        aria-hidden
        className="font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:text-brand"
      >
        {project.index}
      </span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-[15px] font-medium tracking-tight transition-colors duration-200 group-hover:text-brand">
            {project.name}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {project.category}
          </span>
        </div>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        <p className="mt-2.5 font-mono text-[11px] text-muted-foreground/70">
          {project.stack.join(" / ")}
        </p>
      </div>

      <div className="flex items-baseline gap-3">
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
