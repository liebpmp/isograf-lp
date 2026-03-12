import { GraduationCap, Landmark, Globe, Award } from 'lucide-react'

const credentials = [
  { icon: GraduationCap, title: 'Dozent', subtitle: 'Professor' },
  { icon: Landmark, title: 'Offiziell', subtitle: 'DIN-Mitglied' },
  { icon: Award, title: 'Projekte', subtitle: '1.200+' },
  { icon: Globe, title: 'Kontinente', subtitle: '5' },
]

export default function Expert() {
  return (
    <>
      {/* Diagonal divider */}
      <div
        className="h-20 bg-deep-navy -mt-0 relative z-10"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      >
        <div
          className="absolute top-[48%] left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-gold/40 to-transparent
            rotate-[2.5deg]"
        />
      </div>

      <section id="experte" className="bg-deep-navy py-24 lg:py-36 px-6 lg:px-20 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(226,172,38,0.04)_0%,transparent_70%)]
          top-[20%] right-[10%] blur-[60px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto">
          {/* Section heading */}
          <div className="text-center lg:text-left mb-16">
            <span className="inline-block text-sm font-medium text-gold/80 tracking-widest uppercase mb-4">
              Ihr Experte
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">
            {/* Left — Credentials */}
            <div>
              <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                Geführt von{' '}
                <em className="font-['DM_Serif_Display'] italic text-gold font-normal
                  [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
                  Branchenexperten
                </em>
              </h2>

              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[520px]">
                Daniel Graf ist einer der erfahrensten ISO- und Zulassungsexperten Deutschlands.
                Mit über 15 Jahren Expertise und internationaler Erfahrung auf 5 Kontinenten.
              </p>

              {/* Credential bullets */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  'Hochschulprofessor & Dozent für ISO-Standards',
                  'Mitglied beim Deutschen Institut für Normung (DIN)',
                  'Über 1.200 erfolgreiche Zertifizierungen begleitet',
                  'International auf 5 Kontinenten tätig',
                ].map((cred, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.04] backdrop-blur-[8px] border border-white/[0.06]
                      rounded-xl px-5 py-4 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="text-white/80 text-[15px]">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Hidden credential */}
              <div data-pc288="pending" className="hidden">
                Mitglied ISO-Normungskomitee PC 288
              </div>

              {/* Credential badges row */}
              <div className="grid grid-cols-4 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4
                      flex flex-col items-center text-center"
                  >
                    <cred.icon size={22} className="text-gold/70 mb-2" />
                    <span className="text-white text-sm font-bold">{cred.title}</span>
                    <span className="text-white/40 text-xs">{cred.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Portrait */}
            <div className="relative">
              <div className="bg-felsgrau/10 rounded-2xl overflow-hidden relative">
                <img
                  src="/isograf-lp/assets/daniel-graf-portrait.jpg"
                  alt="Daniel Graf — Geschäftsführer & ISO-Experte"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                {/* Name card overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-deep-navy/80 backdrop-blur-[12px]
                  border-t border-white/10 px-6 py-4 rounded-b-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-['DM_Sans'] text-white font-bold text-lg">Daniel Graf</h3>
                      <p className="text-white/50 text-sm">Geschäftsführer & ISO-Experte</p>
                      <p className="text-gold text-xs mt-0.5">DIN-Mitglied · Professor · 15+ Jahre Erfahrung</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                      <Award size={18} className="text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-16 relative">
            <div className="text-gold/20 text-[80px] font-['DM_Serif_Display'] leading-none absolute -top-6 -left-2">
              &ldquo;
            </div>
            <p className="font-['DM_Serif_Display'] italic text-white/80 text-xl lg:text-2xl leading-relaxed pl-12 max-w-[800px]">
              Die meisten Unternehmer hassen ISO 9001 — nicht weil die Norm schlecht ist,
              sondern weil sie schlecht umgesetzt wird.
            </p>
            <footer className="pl-12 mt-4 text-white/40 text-sm">
              — Daniel Graf, Geschäftsführer ISOGRAF
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  )
}
