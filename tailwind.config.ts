import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A31212", // approximate hero red – later match Figma exactly
        secondary: "#F9F5F0",
        dark: "#1A1A1A",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1120px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
