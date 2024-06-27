/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FF6600",
        paraColor: "#675F5F",
      },
    fontFamily: {
      body: ["SF Pro Display", "sans-serif"],
    },
    lineHeight: {
      h1: "83.54px",
      h2: "47.73px",
      h3: "29.83",
      p: "23.87px",
    },
    backgroundColor: {
      "btn-grey": "#d9d9d9",
      boxBg: "#fafafa",
    },
    boxShadow: {
      "custom-light": "#FF6600 0 0.95px 2.6px",
      "custom-light-hover": "#FF6600 1px 0px 4px",
    },
    transitionDuration: {
      3000: "3000ms",
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      borderColor: ["hover"],
      transitionProperty: ["hover"],
    },
  },
},
  plugins: [],
};
