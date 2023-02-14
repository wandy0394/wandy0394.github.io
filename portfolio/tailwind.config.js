/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/daisyui/dist/**/*.js', './node_modules/react-daisyui/dist/**/*.js', './src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}
