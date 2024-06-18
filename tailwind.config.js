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
    },
  },
  plugins: [],
};
