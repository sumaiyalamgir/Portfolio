import { hero, site } from '../data/content'
import { withBase } from '../lib/url'

export default function Hero() {
  const [lead, highlight, trail] = splitHeadline(hero.headline)

  return (
    <section
      id="top"
      className="flex flex-col justify-center px-6 pt-24 pb-16 md:px-12 md:min-h-[calc(100vh-56px)] md:pt-navbar"
    >
      <div className="mx-auto grid w-full max-w-wide grid-cols-1 items-start gap-16 md:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-body text-text-muted">{hero.kicker}</p>

          <h1 className="mt-4 font-display text-hero font-semibold text-text">
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

        {site.photo ? (
          <img
            src={withBase(site.photo)}
            alt={site.name}
            className="aspect-[4/5] w-full rounded-card border border-border object-cover"
          />
        ) : (
          <dl className="divide-y divide-border border-t border-border">
            {hero.now.map((item) => (
              <div key={item.label} className="grid grid-cols-[100px_1fr] gap-4 py-4">
                <dt className="text-body font-medium text-text">{item.label}</dt>
                <dd className="text-body text-text-muted">
                  {item.href ? (
                    <a href={item.href} className="link" target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}

function splitHeadline(full) {
  const match = full.match(/^(.*)\{\{(.*)\}\}(.*)$/s)
  if (!match) return [full, '', '']
  return [match[1], match[2], match[3]]
}
