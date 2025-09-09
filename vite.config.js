import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/projeto-pratico/', // exatamente igual ao nome do repositório no GitHub
})