import { Card } from '@/components/ui/card'
import { Handshake, Video, Cpu, UserCheck, Settings, Trophy } from 'lucide-react'

const usps = [
  {
    icon: Handshake,
    title: 'Done-4-You',
    subtitle: 'Komplettübernahme, null Eigenleistung',
    description:
      'Wir machen alles — Sie unterschreiben nur. Dokumentation, Prozesse, Schulungen, Audit-Begleitung. Sie müssen keinen einzigen QM-Ordner anfassen.',
    hero: true,
  },
  {
    icon: Video,
    title: 'Video statt Papierhandbuch',
    subtitle: 'Digitale QM-Doku mit Video-Tutorials',
    description:
      'Ihre Mitarbeiter lernen per Video, nicht aus 200-Seiten-PDFs. Verständlich, aktuell, jederzeit abrufbar.',
  },
  {
    icon: Cpu,
    title: 'KI-gestützte Dokumentation',
    subtitle: 'Effizient, aktuell, in Ihrer Sprache',
    description:
      'Unsere KI-Tools erstellen und pflegen Ihre QM-Dokumentation automatisch — immer normkonform, immer aktuell.',
  },
  {
    icon: UserCheck,
    title: 'Persönliche Audit-Begleitung',
    subtitle: 'Daniel Graf neben Ihnen im TÜV-Audit',
    description:
      'Kein Berater, der Sie allein lässt. Daniel Graf sitzt persönlich neben Ihnen, wenn der TÜV kommt.',
  },
  {
    icon: Settings,
    title: 'Echte Prozessoptimierung',
    subtitle: 'Nicht nur fürs Audit — für Ihren Alltag',
    description:
      'Wir optimieren Ihre Prozesse so, dass sie im Tagesgeschäft tatsächlich funktionieren. Kein Audit-Theater.',
  },
  {
    icon: Trophy,
    title: 'Das Ergebnis',
    subtitle: 'Zertifiziert + bessere Prozesse + mehr Aufträge',
    description:
      'Am Ende steht nicht nur ein Zertifikat an der Wand — sondern ein Unternehmen, das besser läuft als vorher.',
  },
]

export default function Differentiator() {
  const hero = usps[0]
  const row1 = usps.slice(1, 3)
  const row2 = usps.slice(3, 5)
  const final = usps[5]

  return (
    <>
      {/* Diagonal divider — light to dark */}
      <div
        className="h-20 bg-navy -mt-0 relative z-10"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      >
        <div
          className="absolute top-[48%] left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-gold/40 to-transparent
            rotate-[2.5deg]"
        />
      </div>

      <section id="leistungen" className="bg-navy py-24 lg:py-28 px-6 lg:px-20">
        <div className="max-w-[1300px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-gold/80 tracking-widest uppercase mb-4">
              Unser Ansatz
            </span>
            <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
              Warum Unternehmen{' '}
              <em className="font-['DM_Serif_Display'] italic text-gold font-normal
                [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
                ISOGRAF
              </em>{' '}
              wählen
            </h2>
          </div>

          {/* Hero card — full width, gold left border */}
          <Card
            className="bg-gradient-to-br from-deep-navy to-navy border-l-[3px]
              border-gold p-8 lg:p-12 rounded-2xl mb-4 ring-0 border-t-0 border-r-0 border-b-0"
          >
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                <hero.icon size={28} className="text-gold" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-['DM_Sans'] text-2xl lg:text-3xl font-extrabold text-white">
                    {hero.title}
                  </h3>
                  <span className="text-xs font-bold tracking-wider uppercase text-gold bg-gold/10 px-3 py-1 rounded-full">
                    Kernversprechen
                  </span>
                </div>
                <p className="text-gold/80 text-base font-medium mb-3">{hero.subtitle}</p>
                <p className="text-white/60 text-base leading-relaxed max-w-[640px]">
                  {hero.description}
                </p>
              </div>
            </div>
          </Card>

          {/* Row 1: 58/42 */}
          <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-4">
            {row1.map((usp) => (
              <Card
                key={usp.title}
                className="bg-white/[0.04] backdrop-blur-[16px] border-white/[0.08]
                  p-8 rounded-2xl hover:border-gold/20 transition-colors ring-0"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <usp.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-['DM_Sans'] text-lg font-bold text-white mb-1">
                  {usp.title}
                </h3>
                <p className="text-gold/70 text-sm font-medium mb-3">{usp.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{usp.description}</p>
              </Card>
            ))}
          </div>

          {/* Row 2: 42/58 (reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-4 mt-4">
            {row2.map((usp) => (
              <Card
                key={usp.title}
                className="bg-white/[0.04] backdrop-blur-[16px] border-white/[0.08]
                  p-8 rounded-2xl hover:border-gold/20 transition-colors ring-0"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <usp.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-['DM_Sans'] text-lg font-bold text-white mb-1">
                  {usp.title}
                </h3>
                <p className="text-gold/70 text-sm font-medium mb-3">{usp.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{usp.description}</p>
              </Card>
            ))}
          </div>

          {/* Final result card — full width */}
          <Card
            className="bg-gradient-to-r from-gold/10 to-gold-light/5
              border border-gold/20 p-8 lg:p-10 rounded-2xl mt-4 ring-0"
          >
            <div className="flex flex-col lg:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                <final.icon size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-['DM_Sans'] text-xl font-extrabold text-white mb-1">
                  {final.title}:{' '}
                  <em className="font-['DM_Serif_Display'] italic text-gold font-normal">
                    {final.subtitle}
                  </em>
                </h3>
                <p className="text-white/60 text-base leading-relaxed">{final.description}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
