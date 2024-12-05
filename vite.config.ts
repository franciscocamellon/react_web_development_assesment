import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import liveReload from "vite-plugin-live-reload";

export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
    },
    plugins: [react(), liveReload("src/**/*.{js,jsx,ts,tsx}")],
  };
});