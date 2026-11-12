# DESIGN.md — Technical Editorial

The design specification for this portfolio. Written after inspecting the
design-skill repositories and reference sites listed in
[`DESIGN_REFERENCES.md`](./DESIGN_REFERENCES.md); every rule below is enforced
in code. If a change contradicts this file, either the change or the file is
wrong — fix one of them.

---

## 1. Design concept

**One sentence:** a Swiss-print editorial system rendered on a terminal's
color palette — the portfolio of someone who ships AI systems and reads
specifications for pleasure.

**The idea that carries every decision:** *the page is a well-organized
technical document.* Sections are numbered and indexed like a spec. Metadata
(category, dates, stack, status) is set in monospace like a code annotation.
Separators are hairlines, not boxes. One restrained accent — muted lime —
plays the role of a syntax highlighter: it marks what matters and nothing
else.

**Emotional target:** calm confidence. The site should feel like it was
typeset by hand, loaded fast, and has nothing to prove.

## 2. Visual identity & genre

| Property | Decision |
| --- | --- |
| Genre | **Dark-tech × editorial-minimal** (design-taste genre packs; see references) |
| Personality | Minimal, technical, editorial, human, confident, slightly experimental |
| Voice | First person, plain-spoken, allergic to hype |
| Surface | Flat. No gradients on surfaces, no glass, no glow |
| Density | Editorial: generous whitespace, hairline rhythm, medium content density |
| Signature elements | Numbered section headings; monospace metadata layer; ASCII architecture sketches; hairline dividers; lime selection color |

## 3. Typography system

| Role | Font | Notes |
| --- | --- | --- |
| Body & headings | **Geist Sans** (`next/font`, variable) | Neutral grotesque with editorial stiffness; tracks tight at display sizes |
| Technical metadata | **Geist Mono** (`next/font`, variable) | Categories, dates, stack lists, section labels, status chips |

### Scale (as implemented)

| Token | Size / line-height | Weight | Usage |
| --- | --- | --- | --- |
| Display | 48px / tight (`text-5xl`, `md:`) | 500 | Hero name only |
| H1-mobile | 36px / tight (`text-4xl`) | 500 | Hero name on small screens |
| Headline | 20px (`text-xl`) / 18px mobile (`text-lg`) | 400 | Hero statement |
| Lead | 15px / relaxed | 400 | Hero support, about prose |
| H2 (section) | 12px mono, uppercase, tracking `0.22em` | 500 | `SectionHeading` — the section system |
| H3 (item) | 15px / snug | 500 | Project names, role titles, principles |
| Body | 14px / relaxed | 400 | Paragraphs, highlights |
| Meta | 11–12px mono | 400 | Dates, stack, notes, chips |
| Micro | 10px mono, uppercase, tracking `0.14em` | 400 | Categories, company names |

### Rules

1. **Weight discipline:** 400 for prose, 500 for titles. Never 700+ in body
   contexts; hierarchy comes from size, mono/sans contrast, and color — not
   boldness.
2. **Measure:** prose paragraphs cap at `max-w-2xl` (672px ≈ 75ch at 14px).
   Full-width text is reserved for lists and metadata.
3. **Line height:** relaxed (1.625) for body, snug (1.375) for titles,
   1.9 for ASCII diagrams.
4. **No oversized headings.** The largest type on the page is 48px. The
   section system speaks in 12px monospace — contrast does the shouting.
5. **Monospace is a layer, not a theme.** Meta text uses mono; sentences
   never do (inline code excepted).

## 4. Color palette & usage

### Dark (default)

| Token | Value | Role |
| --- | --- | --- |
| `background` | `#0C0C0D` | Page canvas |
| `foreground` | `#EDEDED` | Primary text, titles |
| `muted-foreground` | `#929292` | Body copy, metadata |
| `border` | `#262626` | All hairlines |
| `card` | `#121213` | Featured project panel |
| `secondary` / `muted` | `#161617` | Quiet fills (hover tints use `foreground/[0.04]` instead) |
| `brand` | `#A8BC6B` | Muted lime — accent |
| `brand-foreground` | `#0C0C0D` | Text on lime |
| `destructive` | `#E5484D` | Errors only |
| Status dot | `emerald-500` | Availability indicator only |

### Light

