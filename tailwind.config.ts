import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'accent': '#D97706',
        'accent-hover': '#B45309',
        'warm-dark': '#1C1917',
        'warm-cream': '#FFFBEB',
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        'pill': '100px',
      },
      fontFamily: {
        sans: [
          'var(--font-dm-sans)',
          'var(--font-noto-sans-tc)',
          'PingFang TC',
          'Microsoft JhengHei',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(28, 25, 23, 0.06)',
        'soft-md': '0 4px 16px rgba(28, 25, 23, 0.10)',
        'soft-lg': '0 8px 32px rgba(28, 25, 23, 0.14)',
        'soft-xl': '0 12px 48px rgba(28, 25, 23, 0.18)',
        'warm-glow': '0 4px 20px rgba(217, 119, 6, 0.15)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.85',
            fontSize: '1.0625rem',

            // Headings — clean, no border-bottom
            h1: {
              fontWeight: '800',
              fontSize: '2em',
              marginTop: '0',
              marginBottom: '0.75em',
              lineHeight: '1.2',
              color: '#0f172a',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '700',
              fontSize: '1.625em',
              marginTop: '2em',
              marginBottom: '0.75em',
              lineHeight: '1.3',
              color: '#0f172a',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontWeight: '700',
              fontSize: '1.375em',
              marginTop: '1.8em',
              marginBottom: '0.6em',
              lineHeight: '1.4',
              color: '#1e293b',
            },
            h4: {
              fontWeight: '600',
              fontSize: '1.125em',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
              color: '#1e293b',
            },

            // Paragraphs — generous spacing
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },

            // Links — accent color
            a: {
              color: '#D97706',
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s',
              '&:hover': {
                borderBottomColor: '#D97706',
              },
            },

            // Code blocks — dark theme
            pre: {
              backgroundColor: '#0d1117',
              border: 'none',
              borderRadius: '12px',
              padding: '20px 24px',
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: '1.7',
            },
            code: {
              color: '#1e293b',
              backgroundColor: '#f1f5f9',
              borderRadius: '6px',
              padding: '0.2em 0.4em',
              fontSize: '0.875em',
              fontWeight: '500',
              border: 'none',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre code': {
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0',
              fontSize: 'inherit',
              color: 'inherit',
              fontWeight: '400',
            },

            // Blockquotes — accent left border
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: '#6b7280',
              borderLeftWidth: '3px',
              borderLeftColor: '#D97706',
              paddingLeft: '1.25em',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              backgroundColor: '#fffbeb',
              padding: '1em 1.25em',
              borderRadius: '0 8px 8px 0',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },

            // Lists
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.625em',
            },
            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.625em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },

            // Horizontal rule — subtle
            hr: {
              borderColor: '#e5e7eb',
              marginTop: '2.5em',
              marginBottom: '2.5em',
            },

            // Tables
            table: {
              width: '100%',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#e5e7eb',
            },
            'thead th': {
              fontWeight: '600',
              color: '#1e293b',
              verticalAlign: 'bottom',
              paddingRight: '0.75em',
              paddingBottom: '0.75em',
              paddingLeft: '0.75em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#f1f5f9',
            },
            'tbody td': {
              paddingTop: '0.75em',
              paddingRight: '0.75em',
              paddingBottom: '0.75em',
              paddingLeft: '0.75em',
            },

            // Strong/Bold
            strong: {
              color: '#0f172a',
              fontWeight: '700',
            },

            // Images
            img: {
              borderRadius: '12px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
