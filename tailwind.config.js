/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fef6e4",
        secondary: "#001858",
        headline: "#fffffe",
        paragraph: "#fef6e4",
       }
    },
  },
  plugins: [],
}