import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#080b1f",
        ink: "#11142d",
        mana: "#53d6ff",
        ruby: "#ff4f7b",
        royal: "#7157ff",
        gold: "#ffd166",
        parchment: "#fff4c2"
      },
      boxShadow: {
        pixel: "0 0 0 4px #11142d, 0 0 0 8px #f8fafc, 10px 10px 0 0 rgba(0,0,0,0.55)",
        glow: "0 0 18px rgba(255, 209, 102, 0.45)"
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "var(--font-jp)", "sans-serif"],
        body: ["var(--font-jp)", "system-ui", "sans-serif"]
      },
      animation: {
        "answer-pop": "answer-pop 220ms ease-out",
        twinkle: "twinkle 1.8s ease-in-out infinite"
      },
      keyframes: {
        "answer-pop": {
          "0%": { transform: "scale(0.98)" },
          "70%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" }
        },
        twinkle: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
