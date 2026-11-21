/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sunset: {
          50: '#FFF6EC',
          100: '#FFE8D1',
          200: '#FFD0A3',
          300: '#FFB36B',
          400: '#FF9A3C',
          500: '#FF7A45',
          600: '#F2552C',
          700: '#D1306E',
          800: '#8E2A66',
          900: '#4B1D52',
          950: '#1E1030',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
