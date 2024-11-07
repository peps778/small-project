import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/small-project/", // Adjust based on your deployment setup
  chunkSizeWarningLimit: 2000,
  build: {
    outDir: 'dist', // Ensure output is directed to 'dist' folder
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create custom chunks based on modules
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react'; // Separate React-related libraries
            if (id.includes('lodash')) return 'lodash'; // Separate lodash if used
            return 'vendor'; // Group remaining libraries
          }
        },
      },
    },
  },
});
