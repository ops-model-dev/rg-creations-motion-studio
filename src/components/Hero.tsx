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
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
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
              className="md:hidden text-ivory p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-28 px-8">
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-4xl text-ivory uppercase border-b border-gold/25 pb-4"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={goContact}
              className="bg-gold text-black font-semibold px-6 py-4 mt-2 cursor-pointer"
            >
              Start a project
            </button>
          </div>
        </div>
      )}

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="relative z-10 flex min-h-screen items-end px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24"
      >
        <div className="max-w-5xl">
          <p className="font-body text-gold uppercase tracking-[0.35em] text-xs sm:text-sm mb-5">
            Events · Production · Talent · Promotion
          </p>
          <h1 className="font-display uppercase text-ivory text-shadow-hero leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
            Big ideas.
            <span className="block text-gold">Unforgettable</span>
            <span className="block">Moments.</span>
          </h1>
          <p className="font-body text-ivory text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            From the first idea to the final spotlight, RG Creations brings people, production and
            promotion together to make every experience count.
          </p>
          <div className="flex flex-wrap gap-4 mt-7">

            <button
              onClick={goContact}
              className="bg-gold text-black font-semibold px-8 py-4 hover:bg-gold-soft gentle-animation cursor-pointer"
            >
              Start a project
            </button>
            <a
              href="#reels"
              className="border border-ivory text-ivory px-8 py-4 hover:border-gold hover:text-gold gentle-animation"
            >
              Watch the reels
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
