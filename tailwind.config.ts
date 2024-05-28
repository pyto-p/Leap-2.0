import daisyui from "daisyui";
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#283F3B',
        'secondary': '#659B5E',
        'tertiary': '#1e2f2c',
      }
    },
  },
  plugins: [
    daisyui,
  ],
};
export default config;
