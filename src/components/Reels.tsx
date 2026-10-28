import { motion } from 'framer-motion'
import heroReel from '@/assets/hero-reel.mp4.asset.json'
import stageReel from '@/assets/stage-reel.mp4.asset.json'
import reel1 from '@/assets/reel-1.jpg.asset.json'
import reel2 from '@/assets/reel-2.jpg.asset.json'
import reel3 from '@/assets/reel-3.jpg.asset.json'
import { site, track } from '@/lib/site'

const tiles = [
  { kind: 'video' as const, src: heroReel.url, poster: reel1.url, label: 'Full-house show' },
  { kind: 'video' as const, src: stageReel.url, poster: reel3.url, label: 'On stage' },
  { kind: 'image' as const, src: reel2.url, label: 'Crowd energy' },
  { kind: 'image' as const, src: reel3.url, label: 'Spotlight' },
]

function InstagramGlyph({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Reels() {
  return (
    <section id="reels" className="bg-black text-ivory py-24 sm:py-36 border-t border-gold/15">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-7">
            <p className="font-body text-gold uppercase tracking-[0.35em] text-xs mb-4">Reels</p>
            <h2 className="font-display uppercase leading-[0.95] text-5xl sm:text-7xl">
              Live from
              <span className="block text-gold">{site.instagramHandle}</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end flex md:justify-end">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('instagram_follow_clicked')}
              className="inline-flex items-center gap-3 border border-ivory/60 text-ivory px-6 py-3 text-sm uppercase tracking-[0.18em] font-body hover:border-gold hover:text-gold gentle-animation"
            >
              <InstagramGlyph />
              Follow
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('instagram_reel_clicked', { tile: i + 1 })}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative block overflow-hidden bg-charcoal aspect-[9/16] ${
                i % 2 === 1 ? 'lg:translate-y-8' : ''
              }`}
              aria-label={`${t.label} — watch on Instagram`}
            >
              {t.kind === 'video' ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] gentle-animation"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={t.poster}
                >
                  <source src={t.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] gentle-animation"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/25 group-hover:from-black/90 gentle-animation" aria-hidden="true" />
              <div className="absolute top-3 right-3 text-ivory/90">
                <InstagramGlyph className="w-5 h-5" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="font-body text-ivory text-sm font-medium">{t.label}</p>
                <p className="font-body text-gold text-xs uppercase tracking-[0.2em] mt-1 opacity-0 group-hover:opacity-100 gentle-animation">
                  Watch on Instagram
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground text-sm mt-10 lg:mt-14 max-w-md leading-relaxed"
        >
          More cuts and backstage moments live on our Instagram — tap any tile to watch there.
        </motion.p>
      </div>
    </section>
  )
}
