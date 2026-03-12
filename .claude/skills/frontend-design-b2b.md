---
name: frontend-design-b2b
description: >
  Build high-converting B2B landing pages with premium design quality.
  Extends the base frontend-design skill with B2B-specific conversion patterns,
  section templates, testimonial formats, and trust-building elements.
  Use when building landing pages for business services, SaaS, consulting, agencies.
  ALWAYS load the base frontend-design skill alongside this one.
---

# Frontend Design B2B — Landing Page Specialist Skill

Extends the base `frontend-design` skill for B2B landing pages.
**Both skills MUST be loaded together.**

## Installation

```bash
# Copy both skills into the Claude Code project
mkdir -p {project}/.claude/skills
cp /Users/nexus/.openclaw/workspace/skills/frontend-design/SKILL.md {project}/.claude/skills/frontend-design.md
cp /Users/nexus/.openclaw/workspace/skills/frontend-design-b2b/SKILL.md {project}/.claude/skills/frontend-design-b2b.md
```

---

## B2B Landing Page Philosophy

B2B landing pages must do THREE things simultaneously:
1. **Look premium** — Design quality signals service quality. Cheap-looking page = cheap-looking company.
2. **Build trust fast** — Decision-makers (GFs, C-Level, Abteilungsleiter) decide in 10 seconds if this is serious.
3. **Convert** — Every section moves the visitor closer to the CTA. No filler.

### The B2B Design Trap
Most B2B pages are BORING: blue/gray, stock photos of handshakes, bullet point features, generic "Contact us" CTA.
That's AI slop applied to B2B. We do the opposite.

---

## B2B Plan Mode (extend base skill's Phase 1)

In addition to the base frontend-design Plan Mode, establish:

1. **Target Decision-Maker:** Who exactly lands on this page? GF? QMB? Marketing-Leiter? Their pain level and sophistication determines tone.
2. **Addressing:** "Sie" (formal B2B) vs "Du" (startup/tech). Default: "Sie" unless explicitly told otherwise.
3. **Trust Architecture:** What builds credibility? Expert person? Numbers/stats? Logos? Certifications? Testimonials? Plan the trust stack.
4. **Conversion Architecture:** Primary CTA + secondary CTAs. How many CTA touchpoints? What's the offer? (Erstgespräch, Demo, Audit, Download)
5. **Content Sophistication Level:**
   - Level 1-2: "We do X" (features) — commodity market, generic
   - Level 3: "We do X better because Y" (mechanism) — differentiated
   - Level 4-5: "Here's WHY everything else fails, and HOW we do it differently" (identity) — premium positioning
   → **Always aim for Level 4-5.** The page should make competitors look generic.
6. **Reference Materials:** List all reference pages, designs, screenshots, brand guides available. Classify each:
   - **Clone source** = replicate this design exactly with new content
   - **Structure reference** = adopt this page structure/flow but own design
   - **Element reference** = borrow specific sections/components
   - **Content reference** = use for copy/messaging inspiration only

---

## B2B Section Templates

These are the building blocks. Mix and match. Don't use ALL of them — pick what fits.

### Hero Patterns

**Pattern A: Split Hero (Expert Left, Image Right)**
Best for: personal-brand-driven services (consulting, coaching, advisory)
```
[Left 55%]                    [Right 45%]
Trust Badge (stars/rating)    Expert Photo (Freisteller)
                              with ambient glow/shadow
H1: Bold claim + 
    script accent word
Subtitle: 2-3 lines
CTA Button
Sub-CTA text              
─────────────────────────────────────────
[Stat Bar: 3-4 key numbers with labels]
```

**Pattern B: Full-Width Hero (Background Video/Image)**
Best for: product showcases, tech companies, SaaS
```
[Full-width dark background with subtle video/animation]
Centered:
  Badge/Tag
  H1: Bold + accent
  Subtitle
  CTA Button
  Trust logos row
```

**Pattern C: Asymmetric Hero (Bold Statement)**
Best for: premium positioning, differentiation-focused
```
[Large H1 spanning 70% width, breaking grid]
    Right-aligned subtitle
    CTA tucked into typography
[Trust bar below]
```

### Pain Point Section

