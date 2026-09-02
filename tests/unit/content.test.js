import { describe, expect, it } from 'vitest'
import {
  site,
  hero,
  about,
  projects,
  skills,
  education,
  certifications,
  contact,
} from '../../src/data/content'

describe('content.js', () => {
  it('site has all required fields', () => {
    for (const field of ['name', 'email', 'github', 'linkedin', 'cv', 'lastUpdated']) {
      expect(site[field]).toBeTruthy()
    }
  })

  it('hero headline contains a {{ }} highlight marker', () => {
    expect(hero.headline).toMatch(/\{\{.*\}\}/)
    expect(hero.kicker).toBeTruthy()
    expect(hero.intro).toBeTruthy()
    expect(hero.availability).toBeTruthy()
  })

  it('about has a non-empty list of paragraphs', () => {
    expect(Array.isArray(about.paragraphs)).toBe(true)
    expect(about.paragraphs.length).toBeGreaterThan(0)
    for (const paragraph of about.paragraphs) {
      expect(typeof paragraph).toBe('string')
      expect(paragraph.length).toBeGreaterThan(0)
    }
  })

  it('every project has title, stack, summary and built bullets; next/repo/live are string or null', () => {
    expect(projects.length).toBeGreaterThan(0)
    for (const project of projects) {
      expect(project.title).toBeTruthy()
      expect(Array.isArray(project.stack)).toBe(true)
      expect(project.stack.length).toBeGreaterThan(0)
      expect(project.summary).toBeTruthy()
      expect(Array.isArray(project.built)).toBe(true)
      expect(project.built.length).toBeGreaterThan(0)
      for (const field of ['next', 'repo', 'live']) {
        expect(project[field] === null || typeof project[field] === 'string').toBe(true)
      }
    }
  })

  it('no bracket placeholders remain in filled-in project fields', () => {
    for (const project of projects) {
      const filled = [project.summary, ...project.stack, ...project.built, project.repo].filter(Boolean)
      for (const value of filled) {
        expect(value).not.toMatch(/[[\]]/)
      }
    }
  })

  it('projects are ordered strongest first', () => {
    expect(projects.map((p) => p.title)).toEqual([
      'Daycare Connect',
      'CleanIt',
      'Airplane Management System',
      'Human Following Robot',
    ])
  })

  it('skills has labelled groups with a comma-separated items string', () => {
    expect(skills.length).toBeGreaterThan(0)
    for (const row of skills) {
      expect(row.group).toBeTruthy()
      expect(typeof row.items).toBe('string')
      expect(row.items.length).toBeGreaterThan(0)
    }
  })

  it('education and certifications are populated', () => {
    expect(education.length).toBeGreaterThan(0)
    for (const entry of education) {
      for (const field of ['institution', 'degree', 'dates', 'detail']) {
        expect(entry[field]).toBeTruthy()
      }
    }
    expect(certifications.length).toBeGreaterThan(0)
    for (const cert of certifications) {
      expect(cert.name).toBeTruthy()
      expect(cert.issuer).toBeTruthy()
      expect(cert.date).toBeTruthy()
    }
  })

  it('contact has a heading and a line', () => {
    expect(contact.heading).toBeTruthy()
    expect(contact.line).toBeTruthy()
  })

  it('carries no testing/SQA framing', () => {
    const haystack = JSON.stringify({ hero, skills, contact }).toLowerCase()
    expect(haystack).not.toMatch(/\bsqa\b/)
    expect(haystack).not.toMatch(/testing & quality/)
  })
})
