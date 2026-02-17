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
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Neon Cyberpunk Theme
        primary: {
          50: '#e0ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00d9ff',
          600: '#00a8cc',
          700: '#007799',
          800: '#005566',
          900: '#003366',
        },
        secondary: {
          50: '#ffe0f0',
          100: '#ffb3dd',
          200: '#ff80cc',
          300: '#ff4dbb',
          400: '#ff1aa9',
          500: '#ff1493',
          600: '#cc0056',
          700: '#990053',
          800: '#660052',
          900: '#330051',
        },
        accent: {
          50: '#fff0e0',
          100: '#ffdbcc',
          200: '#ffc299',
          300: '#ffaa66',
          400: '#ff9233',
          500: '#ff4081',
          600: '#ff0066',
          700: '#cc0052',
          800: '#99003e',
          900: '#66002a',
        },
        success: {
          500: '#00ff88',
        },
        background: '#0a0e27',
        foreground: '#ffffff',
        card: '#0f1629',
        border: '#1e293b',
        muted: '#64748b',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #00d9ff 0%, #0088cc 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #0f1629 100%)',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 20, 147, 0.3)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
