/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#6b0d0e',
          'red-light': '#8b1a1b',
          'red-dark': '#4a0a0a',
          creme: '#f3ead9',
          'creme-light': '#faf7f2',
          'creme-dark': '#e8dcc0',
        },
        primary: {
          DEFAULT: '#6b0d0e',
          light: '#8b1a1b',
          dark: '#4a0a0a',
        },
        secondary: {
          DEFAULT: '#f3ead9',
          light: '#faf7f2',
          dark: '#e8dcc0',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6b0d0e 0%, #8b1a1b 100%)',
        'gradient-creme': 'linear-gradient(135deg, #f3ead9 0%, #faf7f2 100%)',
      }
    },
  },
  plugins: [],
} 