
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/*.js',
    './src/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#001529",
        "secondary-dark": "#001529",
        "primary-light": "#fff",
        "secondary-light": "#fff",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "424px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
