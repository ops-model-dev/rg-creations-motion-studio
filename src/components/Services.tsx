import { site, track } from '@/lib/site'

export function Services() {
  return (
    <section id="services" className="bg-paper text-ink py-24 sm:py-32">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="mb-14 sm:mb-20">
          <p className="font-body text-ember uppercase tracking-[0.3em] text-xs mb-4">What we do</p>
          <h2 className="font-display font-light text-4xl sm:text-6xl leading-tight">
            One partner, <span className="italic">every spotlight</span>
          </h2>
        </div>

        <div className="border-t border-ink/15">
          {site.services.map((s, i) => (
            <a
              key={s.id}
              href="#contact"
              onClick={() => track('service_viewed', { service: s.id })}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[4rem_1fr_1fr] items-baseline gap-4 sm:gap-10 py-8 sm:py-10 border-b border-ink/15 hover:bg-ink hover:text-paper transition-colors duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4"
            >
              <span className="font-body text-ember group-hover:text-ember-soft text-sm font-semibold">
                0{i + 1}
              </span>
              <h3 className="font-display font-light text-3xl sm:text-5xl">{s.name}</h3>
              <p className="font-body text-muted-foreground group-hover:text-paper/80 col-span-2 sm:col-span-1 sm:justify-self-end max-w-md leading-relaxed">
                {s.blurb}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
