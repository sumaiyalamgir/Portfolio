import { skills, sections } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-wide">
        <div className="max-w-prose">
          <h2 id="skills-heading" className="font-display text-section-lg font-medium text-text">
            Skills
          </h2>
          {sections.skills?.lead && (
            <p className="mt-2 text-body text-text-muted">{sections.skills.lead}</p>
          )}
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {skills.map((row) => (
              <div key={row.group} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-body font-medium text-text">{row.group}</dt>
                <dd className="text-body text-text-muted">{row.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
