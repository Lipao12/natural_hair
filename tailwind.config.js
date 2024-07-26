/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        font_primary: 'Noto Serif HK',
        font_secondary: 'IBM Plex Serif'
    }
    },
  },
  plugins: [],
}

