/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 20%)",
        "dark-gray": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
        green: "hsl(75, 94%, 57%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
