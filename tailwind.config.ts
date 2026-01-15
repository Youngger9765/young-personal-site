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
        // Brand Colors - 2025 Warm Professional
        'slate-blue': '#334155',
        'coral-orange': '#FF8A65',
        // Rich Earth Tones - Brutalist Luxury
        'deep-brown': '#2C1810',
        'forest-green': '#1A3A2E',
        'warm-cream': '#F5F1E8',
        'amber-gold': '#D4A574',
        'bronze': '#8B6F47',
        'warm-orange': '#E87B35',
        'charcoal': '#3A3A3A',
        'stone-gray': '#6B6B6B',
        'light-stone': '#D4CFCF',
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
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'var(--font-noto-sans-tc)',
          'PingFang TC',
          'Microsoft JhengHei',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Merriweather', 'Georgia', 'serif'],
        'ui': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      boxShadow: {
        'brutal': '8px 8px 0px rgba(44, 24, 16, 0.15)',
        'brutal-lg': '12px 12px 0px rgba(44, 24, 16, 0.15)',
        'brutal-amber': '8px 8px 0px rgba(212, 165, 116, 0.3)',
      },
      typography: {
        DEFAULT: {
          css: {
            // GitHub-like styling
            maxWidth: 'none',
            color: '#1f2937',
            lineHeight: '1.75',

            // Headings - GitHub style with clear hierarchy
            h1: {
              fontWeight: '700',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.3em',
            },
            h2: {
              fontWeight: '700',
              fontSize: '1.875em',
              marginTop: '1.6em',
              marginBottom: '0.8em',
              lineHeight: '1.3333333',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.3em',
            },
            h3: {
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              fontWeight: '700',
              fontSize: '1.25em',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },

            // Paragraphs
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },

            // Links - GitHub blue
            a: {
              color: '#0969da',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },

            // Code blocks - GitHub style
            pre: {
              backgroundColor: '#f6f8fa',
              border: '1px solid #d0d7de',
              borderRadius: '6px',
              padding: '16px',
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            code: {
              color: '#24292f',
              backgroundColor: '#f6f8fa',
              borderRadius: '6px',
              padding: '0.2em 0.4em',
              fontSize: '0.875em',
              fontWeight: '400',
              border: '1px solid #d0d7de',
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
            },

            // Blockquotes - GitHub style with left border
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: '#57606a',
              borderLeftWidth: '0.25em',
              borderLeftColor: '#d0d7de',
              paddingLeft: '1em',
              marginTop: '1em',
              marginBottom: '1em',
              backgroundColor: '#f6f8fa',
              padding: '0.5em 1em',
              borderRadius: '0 6px 6px 0',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },

            // Lists
            ul: {
              marginTop: '1em',
              marginBottom: '1em',
              paddingLeft: '1.625em',
            },
            ol: {
              marginTop: '1em',
              marginBottom: '1em',
              paddingLeft: '1.625em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },

            // Horizontal rule
            hr: {
              borderColor: '#d0d7de',
              marginTop: '2em',
              marginBottom: '2em',
            },

            // Tables - GitHub style
            table: {
              width: '100%',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#d0d7de',
            },
            'thead th': {
              fontWeight: '600',
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#d0d7de',
            },
            'tbody td': {
              paddingTop: '0.5714286em',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },

            // Strong/Bold
            strong: {
              color: '#1f2937',
              fontWeight: '700',
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
