import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main": '#00537a',
        "secondary": '#a8e8f9' ,
        "highlight": '#ffd35b' ,
        "main-dark" :'#013c58' ,
        "main-light" : '#A8E8f9' , 
        "income" : '#45dfb1' ,
        "income-light" : '#80ed99', 
        "whitesupremacist" : '#f2f2f2'
      },
    },
  },
  plugins: [],
} satisfies Config;
