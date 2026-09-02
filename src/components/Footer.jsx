import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-6 py-6 md:px-12">
      <div className="mx-auto flex w-full max-w-wide flex-wrap items-center justify-between gap-4">
        <p className="text-caption font-medium text-text">{site.name}</p>

        <div className="flex items-center gap-6 text-caption text-text-muted">
          <a href={site.github} className="link" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} className="link" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>Updated {site.lastUpdated}</span>
        </div>
      </div>
    </footer>
  )
}
