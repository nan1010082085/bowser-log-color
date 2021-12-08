import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './es/index.js'),
      formats: ['umd'],
      name: 'index',
      fileName: (format: any) => `index.${format}.js`
    },
    rollupOptions: {
      // external: ['vue']
    }
  },
  plugins: []
});
