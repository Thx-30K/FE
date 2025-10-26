import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 공용 변수/믹스인 파일을 여기에 등록
        // 모든 .scss 파일에서 @import 없이 $primary-color 등을 사용 가능
        additionalData: `
         @use "@/styles/_variables.scss" as *;
          @use "@/styles/_function.scss" as *;
        `,
      },
    },
  },
});
