import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),  // для пути к папке pages
      '@shared': path.resolve(__dirname, 'src/shared'),  // для пути к папке shared
      '@widgets': path.resolve(__dirname, 'src/widgets'), // для пути к папке widgets
      '@features': path.resolve(__dirname, 'src/features'), // для пути к папке features
      '@atoms': path.resolve(__dirname, 'src/atoms'), // для пути к папке atoms
    },
  },
})
