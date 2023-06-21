/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#001c40"
      },
      maxWidth: {
        xxs: "256px"
      },
      height: {
        halfScreen: "50vh",
        oneThirdScreen: "33vh",
        quarterScreen: "25vh"
      }
    },
  },
  plugins: [],
}

