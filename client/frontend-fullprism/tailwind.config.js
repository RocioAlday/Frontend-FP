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
        customlavender: '#DBD2E0',
        customPink: '#DD7596',
        customNavy: '#B7C3F3',
        customPurple: '#3B185F',
        customBlue: '#4A55A2',
        customBlue2: '#6983E9',
        customDarkGray: '#4F6272',
        customGray: '#D8D9DA',
        customBeige: '#D6D2D2',
        customBeigeDark: '#D6D2D2'
      },
    },
  },
  plugins: [require('flowbite/plugin'), require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}

