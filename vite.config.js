import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/small-project/", // Adjust based on your deployment setup
  chunkSizeWarningLimit: 2000,
  build: {
    outDir: 'dist', 
  },
});
