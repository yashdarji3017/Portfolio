import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/ui/FeaturedProject";
import { ProjectRow } from "@/components/ui/ProjectRow";

/**
 * Selected projects — the most important section. One featured project gets
 * the expanded treatment (problem / approach / architecture sketch); the
 * rest render as horizontal rows. No identical card grids.
 */
export function Projects() {
  const featured = projects.find((project) => project.featured);
  const rows = projects.filter((project) => !project.featured);

  return (
    <section id="projects" aria-label="Selected projects" className="border-t border-border">
      <Container className="py-16 md:py-20">
        <SectionHeading
          index="01"
          title="Selected Projects"
          note="Agentic AI · FastMCP · RAG · Multimodal Vision · DevTools"
        />

        {featured ? (
          <Reveal>
            <FeaturedProject project={featured} />
          </Reveal>
        ) : null}

        <Reveal className="mt-8 md:mt-10">
          <div className="divide-y divide-border">
            {rows.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
