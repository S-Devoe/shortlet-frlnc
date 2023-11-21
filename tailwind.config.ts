import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
      },
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        white: "var(--white)",
        orange: "var(--orange)",
        gray1: "var(--gray1)",
        gray6: "var(--gray6)",
        black06: "var(--black06)",
        gray75: "var(--gray75)",
        gray10: "var(--gray10)",
        grayE7: "var(--grayE7)",
      },
    },
  },
  plugins: [],
};
export default config;
