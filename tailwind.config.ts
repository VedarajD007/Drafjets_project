import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          50: '#F8F8FA',
          100: '#E8E8ED',
          200: '#D1D1DB',
          300: '#9898A8',
          400: '#6B6B80',
          500: '#45455A',
          600: '#2D2D3F',
          700: '#1A1A2E',
          800: '#12121F',
          900: '#0A0A0F',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 40%, #12121F 100%)',
        'red-gradient': 'linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)',
        'red-glow': 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
        'red-dark': 'linear-gradient(135deg, #B91C1C 0%, #DC2626 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0F 0%, #1A1A2E 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
        'white-fade': 'linear-gradient(180deg, #FFFFFF 0%, #F8F8FA 100%)',
      },
      boxShadow: {
        'red': '0 4px 30px -5px rgba(220, 38, 38, 0.3)',
        'red-lg': '0 8px 40px -8px rgba(220, 38, 38, 0.4)',
        'red-xl': '0 16px 60px -12px rgba(220, 38, 38, 0.5)',
        'red-glow': '0 0 60px -10px rgba(239, 68, 68, 0.4)',
        'soft': '0 2px 20px -4px rgba(10, 10, 15, 0.06)',
        'soft-lg': '0 4px 30px -6px rgba(10, 10, 15, 0.1)',
        'glass': '0 8px 32px rgba(10, 10, 15, 0.08)',
        'elevated': '0 12px 40px -8px rgba(10, 10, 15, 0.12)',
        'card': '0 1px 4px rgba(10, 10, 15, 0.04), 0 4px 20px rgba(10, 10, 15, 0.06)',
        'card-hover': '0 8px 30px rgba(10, 10, 15, 0.1), 0 2px 8px rgba(10, 10, 15, 0.04)',
        'dark-card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'fade-left': 'fadeLeft 0.7s ease-out forwards',
        'fade-right': 'fadeRight 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-red': 'pulseRed 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-soft': 'bounceSoft 3s infinite',
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'border-flow': 'borderFlow 4s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(3deg)' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 20px rgba(220, 38, 38, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 20px rgba(220, 38, 38, 0.3)' },
          '100%': { textShadow: '0 0 40px rgba(220, 38, 38, 0.6)' },
        },
        borderFlow: {
          '0%, 100%': { borderColor: 'rgba(220, 38, 38, 0.3)' },
          '50%': { borderColor: 'rgba(220, 38, 38, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
