---
name: frontend-design
description: >
  Create distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.
  Use when building any web UI: landing pages, dashboards, apps, components.
  Combines Anthropic's anti-slop philosophy with a structured design-first workflow.
  For B2B landing pages specifically, use the frontend-design-b2b skill instead.
---

# Frontend Design — Anti-AI-Slop Skill

This skill guides Claude Code to create distinctive, production-grade frontend interfaces.
It MUST be loaded into every Claude Code session that builds frontend UI.

## Installation

Place this as a Claude Code skill:
```
{project}/.claude/skills/frontend-design.md
```

Or symlink from workspace:
```bash
mkdir -p {project}/.claude/skills
cp /Users/nexus/.openclaw/workspace/skills/frontend-design/SKILL.md {project}/.claude/skills/frontend-design.md
```

## Core Philosophy: Anti-AI Slop

AI agents default to safe, generic patterns. This skill MANDATES breaking those patterns.

### ❌ THE SLOP LIST — NEVER DO THESE:
- **Fonts:** Inter, Roboto, Arial, system-ui as primary font. These scream "AI generated."
- **Colors:** Purple-on-white gradients. Generic blue buttons. Gray backgrounds. Default Tailwind palette.
- **Layout:** Everything centered. Symmetric 3-column grids. Cookie-cutter SaaS layouts. 4 equal cards in a row.
- **Icons:** Emojis as UI icons (🎨 🚀 ⚙️). Use SVG icons (Heroicons, Lucide, Phosphor, Simple Icons).
- **Motion:** No animations at all OR janky transitions. Elements appearing from opacity:0 that break if JS fails.
- **Content:** Lorem ipsum. "Welcome to our platform." Generic hero with stock photo.
- **Spacing:** Everything equidistant. No hierarchy. No breathing room.

### ✅ THE QUALITY LIST — ALWAYS DO THESE:
- **Fonts:** Characterful, unique Google Fonts. Display font + body font pairing. Each project gets its own font personality.
- **Colors:** Signature palette with ONE dominant color + sharp accent. CSS variables for consistency. Bold, not timid.
- **Layout:** Asymmetry. Overlap. Grid-breaking elements. Generous negative space. Visual hierarchy through scale contrast.
- **Icons:** SVG-only. Consistent icon set. Appropriate weight/style for the design.
- **Motion:** CSS-first animations. Staggered reveals. Micro-interactions on hover. Scroll-triggered transitions using transform (NEVER opacity:0 as default state).
- **Content:** Specific, contextual, purposeful. Every word earns its place.
- **Spacing:** Intentional rhythm. Tight where things relate, spacious where they don't.

---

## Mandatory Workflow: Plan → Build → Polish

### Phase 1: PLAN MODE (before any code)

Before writing a single line of code, establish:

1. **Purpose & Audience:** What does this solve? Who sees it?
2. **Aesthetic Direction:** Pick ONE and commit fully:
   - Brutally Minimal — Monochrome, extreme white space
   - Maximalist Rich — Dense, layered, pattern-mixing
   - Retro-Futuristic — Chrome, neon, 80s-inspired
   - Luxury/Refined — Dark + gold/silver accents, serif fonts, generous spacing
   - Playful — Rounded, bright, bouncy animations
   - Editorial/Magazine — Grid-based, bold headlines, clean hierarchy
   - Brutalist/Raw — Monospace, harsh contrasts, industrial
   - Art Deco — Sharp angles, metallic accents, ornate borders
   - Custom — Define your own, but be SPECIFIC
3. **Font Pairing:** Choose specific Google Fonts. State why.
4. **Color System:** Define 5-7 colors as CSS variables. Dominant + accent + neutrals.
5. **Section Plan:** Every section with layout description (not just content).
6. **Motion Plan:** What animates, how, and when.
7. **Differentiation Statement:** How does this avoid looking like every other AI-generated page?

Output this as a **Design Direction Summary** before building.

### Phase 2: BUILD

- Write all code following the design plan
- Single-file HTML preferred for landing pages (inline CSS + JS)
- Use CSS variables for all colors, spacing, fonts
- Mobile-first responsive
- Semantic HTML
- Accessibility: 4.5:1 contrast minimum, labels, alt text

### Phase 3: POLISH

- Every interactive element has cursor:pointer
- Hover states provide stable feedback (color/opacity/shadow, NOT scale that shifts layout)
- Animations are CSS-first, JS only when necessary
- All scroll animations use transform + opacity transitions (elements MUST be visible without JS)
- Test at 375px, 768px, 1024px, 1440px

---

## Pre-Delivery Checklist

Before delivering any frontend code, verify:

### Visual Quality
- [ ] Typography is characterful — NOT Inter/Roboto/Arial
- [ ] Color scheme is unique to this project — NOT generic blue/purple
- [ ] Layout has visual variety — NOT repetitive symmetric grids
- [ ] Hover states on all interactive elements
- [ ] No emojis as functional UI icons (SVG only)

### Technical Quality
- [ ] CSS variables for all design tokens
- [ ] Mobile responsive at all breakpoints
- [ ] No horizontal scroll on mobile
- [ ] cursor:pointer on all clickable elements
- [ ] Content visible and readable without JavaScript
- [ ] Images lazy-loaded below fold
- [ ] Semantic HTML (sections, nav, main, footer)

### Motion Quality
- [ ] Scroll animations use transform + transition (NOT opacity:0 default)
- [ ] Staggered reveals on grouped elements
- [ ] Micro-interactions on buttons and cards
- [ ] Animation duration 150-300ms for interactions, 400-600ms for reveals
- [ ] Reduced motion media query respected

---

## Visual Asset Generation (Nano Banana / Image Gen)

When a landing page or UI needs custom visuals (hero images, product shots, illustrations, section backgrounds):

1. **Nano Banana Pro** (Gemini) for photorealistic images, product mockups, custom illustrations
2. **OpenAI Image Gen** for stylized graphics, icons, abstract visuals
3. **ImageMagick** for post-processing (resize, format, optimize, overlay text)

### Asset Workflow:
```
Prompt → Generate image → Review → Post-process (crop/resize/optimize) → Embed as base64 or reference
```

For scroll-driven video animations (Apple-style):
```
Generate start frame → Generate end frame → Create video (Kling/Runway) → Extract frames with ffmpeg → Scroll-position mapping in JS
```

---

## Font Pairing Reference (Anti-Slop Alternatives)

Instead of Inter/Roboto, consider these Google Fonts pairings:

| Vibe | Display Font | Body Font |
|------|-------------|-----------|
| Luxury/Premium | Playfair Display | Source Sans 3 |
| Modern Tech | Space Grotesk | IBM Plex Sans |
| Editorial | Fraunces | Libre Franklin |
| Bold/Confident | Sora | Work Sans |
| Elegant | Cormorant Garamond | Nunito Sans |
| Geometric | Outfit | Inter (acceptable as BODY only) |
| Playful | Poppins | Quicksand |
| Brutalist | JetBrains Mono | Space Mono |
| Classic Authority | Merriweather | Open Sans |
| Clean Modern | Plus Jakarta Sans | Figtree |

---

## Iteration: Improve the Skill

After every frontend build, Nexus should evaluate:
1. What looked good? → Document the pattern
2. What looked generic? → Add to the SLOP LIST
3. What font/color combo worked? → Add to reference
4. What layout pattern was effective? → Document it

Update this skill file with learnings over time.
