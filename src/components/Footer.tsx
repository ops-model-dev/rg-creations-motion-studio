import logoBlack from '@/assets/rgc-logo-black.png.asset.json'
import { site, whatsappLink } from '@/lib/site'

export function Footer() {
  const wa = whatsappLink()
  return (
    <footer className="bg-ink text-paper/70 border-t border-paper/10">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <img src={logoBlack.url} alt="RG Creations — Brewing Talents" className="h-16 w-auto" loading="lazy" />
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 font-body text-sm uppercase tracking-wide">
          <a href="#services" className="hover:text-paper gentle-animation">Services</a>
          <a href="#live" className="hover:text-paper gentle-animation">Live</a>
          <a href="#process" className="hover:text-paper gentle-animation">Process</a>
          <a href="#contact" className="hover:text-paper gentle-animation">Contact</a>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-paper gentle-animation">WhatsApp</a>}
        </nav>

        <p className="font-body text-xs text-paper/50">© {new Date().getFullYear()} {site.name} · {site.tagline}</p>
      </div>
    </footer>
  )
}
