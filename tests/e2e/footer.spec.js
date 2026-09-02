import { test, expect } from '@playwright/test'

test('Contact is a section and the footer is a separate element with no id', async ({ page }) => {
  await page.goto('/')

  const contactSection = page.locator('#contact')
  await expect(contactSection).toHaveCount(1)
  await expect(contactSection).toHaveJSProperty('tagName', 'SECTION')

  const footer = page.locator('footer')
  await expect(footer).toHaveCount(1)

  const footerId = await footer.getAttribute('id')
  expect(footerId).toBeNull()

  // They must be distinct elements, not the same node wearing two roles.
  const sameNode = await contactSection.evaluate(
    (contactEl, footerSelector) => contactEl === document.querySelector(footerSelector),
    'footer',
  )
  expect(sameNode).toBe(false)
})
