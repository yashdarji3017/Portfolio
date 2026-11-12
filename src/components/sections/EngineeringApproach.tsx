import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Principle {
  title: string;
  body: string;
}

const principles: Principle[] = [
  {
    title: "Build systems, not demos",
    body:
      "A model in a notebook is a hypothesis. A service with contracts, failure modes, and an evaluation suite is a system. I aim for the second.",
  },
  {
    title: "Evaluate before optimizing",
    body:
      "No metric, no iteration. I build the golden set and the harness first, so \"better\" is a measurement — never a feeling.",
  },
  {
    title: "Design for reliability",
    body:
      "LLMs are probabilistic; the software around them shouldn't be. Timeouts, retries, fallbacks, structured outputs, and a human escalation path are part of the design, not an afterthought.",
  },
  {
    title: "Keep architectures understandable",
    body:
      "Complexity is a budget. I spend it where it earns its keep and choose boring, legible technology everywhere else — if the diagram needs a legend, it needs a rethink.",
  },
  {
    title: "Prefer measurable improvements",
    body:
      "Small, verified gains compound. Every change lands with evidence attached: the eval diff, the trace, the before and after.",
  },
  {
    title: "Understand the trade-offs",
    body:
      "Latency versus quality, cost versus control, build versus buy. A technology choice is only defensible when you can argue both sides — I try to know why, not just what.",
  },
];

/** How I approach engineering problems — six principles, no slogans. */
export function EngineeringApproach() {
  return (
    <section
      id="approach"
      aria-label="Engineering approach"
      className="border-t border-border"
    >
      <Container className="py-16 md:py-20">
        <SectionHeading
          index="04"
          title="Engineering Approach"
          note="How I work"
        />

        <div className="grid gap-x-12 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.04}>
              <div className="flex gap-5 border-t border-border py-6">
                <span
                  aria-hidden
                  className="pt-0.5 font-mono text-xs text-brand"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
