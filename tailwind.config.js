/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")], // REQUIRED
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0F1F",
        secondary: "#A8B5DB",
        tab: "#0F1029",
        accent: "#7B61FF",
      },
    },
  },
  plugins: [],
};