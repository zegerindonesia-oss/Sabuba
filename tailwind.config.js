/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sabuba: {
          red: '#C8102E',
          darkred: '#900C1E',
          deepred: '#65000B',
          amber: '#F59E0B',
          gold: '#FBBF24',
          cream: '#FFFBF5',
          creambg: '#FAF4EB',
          dark: '#121212',
          carddark: '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Poppins', 'sans-serif'],
      },
      animation: {
        'flame-pulse': 'flamePulse 2s infinite ease-in-out',
        'steam-rise': 'steamRise 3s infinite linear',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        flamePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.08)', opacity: '1', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))' }
        },
        steamRise: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-40px) scaleX(1.3)', opacity: '0' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
