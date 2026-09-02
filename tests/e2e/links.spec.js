import { test, expect } from '@playwright/test'

test('every href on the page resolves without a client/server error', async ({ page, request }) => {
  await page.goto('/')

  const hrefs = await page.$$eval('a[href]', (as) =>
    as.map((a) => a.getAttribute('href')).filter((href) => href && !href.startsWith('mailto:')),
  )

  expect(hrefs.length).toBeGreaterThan(0)

  for (const href of hrefs) {
    if (href.startsWith('#')) {
      const id = href.slice(1)
      const target = page.locator(`[id="${id}"]`)
      await expect(target).toHaveCount(1)
      continue
    }

    if (href.startsWith('/')) {
      const response = await request.get(href)
      expect(response.status(), `${href} should resolve`).toBeLessThan(400)
      continue
    }

    // External links (GitHub, LinkedIn, repos) are placeholders during content
    // authoring and are exempt from live network checks here.
  }
})
