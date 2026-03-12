export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-white/[0.06] py-12 px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/isograf-lp/assets/isograf-logo.jpg"
                alt="ISOGRAF"
                className="h-7 w-auto rounded-sm"
              />
              <span className="font-['DM_Sans'] text-white font-bold text-base">ISOGRAF</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Qualität, die Kunden überzeugt. Über 1.200 erfolgreiche Projekte.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Leistungen</h4>
            <div className="flex flex-col gap-2.5">
              {['ISO 9001 Zertifizierung', 'AZAV-Zulassung', 'KOMPASS-Förderung', 'ZFU-Zulassung'].map((item) => (
                <span key={item} className="text-white/40 text-sm hover:text-white/60 transition-colors cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Unternehmen</h4>
            <div className="flex flex-col gap-2.5">
              {['Über uns', 'Team', 'Karriere', 'Kontakt'].map((item) => (
                <span key={item} className="text-white/40 text-sm hover:text-white/60 transition-colors cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Ressourcen */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Ressourcen</h4>
            <div className="flex flex-col gap-2.5">
              {['Blog', 'FAQ', 'Leitfäden', 'Support'].map((item) => (
                <span key={item} className="text-white/40 text-sm hover:text-white/60 transition-colors cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ISOGRAF. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer">
              Datenschutz
            </span>
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer">
              Impressum
            </span>
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer">
              AGB
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
