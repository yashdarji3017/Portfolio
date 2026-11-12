import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Technical skills as editorial rows — category label on the left, inline
 * items on the right, hairline separators. No badge wall, no logo grid.
 */
export function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="border-t border-border">
      <Container className="py-16 md:py-20">
        <SectionHeading
          index="03"
          title="Technical Skills"
          note={`${skillGroups.length} categories`}
        />

        <Reveal>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tools change; fundamentals compound. This is the current inventory —
            the parts I reach for when designing and shipping intelligent systems.
          </p>
        </Reveal>

        <div className="divide-y divide-border">
          {skillGroups.map((group) => (
            <Reveal key={group.id}>
              <div className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8">
                <h3 className="pt-0.5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {group.label}
                </h3>
                <p className="text-[13px] leading-6 text-foreground/85">
                  {group.items.map((item, index) => (
                    <span key={item}>
                      {item}
                      {index < group.items.length - 1 ? (
                        <span aria-hidden className="mx-2 text-border">
                          /
                        </span>
                      ) : null}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
