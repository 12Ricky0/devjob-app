/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    './public/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'primary': {
        'violet': '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': ' #19202D',
        'midnight': '#121721'
      },
      'secondary': {
        'white': '#FFFFFF',
        'light-gray': '#F4F6F8',
        'gray': '#9DAEC2',
        'dark-gray': '#6E8098'
      }
    },

    extend: {
      fontSize: {
        'xs': '14px',
        'sm': '16px',
        'base': '20px',
        'lg': '24px',
        'xl': '28px',
      },
      backgroundImage: {
        'mobile': "url('/public/assets/mobile/bg-pattern-header.svg')",
        'desktop': "url('/public/assets/desktop/bg-pattern-header.svg')",
        'tablet': "url('/public/assets/tablet/bg-pattern-header.svg')"
      },
      // gridTemplateColumns: {
      //   '2': 'repeat(auto-fit, minmax(339px, 1fr))'
      // },
    },
  },
  plugins: [],
}

