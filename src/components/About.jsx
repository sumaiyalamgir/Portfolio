import { about, site } from '../data/content'
import { withBase } from '../lib/url'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-prose">
        <h2 id="about-heading" className="font-display text-section-lg font-medium text-text">
          About
        </h2>

        <div className={site.photo ? 'mt-6 grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr]' : 'mt-6'}>
          {site.photo && (
            <img
              src={withBase(site.photo)}
              alt={site.name}
              className="h-[200px] w-[200px] rounded-card object-cover"
            />
          )}
          <div className="space-y-4 text-body text-text">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
