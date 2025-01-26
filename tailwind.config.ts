import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "type-text": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "drop-in": {
          "0%": { 
            opacity: "0",
            transform: "translateY(-50px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "unfold": {
          "0%": { 
            transform: "perspective(500px) rotateY(90deg)",
            opacity: "0"
          },
          "100%": { 
            transform: "perspective(500px) rotateY(0deg)",
            opacity: "1"
          }
        },
        "count-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },
        "heart-beat": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" }
        },
        "medal-drop": {
          "0%": { 
            transform: "translateY(-100%) rotate(0deg)",
            opacity: "0"
          },
          "50%": { 
            transform: "translateY(20%) rotate(180deg)",
            opacity: "0.5"
          },
          "100%": { 
            transform: "translateY(0) rotate(360deg)",
            opacity: "1"
          }
        },
        "button-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "type-text": "type-text 2s steps(40, end)",
        "drop-in": "drop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "unfold": "unfold 0.8s ease-out forwards",
        "count-up": "count-up 0.5s ease-out forwards",
        "heart-beat": "heart-beat 1.5s ease-in-out infinite",
        "medal-drop": "medal-drop 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "button-bounce": "button-bounce 2s infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;