import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0', // Allow external access from any IP
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Use HTTPS port for HMR over tunnels
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
