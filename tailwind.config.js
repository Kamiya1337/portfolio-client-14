/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          sidebar: '#080807',
          'sidebar-border': '#26211D',
          navy: '#E8DFD2',
          'hero-blue': '#080807',
          blue: '#24211E',
          cyan: '#C8B8A6',
          'blue-light': '#6F665E',
          background: '#F4EFE7',
          card: '#FFFDF8',
          cream: '#F8F2E8',
          accent: '#C8B8A6',
          ink: '#1F1D1A',
          muted: '#6F665E',
          border: '#D8CFC4',
          warning: '#C8B8A6',
        }
      }
    },
  },
  plugins: [],
}
