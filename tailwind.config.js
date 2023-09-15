/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A72FF",
        secondary: "#4A72FF0D",
        dark: "#0C1B4D",
      }
    },
  },
  plugins: [],
}