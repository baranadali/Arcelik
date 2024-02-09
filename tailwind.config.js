/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { 'max': '768px' },
    },
    fontFamily: {
      GraphikRegular: ["GraphikRegular", "sans-serif"],
      GraphikSemibold: ["GraphikSemibold", "sans-serif"],
      HeronsansSemibold: ["HeronsansSemibold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}