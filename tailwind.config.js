/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1230px",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2.125rem",
      "4xl": "2.875rem",
      "5xl": "3.75rem",
      "6xl": "4.5rem",
    },
    lineHeight: {
      none: "1",
      xs: "1.16",
      sm: "1.32",
      md: "1.48",
      lg: "1.64",
      lx: "1.82",
      double: "2",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      whiteOpacity: "#ffffff20",
      whiteHover: "#ececec",
      black: "#222222",
      pink: "#FFA3A3",
      red: "#FC5252",
      redHover: "#ff6565",
      blue: "#381DDB",
    },
    fontFamily: {
      sans: ["Raleway, sans-serif"],
      headline: ["Montserrat, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
