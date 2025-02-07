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
      fontFamily: {
        fontiran: ["Yekan Bakh FaNum"],
      },
      colors: {
        "main-orange": "#FA5A2A",
        "main-dark": "#383A40",
        darkMoodBg: "#212121",
        "dark-bg": "#25272c",
        "dark-bg2": "#212121",
        "text-color": "#4D4D4D",
        "border-color": "#E4E4E4",
        "bg-gray": "#F6F6F6",
        field6: "#F6F6F6",
        field3: "#3A3C42",
        field2: "#404248",
        "input-border": "#D8D8DA",
        strokColor: "#B5B5B5",
        "primry-White": "#FA5A2A",
      },
      screens: {
        "330": "330px",
        "380": "380px",
        "400": "400px",
        "500": "500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
