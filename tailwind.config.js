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
        white30: "rgba(255, 255, 255, 0.30)",
        white40: "rgba(255, 255, 255, 0.40)",
        black50: "rgba(0, 0, 0, 0.50)",
        secondary15: "rgba(2, 201, 134, 0.15)",
        secondary10: "rgba(2, 201, 134, 0.10)",
        secondary0: "rgba(2, 201, 134, 0)",
      },
      backgroundImage: {
        gradientPrimary1: 'linear-gradient(180deg, #111111 40%, #5400E2 100%)',
        gradientPrimary2: 'linear-gradient(135deg, black 16%, #1B0D33 100%)',
        gradientPrimary3: 'linear-gradient(90deg, #2E1557 0%, #5400E2 100%)',
        gradientPrimary4: 'linear-gradient(0deg, black 0%, black 100%)',
        white30: "rgba(255, 255, 255, 0.30)",
        white40: "rgba(255, 255, 255, 0.40)",
      }
    },
  },
  plugins: [],
}