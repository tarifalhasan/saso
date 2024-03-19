import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        skin: {
          accent: "#FD813C",
          r3r3r3r3: "#0151AD",
          "gray-800": "#666",
          "gray-900": "#292929",
        },
      },
      fontFamily: {
        pilat: "var(--pilat-extended)",
        n27: "var(--n27)",
        geliat: "var(--geliat)",
      },
    },
  },
  plugins: [],
};
export default config;
