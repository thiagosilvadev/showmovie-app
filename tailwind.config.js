const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/pages/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        auxiliar: ["var(--font-auxiliar)", ...fontFamily.sans],
        secondary: ["var(--font-secondary)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#FFECEC',
          100: '#FFDFDF',
          200: '#FFC0C0',
          300: '#FFA0A0',
          400: '#FF8181',
          500: '#FF6161',
          600: '#CC4E4E',
          700: '#993A3A',
          800: '#662727',
          900: '#331313'
        },
        dark: {
          50: '#EBEEF5',
          100: '#C3C8D4',
          200: '#A8AEBF',
          300: '#8E95A9',
          400: '#767E94',
          500: '#61697F',
          600: '#475069',
          700: '#323B54',
          800: '#20283E',
          900: '#121829'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        bodyPattern: "url('/background.png')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
