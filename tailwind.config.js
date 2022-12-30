/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        in: "#30FBEF",
        bgg: "rgba(39, 40, 41, 1)",
        card: "rgba(33, 33, 33, 1)",
        role: "rgba(156, 105, 226, 1)",
      },
      boxShadow: {
        box: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        inside: "2px 2px 12px 10px rgba(0, 0, 0, 0.3)",
        car: "-3px -9px 18px 1px rgba(69 65 65)",
        card: "",
      },
      spacing: {
        "9px": "100px",
        "19px": "200px",
        
        negetive: "-150px",
      },
    },
  },

  plugins: [],
};
