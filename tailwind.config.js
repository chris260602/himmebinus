/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      secondary: "#F8EF2A",
      primary: "#0B4C86",
      black: "#202020",
      gray: "#D3D3D3",
      white: "#FFFFFF",
      serious: "#FF0000",
      transparant: "rgba(0, 151, 218,0)",
    },
    extend: {
      height: {
        200: "600px",
        100: "420px",
        88: "315px",
        70: "250px",
        97: "456px",
      },
      width: {
        200: "1256px",
        70: "250px",
        100: "560px",
        97: "456px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
