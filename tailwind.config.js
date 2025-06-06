export const screens = {
  md: "768px",
  lg: "1024px",
  xl: "1920px",
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens,
    colors: {
      gray: {
        DEFAULT: "#E2E2E2",
        secondary: "#D9D9D9"
      },
      black: "#000000",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
}
