import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      'main': ['Oswald', 'sans-serif'],
      'sans': ['Quicksand', 'sans-serif']
    },
    extend: {
      colors: {
        'error': '#ef4444',
        'muted': '#cbd5e1',
        'primary': '#f59042',
        'primary-light': '#f9b886',
        'primary-dark': '#f2700d'
      },
    },
  },
  plugins: [],
} satisfies Config;
