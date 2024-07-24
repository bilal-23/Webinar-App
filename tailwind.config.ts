import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "blue-btn": "0px 8px 20px -8px #0E51F1",
        light: "0px 20px 46px -24px rgba(14, 16, 19, 0.12)",
      },
      colors: {
        light: {
          accent: {
            black: "#0E1013",
            blue: "#0E51F1",
            green: "#088761",
            pink: "#E72174",
            purple: "#741DE3",
            red: "#D14040",
            "red-pastel": "#F9E8E8",
            teal: "#08A79E",
            yellow: "#FFB023",
          },
          background: {
            0: "#F2F4F8",
            1: "#FFFFFF",
            3: "#D5DBE4",
          },
          border: {
            0: "#E3E7EC",
          },
          text: {
            0: "#0E1013",
            1: "#2E333B",
            2: "#444952",
            3: "#FFFFFF",
            placeholder: "#636973",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
