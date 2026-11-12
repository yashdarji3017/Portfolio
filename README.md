# AI Engineer Portfolio

A personal portfolio for an AI Engineer — dark-first, editorial, restrained.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion,
and Lucide icons. Server components by default; client JavaScript only where
it earns its place (theme toggle, mobile menu, entrance animations, copy
button).

## Tech stack

| Layer      | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js 16, App Router, React Server Components |
| Language   | TypeScript (strict)                             |
| Styling    | Tailwind CSS v4 (CSS-first tokens)              |
| Motion     | Framer Motion (subtle, reduced-motion aware)    |
| Icons      | Lucide React                                    |
| Fonts      | Geist (sans) + Geist Mono, via `next/font`      |
| Theming    | `next-themes`, class-based, dark by default     |

## Getting started

```bash
# 1. Install dependencies (pick one)
bun install
npm install
pnpm install

# 2. Run the dev server
bun run dev     # http://localhost:3000

# 3. Production build
bun run build
bun run start
```

Lint checks:

```bash
bun run lint
```

## Customization (15 minutes, top to bottom)

1. **`src/data/profile.ts`** — the single source of personal truth: name,
   role, headline, location, email, GitHub, LinkedIn, availability, about
   paragraphs, and the production URL used for SEO. Values in `[brackets]`
   are deliberate placeholders; replace them all.
2. **`src/data/projects.ts`** — six sample projects, one per category
   (Agentic AI System, RAG Application, Multi-Agent System, MCP Integration,
   AI Evaluation Platform, Computer Vision Application). Each explains
   problem → solution → engineering decisions → implementation → challenges
   → evaluation; add `results` **only** with verified numbers. Replace with
   your real work; keep the shape. Set `featured: true` on the project that
   gets the expanded layout with the architecture sketch. Statuses are honest
   lifecycle labels — never claim production deployments that don't exist.
3. **`src/data/experience.ts`** — roles and education. Every entry is a
   bracketed placeholder; replace it with your real history. Highlights
   should name systems, decisions, and how work was verified — no metrics
   you can't back up.
4. **`src/data/skills.ts`** — grouped skill inventory rendered as editorial
   rows.
5. **`src/data/writing.ts`** — technical notes. Rows are honest `draft`s;
   set `status: "published"` + `href` when a piece actually goes live and
   the row becomes a link automatically.
6. **`public/resume.pdf`** — replace the generated placeholder with your
   real resume (keep the filename).
7. **`src/app/icon.svg`** — favicon: a terminal-caret mark in the site's
   palette. Swap for your own mark if you like.
8. **SEO** — everything reads from `profile.ts` (`metadataBase`, Open Graph,
   JSON-LD Person schema, `app/robots.ts`, `app/sitemap.ts`).

## Structure

```
src/
  app/
    layout.tsx          # fonts, metadata, theme provider, navbar/footer shell
    page.tsx            # home: hero → projects → experience → skills → approach → about → writing → contact
    globals.css         # design tokens (dark/light), base styles
    not-found.tsx       # 404
    icon.svg            # favicon
    robots.ts           # robots.txt route
    sitemap.ts          # sitemap route
    opengraph-image.tsx # OG card (1200×630) generated from the design system
  components/
    layout/
      Navbar.tsx        # fixed bar + desktop links
      NavLinks.tsx      # client: scroll-spy active section indication
      MobileMenu.tsx    # client: compact disclosure panel
      Footer.tsx
    sections/
      Hero.tsx  Projects.tsx  Experience.tsx  Skills.tsx
      EngineeringApproach.tsx  About.tsx  Writing.tsx  Contact.tsx
    ui/
      Container.tsx       # 1100px centered column
      SectionHeading.tsx  # numbered editorial heading + hairline
      Reveal.tsx          # client: whileInView fade/rise, reduced-motion safe
      ThemeToggle.tsx     # client: dark/light crossfade toggle
      ThemeProvider.tsx   # client: next-themes wrapper
      SocialLinks.tsx     # hero link buttons
      FeaturedProject.tsx # expanded project layout: problem/solution/decisions/implementation + evidence column
      ArchitectureDiagram.tsx # hoverable monospace architecture sketch
      ProjectRow.tsx      # horizontal project row
      CopyEmailButton.tsx # client: clipboard helper
  data/
    profile.ts  projects.ts  experience.ts  skills.ts  writing.ts
  lib/
    utils.ts            # cn() + formatDate()
```

## Design system

The full design specification lives in **[DESIGN.md](./DESIGN.md)** (concept,
typography, color, spacing, grid, motion, accessibility, anti-patterns), with
the research log and inspected references in
**[DESIGN_REFERENCES.md](./DESIGN_REFERENCES.md)**. The quick-reference
tokens:

| Token        | Dark (default) | Light      |
| ------------ | -------------- | ---------- |
| Background   | `#0C0C0D`      | `#FAFAF8`  |
| Text         | `#EDEDED`      | `#171717`  |
| Secondary    | `#929292`      | `#737373`  |
| Border       | `#262626`      | `#E5E5E2`  |
| Accent (lime)| `#A8BC6B`      | `#5B6B33`  |

Typography: Geist for prose, Geist Mono for labels, metadata, and technical
details. Content column: 1100px. Radius: 4px. Hairlines over shadows.

## Deployment

Any Next.js host works (Vercel, Fly.io, a container). Set your real domain
in `src/data/profile.ts` (`siteUrl`) so metadata, sitemap, and robots point
at the right place, then run `bun run build` and deploy the standalone
output.
