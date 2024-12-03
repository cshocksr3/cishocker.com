import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      cobaltblue: "hsl(var(--cobaltblue) / <alpha-value>)",
      burntorange: "hsl(var(--burntorange) / <alpha-value>)",
      softgray: "hsl(var(--softgray) / <alpha-value>)",
      slategray: "hsl(var(--slategray) / <alpha-value>)",
      offwhite: "hsl(var(--offwhite) / <alpha-value>)",
      emeraldgreen: "hsl(var(--emeraldgreen) / <alpha-value>)",
      goldenyellow: "hsl(var(--goldenyellow) / <alpha-value>)",
      crimsonred: "hsl(var(--crimsonred) / <alpha-value>)",
    },
    fontFamily: {
      lora: ["var(--main)", "serif"],
      poppins: ["var(--headings)", "sans-serif"],
      raleway: ["var(--aceent)", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
