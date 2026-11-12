import { writingNotes } from "@/data/writing";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Writing: clean article rows with date, reading time, and an honest
 * status chip. Draft rows are plain text — they only become links once
 * a real href exists in the data.
 */
export function Writing() {
  return (
    <section id="writing" aria-label="Writing and technical notes" className="border-t border-border">
      <Container className="py-16 md:py-20">
        <SectionHeading index="06" title="Writing" note="Notes & drafts" />

        <Reveal>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Longer notes on building AI systems — writing is how I sharpen ideas.
            Everything below is a draft in progress; published pieces will appear
            here with links.
          </p>
        </Reveal>

        <div className="divide-y divide-border">
          {writingNotes.map((note) => {
            const isPublished = note.status === "published" && Boolean(note.href);
            const title = (
              <h3 className="text-[15px] font-medium leading-snug tracking-tight text-foreground">
                {note.title}
              </h3>
            );

            return (
              <Reveal key={note.title}>
                <article className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4 gap-y-2 py-5 sm:grid-cols-[7rem_1fr_auto]">
                  <time
                    dateTime={note.date}
                    className="font-mono text-[11px] text-muted-foreground"
                  >
                    {formatDate(note.date)}
                  </time>

                  {isPublished ? (
                    <a
                      href={note.href}
                      className="min-w-0 break-words transition-colors hover:text-brand"
                    >
                      {title}
                    </a>
                  ) : (
                    <div className="min-w-0 break-words">{title}</div>
                  )}

                  <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {note.readingTime} min
                    </span>
                    <span
                      className={`rounded-[3px] border px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] ${
                        isPublished
                          ? "border-brand/40 text-brand"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {note.status}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
