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
        primarylight: "rgba(74, 114, 255, 0.05)",
        secondary: "#4A72FF0D",
        dark: "#0C1B4D",
        darklight: "#0C1B4D99",
        darkextralight: "rgba(12, 27, 77, 0.10)",
      }
    },
  },
  plugins: [],
}