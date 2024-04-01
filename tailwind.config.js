/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'overlay': '#00000080'
      },
      width: {
        about: '450px',
      },
      zIndex: {
        back: '-1',
      }
    },
  },
  plugins: [],
}

