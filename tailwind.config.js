/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")], // new added this becausere of nativewind error
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light:{
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark:{
          100: '#221f3d',
          200: '#0f0d23',
        },
        accent: '#AB8BFF',
      },
    },
  },
  plugins: [],
}