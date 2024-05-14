/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      "color-white": "#FDFDFD",
      "color-grey": "#FBFBFB",
      "color-pink1": "#FFAFCE",
      "color-pink2": "#FF8AB8",
      "color-pink3": "#FD5E98",
      "color-blue": "#37618B",
      "color-point-navy": "#041D32",
      "color-point-pink": "#E43C6F",
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
