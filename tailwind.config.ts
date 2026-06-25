import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dusk-in-the-desert meets a NOLA courtyard
        night: "#12231f", // deep teal-green ink
        moss: "#1c3a31",
        clay: "#c9683f", // coyote terracotta
        ember: "#e08552",
        sun: "#f2b347", // warm amber/gold
        pool: "#3fa9a0", // pool teal
        bone: "#f6efe2", // cream
        sand: "#e8dcc4",
        dusk: "#6b4f6b",
      },
      fontFamily: {
        script: ["var(--font-script)", "Sacramento", "cursive"],
        sans: ["var(--font-sans)", "Familjen Grotesk", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.28em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
