import { site, contact } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="footer-invert bg-accent px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-wide">
        <h2 className="font-display text-[clamp(28px,6vw,40px)] font-semibold text-white">
          {contact.heading}
        </h2>
        <p className="mt-3 max-w-52ch text-body text-white/85">{contact.line}</p>

        <a
          href={`mailto:${site.email}`}
          className="link-invert mt-6 inline-block text-[24px] font-medium"
        >
          {site.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-body">
          <a href={site.github} className="link-invert" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} className="link-invert" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.cv} download className="link-invert no-print">
            Download CV
          </a>
        </div>

        <p className="mt-12 text-caption text-white/70">
          {site.name}, last updated {site.lastUpdated}
        </p>
      </div>
    </footer>
  )
}
