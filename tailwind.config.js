/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{{html,js,jsx,ts,tsx,vue,astro}"],
  theme: {
    extend: {
      transitionProperty: {
        "background-position": "background-position",
      },
      gridTemplateColumns: {
        // 6 column grid
        bento: "repeat(6, minmax(0, 1fr))",
      },
      gridRow: {
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
      },
      gridColumn: {
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("prettier-plugin-tailwindcss"),
    require("@material-tailwind/html/utils/withMT"),
    require("@tailwindcss/deprecation-warnings"),
  ],
};
