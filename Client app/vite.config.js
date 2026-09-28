import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for User Management Client
// Configured to run on Port 3000 and support JSX inside .js files
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js}"
    })
  ],
  server: {
    port: 3000,
    strictPort: true
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  }
});
