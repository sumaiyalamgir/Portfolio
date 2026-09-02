// content.js stores public-asset paths as plain root-relative strings
// ('/foo.pdf') so it stays plain data, not build tooling. But a root-relative
// path breaks once the site is deployed under a subpath (GitHub Pages serves
// this repo at /Portfolio/, not /). withBase() resolves a stored path against
// Vite's actual build-time base so the same content.js works at any base.
export function withBase(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
