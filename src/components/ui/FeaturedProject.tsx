import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

function LabeledBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  );
}

function LabeledList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-baseline gap-3">
            <span
              aria-hidden
              className="font-mono text-[10px] text-muted-foreground/60"
            >
              —
            </span>
            <span className="text-sm leading-relaxed text-foreground/85">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Expanded layout for the one project that deserves the biggest stage:
 * narrative left (problem, solution, decisions, implementation), evidence
 * right (architecture sketch, evaluation, challenges, verified results).
 */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[5px] border border-border">
      {/* Header band */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-medium tracking-tight">{project.name}</h3>
          <span className="rounded-[3px] border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {project.category}
          </span>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          {project.status} · {project.year}
        </p>
      </div>

      {/* Body: narrative left, evidence right */}
      <div className="grid divide-y divide-border md:grid-cols-[1.15fr_0.85fr] md:divide-x md:divide-y-0">
        <div className="space-y-6 px-5 py-6 md:px-6 md:py-7">
          <LabeledBlock label="Problem" text={project.problem} />
          <LabeledBlock label="Solution" text={project.solution} />
          <LabeledList label="Engineering decisions" items={project.decisions} />
          <LabeledBlock
            label="Technical implementation"
            text={project.implementation}
          />

          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Stack
            </p>
            <p className="font-mono text-xs leading-relaxed text-muted-foreground">
              {project.stack.join(" / ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 pt-1">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[13px] text-foreground transition-colors hover:text-brand"
              >
                <Github aria-hidden className="h-3.5 w-3.5" />
                Source
                <ArrowUpRight
                  aria-hidden
                  className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[13px] text-foreground transition-colors hover:text-brand"
              >
                Live demo
                <ArrowUpRight
                  aria-hidden
                  className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : null}
          </div>
        </div>

        <div className="space-y-6 bg-foreground/[0.02] px-5 py-6 md:px-6 md:py-7">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Architecture
            </p>
            {project.architecture ? (
              <ArchitectureDiagram lines={project.architecture} />
            ) : null}
          </div>

          <LabeledBlock label="Evaluation" text={project.evaluation} />
          <LabeledList label="Challenges" items={project.challenges} />

          {project.results ? (
            <LabeledBlock label="Results (verified)" text={project.results} />
          ) : null}
        </div>
      </div>
    </article>
  );
}
