/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#8B6F47',
        accent: '#C17A3C',
        background: '#FAF8F5',
        surface: '#F0EDE8',
        text: '#2D2D2D',
        'text-muted': '#6B6B6B',
        border: '#E5DFD6',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      transitionDuration: {
        '800': '800ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
