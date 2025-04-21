/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ocean-blue": "#1A75BB",
        turquoise: "#15B7B9",
        "sun-orange": "#FF8A00",
        "adventure-green": "#36B37E",
        "coral-red": "#F95A5A",
        "dark-gray": "#333B4F",
        "medium-gray": "#6B7A99",
        "light-gray": "#EDF1F7",
        "very-light-gray": "#F5F7FA",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "20px",
        h4: "18px",
        body: "16px",
        small: "14px",
        caption: "12px",
      },
      boxShadow: {
        "card-shadow-3": "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
