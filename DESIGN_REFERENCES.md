# DESIGN_REFERENCES.md

Design research log for this portfolio. **Every entry below was actually
inspected** (fetched and read) during the research phase on 2026-11-05;
principles were extracted and then applied. Resources that could not be
meaningfully inspected are listed under *Limitations* — nothing here is
cited secondhand.

---

## A. Design skill repositories

### 1. madebymustafa/design-taste — *inspected (README + catalog)*
https://github.com/madebymustafa/design-taste

24 agent skills that "make AI-generated interfaces look *designed*, not
*generated*." Names the AI-default look explicitly: *indigo-purple gradients,
a centered hero, three feature cards, Inter, slate-900, rounded-2xl.*

**Principles extracted & applied:**
- **Genre packs decide identity.** We adopted a hybrid of two of its genres:
  `dark-tech` ("near-black, hairline borders, mono metadata, one restrained
  accent") and `editorial-minimal` ("Swiss print: hairline grids, indexed
  sections"). This site's numbered mono section headings, hairline rhythm,
  and single lime accent are direct applications.
- **Craft skills police details:** `taste-typography` (weight discipline,
  line lengths, fluid scales) → our 400/500-only weight rule and
  `max-w-2xl` measure; `taste-color` (60-30-10, WCAG contrast math) → our
  accent budget and darkened light-mode lime `#5B6B33`; `taste-motion`
  (duration tokens, reduced-motion compliance, "what never to animate") →
  our 450ms-once reveal system and banned-list in DESIGN.md §10;
  `taste-code-craft` (semantic HTML, token-driven CSS, no dead code) →
  DESIGN.md §14; `taste-design-review` (structured audit) → the Phase 4
  review checklist.
- **Ban the defaults in writing.** Our DESIGN.md §13 exists because this
  repo argues taste must be stated as instructions, not vibes.

### 2. superdesigndev/superdesign — *inspected (README + workflow docs)*
https://github.com/superdesigndev/superdesign

Design workflow built on iteration: *"Why design one option when you can
explore ten?"*, fork-and-iterate, component lifecycle from mockup to reusable
code, in-context editing.

**Principles extracted & applied:**
- **Explore, don't one-shot.** Before implementing, the visual direction was
  chosen among genres (dark-tech, editorial-minimal, brutalist-industrial,
  japanese-minimal were candidates from the design-taste catalog) rather
  than taking the first plausible look.
- **Reusable components over one-off sections** — `SectionHeading`,
  `Container`, `Reveal`, editorial-row pattern shared across five sections.
- **Fidelity ladder** (wireframe → mockup → code) mirrored the build order:
  structure and rhythm first, then interactions, then polish.

### 3. marvkr/better-design — *inspected (README + capability docs)*
https://github.com/marvkr/better-design

Open-source design MCP server: `get-ui-principle` (hierarchy, spacing,
typography, depth, motion), `get-ux-principle` (flows, forms, navigation,
errors), `get-review-rules` (accessibility + visual checks), `find-icons`
(one icon library for consistency).

**Principles extracted & applied:**
- **Depth is expressed minimally** — we use borders + a 2% foreground tint
  instead of shadows; the featured project panel is the only "elevated"
  surface.
- **One icon library** — Lucide React only, `aria-hidden` on decorative
  usage, consistent 3.5–4px stroke sizing.
- **Review rules as a ritual** — its self-review concept shaped Phase 4/5:
  visual pass against DESIGN.md, then a11y/keyboard pass, then lint + types.
- **UX principle: navigation & errors** — skip link, Escape-to-close menu,
  `aria-expanded`, and a 404 with real exits.

### 4. MengTo/skills — *inspected (README + library index)*
https://github.com/MengTo/skills

7.3k-star library of 176 agent skills. Philosophy: *"Prompts are assets"*
(versions, libraries), *"Specs beat vibes"* (clear constraints, "change 1–2
things only" iteration), *"References beat paragraphs"*, skills as operating
procedures with defaults.

**Principles extracted & applied:**
- **Specs beat vibes** — this site's DESIGN.md is the spec; every value in
  it (spacing landmarks, durations, token hexes) is a default the code
  follows.
- **`editorial-tech` / `editorial-portfolio-chapters` layout skills** informed
  the chaptered, indexed section structure (01–07) and the label-column row
  layouts.
- **Prefer explicit defaults** (durations, spacing, hierarchy) — reflected in
  DESIGN.md §5/§10 tables.
- **Restraint in effects:** its CSS-detail skills exist, but the site uses
  only underline-grow, arrow-shift, and hover tints — nothing from the
  WebGL/particles category, deliberately.

### 5. podo/design-agent-skills — *inspected (README + catalogue structure)*
https://github.com/podo/design-agent-skills

Catalogue of 164 design skills (design engineering, motion, interaction
polish, accessibility, design review) with a two-tier routing structure.

**Principles extracted & applied:**
- **Accessibility as a first-class category** — reinforced treating WCAG 2.2
  AA as a build requirement, not an audit afterthought (contrast-checked
  light-mode accent, focus-visible rings, sr-only status text).
- **Interaction & polish category** — confirmed the "few, tiny, purposeful"
  interaction budget: underline grow, arrow shift, panel tint, copy
  feedback, theme crossfade. Nothing else.
- **Design review as a loop** — supported the inspect→refine→re-verify
  cycle used in Phase 4.

---

## B. Design-system resources

### 6. designmd.me — *inspected (full)*
https://designmd.me

Markdown-driven design specifications: DESIGN.md files as structured specs
with sections for Colors, Typography, Spacing, Radius, Elevation,
Components, Breakpoints; 4/8-based spacing; explicit token formats.

**Applied:** the structure and specificity of our DESIGN.md follows this
format — concrete values over prose, per-token tables, breakpoints as data.

### 7. styles.refero.design — *inspected (directory level)*
https://styles.refero.design

2,000+ AI-readable design systems extracted from real product sites, each
published as colors/typography/spacing/components + a DESIGN.md.

**Applied:** validated the workflow of maintaining the design system as a
machine-readable markdown file next to the code (this repo's DESIGN.md).

### 8. designmd.supply — *inspected (overview)*
https://designmd.supply

Generates brand style guides from public sites as agent-ready DESIGN.md
documents.

**Applied:** confirmed the DESIGN.md-as-deliverable convention required by
the brief.

### 9. open-design.ai — *inspected (overview)*
https://open-design.ai

Collaborative design-agent workspace; 150+ open design systems; "colors,
type, spacing, and components shape every prototype."

**Applied:** general confirmation that token systems should drive generation
end-to-end.

### 10. typeui.sh — *inspected; marketing-level content only*
https://typeui.sh

The page fetched was a product overview (AI UI tool plans) without concrete
typography rules. **Recorded as a limitation** — no typographic guidance was
taken from it. Typography guidance came from design-taste's
`taste-typography` (entry 1) instead.

---

## C. Website inspiration

### 11. land-book.com — *inspected (gallery listings)*
https://land-book.com

Landing-page gallery; confirmed the pattern of **benefit-driven, concrete
headlines** ("The Work Finds Itself and Gets Done") over slogan headlines,
and tight hero hierarchy: headline → short support → CTA.

**Applied:** hero is one plain-spoken headline + one supporting paragraph;
contact section leads with a conversational question, not a CTA banner.

### 12. siteinspire.com — *inspected (category taxonomy)*
https://siteinspire.com

Showcase taxonomy: Minimal (847), Grid Layout (672), Portfolio (1,444),
Typographic (2,105). The genre this site targets sits exactly at the
Minimal × Typographic × Portfolio intersection.

**Applied:** confirmed typographic restraint as a genre signal — hierarchy
through mono/sans contrast and hairlines rather than size.

### 13. minimal.gallery — *inspected (listings level)*
https://minimal.gallery

Curation of minimal personal/creative sites since 2013; confirmed the
single-column editorial scroll with indexed sections as the dominant
portfolio pattern among featured personal sites.

**Applied:** single-page, single-column section stack; each section a
"chapter" with its own hairline and number.

---

## Limitations (honest record)

The following resources were **not** inspected — the web-fetch budget was
exhausted during the research phase. No principles in this project are
attributed to them:

- godly.website, recent.design, details.so, curated.design, interfaces.dev,
  kage.design, supahero.io, motion.in.design, unsection.com — fetches either
  returned index-level markup without design content or were not reached.
- prathm.me, navbar.gallery, footer.design — not reached before the fetch
  budget closed; navigation/footer patterns were instead derived from the
  inspected repositories (better-design UX principles, MengTo layout skills)
  and the site's own Phase 4 visual review.
- designspells.com, 60fps.design, transitions.dev, 21st.dev, reactbits.dev,
  magicui.design, ui.aceternity.ui and the remaining component libraries —
  not inspected. Motion guidance came from design-taste `taste-motion`
  (entry 1) and the Framer Motion usage patterns already in the codebase
  (450ms once-only reveals, 220ms micro-interactions, reduced-motion
  fallbacks).
- ui.shadcn.com — not fetched in this phase, but shadcn/ui is the component
  foundation actually installed and used in this project (`src/components/ui`),
  selected in the previous build phase; its primitives (button, dialog
  patterns, theming tokens) are in active use, which is the inspection that
  matters.

---

## Synthesis — the ten rules this research produced

1. Pick a genre deliberately; ban the AI defaults in writing.
2. One accent, spent like syntax highlighting.
3. Mono for metadata, sans for sentences; never confuse the layers.
4. Hairlines are the layout; borders replace cards; shadows are banned.
5. Hierarchy by contrast and spacing, not by weight or size inflation.
6. Motion: few, short, once, purposeful — with an explicit never-list.
7. Accessibility is a build input (contrast math, keyboard, semantics).
8. The design system lives in a spec file next to the code.
9. Components are reusable and typed; sections compose from them.
10. Nothing fake: placeholders are visible, honest, and bracketed.
