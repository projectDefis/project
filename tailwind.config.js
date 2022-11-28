/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-gray-100": "#BFBFBF",
        "custom-gray-200": "#ADB5BD",
        "custom-gray-300": "#828282",
        "custom-gray-700": "#232323",
        "custom-gray-900": "#767E90",
        "custom-black-100": "#E5E5E5",
        "custom-black-500": "#202020",
        "custom-brown": "#2C2C2C",
        "custom-orange": "#F87F28",
        "custom-red": "#BB2323",
      },
      width: {
        '200': '677px',
      },
      letterSpacing: {
        widest: "0.125rem",
      },
      lineHeight: {
        "extra-height": "3.75rem",
      },
    },
  },
  plugins: [],
};
