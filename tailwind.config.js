/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",

      "primary-100": "#FF4081",
      "primary-200": "#ff79b0",
      "primary-300": "#ffe4ff",

      "accent-100": "#00E5FF",
      "accent-200": "#00829b",

      "text-100": "#333333",
      "text-200": "#5c5c5c",

      "bg-100": "#F5F5F5",
      "bg-200": "#ebebeb",
      "bg-300": "#c2c2c2",
    },
    screens: {
      md: "760px",
      lg: "970px",
      xl: "1300px",
    },
    extend: {},
  },
  plugins: [],
};
