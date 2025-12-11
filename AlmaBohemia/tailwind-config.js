// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#B88A7A",      /* Rosa terroso */
        secundario: "#F8F1ED",     /* Beige rosado */
        acento: "#D4A574",          /* Dorado melocotón */
        fondo: "#FFFBF7",          /* Blanco cálido */
        texto: "#3D2817",           /* Marrón oscuro */
      },
    },
  },
  plugins: [],
};
