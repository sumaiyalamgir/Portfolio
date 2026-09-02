import { projects } from '../data/content'
import WorkRow from './WorkRow'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-wide">
        <h2 id="work-heading" className="font-display text-section-lg font-medium text-text">
          Work
        </h2>

        <div className="mt-10 flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <WorkRow key={project.title} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
