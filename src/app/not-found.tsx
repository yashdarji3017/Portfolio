import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

/** Polished 404: quiet, technical, one dry joke. */
export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-start justify-center py-24">
      <p className="font-mono text-xs text-brand">/error — 404</p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
        The page you&apos;re looking for was moved, renamed, or never existed.
      </p>
      <p className="mt-6 font-mono text-[11px] text-muted-foreground/70">
        $ cd /missing-page — no such file or directory
      </p>
      <div className="mt-8 flex flex-wrap gap-2.5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-[4px] border border-border px-3.5 py-2 text-[13px] text-foreground transition-colors duration-200 hover:border-foreground/25 hover:bg-foreground/[0.04]"
        >
          ← Back home
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-[4px] border border-border px-3.5 py-2 text-[13px] text-foreground transition-colors duration-200 hover:border-foreground/25 hover:bg-foreground/[0.04]"
        >
          View projects
        </Link>
      </div>
    </Container>
  );
}