| Token | Value |
| --- | --- |
| `background` | `#FAFAF8` |
| `foreground` | `#171717` |
| `muted-foreground` | `#737373` |
| `border` | `#E5E5E2` |
| `brand` | `#5B6B33` (lime darkened for AA contrast on paper) |

### Usage discipline (60-30-10, adapted)

- **~60% background** — flat `#0C0C0D` / `#FAFAF8`. The canvas does the work.
- **~30% typography** — foreground for titles, muted-foreground for prose.
  Never pure white/black; the palette has no `#FFF` anywhere.
- **<10% accent** — muted lime appears only in: section numbers, role label,
  selection color, focus rings, small hover tints, the "published" chip.
  If lime appears twice in one viewport it is probably one time too many.
- **Borders are the layout.** Hairlines (`1px`, full-bleed `border-t`,
  `divide-y`) replace cards, shadows, and section backgrounds.

## 5. Spacing scale

Base-4 rhythm using Tailwind's scale. Landmarks (as implemented):

| Context | Value |
| --- | --- |
| Section vertical padding | `py-16` (64px) → `md:py-20` (80px); Contact `md:py-24` |
| Heading → content | `mb-10` (40px) → `md:mb-14` (56px) |
| Row vertical padding (lists) | `py-5`–`py-7` (20–28px) |
| Intra-block gaps | `gap-2` / `gap-3` / `space-y-2.5` / `space-y-5` |
| Grid column gaps | `gap-x-8` (32px) label→content |
| Hero top clearance | `pt-24` (96px) → `md:pt-32` (128px), clears fixed nav |

Rules: never stack two large spacings without content between them; rows in
one list share identical padding; adjacent sections share the same vertical
rhythm so hairlines land on a steady beat.

## 6. Grid, container & breakpoints

- **Container:** 1100px max, centered, `px-5` (20px) mobile / `px-6` (24px)
  from `sm`. One `Container` component — no section invents its own width.
- **Grid:** content flows in stacked editorial rows, not card grids.
  Two-column splits used deliberately:
  - Label column: `md:grid-cols-[10rem_1fr]` (experience), `[220px_1fr]`
    (skills), `[5.5rem/7rem_1fr_auto]` (writing)
  - Prose + aside: `md:grid-cols-[1fr_300px]` (about)
  - Featured project: `md:grid-cols-[1.15fr_0.85fr]` with `divide-x`
- **Breakpoints:** Tailwind defaults — `sm` 640, `md` 768, `lg` 1024,
  `xl` 1280. Mobile-first: every section must read as a single column at
  390px. The `md:` line is where rows gain their label column.
- **Touch targets:** interactive elements ≥ 44px hit area on mobile
  (nav toggle is 36px box with padding compensation around it).

## 7. Border & radius rules

| Rule | Value |
| --- | --- |
| Border width | 1px everywhere. Never 2px+ |
| Border color | `--border` token only — no bespoke grays |
| Divider pattern | `border-t border-border` on sections; `divide-y divide-border` inside lists |
| Radius | `--radius: 4px`; chips `3px`, buttons/inputs `4px`, featured panel `5px`. Nothing above 6px — **no pills, no rounded-2xl** |
| Shadows | None. Elevation is expressed with borders and a 2% foreground tint (`bg-foreground/[0.02]`) |

## 8. Component styling

| Component | Anatomy |
| --- | --- |
| `SectionHeading` | Mono index (lime) + mono uppercase title + right-aligned note (hidden on mobile) + full-width hairline. Every section opens with it |
| Editorial row | Label column (mono meta) + content column; hairline-divided; `py-5`–`7` |
| `ProjectRow` | Index → name + category → tagline → mono stack; year + `ArrowUpRight` right; hover tints title to brand and nudges arrow |
| `FeaturedProject` | Bordered panel: header band (name, category chip, status · year), left narrative (Problem / Approach / Notable engineering / Stack / links), right architecture panel (2% tint, mono ASCII) |
| Status chip | Mono 10px uppercase, `border-border` + muted text; lime variant only for "published" |
| `SocialLinks` | Bordered 4px buttons: icon + label, hover tint `foreground/[0.04]` |
| `ThemeToggle` | Icon button, crossfades sun/moon; `disableTransitionOnChange` prevents color flash |
| Navbar | Fixed, `h-14`, `bg-background/85` + `backdrop-blur-sm`, hairline under; name + status dot left, links + toggle right |
| Footer | Identity left, mono metadata right, hairline above |

