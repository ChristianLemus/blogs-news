const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  important: true,
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#19b9eb",
        primary_hover: "#26B2DE",
        gray: {
          100: "#302F3F",
          300: "#464650",
          600: "#FDFDFD",
        },
        black: "#000",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
      },
      flex: {
        4: "4 4 0%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
