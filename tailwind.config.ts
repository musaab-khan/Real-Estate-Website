import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      zoomIn: {
        '0%': { transform: 'scale(0.6)', opacity: '0.3' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      zoomOut: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '100%': { transform: 'scale(0)', opacity: '0.0' },
      },
    },
    animation: {
      zoomIn: 'zoomIn 1s ease-in-out forwards',
      zoomOut: 'zoomOut 1s ease-in-out forwards',
      fadeInScale: 'zoomIn 1s ease-in-out',
    },
    transitionDelay: {
      200: "200ms",
      400: "400ms",
      600: "600ms",
      800: "800ms",
    },
  },
  plugins: [],
} satisfies Config;
