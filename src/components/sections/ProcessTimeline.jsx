import { MessageSquare, Search, FileText, ClipboardCheck, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Erstgespräch & Analyse',
    description: 'Wir lernen Ihr Unternehmen kennen und machen eine kostenlose Bestandsaufnahme. Sie erfahren genau, wo Sie stehen und was auf Sie zukommt.',
    result: 'Kostenlose Bestandsaufnahme',
  },
  {
    icon: Search,
    number: '02',
    title: 'Gap-Analyse & Maßnahmenplan',
    description: 'Wir identifizieren die Lücken zwischen Ihrem Ist-Zustand und den ISO 9001-Anforderungen. Sie erhalten einen klaren Fahrplan.',
    result: 'Was fehlt, was wird gebraucht',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Umsetzung & Dokumentation',
    description: 'Wir erstellen Ihre komplette QM-Dokumentation — mit Video-Tutorials und KI-Unterstützung. Sie müssen nichts schreiben.',
    result: 'Video + KI-Doku, Full Service',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Auditvorbereitung',
    description: 'Internes Audit, Team-Training und Generalprobe. Wir stellen sicher, dass jeder im Unternehmen vorbereitet ist.',
    result: 'Internes Audit, Team-Training',
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'TÜV-Audit mit Daniel Graf',
    description: 'Am Tag des Audits ist Daniel Graf persönlich an Ihrer Seite. Er kennt jede Frage, bevor sie gestellt wird.',
    result: 'Persönliche Begleitung, Echtzeit-Support',
  },
]

export default function ProcessTimeline() {
  return (
    <>
      {/* Diagonal divider */}
      <div
        className="h-20 bg-offwhite -mt-0 relative z-10"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      >
        <div
          className="absolute top-[48%] left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-gold/40 to-transparent
            -rotate-[2.5deg]"
        />
      </div>

      <section id="prozess" className="bg-offwhite py-24 lg:py-36 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-gold/80 tracking-widest uppercase mb-4">
              Ihr Weg zum Zertifikat
            </span>
            <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy tracking-tight leading-[1.15]">
              Unsere bewährte{' '}
              <em className="font-['DM_Serif_Display'] italic text-gold font-normal
                [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
                5-Phasen-Methode
              </em>
            </h2>
            <p className="text-navy/50 text-lg mt-5 max-w-[560px] mx-auto">
              Von der ersten Analyse bis zum bestandenen Audit — Ihr klarer Fahrplan.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Gold connecting line */}
            <div className="absolute left-[27px] lg:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40" />

            <div className="flex flex-col gap-10 lg:gap-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 lg:gap-8 relative">
                  {/* Step number circle */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white border-2 border-gold/30
                      flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                      <span className="font-['DM_Serif_Display'] italic text-gold text-xl lg:text-2xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-2 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon size={20} className="text-gold shrink-0" />
                      <h3 className="font-['DM_Sans'] text-xl font-bold text-navy">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-navy/60 text-base leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-gold font-medium text-sm flex items-center gap-2">
                      <span className="w-4 h-px bg-gold" />
                      Ergebnis: {step.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
