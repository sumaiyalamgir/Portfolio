import { withBase } from '../lib/url'

export default function WorkRow({ project, reversed }) {
  return (
    <div
      className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md:items-center ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-card border border-border bg-accent-soft">
        {project.screenshot ? (
          <img
            src={withBase(project.screenshot)}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-wrap content-center items-center justify-center gap-3 p-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-display text-[clamp(18px,3vw,28px)] font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="font-display text-project-title font-medium text-text">{project.title}</h3>

        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-tag bg-accent-soft px-2 py-1 font-mono text-code text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-body text-text">{project.summary}</p>

        <div className="mt-5">
          <h4 className="text-body font-medium text-text">What I built</h4>
          <ul className="mt-2 space-y-2 list-disc pl-5 text-body text-text">
            {project.built.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>

        {project.next && (
          <p className="mt-5 text-body text-text-muted">What I&rsquo;d do next: {project.next}</p>
        )}

        <div className="mt-5 flex gap-6 text-caption">
          {project.repo && (
            <a href={project.repo} className="link" target="_blank" rel="noreferrer">
              View repository
            </a>
          )}
          {project.live && (
            <a href={project.live} className="link" target="_blank" rel="noreferrer">
              Open live site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
