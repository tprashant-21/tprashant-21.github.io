// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bg-font': ['"Montserrat"', 'sans-serif'],
        'handwriting': ['Shadows Into Light', 'cursive'],
      },
      screens: {
        'tablet': '820px',
        'laptop': '1200px',
        'normal': '1600px',
      }, 
    },
  },
  plugins: [],
}
