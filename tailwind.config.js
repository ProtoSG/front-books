/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#70151E",
        secundary: "#616161",
        bg: "#191919",
      }
    },
  },
  plugins: [],
}

