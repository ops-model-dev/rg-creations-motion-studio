# RG Creations — Cinematic Dark Rebrand + Instagram Reels Section

## What you'll see after this

A dramatic, mostly black site: charcoal surfaces, ivory type, champagne-gold accents, oversized condensed headlines, editorial asymmetric layouts, subtle scroll reveals — and the "Selected stages" section replaced by an Instagram-style reels grid (4 tiles, click to open your profile).

## 1. Fix the invisible text at the top

Cause (confirmed in code): the hero eyebrow, paragraph and secondary button use dimmed colors (`ember-soft`, `paper/80`, `border-paper/40`) that sit over the video, which is very dark in places and bright purple in others — low contrast either way.

Fix:
- Strengthen the dark scrim at the bottom of the hero so text always has a readable base.
- Move the eyebrow/paragraph/links to full ivory (#F2EFE9) or gold (#C5A66A), never dimmed variants, in the hero and nav.
- Same cleanup anywhere else dimmed text sits on video or dark panels.

## 2. New visual direction (whole site)

- Palette: charcoal/black surfaces (`#121110` base, `#1A1815` panels), ivory `#F2EFE9` for type, champagne gold `#C5A66A` for accents, rules and small details.
- Typography: oversized condensed display font (Anton) for headlines; clean sans-serif (Archivo) for body. Serif italic accents removed.
- Layouts: asymmetric grids (offset columns, e.g. 7/5 splits), generous negative space, thin gold rules, no rounded cards, no gradients (except the video scrim), no clutter.
- Motion: subtle scroll reveals (fade + small rise) on every section, restrained hover states (opacity/underline, slight scale on media only), elegant 300–500 ms transitions.
- Sections reworked in this language: Hero, Services, Reels, Process, Contact, Footer. Form and WhatsApp logic untouched — only the look.

## 3. Reels section (replaces "Selected stages")

- 4 reel-style portrait tiles (9:16) built from your real footage (the two uploaded videos + distinct frames extracted from them), each with an Instagram glyph and "Watch on Instagram".
- Autoplaying muted previews on hover (or subtle motion), tap/click opens `https://www.instagram.com/rgcreationsmy` in a new tab.
- Header: "Live from @rgcreationsmy" with a follow link.
- Note: this is a curated tiles grid linking to your profile — a fully automatic feed that pulls your latest posts needs an Instagram Business connection; we can add that later once the account is linked. If you send me the links to 3–4 specific reel posts, I'll point each tile at its own post.

## Technical notes

- New tokens in `src/index.css` + `tailwind.config.ts`: charcoal, ivory, gold; font imports Anton + Archivo. Logo stays white-transparent on dark surfaces; favicon unchanged.
- New poster images extracted from your videos via image processing, stored as CDN assets.
- Scroll reveals with framer-motion `whileInView` (respects reduced-motion).
- No changes to the enquiry form logic, database, or edge function — the working enquiry flow stays as verified.

## Verification

- Playwright walk-through of every section at desktop and mobile widths, checking text contrast over the video, the reels grid links, and one test enquiry submission (then deleting the test row).
