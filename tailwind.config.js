/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Legacy colors (kept for backward compatibility)
        'stage-dark': '#0f1115',
        'stage-gray': '#303842',
        'stage-blue': '#597b9c',
        'stage-gold': '#bfa36f',
        'stage-gold-hover': '#e6b46a',
        'stage-text': '#f0f0f0',
        // Theme-aware colors using CSS variables
        'theme': {
          'bg': {
            'primary': 'var(--color-bg-primary)',
            'secondary': 'var(--color-bg-secondary)',
            'tertiary': 'var(--color-bg-tertiary)',
          },
          'text': {
            'primary': 'var(--color-text-primary)',
            'secondary': 'var(--color-text-secondary)',
            'muted': 'var(--color-text-muted)',
          },
          'accent': {
            'primary': 'var(--color-accent-primary)',
            'secondary': 'var(--color-accent-secondary)',
            'hover': 'var(--color-accent-hover)',
          },
          'border': 'var(--color-border)',
          'border-light': 'var(--color-border-light)',
        },
      },
      fontFamily: {
        'arabic': ['Amiri', 'serif'],
        'latin': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'theme-transition': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'theme-transition': 'theme-transition 0.3s ease-out',
      },
    },
  },
  plugins: [],
};