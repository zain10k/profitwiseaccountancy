/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee-ltr': 'marquee-ltr 45s linear infinite',
        'marquee-vertical': 'marquee-vertical 45s linear infinite',
        'marquee-logos': 'marquee-logos 30s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'marquee-ltr': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'marquee-logos': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        "section-dark": "var(--section-dark)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'], // Assuming we might add a font, or just use Inter
      },
      fontSize: {
        xs: ['0.7rem', { lineHeight: '1rem' }],
        sm: ['0.8rem', { lineHeight: '1.25rem' }],
        base: ['0.875rem', { lineHeight: '1.5rem' }], // 14px instead of 16px
        lg: ['1rem', { lineHeight: '1.75rem' }], // 16px instead of 18px
        xl: ['1.125rem', { lineHeight: '1.75rem' }], // 18px instead of 20px
        '2xl': ['1.375rem', { lineHeight: '2rem' }], // 22px instead of 24px
        '3xl': ['1.625rem', { lineHeight: '2.25rem' }], // 26px instead of 30px
        '4xl': ['2rem', { lineHeight: '2.5rem' }], // 32px instead of 36px
        '5xl': ['2.5rem', { lineHeight: '1' }], // 40px instead of 48px
        '6xl': ['3rem', { lineHeight: '1' }], // 48px instead of 60px
        '7xl': ['3.5rem', { lineHeight: '1' }], // 56px instead of 72px
        '8xl': ['4rem', { lineHeight: '1' }], // 64px instead of 96px
        '9xl': ['4.5rem', { lineHeight: '1' }], // 72px instead of 128px
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
