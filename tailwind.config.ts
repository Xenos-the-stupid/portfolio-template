import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        green: "var(--green)",
        red: "var(--red)",
        pink: "var(--pink)",
        gray: "var(--gray)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
};
export default config;
