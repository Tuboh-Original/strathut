/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GTWalsheim: ["GT Walsheim", "sans-serif"],
      },
      colors: {
        primary: '#2E007C',
        secondary: '#02C986',
        textHead: '#FFFFFF',
        textBody: '#777777',
        white30: "rgb",
      },
      backgroundImage: {
        gradientPrimary1: 'linear-gradient(180deg, #111111 16%, #5400E2 100%)',
        gradientPrimary2: 'linear-gradient(135deg, black 16%, #1B0D33 100%)',
        gradientPrimary3: 'linear-gradient(90deg, #2E1557 0%, #5400E2 100%)',
        white30: "rgba(255, 255, 255, 0.30)"
      }
    },
  },
  plugins: [],
}