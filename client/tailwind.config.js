/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgblack":"#323232",
        "light-black":"#333",
        "black":"#232323",
        "xsl-black":"#3F3F3F",
      },
    },
  },
  plugins: [],
}

