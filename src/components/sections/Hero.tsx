import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";

/**
 * Compact editorial hero: identity block, one strong statement, one
 * supporting paragraph, links. Deliberately short — the projects section
 * should be reachable without scrolling past a billboard.
 */
export function Hero() {
  return (
    <section aria-label="Introduction">
      <Container className="pb-14 pt-24 md:pb-16 md:pt-32">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-12 lg:gap-16">
          {/* Left Column: Bio & Links */}
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <MapPin aria-hidden className="h-3 w-3" />
                {profile.location}
                <span aria-hidden className="text-border">
                  ·
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50 motion-safe:animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {profile.availability}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2.5 font-mono text-sm text-brand">{profile.role}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-lg leading-relaxed text-foreground md:text-xl">
                {profile.headline}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Large Round Profile Image */}
          <Reveal delay={0.08} className="flex justify-center md:justify-end">
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-2 border-border bg-secondary shadow-lg sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[350px] lg:w-[350px]">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
