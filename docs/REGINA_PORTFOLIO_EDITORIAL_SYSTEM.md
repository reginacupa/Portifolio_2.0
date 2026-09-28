# Regina Cupa --- Portfolio Redesign

## Creative Direction & Design System Brief for Antigravity

### 1. Objective

Redesign Regina Cupa's **personal portfolio + digital CV** while
preserving its professional narrative:

**Regina Cupa → professional profile → skills → projects → education →
contact.**

The portfolio positions Regina at the intersection of **front-end
development and UI design**.

This is Regina's personal portfolio. It must **not look like a SignatuRe
commercial landing page**, even though the uploaded SignatuRe editorial
board is the visual reference for its art direction.

------------------------------------------------------------------------

## 2. Visual Reference --- Primary Direction

Use the supplied reference image as the **main visual benchmark**.

The desired atmosphere is deliberately:

**Vogue-like editorial · sophisticated · dramatic · graphic ·
fashion-inspired · high contrast · art-directed**

Preserve from the reference: - predominantly black/dark compositions; -
warm off-white/light editorial areas; - deep wine/burgundy accent; -
very restrained aged-gold accent; - oversized editorial typography; -
strong contrast between serif display and clean sans-serif; - large
negative space; - asymmetrical composition; - monochrome photography
when imagery is used; - expressive wine brush/stroke gestures; - thin
rules, micro-labels and small uppercase captions; - magazine-grid
feeling; - controlled texture; - dramatic scale changes; - layouts that
feel designed rather than templated.

Do **not** make this look like: - a SaaS landing page; - a
developer-dashboard portfolio; - a generic card grid; - a neon/cyberpunk
developer site; - a clone of the SignatuRe website; - an interface
overloaded with glassmorphism, gradients or floating pills.

The goal is an **editorial portfolio for a designer/developer**, not a
corporate product page.

------------------------------------------------------------------------

## 3. Color System

Use the reference board as the visual source.

### Core

-   **Ink Black:** `#0D0D0F`
-   **Wine / Burgundy:** `#5B1F3A`
-   **Warm Gray / Ivory:** `#EDE8E3`
-   **Paper White:** `#FFFFFF`
-   **Aged Gold:** `#C9A24E`

### Usage

Black and ivory should dominate.

Wine is the primary expressive accent.

Gold must be extremely restrained: approximately **1--3%** of the visual
system. Use it only for micro-details, rules, tiny markers or selected
accents.

Do not turn the portfolio into a conventional black-and-gold luxury
design.

------------------------------------------------------------------------

## 3A. Background & Signature Brush System --- REQUIRED

This is a **core visual requirement**, not optional decoration.

### Background language

The portfolio should reproduce the same environmental contrast seen in
the supplied reference board:

-   large areas of **deep ink black (`#0D0D0F`)**;
-   large areas of **warm ivory / mineral off-white (`#EDE8E3`)**;
-   paper white (`#FFFFFF`) only where cleaner contrast is useful;
-   transitions between black and ivory may be irregular, layered or
    visually invaded by graphic gestures;
-   avoid flat, repetitive rectangular section backgrounds;
-   subtle material texture may be used so black feels rich rather than
    digitally empty and ivory feels tactile rather than sterile.

The dark background should remain predominantly neutral/black. Do
**not** tint the entire dark environment burgundy.

### Wine brush stroke --- PRIMARY expressive gesture

The **large wine/burgundy brush stroke visible in the supplied reference
image must be translated into the portfolio visual system.**

Working color: **Wine / Burgundy --- `#5B1F3A`**

The stroke should feel: - physical; - painterly; - imperfect; -
directional; - energetic; - sophisticated; - high contrast against black
and ivory.

It may: - enter from outside the viewport; - cross a dark/light
boundary; - sit partially behind oversized typography; - reveal
progressively on scroll; - crop at viewport edges; - connect two content
regions; - appear as a large compositional gesture in one or two key
moments.

Do not reduce it to a tiny underline or generic SVG squiggle.

Do not repeat the same brush asset throughout the whole site. The large
wine gesture should remain memorable because it is used selectively.

### Gold brush / metallic gesture --- SECONDARY and rare

In addition to the wine stroke, create a **restrained aged-gold
brush/paint gesture** inspired by the same physical material language.

Working color: **Aged Gold --- `#C9A24E`**

Gold must remain approximately **1--3% of the total visual presence**.

The gold gesture may appear: - as a partial dry-brush edge; - as a thin
metallic paint sweep; - as a small fragment intersecting a wine
gesture; - as a subtle highlight revealed by scroll; - as a micro-detail
near a major editorial composition.

