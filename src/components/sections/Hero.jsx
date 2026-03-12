import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Star, ShieldCheck, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '70+', label: 'Zufriedene Kunden' },
  { icon: Award, value: '1.200+', label: 'Projekte weltweit' },
  { icon: ShieldCheck, value: '100%', label: 'Bestehensquote' },
  { icon: TrendingUp, value: '15+', label: 'Jahre Erfahrung' },
]

export default function Hero() {
  return (
    <section id="kontakt" className="min-h-screen bg-deep-navy relative overflow-hidden pt-[140px] pb-20 px-6 lg:px-20">
      {/* Ambient gold glow — top left */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(226,172,38,0.06)_0%,transparent_70%)]
          top-[15%] left-[5%] blur-[80px] pointer-events-none"
      />
      {/* Secondary glow — bottom right, subtle */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(226,172,38,0.03)_0%,transparent_70%)]
          bottom-[10%] right-[0%] blur-[60px] pointer-events-none"
      />

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center relative z-10">
        {/* Left — Content */}
        <div>
          {/* Trust badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white/60 text-sm font-['DM_Sans']">
              5.0/5.0 · Deutschlands bestbewertete Zertifizierungsexperten
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['DM_Sans'] text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            ISO 9001 Full Service —<br />
            von der Analyse bis zum{' '}
            <em
              className="font-['DM_Serif_Display'] italic text-gold font-normal
                [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]"
            >
              Zertifikat.
            </em>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-lg leading-relaxed max-w-[520px] mb-8 font-['DM_Sans']">
            Wir übernehmen Ihre komplette ISO 9001-Zertifizierung — Dokumentation, Schulung, Audit-Begleitung.
            Sie konzentrieren sich auf Ihr Geschäft.
          </p>

          {/* Social proof mini */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['bg-gold/80', 'bg-gold-light/80', 'bg-white/20', 'bg-gold/60'].map((bg, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${bg} border-2 border-deep-navy flex items-center justify-center text-[10px] font-bold text-deep-navy`}
                >
                  {['TW', 'SR', 'MB', 'KL'][i]}
                </div>
              ))}
            </div>
            <span className="text-white/50 text-sm">
              70+ Unternehmen erfolgreich zertifiziert
            </span>
          </div>
        </div>

        {/* Right — Glassmorphism Form Card */}
        <div
          className="bg-white/[0.03] backdrop-blur-[24px] border border-white/10
            rounded-3xl p-8 lg:p-10 relative
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          {/* Gold gradient top accent */}
          <div
            className="absolute -top-px left-[20%] right-[20%] h-0.5
              bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
          />

          <h2 className="font-['DM_Sans'] text-white text-xl font-bold mb-2">
            Kostenloses Erstgespräch
          </h2>
          <p className="text-white/50 text-sm mb-6">
            In 15 Minuten erfahren Sie, wie Ihr Weg zum Zertifikat aussieht.
          </p>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-white/60 text-xs font-medium mb-1.5 block">Vorname</label>
              <Input
                placeholder="Max"
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30
                  h-11 rounded-lg focus-visible:border-gold/40 focus-visible:ring-gold/20"
              />
            </div>
            <div>
              <label className="text-white/60 text-xs font-medium mb-1.5 block">Nachname</label>
              <Input
                placeholder="Mustermann"
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30
                  h-11 rounded-lg focus-visible:border-gold/40 focus-visible:ring-gold/20"
              />
            </div>
            <div>
              <label className="text-white/60 text-xs font-medium mb-1.5 block">E-Mail</label>
              <Input
                type="email"
                placeholder="max@unternehmen.de"
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30
                  h-11 rounded-lg focus-visible:border-gold/40 focus-visible:ring-gold/20"
              />
            </div>
            <div>
              <label className="text-white/60 text-xs font-medium mb-1.5 block">Unternehmen</label>
              <Input
                placeholder="Ihr Unternehmen"
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30
                  h-11 rounded-lg focus-visible:border-gold/40 focus-visible:ring-gold/20"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-gold-light
                text-deep-navy font-bold text-base py-6 rounded-lg mt-2
                shadow-[0_0_40px_rgba(226,172,38,0.15),0_0_80px_rgba(226,172,38,0.05)]
                hover:translate-y-[-2px] hover:scale-[1.01]
                hover:shadow-[0_0_60px_rgba(226,172,38,0.25),0_8px_30px_rgba(226,172,38,0.15)]
                transition-all duration-200 cursor-pointer"
            >
              Erstgespräch vereinbaren
            </Button>

            <p className="text-white/30 text-xs text-center mt-1">
              Kostenlos & unverbindlich · Antwort innerhalb von 24h
            </p>
          </form>
        </div>
      </div>

      {/* Stats bar — glassmorphism */}
      <div
        className="max-w-[1300px] mx-auto mt-12 lg:mt-16 grid grid-cols-2 lg:flex lg:justify-between
          bg-white/[0.04] backdrop-blur-[16px] border border-white/[0.08]
          rounded-2xl px-6 lg:px-12 py-6 relative z-10 gap-6"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
              <stat.icon size={20} className="text-gold" />
            </div>
            <div>
              <div className="font-['DM_Sans'] text-2xl font-extrabold text-gold leading-none">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
