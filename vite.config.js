import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@shared': '/src/shared',
      '@modules': '/src/modules',
      '@marketing': '/src/modules/marketing',
      '@config': '/src/config',
    },
  },
});
