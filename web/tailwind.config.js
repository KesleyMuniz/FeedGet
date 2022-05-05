module.exports = {
  content: ["./src/**/*tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#e25656',
          300: '#ff6d6d',
        }
      },
      borderRadius: {
          md:'4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}