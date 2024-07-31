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
            color: "inherit", // text color is inherited
            maxWidth: "none", // Removes default max-width limitation
            margin: "0", // Removes default margins
            padding: "0", // Removes default padding
            textDecoration: "none", // default text decoration is none
            fontSize: "inherit", // font size is inherited
            a: {
              textDecoration: "none", // Removes underline from links
              fontSize: "inherit", // Inherits font size
            },
            button: {
              textDecoration: "none", // Ensures no text decoration
              fontSize: "inherit", // Inherits font size
            },
            span: {
              fontSize: "inherit", // Inherits font size
            },
            h1: {
              fontWeight: "700",
              marginBottom: "20px",
              marginTop: "0px",
              lineHeight: "83.54px",
              fontSize: "40px",
            },
            h2: {
              marginBottom: "15px",
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
