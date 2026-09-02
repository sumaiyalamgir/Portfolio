import { useEffect, useState } from 'react'
import { site } from '../data/content'
import { withBase } from '../lib/url'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header className="navbar fixed top-0 inset-x-0 z-50 h-navbar flex items-center border-b border-border">
        <div className="mx-auto flex w-full max-w-wide items-center justify-between px-6 md:px-12">
          <a href="#top" className="font-display text-[18px] font-medium text-text">
            {site.name}
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-caption pb-1 border-b-2 transition-colors ${
                  active === link.href
                    ? 'border-accent text-text'
                    : 'border-transparent text-text hover:border-border'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={withBase(site.cv)}
              download
              className="filled-button no-print rounded-card px-4 py-2 text-caption font-medium"
            >
              Download CV
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden text-caption font-medium text-text"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not a child: <header> carries
        backdrop-filter for the frosted-glass nav, and backdrop-filter (like
        transform/filter) makes an element the containing block for any
        position:fixed descendant. Nested inside <header>, this panel's
        `bottom-0` resolved against the 56px header box instead of the
        viewport and collapsed to a sliver.
      */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-navbar bottom-0 z-40 bg-bg flex flex-col gap-6 px-6 pt-10 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-section-lg font-display text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cv}
            download
            onClick={() => setMenuOpen(false)}
            className="filled-button no-print mt-4 inline-flex w-fit items-center rounded-card px-4 py-2 text-caption font-medium"
          >
            Download CV
          </a>
        </div>
      )}
    </>
  )
}
