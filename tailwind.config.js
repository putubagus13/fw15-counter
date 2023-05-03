/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes:[
      {
        defaultTheme: {
          primary: "#0ea5e9",
          secondary: "#e0f2fe",
        }
      }
    ]
  },
  plugins: [
    require("daisyui")
  ],
}

