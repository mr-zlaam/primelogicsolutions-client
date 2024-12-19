import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      animation: {
        "x-tofro": "x-tofro 2s ease-in-out infinite",
        "y-tofro": "y-tofro 2s ease-in-out infinite",
        heart: "heart 5s ease-in-out infinite" // Adjusted duration to make it smoother
      },
      keyframes: {
        "x-tofro": {
          "0%, 100%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" }
        },
        "y-tofro": {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" }
        },
        heart: {
          "0%, 100%": { transform: "scale(0.7)" },
          "50%": { transform: "scale(0.4)" } // Shrinks to 90% of its size
        }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")]
};
export default config;
