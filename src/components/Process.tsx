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
    <section id="process" className="bg-paper text-ink py-24 sm:py-32">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="mb-14 sm:mb-20">
          <p className="font-body text-ember uppercase tracking-[0.3em] text-xs mb-4">How it works</p>
          <h2 className="font-display font-light text-4xl sm:text-6xl leading-tight">
            From the first idea to the <span className="italic">final spotlight</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper p-8">
              <span className="font-display text-ember text-xl">{s.n}</span>
              <h3 className="font-display font-normal text-2xl mt-4 mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
