import type { Config } from 'tailwindcss'
const {colors : defaultColors} = require("tailwindcss/defaultTheme")
const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(35, 77%, 62%)",
      "200" : "hsl(5, 85%, 63%)",
      "300" : "hsl(36, 100%, 99%)",
      "400" : "hsl(233, 8%, 79%)",
      "500" : "hsl(236, 13%, 42%)",
      "600" : "hsl(240, 100%, 5%)"
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
