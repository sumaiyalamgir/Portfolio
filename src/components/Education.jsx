import { education, certifications } from '../data/content'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-wide">
        <div className="max-w-prose">
          <h2 id="education-heading" className="font-display text-section-lg font-medium text-text">
            Education
          </h2>
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {education.map((entry) => (
              <div
                key={entry.institution}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6"
              >
                <dt className="text-body text-text">
                  {entry.institution}
                  <br />
                  {entry.degree}
                  <span className="mt-2 block text-caption text-text-muted">{entry.detail}</span>
                </dt>
                <dd className="text-body text-text-muted sm:text-right">{entry.dates}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-16 font-display text-section-lg font-medium text-text">Certifications</h2>
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6"
              >
                <dt className="text-body text-text">
                  {cert.name}
                  <span className="block text-caption text-text-muted">{cert.issuer}</span>
                </dt>
                <dd className="text-body text-text-muted sm:text-right">{cert.date}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
