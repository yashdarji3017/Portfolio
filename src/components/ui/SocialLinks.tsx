import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const LINKS = [
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    external: true,
    download: false,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
    download: false,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
    download: false,
  },
  {
    label: "Resume",
    href: profile.resumeUrl,
    icon: FileDown,
    external: false,
    download: true,
  },
] as const;

/** Compact bordered link buttons used in the hero. */
export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {LINKS.map(({ label, href, icon: Icon, external, download }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download: true } : {})}
          className="group inline-flex items-center gap-2 rounded-[4px] border border-border px-3.5 py-2 text-[13px] text-foreground/90 transition-colors duration-200 hover:border-foreground/25 hover:bg-foreground/[0.04]"
        >
          <Icon
            aria-hidden
            className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
          />
          {label}
        </a>
      ))}
    </div>
  );
}
