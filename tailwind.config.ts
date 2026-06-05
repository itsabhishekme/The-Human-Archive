import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",

        archive: {
          gold: "#fbbf24",
          amber: "#f59e0b",
          bronze: "#d97706",
        },

        zinc: {
          950: "#09090b",
        },
      },

      fontFamily: {
        display: [
          "Inter",
          "sans-serif",
        ],
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        archive:
          "0 25px 50px -12px rgba(251,191,36,0.15)",
      },

      backgroundImage: {
        "archive-gradient":
          "linear-gradient(135deg,#fbbf24 0%,#f59e0b 100%)",
      },

      animation: {
        float:
          "float 6s ease-in-out infinite",

        glow:
          "glow 4s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform:
              "translateY(0px)",
          },

          "50%": {
            transform:
              "translateY(-12px)",
          },
        },

        glow: {
          "0%,100%": {
            opacity: "0.5",
          },

          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;