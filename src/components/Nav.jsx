import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Prozess', href: '#prozess' },
  { label: 'Experte', href: '#experte' },
  { label: 'Erfahrungen', href: '#erfahrungen' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-navy/90 backdrop-blur-[16px] border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 lg:px-20 h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/isograf-lp/assets/isograf-logo.jpg"
            alt="ISOGRAF"
            className="h-8 w-auto rounded-sm"
          />
          <span className="font-['DM_Sans'] text-white font-bold text-lg tracking-tight hidden sm:inline">
            ISOGRAF
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['DM_Sans'] text-[15px] text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#kontakt">
            <Button
              className="bg-gradient-to-r from-gold to-gold-light text-deep-navy font-bold text-sm px-5 py-2 rounded-lg
                shadow-[0_0_20px_rgba(226,172,38,0.15)]
                hover:shadow-[0_0_30px_rgba(226,172,38,0.25)] hover:translate-y-[-1px]
                transition-all duration-200 cursor-pointer"
            >
              Jetzt starten
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/80 hover:text-white p-2 cursor-pointer"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-deep-navy/95 backdrop-blur-[16px] border-t border-white/[0.06] px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[16px] text-white/70 hover:text-white transition-colors border-b border-white/[0.05] last:border-0 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setMobileOpen(false)} className="block mt-4">
            <Button
              className="w-full bg-gradient-to-r from-gold to-gold-light text-deep-navy font-bold text-sm py-3 rounded-lg
                shadow-[0_0_20px_rgba(226,172,38,0.15)] cursor-pointer"
            >
              Jetzt starten
            </Button>
          </a>
        </div>
      )}
    </nav>
  )
}
