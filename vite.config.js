import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // asegúrate de incluir tus archivos
    theme:{
      extend:{
        fontFamily: {
          myfont: ['MyFont', 'Arial']
        },
      },
    },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
