/** @type {import('tailwindcss').Config} */
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
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}