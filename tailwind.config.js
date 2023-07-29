
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      './src/*.js',
      './src/*.jsx'
    ],
  },
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
      gridTemplateColumns: {
        "layout-desktop": "16rem 1fr",
      },
      gridTemplateRows: {
        "layout-desktop": "90px 300px 1fr 4rem",
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
