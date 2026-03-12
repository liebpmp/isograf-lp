# ISOGRAF ISO 9001 Landing Page — V7 (React + Tailwind + shadcn/ui)

## Your Mission
Build a **world-class B2B landing page** for ISOGRAF's ISO 9001 Full Service certification.
You are the designer AND developer. Study references, absorb the brand, create something a CMO would ship.

## Read First (MANDATORY)
1. `.claude/skills/frontend-design.md` — Anti-AI-Slop philosophy
2. `.claude/skills/frontend-design-b2b.md` — B2B conversion patterns
3. Study reference images in `reference/` — Isograf brand refs AND competitor screenshots

## Tech Stack
- **React 19** + Vite
- **Tailwind CSS v4** with custom theme tokens (see `src/index.css`)
- **shadcn/ui** components already installed: Button, Input, Card, Accordion, Badge, Separator
- **Component architecture**: Each section = separate component in `src/components/sections/`
- Google Fonts via `<link>` in `index.html`
- Static export via `vite build` → deploys to GitHub Pages at `/isograf-lp/`

## Project Structure
```
src/
  components/
    ui/          ← shadcn/ui (DON'T modify these)
    sections/    ← YOUR landing page sections (create this)
      Hero.jsx
      PainPoints.jsx
      Differentiator.jsx
      ProcessTimeline.jsx
      Expert.jsx
      Testimonials.jsx
      FAQ.jsx
      FinalCTA.jsx
      Footer.jsx
    Nav.jsx
  App.jsx        ← Compose sections here
  index.css      ← Tailwind + custom theme
public/
  assets/        ← Logo, Daniel portrait
```

## Brand Identity

### Custom Tailwind Tokens (already in index.css @theme)
- `navy` → `#14213D`
- `deep-navy` → `#0A1628`  
- `gold` → `#E2AC26`
- `gold-light` → `#F0C95C`
- `felsgrau` → `#E2E7F1`
- `offwhite` → `#F8F6F0`

### Typography
Import in `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400&family=DM+Serif+Display:ital@1&display=swap" rel="stylesheet">
```

### ISOGRAF Visual DNA — Gold Accent Pattern
Key words in headlines use DM Serif Display italic in gold:
```jsx
<h1 className="font-['DM_Sans'] text-5xl font-extrabold tracking-tight">
  ISO 9001 Full Service —<br/>
  von der Analyse bis zum{' '}
  <em className="font-['DM_Serif_Display'] italic text-gold font-normal
    [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
    Zertifikat.
  </em>
</h1>
```

## Section Design Patterns (CONCRETE — follow these exactly!)

### HERO: Two-column with glassmorphism form
```jsx
// Left: headline + sub + badge. Right: glassmorphism form card.
// Stats bar below, spanning full width.
<section className="min-h-screen bg-deep-navy relative overflow-hidden pt-[140px] px-20">
  {/* Ambient gold glow */}
  <div className="absolute w-[700px] h-[700px] rounded-full
    bg-[radial-gradient(ellipse_at_center,rgba(226,172,38,0.06)_0%,transparent_70%)]
    top-[15%] left-[5%] blur-[80px] pointer-events-none" />
  
  <div className="max-w-[1300px] mx-auto grid grid-cols-[1fr_420px] gap-20 items-center">
    {/* Content left */}
    {/* Form right — glassmorphism */}
    <div className="bg-white/[0.03] backdrop-blur-[24px] border border-white/10
      rounded-3xl p-10 relative shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      {/* Gold gradient top accent */}
      <div className="absolute -top-px left-[20%] right-[20%] h-0.5
        bg-gradient-to-r from-gold to-gold-light rounded-full" />
      {/* Form fields using shadcn Input */}
    </div>
  </div>
  
  {/* Stats bar — glassmorphism */}
  <div className="max-w-[1300px] mx-auto mt-12 flex justify-between
    bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08]
    rounded-2xl px-12 py-6">
    {/* 4 stats with gold numbers */}
  </div>
</section>
```

### PAIN POINTS: Staggered magazine quotes on light background
```jsx
// Each card has different width, alternating left/right alignment
const widths = ['w-full', 'w-3/4 ml-auto', 'w-[90%]', 'w-[68%] ml-auto', 'w-[84%]', 'w-[72%] ml-auto'];

<div className="bg-offwhite py-36 px-20">
  <div className="max-w-[900px] mx-auto flex flex-col gap-3.5">
    {pains.map((pain, i) => (
      <div key={i} className={`${widths[i]} bg-white border-l-[3px] border-gold
        py-5 px-7 rounded-r-lg text-[17px] italic text-gray-900 leading-relaxed
        shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:translate-x-1.5
        transition-all duration-300`}>
        "{pain}"
      </div>
    ))}
  </div>
</div>
```

### DIFFERENTIATOR: Bento grid with hero card
```jsx
// First card = full-width hero. Then asymmetric rows (58/42 and 42/58)
<section className="bg-navy py-24 px-20">
  {/* Hero card — full width, gold left border */}
  <Card className="bg-gradient-to-br from-deep-navy to-navy border-l-[3px]
    border-gold p-12 rounded-2xl mb-4">
    {/* Done-4-You = primary differentiator, bigger text */}
  </Card>
  
  {/* Row 1: 58/42 */}
  <div className="grid grid-cols-[58fr_42fr] gap-4">
    <Card className="bg-white/[0.04] backdrop-blur-[16px] border-white/[0.08]
      p-8 rounded-2xl hover:border-gold/20 transition-colors" />
    <Card className="..." />
  </div>
  
  {/* Row 2: 42/58 (reversed) */}
  <div className="grid grid-cols-[42fr_58fr] gap-4 mt-4">
    <Card className="..." />
    <Card className="..." />
  </div>
</section>
```

