/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      animation: {
        'after-sidebar-delay': 'after-sidebar-delay 0.6s linear'
      },
      keyframes: {
        'after-sidebar-delay': {
          '0%': { opacity: 0, width: '0px', position: 'absolute' },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
};
