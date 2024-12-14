/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 28px 1px rgba(0, 0, 0, 0.1)", // x: 4, y: 4, blur: 30, spread: 2, color: black
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-left': 'fade-left 1s ease-in-out',
        'fade-right': 'fade-right 1s ease-in-out',
        fade: 'fade 1s both',
        'fade-down': 'fade-down 1s both',
        'fade-up': 'fade-up 1s both',
        'flip-up': 'flip-up 1s both',
        'flip-down': 'flip-down 1s both',
        jump: 'jump .5s both',
        'jump-in': 'jump-in .5s both',
        'jump-out': 'jump-out .5s both',
      },
      keyframes: {
        loader: {
          to: {
            transform: 'translate3d(0, -0.6rem, 0)',
          },
        },
        fade: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'flip-up': {
          '0%': {
            transform: 'rotateX(90deg)',
            transformOrigin: 'bottom',
          },
          '100%': {
            transform: 'rotateX(0)',
            transformOrigin: 'bottom',
          },
        },
        'flip-down': {
          '0%': {
            transform: 'rotateX(-90deg)',
            transformOrigin: 'top',
          },
          '100%': {
            transform: 'rotateX(0)',
            transformOrigin: 'top',
          },
        },
        jump: {
          '0%, 100%': {
            transform: 'scale(100%)',
          },
          '10%': {
            transform: 'scale(80%)',
          },
          '50%': {
            transform: 'scale(120%)',
          },
        },
        'jump-in': {
          '0%': {
            transform: 'scale(0%)',
          },
          '80%': {
            transform: 'scale(100%)',
          },
          '100%': {
            transform: 'scale(100%)',
          },
        },
        'jump-out': {
          '0%': {
            transform: 'scale(100%)',
          },
          '20%': {
            transform: 'scale(120%)',
          },
          '100%': {
            transform: 'scale(0%)',
          },
        },
       
      },
    },
  },
  plugins: [],
}