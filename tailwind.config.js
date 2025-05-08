/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        accent: {
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0369a1',    // sky-800
        },
        'accent-secondary': {
          DEFAULT: '#14b8a6', // teal-500
          dark: '#0f766e',    // teal-800
        },
      },
    },
  },
  plugins: [],
} 