### DIAGONAL DIVIDERS between sections
```jsx
// Dark to light
<div className="h-20 bg-offwhite -mt-20 relative z-10"
  style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}>
  <div className="absolute top-[48%] left-0 right-0 h-px
    bg-gradient-to-r from-transparent via-gold/40 to-transparent
    -rotate-[2.5deg]" />
</div>
```

### GOLD BUTTON (CTA) with glow
```jsx
<Button className="w-full bg-gradient-to-r from-gold to-gold-light
  text-deep-navy font-bold text-base py-6 rounded-lg
  shadow-[0_0_40px_rgba(226,172,38,0.15),0_0_80px_rgba(226,172,38,0.05)]
  hover:translate-y-[-2px] hover:scale-[1.01]
  hover:shadow-[0_0_60px_rgba(226,172,38,0.25),0_8px_30px_rgba(226,172,38,0.15)]
  transition-all duration-200">
  Erstgespräch vereinbaren
</Button>
```

## Reference Images (in `reference/`)
- `ref-page1.jpg` – `ref-page6.jpg` → **Clone source** for Isograf brand design language
- `ref-daniel-graf-branchenexperte.jpg` → **Clone** the expert credentials layout
- `ref-*-hero.png` → Competitor hero screenshots (QMH 6/10, Sternberg 7/10, Linear 9.5/10)

**Load reference images ONLY ONCE at the start. Do NOT reload them during screenshot reviews.**

## Content — "Sie" Addressing, German

### Pains (customer voice)
1. "Ihr größter Kunde hat ISO 9001 zur Bedingung gemacht — und die Frist läuft."
2. "Sie haben den besten Preis, das beste Angebot — aber ohne Zertifikat sind Sie raus."
3. "Ihr QM-System besteht aus Word-Dateien, die seit 2019 keiner mehr angefasst hat."
4. "Sie haben einen QM-Berater — aber am Ende machen Sie trotzdem alles selbst."
5. "ISO 9001 steht auf der To-Do-Liste. Seit drei Jahren."
6. "Das nächste Audit steht an — und Sie sind sich nicht sicher, ob Sie es bestehen."

### Differentiators (6 USPs)
1. **Done-4-You** (HERO card) — Komplettübernahme, null Eigenleistung
2. **Video statt Papierhandbuch** — Digitale QM-Doku mit Video-Tutorials
3. **KI-gestützte Dokumentation** — Effizient, aktuell, in Ihrer Sprache
4. **Persönliche Audit-Begleitung** — Daniel Graf neben Ihnen im TÜV-Audit
5. **Echte Prozessoptimierung** — Nicht nur fürs Audit, sondern für Ihren Alltag
6. **Ergebnis: Zertifiziert + bessere Prozesse + mehr Aufträge**

### Process (5 steps)
1. Erstgespräch & Analyse → Kostenlose Bestandsaufnahme
2. Gap-Analyse & Maßnahmenplan → Was fehlt, was wird gebraucht
3. Umsetzung & Dokumentation → Video + KI-Doku, Full Service
4. Auditvorbereitung → Internes Audit, Team-Training
5. TÜV-Audit mit Daniel Graf → Persönliche Begleitung, Echtzeit-Support

### Daniel Graf Credentials
- Hochschulprofessor & Dozent für ISO-Standards
- Mitglied beim DIN
- Über 1.200 erfolgreiche Zertifizierungen
- International auf 5 Kontinenten tätig
- Quote: "Die meisten Unternehmer hassen ISO 9001 — nicht weil die Norm schlecht ist, sondern weil sie schlecht umgesetzt wird."
- Hidden: `<div data-pc288="pending" className="hidden">Mitglied ISO-Normungskomitee PC 288</div>`

### Testimonials (Problem → Lösung)
- T. Wagner, Produktionsleiter, 85 MA: Customer demanded ISO → "Erstaudit mit null Abweichungen"
- S. Richter, GF, 120 MA: Switched consultants → "System das im Alltag funktioniert"
- M. Berger, GF, 45 MA: 3 years postponed → "Hätte ich das mal früher gemacht"

### FAQ (7 questions — use shadcn Accordion)
1. Wie lange dauert die Zertifizierung? (3-6 Monate)
2. Was kostet eine ISO 9001-Zertifizierung?
3. Können wir den Berater wechseln?
4. Was passiert nach der Zertifizierung? (Überwachungsaudits)
5. ISO 9001:2026 — müssen wir handeln?
6. Für welche Branchen?
7. Was bedeutet "Full Service" genau?

### Trust Signals
- 70+ zufriedene Kunden, 1.200+ Projekte, 15+ Jahre, 100% Bestehensquote, ⭐ 4.9/5

### CTA: "Kostenloses Erstgespräch vereinbaren"

## Screenshot Loop
```bash
# Start dev server first, then screenshot
npm run dev &  # runs on localhost:5173
sleep 3
node screenshot.js http://localhost:5173/isograf-lp/ screenshots/current.png
```
After screenshots: analyze viewport + section images. Compare to references. Fix and re-screenshot.

## Critical Rules
- ❌ Do NOT weaken any Tailwind values (if spec says `blur-[24px]`, use `blur-[24px]`)
- ❌ Do NOT use emoji as icons (use Lucide React icons: `lucide-react`)
- ❌ Do NOT make every section a symmetric grid
- ✅ Each section MUST look visually different from adjacent sections
- ✅ Use shadcn/ui components where applicable (Button, Input, Card, Accordion, Badge)
- ✅ Build one component at a time, screenshot, review, then next
