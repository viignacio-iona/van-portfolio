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
        sans: ['Inter', 'Poppins', 'Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        accent: {
          DEFAULT: '#4169e1', // royal blue
          dark: '#2743a6',    // darker royal blue
        },
      },
    },
  },
  plugins: [],
} 