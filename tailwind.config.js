/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Core palette
        base: {
          DEFAULT: "#0a0a0a", // near-black background
          950: "#0a0a0a",
          900: "#0e0e0e",
          800: "#111111",
        },
        // Accent
        accent: {
          DEFAULT: "#0ea5e9", // main accent
          hover: "#38bdf8",   // hover/active
          fg: "#ffffff",      // text on accent
        },
        // Neutrals
        text: {
          primary: "#ffffff",
          secondary: "#d1d5db",
          muted: "#9ca3af",
        },
        ui: {
          card: "#111111",
          border: "#1f2937",
        },
        // Border colors for our palette
        border: {
          'text-muted': '#9ca3af', // Secondary Accent
          'text-secondary': '#d1d5db', // Text Secondary
          'accent': '#0ea5e9', // Primary Accent
          'accent-hover': '#38bdf8', // Highlight
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 6px 24px rgba(0,0,0,0.25)',
        'ring-accent': '0 0 0 3px rgba(14,165,233,0.5)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      transitionTimingFunction: {
        'swift': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(14,165,233,0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(14,165,233,0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s ease-out both',
        'pulse-glow': 'pulse-glow 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents }) {
      // Typography scale
      addBase({
        'h1': { fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.02em' },
        'h2': { fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.01em' },
        'h3': { fontSize: '1.5rem', fontWeight: '600' },
        'p' : { fontSize: '1rem', lineHeight: '1.7' },
        'small': { fontSize: '.875rem' },
      });
      
      // Reusable components
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.5rem',
          padding: '.75rem 1rem',
          borderRadius: '1rem',
          fontWeight: '600',
          transition: 'all 150ms',
        },
        '.btn-primary': {
          backgroundColor: '#0ea5e9',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(14,165,233,0.25)',
        },
        '.btn-primary:hover': {
          backgroundColor: '#38bdf8',
          transform: 'translateY(-1px)',
        },
        '.btn-primary:active': {
          transform: 'translateY(0)',
          filter: 'saturate(1.1)',
        },
        '.btn-outline': {
          border: '1px solid #1f2937',
          color: '#d1d5db',
          backgroundColor: 'transparent',
        },
        '.btn-outline:hover': {
          borderColor: '#38bdf8',
          color: '#ffffff',
        },
        '.card': {
          backgroundColor: '#111111',
          border: '1px solid #1f2937',
          borderRadius: '1rem',
          padding: '1.25rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        },
        '.focus-ring': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(14,165,233,0.5)',
        },
        '.link': {
          color: '#0ea5e9',
          textDecoration: 'none',
          transition: 'color 150ms',
        },
        '.link:hover': {
          color: '#38bdf8',
          textDecoration: 'underline',
        },
      });
    }
  ],
}; 