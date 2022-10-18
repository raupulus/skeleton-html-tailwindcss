/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    '*.html',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      'content': ['Montserrat', 'Helvetica', 'sans-serif'],
      'title': ['Montserrat', 'Helvetica', '"Open Sans"', 'sans-serif'],
    }
  },
  plugins: [],
}
