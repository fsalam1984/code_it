// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true,
//     proxy: {
//       '/graphql': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directory where the build files will be output
    sourcemap: false, // Disable source maps for production
     // Use terser for minification, you can also use 'esbuild'
    chunkSizeWarningLimit: 500, // Adjust chunk size warning limit as needed
  },
  server: {
    port: 3000, // Local development port
    open: true, // Open the browser on startup
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', // Development API proxy
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
