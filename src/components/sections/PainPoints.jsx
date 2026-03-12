const pains = [
  'Ihr größter Kunde hat ISO 9001 zur Bedingung gemacht — und die Frist läuft.',
  'Sie haben den besten Preis, das beste Angebot — aber ohne Zertifikat sind Sie raus.',
  'Ihr QM-System besteht aus Word-Dateien, die seit 2019 keiner mehr angefasst hat.',
  'Sie haben einen QM-Berater — aber am Ende machen Sie trotzdem alles selbst.',
  'ISO 9001 steht auf der To-Do-Liste. Seit drei Jahren.',
  'Das nächste Audit steht an — und Sie sind sich nicht sicher, ob Sie es bestehen.',
]

const widths = [
  'w-full',
  'w-3/4 ml-auto',
  'w-[90%]',
  'w-[68%] ml-auto',
  'w-[84%]',
  'w-[72%] ml-auto',
]

export default function PainPoints() {
  return (
    <>
      {/* Diagonal divider — dark to light */}
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

      <section className="bg-offwhite py-24 lg:py-36 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-gold/80 tracking-widest uppercase mb-4">
              Ihre Situation
            </span>
            <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy tracking-tight leading-[1.15]">
              Kommt Ihnen das{' '}
              <em className="font-['DM_Serif_Display'] italic text-gold font-normal
                [text-shadow:0_0_20px_rgba(226,172,38,0.25),0_0_40px_rgba(226,172,38,0.1)]">
                bekannt vor?
              </em>
            </h2>
          </div>

          {/* Pain quote cards — staggered magazine layout */}
          <div className="flex flex-col gap-3.5">
            {pains.map((pain, i) => (
              <div
                key={i}
                className={`${widths[i]} bg-white border-l-[3px] border-gold
                  py-5 px-7 rounded-r-lg text-[17px] italic text-gray-900 leading-relaxed
                  shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:translate-x-1.5
                  transition-all duration-300 cursor-default`}
              >
                &ldquo;{pain}&rdquo;
              </div>
            ))}
          </div>

          {/* Transition text */}
          <p className="text-center text-navy/60 text-lg mt-14 font-['DM_Sans']">
            All diese Probleme haben eine Lösung.{' '}
            <span className="text-gold font-semibold">Eine einzige.</span>
          </p>
        </div>
      </section>
    </>
  )
}
