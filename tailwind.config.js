/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0d0f12',
          900: '#121418',
          850: '#161920',
          800: '#1a1e26',
          700: '#232833',
          600: '#2d3340',
        },
        brand: {
          50: '#fff3ed',
          100: '#ffe3d5',
          200: '#ffc4aa',
          300: '#ff9b74',
          400: '#ff7a47',
          500: '#ff6b35',
          600: '#f04e16',
          700: '#c73a0e',
          800: '#9e3113',
          900: '#7f2c13',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.8)',
        glow: '0 0 0 1px rgba(255,107,53,0.35), 0 8px 30px -10px rgba(255,107,53,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
