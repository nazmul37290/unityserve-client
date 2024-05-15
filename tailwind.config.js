/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      main: "#22311d",
      middle: "#374f2f",
      light: "#269c03",
    },
  },
  daisyui: {
    themes: ["light", "forest"],
  },
  plugins: [require("daisyui")],
};