It must **not** become: - a large gold background; - a repeated gold
brush on every section; - a shiny gradient; - glitter; - chrome; - a
conventional "luxury" gold effect.

The desired gold is **aged, tactile, muted and editorial**, not glossy.

### Wine + gold relationship

Wine is the expressive color. Gold is punctuation.

When both appear in the same composition: - wine should clearly
dominate; - gold should feel discovered afterward; - they should never
compete at equal scale; - use black/ivory negative space to keep the
composition sophisticated.

### Texture behavior

Brush textures should preserve: - bristle marks; - dry edges; -
irregular opacity; - physical paint character.

Avoid perfectly smooth vector strokes when a real painted texture would
communicate the reference more accurately.

If generated procedurally or as an asset, optimize it carefully for web
use and preserve transparency where appropriate.

### Motion behavior

When animated, brush gestures should feel **revealed**, not drawn by a
cartoon pen.

Preferred approaches: - masked reveal; - clipped exposure tied to
scroll; - subtle parallax between paint texture and background; -
gradual crop expansion.

Keep the original physical texture intact during animation.

### Visual priority

The reference image establishes this hierarchy:

**BLACK / IVORY ENVIRONMENT → WINE GESTURE → TYPOGRAPHY → GOLD
MICRO-ACCENT**

Preserve that hierarchy.

------------------------------------------------------------------------

## 4. Typography Direction

The portfolio should use an **editorial serif + restrained modern
sans-serif** pairing.

### Display serif

Use a high-contrast editorial serif in the spirit of the reference
image.

It should feel: - elegant; - assertive; - fashion-editorial; - excellent
at very large sizes; - suitable for dramatic headlines.

Do not use the SignatuRe Anta wordmark as Regina's portfolio display
typography.

### Sans-serif

Use a clean, highly readable sans-serif for: - navigation; - body
copy; - labels; - project metadata; - technologies; - buttons; - CV
information.

Keep typography native: **never synthesize or artificially force font
weights.**

### Hierarchy

Use extreme scale contrast: - very large editorial headlines; - medium
subheads; - small uppercase metadata with generous tracking; -
comfortable body text.

Typography should be a major visual element, not merely content placed
inside boxes.

------------------------------------------------------------------------

## 5. Graphic Language

Translate the supplied reference into a reusable system.

### Approved visual devices

-   wine brush strokes;
-   thin wine rules;
-   editorial crop lines;
-   micro typography;
-   dotted/grid details used sparingly;
-   monochrome imagery;
-   oversized isolated letters;
-   cropped typography;
-   asymmetric columns;
-   texture against otherwise clean surfaces;
-   elements crossing conventional section boundaries.

### Rule

Every expressive element must support hierarchy or narrative.

Do not scatter decorative motifs randomly.

------------------------------------------------------------------------

## 6. Motion & Interaction

The static reference should become a refined digital editorial
experience.

Motion should feel like a **magazine becoming alive**.

Use: - restrained text reveals; - image masks/crops opening on scroll; -
subtle horizontal/vertical editorial movement; - controlled parallax
only where it adds depth; - wine strokes revealed as if drawn or
exposed; - project imagery transitioning between monochrome and color
where appropriate; - subtle section overlaps; - large typography
entering/cropping through the viewport.

Avoid: - bouncing; - excessive cursor gimmicks; - constant animation; -
slow intros that block content; - gratuitous 3D; - motion that harms
readability.

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

## 7. Content Architecture

### Navigation

**Sobre · Projetos · Skills · Formação · Contato**

Keep navigation minimal and editorial.

------------------------------------------------------------------------

## 8. Hero

### Content

**Regina Cupa**

**Front-end Developer & UI Designer**

**Design e código trabalhando juntos para transformar ideias em
experiências digitais claras, funcionais e bem construídas.**

CTAs: - **Ver projetos** - **Sobre mim**

### Art direction

Do not use a conventional centered developer Hero.

Create an editorial opening spread: - Regina's name can be oversized and
partially cropped; - title and introduction may occupy different
columns; - use negative space aggressively; - use a monochrome portrait
only if an appropriate image is supplied; - otherwise build the Hero
typographically rather than inventing stock imagery; - introduce wine
through one deliberate gesture, not multiple accents; - allow the next
content region to intrude subtly into the Hero.

The first screen should communicate **taste + competence** before the
visitor reads everything.

------------------------------------------------------------------------

## 9. About

