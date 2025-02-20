/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        box: "80vw",
        swipecards: "80vw",
        circle: "34vw",
      },
      width: {
        box: "80vw",
        swipecards: "80vw",
        circle: "34vw",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      zIndex: {
        15: 15,
      },
      colors: {
        main: "#5e3ad4",
        secondary: "#1e1e1e",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".burger": {
          "&::before, &::after": {
            content: '""',
            display: "block",
            height: "1px",
            width: "50%",
            margin: "auto",
            backgroundColor: "#1e1e1e",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          },
          "&::before": {
            transform: "translateX(-50%) translateY(-5px)",
          },
          "&::after": {
            transform: "translateX(-50%) translateY(5px)",
          },
        },
        ".burger-active": {
          "&::before, &::after": {
            content: '""',
            display: "block",
            height: "1px",
            width: "50%",
            margin: "auto",
            backgroundColor: "#1e1e1e",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          },
          "&::before": {
            transform: "translateX(-50%) rotate(45deg)",
          },
          "&::after": {
            transform: "translateX(-50%) rotate(-45deg)",
          },
        },
        ".svgCurve": {
          position: "absolute",
          top: "0",
          left: "-99px",
          width: "100px",
          height: "100%",
          fill: "rgb(30, 30, 30)",
          stroke: "none",
        },
      });
    }),
  ],
};

export default config;
