import { motion } from 'framer-motion'
import logoWhite from '@/assets/rgc-logo-white.png.asset.json'
import { site, whatsappLink } from '@/lib/site'

export function Footer() {
  const wa = whatsappLink()
  return (
    <footer className="bg-black text-muted-foreground border-t border-gold/15">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto py-14 flex flex-col sm:flex-row items-center justify-between gap-10"
      >
        <div className="flex flex-col items-center sm:items-start gap-3">
          <img src={logoWhite.url} alt="RG Creations — Brewing Talents" className="h-16 w-auto" loading="lazy" />
          <p className="font-body text-xs uppercase tracking-[0.25em]">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-8 font-body text-sm uppercase tracking-[0.18em] text-ivory">
          <a href="#services" className="hover:text-gold gentle-animation">Services</a>
          <a href="#reels" className="hover:text-gold gentle-animation">Reels</a>
          <a href="#process" className="hover:text-gold gentle-animation">Process</a>
          <a href="#contact" className="hover:text-gold gentle-animation">Contact</a>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold gentle-animation">Instagram</a>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-gold gentle-animation">WhatsApp</a>}
        </nav>

        <p className="font-body text-xs">© {new Date().getFullYear()} {site.name}</p>
      </motion.div>
    </footer>
  )
}
