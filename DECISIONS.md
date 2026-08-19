# Lucid — Decisions

## 1. Why this approach?

**React + Vite (TanStack Start) + Tailwind v4.** React gives clean component
boundaries for a page that is really eight independent "chapters", and Tailwind v4's
CSS-first theming let me define the whole visual identity as tokens in
`src/styles.css` (`--midnight`, `--violet-muted`, `--gradient-moon`,
`--shadow-glow`, `glass`, `grain`, `reveal`) instead of scattering ad-hoc styles
across components. Every component consumes semantic tokens, so spacing, glow and
typography stay consistent.

**Visual direction.** Lucid is about the moment between sleep and waking, so the page
is a single polished dark theme: deep midnight base, soft indigo and muted violet
depth, moonlight white type, one sparing warm highlight. Typography carries the
identity — Cormorant Garamond for emotional headings, Manrope for UI and body — and
scrolling moves through Night → Capture → Archive → Patterns → Reflection → CTA.
Glass, blur and grain are used sparingly and only where they create depth.

**Architecture.** `src/components/lucid/*` holds one component per chapter, plus two
shared primitives: `StarField` (deterministic, seeded so SSR and client match) and
`Reveal` (an `IntersectionObserver` hook driving one fade-up transition). No
animation library — CSS keyframes plus one observer hook covers drift, twinkle,
reveal and the constellation draw, which keeps the bundle small and the motion easy
to reason about.

**The interaction.** The Patterns constellation is the one deliberate
micro-interaction: on scroll the theme points fade in, the SVG lines draw themselves
via `stroke-dashoffset`, and hover/focus/tap lights a node and its edges. The list
beside it is wired to the same hover state, so it is a real read of the data, not
decoration. Nodes are `<button>`s with `aria-label`, so the interaction works by
keyboard too.

**Honesty.** No testimonials, user counts, logos or statistics. The copy says
"A private space for your dreams", the footer states plainly that Lucid is an
imaginary concept, and the insights section uses "Your journal shows…" / "You may be
noticing…" language, with an explicit note that Lucid does not diagnose anything or
claim dream symbols have fixed meaning.

## 2. One trade-off

**Not built:** real persistence. Dream entries, the timeline and the constellation
read from local, typed fixture data. There is no backend, auth or storage, because
the value of this challenge lives in the storytelling and the product preview, and a
half-built account system would have cost the polish.

**With a full week:** persist entries (local-first, then sync), let the constellation
recompute from real tag co-occurrence rather than a hand-placed graph, add a genuine
compose flow with autosave and voice capture, layer in reduced-motion-aware scroll
parallax, and write component tests for the interactive pieces.

## 3. AI usage

AI was used as an implementation accelerator: drafting the token palette in `oklch`,
scaffolding the repetitive section markup, and generating the sample dream copy for
the fixtures. I directed the product concept, section order and the choice of the
constellation as the single meaningful interaction.

I personally checked and changed: the responsive behaviour at 390px and 1440px
(header rows converted to `grid-cols-[minmax(0,1fr)_auto]` with `min-w-0`/`shrink-0`,
decorative glows clipped with `overflow-hidden` so nothing causes horizontal
scroll), the accessibility pass (real buttons and links, `aria-label`/`aria-pressed`/
`role="progressbar"`, visible focus rings, `prefers-reduced-motion` handling), the
honesty pass over every line of copy, and the animation restraint — I removed
several early effects because the page felt busy rather than dreamlike.
