import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React/', // Der Name deines Repositorys
  plugins: [react()],
});