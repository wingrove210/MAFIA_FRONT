/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Шрифт из Google Fonts
        dune: ['Dune', 'sans-serif'], // Локальный шрифт
        rostov: ['Rostov', 'sans-serif'], // Локальный шрифт
        clash: ['Clash', 'sans-serif'], // Локальный шрифт
        hero: ['Hero', 'sans-serif'], // Локальный шрифт
      },
    },
  },
  plugins: [],
}

