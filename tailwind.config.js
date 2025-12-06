/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette - Bold & Futuristic
      colors: {
        amber: {
          light: '#ffb703',
          DEFAULT: '#ffb703',
          dark: '#fb8500',
        },
        navy: {
          light: '#034567',
          DEFAULT: '#023047',
          dark: '#011627',
        },
        orange: {
          light: '#ff9f1c',
          DEFAULT: '#fb8500',
          dark: '#e07500',
        },
        dark: {
          light: '#1a1a1a',
          DEFAULT: '#000000',
          soft: '#0a0a0a',
        },
        // Complementary accent colors
        accent: {
          cyan: '#8ecae6',
          teal: '#219ebc',
          cream: '#fff8e8',
        }
      },
      // Custom fonts - will be loaded via Google Fonts
      fontFamily: {
        display: ['var(--font-clash)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      // Custom animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'tilt': 'tilt 10s infinite linear',
        'bounce-slow': 'bounce 3s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'rotate-in': 'rotateIn 0.5s ease-out',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
        'line-grow': 'lineGrow 1s ease-out forwards',
        'particle': 'particle 20s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(255, 183, 3, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(255, 183, 3, 0.8)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        gradientXY: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        textReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        particle: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
        },
      },
      // Custom backdrop blur
      backdropBlur: {
        xs: '2px',
      },
      // Custom box shadows
      boxShadow: {
        'glow-amber': '0 0 40px rgba(255, 183, 3, 0.3)',
        'glow-orange': '0 0 40px rgba(251, 133, 0, 0.3)',
        'glow-cyan': '0 0 40px rgba(142, 202, 230, 0.3)',
        'inner-glow': 'inset 0 0 60px rgba(255, 183, 3, 0.1)',
        '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 25px 60px -10px rgba(255, 183, 3, 0.2)',
      },
      // Custom background images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        'mesh-gradient': 'radial-gradient(at 40% 20%, #ffb703 0px, transparent 50%), radial-gradient(at 80% 0%, #fb8500 0px, transparent 50%), radial-gradient(at 0% 50%, #023047 0px, transparent 50%), radial-gradient(at 80% 50%, #8ecae6 0px, transparent 50%), radial-gradient(at 0% 100%, #219ebc 0px, transparent 50%)',
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
