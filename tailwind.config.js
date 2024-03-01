/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1F23",
        secondary: "#00FF00",
        tertiary: "#D7D6D6",
        fourth: "#C45BAA",
        fifth: "#EBEBEB",
        sixth: "#912F56",
      },
    },

    screens: {
      lg: { max: "2032px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
