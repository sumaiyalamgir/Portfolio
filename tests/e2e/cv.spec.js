import { test, expect } from '@playwright/test'

test('CV download link returns a PDF, not a 404', async ({ page, request }) => {
  await page.goto('/')
  const cvLink = page.locator('a[download]').first()
  const href = await cvLink.getAttribute('href')
  expect(href).toBeTruthy()

  const response = await request.get(href)
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('pdf')
})
