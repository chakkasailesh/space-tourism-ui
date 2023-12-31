/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      dark: '#0B0D17',
      light: '#D0D6F9',
      white: '#FFFFFF',
    },
    fontFamily: {
      signature: ['Bellefair'],
      barlow: ['Barlow'],
    },
  },
  plugins: [],
}
