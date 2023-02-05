const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/index.tsx', './pages/members.tsx', './pages/projects.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Harmattan', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: '#97E473',
        blue: '#78BFE1',
        purple: '#B29CD6',
        yellow: '#FFDE59',
        sand: '#BDB9AF',
        darkgreen: '#64b63e',
        darkblue: '#4694b8',
        darkpurple: '#7e4bcf'
      }
    },
  },
  plugins: [],
}
