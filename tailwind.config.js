// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // for `/pages` directory (if using)
    './app/**/*.{js,ts,jsx,tsx}',   // for `/app` directory (Next 13+)
    './components/**/*.{js,ts,jsx,tsx}', // components
    './src/**/*.{js,ts,jsx,tsx}',   // your actual source folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

  