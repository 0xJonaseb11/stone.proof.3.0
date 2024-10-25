/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    keyframes: {
      "fade-up": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)",
        },
        "80%": {
          opacity: "0.6",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
      "fade-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        "80%": {
          opacity: "0.6",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
    },
    animation: {
      "fade-up": "fade-up 0.5s",
      "fade-down": "fade-down 0.5s",
    },
  },
  plugins: [],
};
