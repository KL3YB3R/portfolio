/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        portafolio: "url('/src/assets/img/redes.jpg')",
        banner: "url('/src/assets/img/images.jpg')",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
