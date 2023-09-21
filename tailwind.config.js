/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");
const myClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-Hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
        primary: "Orbitron",
        secondary: "Rajdhani",
      },
      colors: {
        accent: "#B809C3",
      },
    },

    container: {
      padding: {
        DEFAULT: "15px",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    backgroundImage: {
      site: "url('./assets/site-bg.jpg')",
    },
  },
  plugins: [myClass],
};
