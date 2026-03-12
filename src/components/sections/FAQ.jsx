import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Wie lange dauert die ISO 9001-Zertifizierung?',
    answer:
      'In der Regel 3–6 Monate, abhängig von der Unternehmensgröße und dem aktuellen Stand Ihres QM-Systems. Mit unserem Done-4-You-Ansatz schaffen wir es oft in 3–4 Monaten, weil wir die gesamte Dokumentation übernehmen und keine Zeit durch Rückfragen verlieren.',
  },
  {
    question: 'Was kostet eine ISO 9001-Zertifizierung?',
    answer:
      'Die Kosten hängen von der Unternehmensgröße, der Komplexität Ihrer Prozesse und dem aktuellen Stand ab. Im kostenlosen Erstgespräch erstellen wir ein transparentes Angebot — ohne versteckte Kosten. Übrigens: Die Zertifizierung refinanziert sich oft schon durch den ersten neuen Auftrag, den Sie damit gewinnen.',
  },
  {
    question: 'Können wir den Berater wechseln?',
    answer:
      'Absolut. Viele unserer Kunden kommen von anderen Beratern zu uns, weil sie mit der Betreuung unzufrieden waren. Wir übernehmen nahtlos — auch mitten im Prozess. Ihr bestehendes QM-System wird analysiert und weiterentwickelt, nicht weggeworfen.',
  },
  {
    question: 'Was passiert nach der Zertifizierung?',
    answer:
      'Nach der Erstzertifizierung folgen jährliche Überwachungsaudits und nach 3 Jahren eine Rezertifizierung. Wir begleiten Sie auf Wunsch auch langfristig — mit laufender Systempflege, Audit-Vorbereitung und Updates bei Normänderungen.',
  },
  {
    question: 'ISO 9001:2026 — müssen wir handeln?',
    answer:
      'Die aktuelle Norm ist die ISO 9001:2015. Eine Revision wird diskutiert, ist aber noch nicht veröffentlicht. Wenn es soweit ist, begleiten wir die Umstellung für alle unsere Kunden. Sie sind also auf der sicheren Seite.',
  },
  {
    question: 'Für welche Branchen ist das relevant?',
    answer:
      'ISO 9001 ist branchenunabhängig und gilt für jedes Unternehmen — von der Produktion über Dienstleistungen bis hin zu IT und Handel. Wir haben Erfahrung in über 30 Branchen und passen den Prozess an Ihre spezifischen Anforderungen an.',
  },
  {
    question: 'Was bedeutet "Full Service" genau?',
    answer:
      'Full Service heißt bei uns: Wir übernehmen die komplette Arbeit. Dokumentation erstellen, Prozesse aufnehmen, Schulungen durchführen, internes Audit machen und Sie beim TÜV-Audit persönlich begleiten. Sie müssen keinen einzigen QM-Ordner anfassen — wir machen das für Sie.',
  },
]

export default function FAQ() {
  return (
    <>
      {/* Diagonal divider */}
      <div
        className="h-20 bg-offwhite -mt-0 relative z-10"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      >
        <div
          className="absolute top-[48%] left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-gold/40 to-transparent
            rotate-[2.5deg]"
        />
      </div>

      <section id="faq" className="bg-offwhite py-24 lg:py-36 px-6 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-gold/80 tracking-widest uppercase mb-4">
              Häufige Fragen
            </span>
            <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy tracking-tight leading-[1.15]">
              Noch{' '}
              <em className="font-['DM_Serif_Display'] italic text-gold font-normal
                [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
                Fragen?
              </em>
            </h2>
          </div>

          {/* Accordion */}
          <Accordion className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-navy/[0.06] px-6
                  shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <AccordionTrigger
                  className="text-navy font-semibold text-[15px] lg:text-base py-5
                    hover:no-underline cursor-pointer
                    **:data-[slot=accordion-trigger-icon]:text-gold"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy/60 text-[15px] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
