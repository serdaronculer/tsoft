/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'main-orange': '#F77106',
        'secondary-gray': '#3B3735',
        'main-gray': '#F6F6F6'
      },
      backgroundColor: {
        'section-a': '#F3F9FF',
      },
      height: {
        'sticky-menu-height' : '74px',
      },
      margin: {
        'sticky-menu-height' : '74px',
      },
      padding : {
        'sticky-menu-height' : '74px',
      },
    },
  },
  plugins: [],
}