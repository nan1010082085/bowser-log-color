import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'log',
      fileName: (format: any) => `log.${format}.js`
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: []
});
