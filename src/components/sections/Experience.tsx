import { ArrowUpRight } from "lucide-react";
import { education, roles } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Experience: editorial rows — period on the left, substance on the right.
 * Hairline separators, monospace metadata, no logo grids. Entries come from
 * src/data/experience.ts and are placeholders until filled in.
 */
export function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="border-t border-border">
      <Container className="py-16 md:py-20">
        <SectionHeading index="02" title="Experience" note="Roles & education" />

        <Reveal>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Where I&apos;ve worked and what I owned while I was there — the
            systems, the decisions, and how the work was verified.
          </p>
        </Reveal>

        <div className="divide-y divide-border">
          {roles.map((role, index) => (
            <Reveal key={role.id} delay={index * 0.04}>
              <article className="grid gap-2 py-6 sm:py-7 md:grid-cols-[10rem_1fr] md:gap-8">
                <div className="md:pt-0.5">
                  <p className="font-mono text-[11px] leading-5 text-muted-foreground">
                    {role.period}
                  </p>
                  {role.location ? (
                    <p className="mt-0.5 font-mono text-[10px] text-muted-foreground/70 sm:mt-1">
                      {role.location}
                    </p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                      {role.title}
                    </h3>
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/company inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {role.company}
                        <ArrowUpRight
                          aria-hidden
                          className="h-3 w-3 transition-all duration-200 group-hover/company:-translate-y-0.5 group-hover/company:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {role.company}
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {role.summary}
                  </p>

                  <ul className="mt-4 max-w-2xl space-y-2.5">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-baseline gap-3">
                        <span
                          aria-hidden
                          className="font-mono text-[10px] text-muted-foreground/60"
                        >
                          —
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 break-words font-mono text-[11px] leading-relaxed text-muted-foreground/70 sm:mt-5">
                    {role.stack.join(" / ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {education.length > 0 ? (
          <div className="mt-12 sm:mt-14">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-foreground">
              Education
            </h3>
            <div className="mt-5 divide-y divide-border border-t border-border">
              {education.map((entry) => (
                <div
                  key={entry.id}
                  className="grid gap-1 py-4 md:grid-cols-[10rem_1fr] md:gap-8"
                >
                  <p className="font-mono text-[11px] leading-5 text-muted-foreground">
                    {entry.period}
                  </p>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{entry.degree}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{entry.school}</p>
                    {entry.note ? (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80">
                        {entry.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
