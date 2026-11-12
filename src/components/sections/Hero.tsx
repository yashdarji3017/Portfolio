"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

/**
 * Compact editorial hero: identity block, one strong statement, one
 * supporting paragraph, links. Animates immediately on page load above
 * the fold so mobile visitors never see a blank screen.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animateProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: "easeOut" as const, delay },
        };

  return (
    <section aria-label="Introduction">
      <Container className="pb-14 pt-20 sm:pt-24 md:pb-16 md:pt-32">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12 lg:gap-16">
          {/* Left Column: Bio & Links */}
          <div className="min-w-0 max-w-2xl">
            <motion.div {...animateProps(0)}>
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <MapPin aria-hidden className="h-3 w-3 shrink-0" />
                <span>{profile.location}</span>
                <span aria-hidden className="text-border">
                  ·
                </span>
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50 motion-safe:animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span>{profile.availability}</span>
              </p>
            </motion.div>

            <motion.div {...animateProps(0.05)}>
              <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-brand sm:mt-2.5">{profile.role}</p>
            </motion.div>

            <motion.div {...animateProps(0.1)}>
              <p className="mt-6 text-base leading-relaxed text-foreground sm:mt-7 sm:text-lg md:text-xl">
                {profile.headline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {profile.description}
              </p>
            </motion.div>

            <motion.div {...animateProps(0.15)}>
              <div className="mt-7 sm:mt-8">
                <SocialLinks />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Round Profile Image (Centered on Mobile, Side on Desktop) */}
          <motion.div
            {...animateProps(0.08)}
            className="order-first flex justify-center md:order-last md:justify-end"
          >
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-2 border-border bg-secondary shadow-lg sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[350px] lg:w-[350px]">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 350px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
