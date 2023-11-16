import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "420px",
      tablet: "720px",
      pc: "1280px",
    },
    extend: {
      colors: {
        bg: "#fafafa",
      },
      zIndex: {
        full: "9999",
      },
      inset: {
        "-32px": "-32px",
        "-128px": "-128px",
      },
      rotate: {
        "-1": "-1deg",
      },
      minHeight: {
        "350": "280px",
      },
      height: {
        "0.3": "calc(100vw * 0.33)",
        mq: "calc(100vh * 11/12)",
        mq2: "calc(100vh * 5/6)",
      },

      width: {
        "520": "520px",
        "0.3": "calc(100vw * 0.3)",
        "720": "720px",
        mq: "calc(100vw * 11/12)",
        mq2: "calc(100vw * 5/6)",
      },
      maxWidth: {
        "520": "520px",
        "720": "720px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