## 9. Interaction behavior

1. **Link underline grow:** 1px `scale-x-0 → 100` from left, 200ms — navbar
   pattern. Inline text links use `hover:underline` with `underline-offset-4`.
2. **Color hovers:** muted → foreground (nav, rows) or foreground → brand
   (project titles, contact values). 150–200ms `transition-colors`.
3. **Arrow micro-motion:** `ArrowUpRight` translates (-2px, +2px) on hover.
4. **Panel hover:** `hover:bg-foreground/[0.04]` — the only "background
   change" allowed.
5. **Copy email:** clipboard write with inline "Copied" confirmation state.
6. **Nothing else moves on hover.** No scale, no tilt, no glow, no shadow.

## 10. Animation principles

Choreography follows `taste-motion` (see references): consistent durations,
purposeful reveals, explicit "never animate" list.

| Token | Value |
| --- | --- |
| Entrance | `Reveal`: opacity 0→1, y +12→0, **450ms ease-out**, plays **once** (`whileInView`, `-64px` margin) |
| Stagger | ≤ 40–50ms per item, capped at 0.2s total added delay |
| Micro-interactions | 150–220ms, `easeOut` |
| Mobile menu | Height+opacity open 220ms; closing is instant (exit animation races anchor scroll) |
| Scroll behavior | CSS `scroll-behavior: smooth` + `scroll-padding-top: 4.5rem`; no JS scroll hijacking |

**Never animate:** content the visitor is trying to read (nav links, contact
values), form inputs, theme switch, full-page transitions, anything looping
except the 1.5px availability ping. **Reduced motion:** `Reveal` renders
static; a global media query collapses all animation/transition durations to
0.01ms; smooth scroll reverts to auto.

## 11. Accessibility requirements

- WCAG 2.2 AA targets: body `#929292` on `#0C0C0D` ≈ 7.2:1; brand lime
  darkened to `#5B6B33` in light mode for AA on `#FAFAF8`.
- Semantic landmarks: `header/nav/main/section/article/footer`; one `h1`;
  section headings are `h2` with `aria-label`s on sections.
- Keyboard: skip-to-content link; visible 2px lime `:focus-visible` outline
  with 2px offset; native anchors for all navigation; Escape closes the
  mobile menu; `aria-expanded` on the toggle.
- Icon-only controls carry `aria-label` or `sr-only` text; decorative icons
  are `aria-hidden`.
- Status dot has `sr-only` text ("Open to opportunities"), ping is
  `motion-reduce:hidden`.
- 404 page offers real navigation back; no dead ends.

## 12. SEO & metadata

`profile.ts` is the single source: title template, description, keywords,
OpenGraph, Twitter card, canonical, `metadataBase`; JSON-LD `Person` schema
on the home page; `robots.ts` + `sitemap.ts` routes; SVG favicon
(`icon.svg`); OG image generated from the design system (`opengraph-image`).

## 13. Anti-patterns (banned on this site)

The design-taste core skill names the AI-default look; this site bans it in
writing:

1. Indigo/purple gradients, glowing cards, neon borders, gradient text.
2. Glassmorphism blur panels (navbar's 85% tint + 2px blur is the single
   sanctioned exception, for legibility over content).
3. Rounded-2xl cards, pill badges, bento grids, repeated identical cards.
4. Floating blobs, particles, cursors, parallax, scroll hijacking.
5. Emoji as icons (Lucide only), decorative illustrations.
6. Fake anything: metrics, testimonials, GitHub activity, achievements,
   production claims. Placeholders render in `[brackets]` until filled.
7. Marketing slogans ("Revolutionizing…"). Voice: plain, specific, first
   person.
8. Centered-hero + three-feature-cards template; Inter-as-personality.

## 14. Code craft rules (`taste-code-craft`)

- Semantic HTML, token-driven Tailwind classes, no hardcoded hex in
  components (tokens live in `globals.css` only).
- Server Components by default; `"use client"` only where interaction
  demands (theme, menu, reveal, copy button).
- Strongly typed data modules in `src/data/`; components stay generic.
- No dead code, no inline styles, no unused dependencies.
