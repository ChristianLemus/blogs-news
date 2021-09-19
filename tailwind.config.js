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
        gray: {
          100: "#302F3F",
          300: "#464650",
        },
        black: "#000",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
