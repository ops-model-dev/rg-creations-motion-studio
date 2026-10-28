import { motion } from 'framer-motion'
import { site, track } from '@/lib/site'

export function Services() {
  return (
    <section id="services" className="bg-black text-ivory py-24 sm:py-36">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-7">
            <p className="font-body text-gold uppercase tracking-[0.35em] text-xs mb-4">What we do</p>
            <h2 className="font-display uppercase leading-[0.95] text-5xl sm:text-7xl">
              One partner,
              <span className="block text-gold">every spotlight</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end">
            <p className="font-body text-muted-foreground leading-relaxed">
              Four disciplines, one team — brought together so the idea, the stage and the crowd
              feel like a single experience.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-gold/25">
          {site.services.map((s, i) => (
            <motion.a
              key={s.id}
              href="#contact"
              onClick={() => track('service_viewed', { service: s.id })}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[5rem_1fr_2fr] items-baseline gap-4 sm:gap-8 py-9 sm:py-12 border-b border-gold/25 px-2 sm:px-4 -mx-2 sm:-mx-4 hover:bg-charcoal gentle-animation"
            >
              <span className="font-body text-gold text-sm font-semibold tracking-widest">
                0{i + 1}
              </span>
              <h3 className="font-display uppercase text-3xl sm:text-5xl group-hover:text-gold gentle-animation">
                {s.name}
              </h3>
              <p className="font-body text-muted-foreground group-hover:text-ivory col-span-2 sm:col-span-1 max-w-lg leading-relaxed sm:justify-self-end">
                {s.blurb}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
