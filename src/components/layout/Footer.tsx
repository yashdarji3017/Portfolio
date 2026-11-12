import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

/** Minimal footer: identity on the left, monospace metadata on the right. */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-5 py-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-tight text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {profile.role} — built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
        <div className="font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-right">
          <p>
            © {new Date().getFullYear()} · {profile.location} · {profile.timezone}
          </p>
          <p className="mt-1.5">
            <a
              href="/#top"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Back to top ↑
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
