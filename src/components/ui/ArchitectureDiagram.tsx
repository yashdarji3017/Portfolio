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
    <pre className="overflow-x-auto font-mono text-[11.5px] leading-[1.9] text-muted-foreground">
      {lines.map((line, index) => {
        // Root nodes (no tree indentation) anchor the diagram.
        const isRoot = index === 0 && !line.startsWith(" ");
        return (
          <span
            key={index}
            className={`block transition-colors duration-150 hover:text-foreground ${
              isRoot ? "text-foreground/80" : ""
            }`}
          >
            {line || " "}
          </span>
        );
      })}
    </pre>
  );
}
