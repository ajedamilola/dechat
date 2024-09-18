const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#0389c9",
        bgColor: "#edf7fc",
        hoverColor: "#f5f5f5",
      },
      fontFamily: {
        ["montserrat"]: ["montserrat", "sans-serif"],
        ["roboto"]: ["roboto", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.content()],
};
