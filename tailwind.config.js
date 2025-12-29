// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}', // for `/pages` directory (if using)
//     './app/**/*.{js,ts,jsx,tsx}',   // for `/app` directory (Next 13+)
//     './components/**/*.{js,ts,jsx,tsx}', // components
//     './src/**/*.{js,ts,jsx,tsx}',   // your actual source folder
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [
    require("flowbite/plugin")
  ],
}

  