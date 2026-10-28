import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'The brief',
    body: 'We listen to what the occasion means to you — the audience, the mood and the outcome you want.',
  },
  {
    n: '02',
    title: 'The idea',
    body: 'We shape a concept that ties people, production and promotion into one clear experience.',
  },
  {
    n: '03',
    title: 'The build',
    body: 'Plans, stages, artists and cameras — every detail rehearsed and ready before doors open.',
  },
  {
    n: '04',
    title: 'Showtime',
    body: 'The spotlight comes on, and we run the moment end to end so you can be in it, not managing it.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-charcoal text-ivory py-24 sm:py-36 border-y border-gold/15">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20 max-w-3xl"
        >
          <p className="font-body text-gold uppercase tracking-[0.35em] text-xs mb-4">How it works</p>
          <h2 className="font-display uppercase leading-[0.95] text-5xl sm:text-7xl">
            From the first idea
            <span className="block">to the <span className="text-gold">final spotlight</span></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? 'sm:translate-y-8' : ''}
            >
              <div className="border-t border-gold/40 pt-6">
                <span className="font-display text-gold text-4xl">{s.n}</span>
                <h3 className="font-display uppercase text-2xl mt-3 mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-sm">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
