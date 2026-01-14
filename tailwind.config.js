/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        purble: {
          600: '#9333ea',
        }
      }
    },
  },
  plugins: [],
}
