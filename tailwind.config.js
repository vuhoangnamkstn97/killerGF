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
        fadeIn: 'fadeIn 3s ease-in-out'
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
        }
      }
    },
  },
  plugins: [],
}