**Purpose:** Make the visitor feel understood in 5 seconds.
**Headline pattern:** "Kommt Ihnen das bekannt vor?" / "Diese Situationen kennen unsere Kunden"

**Layout Options:**
- **Quote cards** (2x3 grid) with decorative quotation marks + subtle accent border
- **Single-column stacked** with alternating icon/color per pain
- **Scrolling ticker** for mobile-first

**Rules:**
- Pain statements in FIRST PERSON ("Ihr größter Kunde hat...") — not third person
- Emotional, specific, vivid — not generic consultant-speak
- 5-7 pains, each one sentence max
- Transition text at bottom: "Sie lassen sich lösen."

### Schwachstellen / Problem-Solution Section

**Purpose:** Show expertise by naming specific problems AND solutions.
**Layout:** Alternating left-right blocks with visual connector (line, dots, arrows)

Each block:
```
[Problem]                     [Solution]
Bold headline                 "Unser Ansatz:" in accent color  
2-3 line description          Solution description in lighter tone
```

### Process/Timeline Section

**Purpose:** Make the path to success tangible and low-risk.
**Layout:** Vertical timeline with numbered steps

Each step:
```
[Step Number] in accent script font, large (36px+)
[Step Title] in bold sans
[Description] 2-4 lines
[Result line] in italic — "→ Ergebnis: ..."
```

**Rules:**
- 4-6 steps max
- First step always lowest commitment ("Kostenloses Erstgespräch")
- Last step = the win ("Zertifikat in der Hand / Projekt abgeschlossen")
- Gold/accent connecting line between steps

### Expert/Team Section

**Purpose:** Personal brand builds trust faster than company brand in B2B.
**Layout:** Large portrait + credentials + quote

**Elements:**
- Freisteller photo (transparent BG), large, with ambient glow
- 3-5 credential badges (dark cards with icon + text)
- Blockquote with decorative quotation marks
- Hidden elements for unconfirmed credentials (data-attribute + display:none)

### Benefits Section

**Purpose:** Emotional payoff — not features, OUTCOMES.
**Layout:** Icon cards on dark background (2x3 or 3x2)

**Rules:**
- Each benefit = what changes for THEM, not what you do
- Headlines: "Neue Aufträge" not "ISO 9001 Beratung"
- 1-2 sentence max per card
- Varied card sizes for visual interest (not all equal)

### Testimonials (Baulig-Style)

**Purpose:** Social proof that converts. Not generic "great service" quotes.
**Layout:** Full-width cards, vertically stacked (NOT carousel)

**Each testimonial card:**
```
⭐⭐⭐⭐⭐
┌─────────────────────────────────────┐
│ Problem: "Quote about their pain"   │
│ Ziel:    "What they wanted"         │
│ Lösung:  "What happened with us"    │
│                                     │
│ — Name, Role, Company, Size         │
└─────────────────────────────────────┘
```

**Rules:**
- Problem/Ziel/Lösung format MANDATORY (from Baulig methodology)
- Each testimonial targets a different customer segment
- Specific results ("3 Monate später: Erster Großauftrag")
- Gold/accent left border or top border
- Premium card design (generous padding, subtle shadow)
- NO carousel — all visible, vertically stacked

**Reference:** Baulig-style fullwidth cards with dark premium design.

### FAQ Accordion

**Purpose:** Overcome final objections.
**Layout:** Centered, max-width 800px, accordion expand/collapse

**Rules:**
- 5-8 questions
- Answers conversational, not legal
- First question always pricing ("Was kostet das?")
- Last question always scope/fit ("Funktioniert das in meiner Branche?")
- Gold accent toggle icon (+ → ×)

### Final CTA

**Purpose:** Last conversion push.
**Layout:** Dark card/banner on lighter background OR full-width dark section

**Elements:**
- Headline restating the core promise
- 3-4 checkmark benefits
- Large gold/accent CTA button
- Lower-commitment alternative ("Noch nicht bereit? → Anrufen")
- Trust row (overlapping avatars + count + stars)

---

## B2B Visual Assets (with Nano Banana / Image Gen)

For B2B landing pages, generate custom visuals instead of using stock/placeholder:

