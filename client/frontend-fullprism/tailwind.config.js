/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#F0CAA3',
        customPink: '#C060A1',
        customNavy: '#00005C',
        customPurple: '#3B185F',
        customBlue: '#4A55A2',
        customDarkGray: '#61677A',
        customGray: '#D8D9DA'
      },
    },
  },
  plugins: [require('flowbite/plugin'), require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}

