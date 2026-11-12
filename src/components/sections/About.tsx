import Image from "next/image";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * About: plain-spoken prose on the left, a machine-readable "profile.yaml"
 * aside on the right — a small nod to the kind of engineer writing this.
 */
export function About() {
  return (
    <section id="about" aria-label="About me" className="border-t border-border">
      <Container className="py-16 md:py-20">
        <SectionHeading index="05" title="About" note="A short introduction" />

        <div className="grid gap-10 md:grid-cols-[1fr_300px] md:gap-16">
          <Reveal>
            <div className="min-w-0 space-y-5 text-[15px] leading-relaxed text-foreground/85">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside
              aria-label="Profile summary"
              className="mx-auto w-full max-w-sm overflow-hidden rounded-[5px] border border-border bg-foreground/[0.02] font-mono text-xs text-foreground md:mx-0 md:max-w-none"
            >
              <div className="relative aspect-[4/3] w-full border-b border-border bg-secondary sm:aspect-square">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5 leading-[2]">
                <p className="text-muted-foreground"># profile.yaml</p>
                <p>
                  <span className="text-muted-foreground">name: </span>
                  {`"${profile.name}"`}
                </p>
                <p>
                  <span className="text-muted-foreground">location: </span>
                  {`"${profile.location}"`}
                </p>
                <p>
                  <span className="text-muted-foreground">role: </span>
                  {`"${profile.role}"`}
                </p>
                <p className="text-muted-foreground">focus:</p>
                <ul className="pl-4">
                  <li className="text-muted-foreground">
                    - <span className="text-foreground">GenAI &amp; AI agents</span>
                  </li>
                  <li className="text-muted-foreground">
                    - <span className="text-foreground">MCP &amp; tool calling</span>
                  </li>
                  <li className="text-muted-foreground">
                    - <span className="text-foreground">RAG &amp; vector search</span>
                  </li>
                  <li className="text-muted-foreground">
                    - <span className="text-foreground">evals &amp; observability</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">languages:</p>
                <ul className="pl-4">
                  {profile.languages.map((lang) => (
                    <li key={lang} className="text-muted-foreground">
                      - <span className="text-foreground">{lang}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="text-muted-foreground">currently: </span>
                  {`"${profile.availability}"`}
                </p>
                <p>
                  <span className="text-muted-foreground">contact: </span>
                  {`"${profile.email}"`}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