### Headline

**Entre o design e o código.**

Use this section as an editorial profile rather than a résumé paragraph.

Possible composition: - large headline; - narrow readable text column; -
oversized initial/letterform or abstract graphic; - selected
professional facts treated as magazine annotations.

Do not put the biography inside a generic card.

------------------------------------------------------------------------

## 10. Featured Projects

Projects are the core proof of the portfolio.

Each featured case should support: - project name; - category; -
context; - challenge; - solution; - Regina's participation; -
technologies; - learning/outcome; - project/repository links where
available.

### Visual behavior

Do not present all projects as identical cards.

Treat each major case like an **editorial feature/story**: - large
project image; - project number; - oversized title; - asymmetric text; -
alternating light/dark environments; - selective wine accent; - details
revealed progressively.

A case can occupy nearly a full viewport before yielding to the next.

The design should make the viewer want to inspect the work, not merely
scan thumbnails.

------------------------------------------------------------------------

## 11. Skills

Show competence without using a generic cloud of technology badges.

Group skills meaningfully, for example: - **Front-end** - **UI /
Interface** - **Workflow & Tools**

Use typography, hierarchy and restrained editorial markers.

Technology names may appear as structured lists, columns or running
editorial indexes.

------------------------------------------------------------------------

## 12. Education

Treat education as part of Regina's professional narrative, not as an
administrative table.

Use: - timeline or editorial chronology; - strong dates; - concise
institution/course information; - generous spacing; - thin rules.

Avoid résumé-template visuals.

------------------------------------------------------------------------

## 13. Contact

### Headline

**Vamos conversar?**

The final section should feel confident and personal.

Use a strong editorial closing composition rather than a generic contact
card.

Prioritize direct contact and relevant professional links.

The final screen may return to the dark environment for a strong visual
close.

------------------------------------------------------------------------

## 14. Dark / Light Rhythm

Unlike the SignatuRe commercial site, this portfolio does not need to
follow the same branded dark-to-light narrative.

Instead, use **editorial pacing**.

Dark and light environments may alternate according to content: - dark
for drama and major statements; - ivory for reading and CV
information; - dark again for selected cases or closing.

Transitions should still feel intentional and can overlap rather than
switching as rigid horizontal bands.

------------------------------------------------------------------------

## 15. Responsive Direction

Mobile must feel intentionally art-directed, not like a compressed
desktop page.

On small screens: - preserve dramatic typography but reduce clipping; -
simplify overlaps; - keep body copy highly readable; - reduce motion; -
maintain the wine accent; - preserve editorial hierarchy; - stack
project storytelling logically; - keep navigation straightforward.

Do not sacrifice usability for the editorial aesthetic.

------------------------------------------------------------------------

## 16. Accessibility & Performance

Required: - semantic HTML; - keyboard navigation; - visible focus
states; - adequate contrast; - logical headings; - alt text; -
reduced-motion support; - responsive images; - optimized fonts/assets; -
no essential information available only through hover.

Performance is part of visual quality.

------------------------------------------------------------------------

## 17. Antigravity Implementation Instructions

Before implementing:

1.  Read this document completely.
2.  Use the supplied Vogue-like reference image as the **primary
    art-direction reference**.
3.  Preserve the portfolio content and professional narrative.
4.  Do not reuse the previous portfolio Design System if it conflicts
    with this direction.
5.  Do not copy the SignatuRe commercial site structure.
6.  Build a coherent reusable system from the editorial language rather
    than reproducing one static board literally.
7.  Prototype the experience in the browser and evaluate typography,
    crop, spacing and motion in context.
8.  Prefer a small number of strong visual gestures over many effects.
9.  Keep components modular and responsive.
10. Do not invent professional facts, projects, credentials, results or
    metrics.

------------------------------------------------------------------------

## 18. Evaluation Test

The redesign succeeds if the first impression is:

**"This person understands both visual design and digital
implementation."**

It should feel: - editorial rather than templated; - sophisticated
rather than ornamental; - bold rather than noisy; - personal rather than
corporate; - designed rather than decorated.

The visitor should recognize Regina as a **Front-end Developer & UI
Designer** whose portfolio itself demonstrates the intersection between
design and code.

------------------------------------------------------------------------

## Final Direction

This portfolio may borrow the **editorial confidence, palette, contrast,
typography scale and graphic energy** of the supplied SignatuRe/Vogue
reference.

But the identity remains:

# **REGINA CUPA**

The reference provides the visual language.

**Regina's work and professional story provide the identity.**
