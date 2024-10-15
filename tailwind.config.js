/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      screens: {
        media400: "420px",
        media600: "600px",
      },
      backgroundImage: {
        "testimonial-section":
          "url('./images/testimonial-section-background.png')",
      },
    },
  },
  plugins: [],
};
