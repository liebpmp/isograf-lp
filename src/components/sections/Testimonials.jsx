import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'T. Wagner',
    role: 'Produktionsleiter',
    company: '85 Mitarbeiter',
    problem:
      'Unser größter Kunde hat ISO 9001 zur Bedingung gemacht. Wir hatten 4 Monate Zeit und keine Ahnung, wo wir anfangen sollten.',
    goal: 'Schnellstmögliche Zertifizierung ohne den laufenden Betrieb zu stören.',
    solution:
      'ISOGRAF hat alles übernommen — von der Dokumentation bis zur Schulung. Nach 3 Monaten: Erstaudit mit null Abweichungen. Unser Kunde war beeindruckt.',
  },
  {
    name: 'S. Richter',
    role: 'Geschäftsführerin',
    company: '120 Mitarbeiter',
    problem:
      'Unser bisheriger Berater hat uns ein System gebaut, das keiner verstanden hat. Die Ordner verstaubten im Schrank.',
    goal: 'Ein QM-System, das im Alltag funktioniert — nicht nur fürs Audit.',
    solution:
      'Das Video-basierte System von ISOGRAF hat alles verändert. Unsere Mitarbeiter nutzen es tatsächlich. Bei der Rezertifizierung: null Beanstandungen.',
  },
  {
    name: 'M. Berger',
    role: 'Geschäftsführer',
    company: '45 Mitarbeiter',
    problem:
      'ISO 9001 stand seit drei Jahren auf meiner To-Do-Liste. Immer kam etwas dazwischen — bis wir einen wichtigen Auftrag verloren haben.',
    goal: 'Endlich das Zertifikat bekommen, ohne monatelang alles selbst machen zu müssen.',
    solution:
      'Von der ersten Analyse bis zum Zertifikat in nur 4 Monaten. Hätte ich das mal früher gemacht — der verlorene Auftrag war 10x teurer als die Zertifizierung.',
  },
]

export default function Testimonials() {
  return (
    <>
      {/* Diagonal divider */}
      <div
        className="h-20 bg-navy -mt-0 relative z-10"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      >
        <div
          className="absolute top-[48%] left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-gold/40 to-transparent
            -rotate-[2.5deg]"
        />
      </div>

      <section id="erfahrungen" className="bg-navy py-24 lg:py-36 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-gold/80 tracking-widest uppercase mb-4">
              Kundenstimmen
            </span>
            <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
              Was unsere Kunden{' '}
              <em className="font-['DM_Serif_Display'] italic text-gold font-normal
                [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
                berichten
              </em>
            </h2>
          </div>

          {/* Testimonial cards — vertically stacked */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08]
                  rounded-2xl p-8 lg:p-10 relative
                  hover:border-gold/15 transition-colors"
              >
                {/* Gold left accent */}
                <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-gold to-gold-light rounded-r-full" />

                {/* Stars */}
                <div className="flex gap-1 mb-5 pl-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Problem / Ziel / Lösung format */}
                <div className="flex flex-col gap-4 pl-4">
                  <div>
                    <span className="text-white/30 text-xs font-bold tracking-wider uppercase">Problem</span>
                    <p className="text-white/70 text-base leading-relaxed mt-1">&ldquo;{t.problem}&rdquo;</p>
                  </div>
                  <div>
                    <span className="text-white/30 text-xs font-bold tracking-wider uppercase">Ziel</span>
                    <p className="text-white/70 text-base leading-relaxed mt-1">&ldquo;{t.goal}&rdquo;</p>
                  </div>
                  <div>
                    <span className="text-gold/60 text-xs font-bold tracking-wider uppercase">Lösung</span>
                    <p className="text-white/90 text-base leading-relaxed mt-1 font-medium">
                      &ldquo;{t.solution}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06] pl-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold text-sm font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust signal */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white/40 text-sm">
              4.9/5.0 Durchschnittsbewertung · 70+ zufriedene Kunden
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
