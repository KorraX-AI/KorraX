import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Change to desired port
    historyApiFallback: true // Ensures client-side routing works
  },
});
