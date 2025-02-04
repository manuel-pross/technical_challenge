import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/technical_challenge",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
