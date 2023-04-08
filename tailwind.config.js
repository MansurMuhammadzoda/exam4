/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': {'max': '468px'},
      // => @media (max-width: 468) {...}
      'tb': {'max': '640px'},
      // => @media (max-width: 640) {...}

      'sm': {'max': '768px'},
      // => @media (max-width: 640) {...}
      'md': {'max': '992px'},
      // => @media (max-width: 768) {...}
    },
    extend: {},
  },
  plugins: [],
}

