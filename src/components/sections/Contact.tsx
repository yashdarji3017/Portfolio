import {
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

interface ContactRowProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}

function ContactRow({ icon: Icon, label, children }: ContactRowProps) {
  return (
    <div className="flex items-center gap-3 py-3.5 sm:gap-6 sm:py-4">
      <Icon aria-hidden className="h-4 w-4 shrink-0 text-muted-foreground" />
      <span className="w-14 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground sm:w-20 sm:text-[11px]">
        {label}
      </span>
      <div className="flex flex-1 min-w-0 flex-wrap items-center justify-between gap-2 sm:gap-3">
        {children}
      </div>
    </div>
  );
}

const valueLinkClass =
  "min-w-0 break-all text-xs text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline sm:break-normal sm:text-sm";

/** Minimal contact section: one headline, one paragraph, working links. */
export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="border-t border-border">
      <Container className="py-16 md:py-24">
        <SectionHeading index="07" title="Contact" note="Usually replies within a day" />

        <Reveal>
          <h3 className="max-w-xl text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Have an interesting problem to solve?
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            I&apos;m always interested in thoughtful conversations about AI
            engineering, intelligent systems, and building useful software.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 divide-y divide-border border-y border-border">
            <ContactRow icon={Mail} label="Email">
              <a href={`mailto:${profile.email}`} className={valueLinkClass}>
                {profile.email}
              </a>
              <CopyEmailButton email={profile.email} />
            </ContactRow>

            <ContactRow icon={Phone} label="Phone">
              <a href={`tel:${profile.phone}`} className={valueLinkClass}>
                {profile.phone}
              </a>
              <span className="font-mono text-[11px] text-muted-foreground">
                Surat, IN
              </span>
            </ContactRow>

            <ContactRow icon={Github} label="GitHub">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={valueLinkClass}
              >
                {profile.github.replace("https://", "")}
              </a>
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-muted-foreground"
              />
            </ContactRow>

            <ContactRow icon={Linkedin} label="LinkedIn">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={valueLinkClass}
              >
                {profile.linkedin.replace("https://", "")}
              </a>
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-muted-foreground"
              />
            </ContactRow>

            <ContactRow icon={FileDown} label="Resume">
              <a
                href={profile.resumeUrl}
                download={true}
                className={valueLinkClass}
              >
                resume.pdf
              </a>
              <span className="font-mono text-[11px] text-muted-foreground">
                PDF · download
              </span>
            </ContactRow>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
