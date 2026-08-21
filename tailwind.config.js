/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce5f2',
          200: '#b9cae6',
          300: '#8ba6d4',
          400: '#5a7cbf',
          500: '#3a5ba0',
          600: '#2c4682',
          700: '#233a6b',
          800: '#1a2c52',
          900: '#13213f',
          950: '#0c162e',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edca',
          200: '#f2d98e',
          300: '#e9bf52',
          400: '#e0a82f',
          500: '#c98c1e',
          600: '#a96b17',
          700: '#855116',
          800: '#6e4218',
          900: '#5d3818',
        },
        brand: {
          blue: '#2c4682',
          sky: '#3a8dbf',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', lg: '2rem' },
        screens: { '2xl': '1280px' },
      },
      boxShadow: {
        soft: '0 2px 20px -4px rgba(19, 33, 63, 0.10)',
        card: '0 8px 30px -8px rgba(19, 33, 63, 0.15)',
        lift: '0 20px 50px -12px rgba(19, 33, 63, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
