/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'bg1': '#FAFAFA',
      'bg2': '#F1F5F9',
      'bg3': '#FDFDFD',
      'font1': '#262626',
      'placeholder': '#999999',
      'primary': '#02274F',
      'input':'#F1F1F1',
    },
  },
  plugins: [],
}

