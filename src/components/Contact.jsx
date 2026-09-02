import { site, contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-wide grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 id="contact-heading" className="font-display text-section-lg font-medium text-text">
            {contact.heading}
          </h2>
          <p className="mt-2 text-body text-text">{contact.line}</p>

          <a
            href={`mailto:${site.email}`}
            className="filled-button mt-6 inline-block rounded-card px-5 py-3 text-body font-medium"
          >
            {site.email}
          </a>
        </div>

        <div>
          <dl className="divide-y divide-border border-t border-border">
            {contact.details.map((detail) => (
              <div
                key={detail.label}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
              >
                <dt className="text-body font-medium text-text">{detail.label}</dt>
                <dd className="text-body text-text-muted">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex gap-6 text-body">
            <a href={site.github} className="link" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} className="link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
