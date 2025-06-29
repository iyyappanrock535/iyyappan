import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/iyyappan-github.io/", // ✅ root path — not /iyyappan-github.io/
  server: {
    host: "::",
    port: 8080,
  },
  // assetsInclude: ["**/*.JPG"],
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
