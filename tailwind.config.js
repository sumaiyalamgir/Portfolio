/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      bg: 'var(--bg)',
      surface: 'var(--surface)',
      text: 'var(--text)',
      'text-muted': 'var(--text-muted)',
      'text-subtle': 'var(--text-subtle)',
      border: 'var(--border)',
      accent: 'var(--accent)',
      'accent-soft': 'var(--accent-soft)',
      'card-hover': 'var(--card-hover)',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      display: ['Fraunces', 'Georgia', 'serif'],
    },
    extend: {
      maxWidth: {
        content: '680px',
        prose: '760px',
        wide: '1120px',
        projects: '880px',
        '52ch': '52ch',
      },
      borderRadius: {
        card: '8px',
        tag: '4px',
      },
      fontSize: {
        h1: ['clamp(30px, 5vw, 40px)', { lineHeight: '1.3' }],
        hero: ['clamp(44px, 8vw, 88px)', { lineHeight: '1.05' }],
        section: ['22px', { lineHeight: '1.3' }],
        'section-lg': ['clamp(28px, 4vw, 36px)', { lineHeight: '1.15' }],
        'project-title': ['28px', { lineHeight: '1.25' }],
        body: ['16px', { lineHeight: '1.6' }],
        caption: ['14px', { lineHeight: '1.6' }],
        code: ['13px', { lineHeight: '1.6' }],
      },
      spacing: {
        18: '72px',
        24: '96px',
        16: '64px',
        navbar: '56px',
      },
    },
  },
  plugins: [],
}
