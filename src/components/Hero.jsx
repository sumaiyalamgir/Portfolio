import { hero } from '../data/content'

export default function Hero() {
  const [lead, highlight, trail] = splitHeadline(hero.headline)

  return (
    <section
      id="top"
      className="flex flex-col justify-center px-6 pt-24 pb-16 md:px-12 md:min-h-[calc(100vh-56px)] md:pt-navbar"
    >
      <div className="mx-auto w-full max-w-wide">
        <p className="text-body text-text-muted">{hero.kicker}</p>

        <h1 className="mt-4 max-w-4xl font-display text-hero font-semibold text-text">
          {lead}
          <span className="hero-highlight text-accent">{highlight}</span>
          {trail}
        </h1>

        <p className="mt-6 max-w-52ch text-[18px] leading-relaxed text-text">{hero.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#work"
            className="filled-button rounded-card px-5 py-3 text-body font-medium"
          >
            See my work
          </a>
          <a href="#contact" className="link text-body">
            Get in touch
          </a>
        </div>

        <div className="mt-12 flex items-center gap-2 text-caption text-text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {hero.availability}
        </div>
      </div>
    </section>
  )
}

function splitHeadline(full) {
  const match = full.match(/^(.*)\{\{(.*)\}\}(.*)$/s)
  if (!match) return [full, '', '']
  return [match[1], match[2], match[3]]
}
