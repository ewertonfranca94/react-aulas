/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ajuste de acordo com a estrutura do seu projeto
    './pages/**/*.{js,ts,jsx,tsx}', // Inclui as pastas onde você pode estar usando o Tailwind (ajuste conforme necessário)
    './components/**/*.{js,ts,jsx,tsx}', // Inclui pastas de componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
