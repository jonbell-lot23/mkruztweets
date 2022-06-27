module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  images: {
    domains: ["lot23.com"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
