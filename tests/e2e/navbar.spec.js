import { test, expect } from '@playwright/test'

test('every navbar link resolves to a section that exists on the page', async ({ page }) => {
  await page.goto('/')

  const navHrefs = await page
    .locator('nav[aria-label="Primary"] a[href^="#"]')
    .evaluateAll((as) => as.map((a) => a.getAttribute('href')))

  expect(navHrefs.length).toBeGreaterThan(0)

  for (const href of navHrefs) {
    const id = href.slice(1)
    await expect(page.locator(`[id="${id}"]`)).toHaveCount(1)
  }
})
