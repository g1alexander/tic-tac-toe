/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#DBE8ED",
          400: "#A8BFC9",
          500: "#6B8997",
        },
        black: {
          300: "#1F3641",
          400: "#1A2A33",
          500: "#10212A",
        },
        blue: {
          300: "#65E9E4",
          400: "#31C3BD",
          500: "#118C87",
        },
        yellow: {
          300: "#FFC860",
          400: "#F2B137",
          500: "#CC8B13",
        },
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      mds: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
