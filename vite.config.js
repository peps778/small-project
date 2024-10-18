import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite config <3
export default defineConfig({
  plugins: [react()],
  base: "/small-project/",
});
