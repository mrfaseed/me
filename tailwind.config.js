/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#0a0a0c',
        surface: '#121217',
        surfaceBorder: '#23232a',
        primary: '#3b82f6',
        secondary: '#14b8a6',
        accent: '#a855f7',
        textMain: '#f8fafc',
        textMuted: '#94a3b8'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift-left': 'driftLeft 15s ease-in-out infinite',
        'drift-right': 'driftRight 18s ease-in-out infinite',
        'drift-left-slow': 'driftLeft 22s ease-in-out infinite reverse',
        'drift-right-slow': 'driftRight 25s ease-in-out infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        driftLeft: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -15px) rotate(2deg)' },
          '66%': { transform: 'translate(-5px, 15px) rotate(-1deg)' },
        },
        driftRight: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(-15px, 10px) rotate(-2deg)' },
          '66%': { transform: 'translate(10px, -10px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
