import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  define: {
    // Ensure environment variables are available at build time
    "import.meta.env.VERCEL_URL": JSON.stringify(process.env.VERCEL_URL),
  },
});
