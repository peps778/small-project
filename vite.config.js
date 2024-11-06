export default defineConfig({
  plugins: [react()],
  base: "/small-project/", // Adjust this depending on your deployment
  chunkSizeWarningLimit: 2000,
  build: {
    outDir: 'dist', // Make sure Vite outputs to dist
  },
});
