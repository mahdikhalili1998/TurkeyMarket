import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        storyTimer: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        storyTimer: "storyTimer 5s linear forwards",
      },
      fontFamily: {
        fontiran: ["Yekan Bakh FaNum"],
      },
      colors: {
        "main-orange": "#FA5A2A",
        "main-dark": "#383A40",
        darkMoodBg: "#212121",
        "dark-bg": "#25272c",
        "text-color": "#4D4D4D",
        "bg-gray": "#F6F6F6",
        field6: "#F6F6F6",
        field3: "#3A3C42",
        field2: "#404248",
        "input-border": "#D8D8DA",

        "primry-White": "#FA5A2A",
      },
    },
  },
  plugins: [],
} satisfies Config;
