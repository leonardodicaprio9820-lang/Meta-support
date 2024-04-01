/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Default: "#16103D",
          sky: "#231961",
          skylight: "#2E2182",
          check: "#4F3BCE"
        }
      }
    },
  },
  plugins: [],
}

