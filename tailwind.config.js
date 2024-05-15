/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      slate: colors.slate,
      white: '#FFFFFF',
      bg1: '#FAFAFA',
      bg2: '#F1F5F9',
      bg3: '#FDFDFD',
      font1: '#262626',
      placeholder: '#999999',
      primary: '#02274F',
      input:'#F1F1F1',
    },
  },
  plugins: [],
}

