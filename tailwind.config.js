/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#FFFFFF',
          200: '#FFFAF1',
          300: '#F2F2F2',
          400: '#C4C4CC',
          500: '#7C7C8A',
          600: '#76797B',
          700: '#4D58SE'
        },
        dark: {
          100: '#000405',
          200: '#00070A',
          200: '#000204',
          400: '#000A0F',
          500: '#000C12',
          600: '#00111A',
          700: '#001119'
        },
        tomato: {
          100: '#750310',
          200: '#92000E',
          300: '#AB222E',
          400: '#AB4D55'
        },
        orange: {
          100: '#FF9431',
        },
        cinza: {
          100: '#F2F2F2',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animated')
  ],
}