### Hero Visuals
```bash
# Premium product/service visualization
uv run {nano-banana-dir}/scripts/generate_image.py \
  --prompt "Professional studio photo of [product/concept], against pure black background, no shadows, hyper-realistic, 8K quality" \
  --filename "hero-visual.png" --resolution 2K
```

### Trust/Authority Badges
```bash
# 3D rendered certification badge
uv run {nano-banana-dir}/scripts/generate_image.py \
  --prompt "3D rendered golden certification seal with checkmark and 5 stars, metallic gold on dark navy background, premium quality, isolated" \
  --filename "trust-badge.png" --resolution 1K
```

### Section Illustrations
```bash
# Custom illustration for process steps
uv run {nano-banana-dir}/scripts/generate_image.py \
  --prompt "Minimalist line illustration of [process concept], gold lines on dark navy background, elegant, simple" \
  --filename "process-illustration.png" --resolution 1K
```

### Photo Enhancement
```bash
# Remove background from expert portrait
uv run {nano-banana-dir}/scripts/generate_image.py \
  --prompt "Remove background, keep only the person, professional studio quality" \
  --filename "expert-freisteller.png" -i original-photo.jpg --resolution 2K
```

---

## Conversion Optimization Patterns

### Sticky CTA
```css
/* Compact header appears after scrolling past hero */
.sticky-cta {
  position: fixed;
  top: 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}
.sticky-cta.visible {
  transform: translateY(0);
}
```

### Multiple CTA Touchpoints
- After hero (primary)
- After "Ansatz" section (text CTA with arrow)
- After expert section (text CTA with arrow)
- Final CTA block (primary + alternative)
- Sticky header CTA (always visible after scroll)

### Phone Click-to-Call (Mobile)
```html
<a href="tel:+49XXXXXXXXX" class="mobile-only">Jetzt anrufen</a>
```

### Trust Stacking Order
1. Stat bar (numbers: X+ Kunden, X% Quote, X Jahre)
2. Pain recognition ("we understand you")
3. Mechanism ("here's HOW we do it differently")
4. Expert credentials (personal brand)
5. Testimonials (proof it works)
6. FAQ (objection handling)
7. Final CTA (last push)

---

## B2B Color Schemes (Anti-Slop Alternatives)

| Industry | Primary | Accent | Light BG | Font Pairing |
|----------|---------|--------|----------|--------------|
| Consulting/Advisory | Navy #0A1628 | Gold #D4A843 | Off-white #F8F6F0 | Playfair Display + DM Sans |
| SaaS/Tech | Slate #0F172A | Electric Blue #3B82F6 | Gray #F8FAFC | Space Grotesk + Inter |
| Finance/Legal | Charcoal #1C1C1E | Emerald #10B981 | Warm Gray #F5F5F4 | Merriweather + Source Sans 3 |
| Healthcare | Deep Teal #134E4A | Coral #F97316 | Mint #F0FDF4 | Sora + Work Sans |
| Manufacturing | Dark Steel #1E293B | Amber #F59E0B | Cool Gray #F1F5F9 | Plus Jakarta Sans + Figtree |
| Creative Agency | Black #000000 | Hot Pink #EC4899 | White #FFFFFF | Fraunces + Libre Franklin |

---

## Iteration Log

Track what works and what doesn't after each LP build:

### Patterns That Work Well:
- (to be filled after first successful build)

### Patterns That Produce AI Slop:
- Giving only abstract specs (colors, fonts) without concrete code reference → generic output
- Ralph Mode story-splitting for single-file LPs → design inconsistency between stories
- opacity:0 as initial animation state → invisible content if JS breaks
- Symmetric 4-column grids for everything → monotonous, no visual hierarchy
- "Inspired by" reference instead of "replicate this" → Claude Code interprets too freely

### Lessons Learned:
- Claude Code ADAPTS existing code excellently but DESIGNS from scratch poorly
- Concrete HTML/CSS code reference > screenshots > abstract specs
- Plan Mode in Claude Code (--permission-mode plan) creates better first iterations
- Single Claude Code session (Classic Mode) > Ralph Mode story splits for single-file LPs
- Font pairing is the #1 visual quality signal — wrong font = instant "AI slop" feeling
