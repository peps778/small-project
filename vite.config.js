import { defineConfig } from "vite"; // Import defineConfig function
import react from "@vitejs/plugin-react"; // Import the react plugin

// Export Vite config using defineConfig
export default defineConfig({
  plugins: [react()],
  base: "/small-project/", // Adjust based on your deployment setup
  chunkSizeWarningLimit: 2000,
  build: {
    outDir: 'dist', // Ensure output is directed to 'dist' folder
  },
});
