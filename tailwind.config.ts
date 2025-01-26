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
        "notification-slide": {
          "0%": { transform: "translateX(100%)" },
          "10%": { transform: "translateX(0)" },
          "90%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "route-dot": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(100px) translateY(-50px)" },
          "50%": { transform: "translateX(200px) translateY(0)" },
          "75%": { transform: "translateX(300px) translateY(50px)" },
          "100%": { transform: "translateX(400px) translateY(0)" },
        },
        "recommendation-pop": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "summary-rotate": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "health-pulse": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "achievement-unlock": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "50%": { transform: "translateY(10px)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "download-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "notification-slide": "notification-slide 5s ease-in-out",
        "route-dot": "route-dot 10s linear infinite",
        "recommendation-pop": "recommendation-pop 0.5s ease-out forwards",
        "summary-rotate": "summary-rotate 1s ease-in-out",
        "health-pulse": "health-pulse 2s infinite",
        "achievement-unlock": "achievement-unlock 0.8s ease-out forwards",
        "download-bounce": "download-bounce 2s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;