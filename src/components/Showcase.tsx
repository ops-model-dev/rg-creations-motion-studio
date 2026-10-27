import heroReel from '@/assets/hero-reel.mp4.asset.json'
import stageReel from '@/assets/stage-reel.mp4.asset.json'

export function Showcase() {
  return (
    <section id="live" className="bg-ink text-paper py-24 sm:py-32">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="mb-14 sm:mb-20">
          <p className="font-body text-ember-soft uppercase tracking-[0.3em] text-xs mb-4">Selected stages</p>
          <h2 className="font-display font-light text-4xl sm:text-6xl leading-tight">
            The energy, <span className="italic text-ember-soft">uncut</span>
          </h2>
          <p className="font-body text-paper/70 text-lg mt-6 max-w-xl leading-relaxed">
            Moments from the shows we help bring to life — the performer, the production and the crowd,
            all in the same frame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 overflow-hidden rounded-sm bg-black">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={heroReel.url} type="video/mp4" />
            </video>
            <p className="font-body text-paper/60 text-sm px-4 py-3">
              Full-house show — stage production and crowd energy
            </p>
          </div>
          <div className="overflow-hidden rounded-sm bg-black">
            <video
              className="w-full aspect-[9/16] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={stageReel.url} type="video/mp4" />
            </video>
            <p className="font-body text-paper/60 text-sm px-4 py-3">
              On stage — performance cut
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
