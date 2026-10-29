import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import heroReel from '@/assets/hero-reel.mp4.asset.json'
import logoWhite from '@/assets/rgc-logo-white.png.asset.json'
import { track } from '@/lib/site'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Reels', href: '#reels' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const goContact = () => {
    track('cta_clicked', { cta: 'hero_start_project' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      {!videoFailed && (
        <video
          ref={(el) => {
            if (el) {
              el.muted = true
              el.play().catch(() => {
                // Browsers may defer autoplay until interaction; don't fail
              })
            }
          }}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => {
            console.error('Hero background video error:', e)
            setVideoFailed(true)
          }}
        >
          <source src={heroReel.url} type="video/mp4" />
        </video>
      )}
      {/* Strong scrims so type is always readable over the footage */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`w-full px-6 sm:px-10 lg:px-16 py-4 transition-all duration-300 ${
            isScrolled ? 'bg-black/85 backdrop-blur-md border-b border-gold/20' : 'bg-gradient-to-b from-black/70 to-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="RG Creations — back to top"
            >
              <img src={logoWhite.url} alt="RG Creations — Brewing Talents" className="h-14 sm:h-16 w-auto" />
            </a>

            <div className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body text-ivory text-sm font-medium tracking-[0.18em] uppercase hover:text-gold gentle-animation"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={goContact}
                className="bg-gold text-black font-body font-semibold text-sm uppercase tracking-[0.18em] px-6 py-3 hover:bg-gold-soft gentle-animation cursor-pointer"
              >
                Start a project
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-ivory hover:text-gold p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/95 flex flex-col justify-center items-center gap-8 md:hidden px-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-4xl uppercase tracking-wider text-ivory hover:text-gold gentle-animation"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={goContact}
            className="mt-4 bg-gold text-black font-body font-semibold text-base uppercase tracking-[0.18em] px-8 py-4 hover:bg-gold-soft gentle-animation"
          >
            Start a project
          </button>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="font-body text-gold uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Motion Studio &bull; Kuala Lumpur
          </p>

          <h1 className="font-display uppercase text-ivory leading-[0.9] text-5xl sm:text-7xl md:text-8xl tracking-tight mb-6 sm:mb-8">
            Brewing
            <span className="block text-gold">Talents</span>
            <span className="block">Igniting Stages</span>
          </h1>

          <p className="font-body text-ivory/85 text-base sm:text-xl font-normal max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            From concert lighting and visual stages to high-energy editorial video and talent curation &mdash; we produce unforgettable live experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={goContact}
              className="bg-gold text-black font-body font-semibold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-soft gentle-animation cursor-pointer text-center"
            >
              Start a project
            </button>
            <a
              href="#reels"
              className="border border-ivory/40 text-ivory font-body font-medium text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-gold hover:text-gold gentle-animation text-center"
            >
              Watch reels
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
