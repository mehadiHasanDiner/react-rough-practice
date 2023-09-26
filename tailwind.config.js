/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b52426",

          secondary: "#6a07c6",

          accent: "#9eed90",

          neutral: "#161320",

          "base-100": "#363536",

          info: "#2086f3",

          success: "#18b98b",

          warning: "#c48a0e",

          error: "#f64655",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
