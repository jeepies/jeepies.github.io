/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-slate-blue": "#7d5fff",
        "background": "#252525",
        "foreground": "#353535"
      }
    },
  },
  plugins: [],
}
