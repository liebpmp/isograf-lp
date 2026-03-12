import { Button } from '@/components/ui/button'
import { Check, Star, Phone } from 'lucide-react'

const benefits = [
  'Komplette Übernahme — null Eigenleistung',
  'Persönliche Audit-Begleitung durch Daniel Graf',
  '100% Bestehensquote bei Erstaudits',
  'Kostenlos & unverbindlich — kein Risiko',
]

export default function FinalCTA() {
  return (
    <>
      {/* Diagonal divider */}
      <div
        className="h-20 bg-deep-navy -mt-0 relative z-10"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      >
        <div
          className="absolute top-[48%] left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-gold/40 to-transparent
            -rotate-[2.5deg]"
        />
      </div>

      <section className="bg-deep-navy py-24 lg:py-36 px-6 lg:px-20 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(226,172,38,0.05)_0%,transparent_70%)]
          top-[20%] left-[30%] blur-[80px] pointer-events-none" />

        <div className="max-w-[720px] mx-auto text-center relative z-10">
          {/* Heading */}
          <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Bereit für Ihre{' '}
            <em className="font-['DM_Serif_Display'] italic text-gold font-normal
              [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
              Zertifizierung?
            </em>
          </h2>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[520px] mx-auto">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und erfahren Sie,
            wie wir Sie auf dem Weg zur Zertifizierung unterstützen können.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 mb-10 text-left max-w-[540px] mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-gold" />
                </div>
                <span className="text-white/70 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#kontakt">
            <Button
              className="bg-gradient-to-r from-gold to-gold-light
                text-deep-navy font-bold text-lg px-10 py-7 rounded-xl
                shadow-[0_0_40px_rgba(226,172,38,0.15),0_0_80px_rgba(226,172,38,0.05)]
                hover:translate-y-[-2px] hover:scale-[1.01]
                hover:shadow-[0_0_60px_rgba(226,172,38,0.25),0_8px_30px_rgba(226,172,38,0.15)]
                transition-all duration-200 cursor-pointer"
            >
              Kostenloses Erstgespräch vereinbaren
            </Button>
          </a>

          {/* Alternative CTA */}
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm">
            <Phone size={14} />
            <span>Noch nicht bereit? Rufen Sie uns einfach an.</span>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex items-center justify-center gap-4">
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
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white/40 text-xs">70+ Zufriedene Kunden</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
