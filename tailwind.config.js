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
      typography: {
        DEFAULT: {
          css: {
            // Override or remove default styles
            color: "inherit",
            maxWidth: "none",
            margin: "0",
            padding: "0",
            textDecoration: "none",
            fontSize: "inherit",
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
            a: {
              textDecoration: "none",
              fontSize: "inherit",
            },
            button: {
              textDecoration: "none",
              fontSize: "inherit",
            },
            span: {
              fontSize: "inherit",
            },
            h1: {
              fontWeight: "700",
              marginBottom: "20px",
              marginTop: "0px",
              lineHeight: "83.54px",
              fontSize: "40px",
            },
            h2: {
              marginBottom: "0px",
              marginTop: "0px",
              lineHeight: "47.73px",
              fontSize: "35px",
            },
            h3: {
              marginBottom: "10px",
              marginTop: "0px",
              lineHeight: "29.83px",
              fontSize: "30px",
            },
            p: {
              marginBottom: "8px",
              marginTop: "0px",
              lineHeight: "23.87px",
              fontSize: "20px",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
