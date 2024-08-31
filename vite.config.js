import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/Mobile_Food_Facility_Permit.csv',
          dest: 'assets',
        },
      ],
    }),
  ],
  assetsInclude: ['**/*.csv'],
})
