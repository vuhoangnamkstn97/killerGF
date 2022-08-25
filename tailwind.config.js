/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        bounceX: 'bounceX 3s ease-in-out',
        fadeIn: 'fadeIn 3s ease-in-out',
        slideUp: 'slideUp 1.5s ease-in-out',
      },
      
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceX: {
          '0%': { transform: 'translateX(0rem)' },
          '25%': { transform: 'translateX(-2rem)' },
          '75%': { transform: 'translateX(2rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
        slideUp: {
          
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          
          }
        },
      },
      colors: {
        primary: {
          900: '#98005a',
          800: '#BE0061',
          700: '#D30065',
          600: '#E9006A',
          500: '#FB006D',
          400: '#FB3B84',
          300: '#FC619B',
          200: '#FC90B8',
          100: '#fdbcd5',
          50: '#fee5ee',
        },
      }
    },
    fontFamily: {
      'anton': ['Anton', 'sans-serif'] 
    },
  },

  plugins: [],
}