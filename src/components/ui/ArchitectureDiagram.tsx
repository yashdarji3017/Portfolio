import type { Project } from "@/data/projects";

/**
 * Monospace architecture sketch, one hoverable line at a time. The hover
 * tint is pure CSS (no client JavaScript), the root node is set slightly
 * brighter to anchor the diagram. Wraps the lines of
 * `project.architecture` inside a <pre> that keeps whitespace semantics.
 */
export function ArchitectureDiagram({
  lines,
}: {
  lines: NonNullable<Project["architecture"]>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[4px] border border-border/60 bg-background/50 p-3 sm:p-4">
      <pre className="overflow-x-auto font-mono text-[10.5px] leading-[1.8] text-muted-foreground sm:text-[11.5px] sm:leading-[1.9]">
        {lines.map((line, index) => {
          // Root nodes (no tree indentation) anchor the diagram.
          const isRoot = index === 0 && !line.startsWith(" ");
          return (
            <span
              key={index}
              className={`block whitespace-pre transition-colors duration-150 hover:text-foreground ${
                isRoot ? "font-medium text-foreground/85" : ""
              }`}
            >
              {line || " "}
            </span>
          );
        })}
      </pre>
    </div>
  );
}
