import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve("./src/components"),
      "@assets": path.resolve("./src/assets"),
      "@data": path.resolve("./src/data"),
      "@hooks": path.resolve("./src/hooks"),
      "@utils": path.resolve("./src/utils"),
    },
  },
});
