# Portfolio

Sumaiya Alamgir's personal portfolio. A single-page site built with React, Vite and Tailwind CSS, styled per `portfolio_documentation_v2.md`.

## Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm test          # unit + e2e
npm run test:unit # Vitest: content.js shape and completeness
npm run test:e2e  # Playwright: links, CV download, accessibility, mobile layout
```

The suite exists so the repo itself is evidence of testing ability, not just a claim on a CV. `tests/unit/content.test.js` checks that every project in `content.js` has a title, stack, problem statement, build bullets, a tested note and a repo link, so the site can never silently ship an incomplete project card. The Playwright specs under `tests/e2e` check that every link on the page resolves, that the CV download actually serves a PDF instead of a 404, that an axe-core accessibility scan comes back with zero violations, and that the page renders at a 375px mobile viewport with no horizontal scroll.

## Build & deploy

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

Deployment is manual — see section 8 of the documentation. Nothing ships on push.

## Content

All copy lives in `src/data/content.js`. Bracketed placeholders (`[repo]`, `[add: ...]`) mark real values still to be filled in before launch — see the content checklist in section 5 of the documentation.
