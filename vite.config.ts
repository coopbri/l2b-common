import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";
import dts from "vite-plugin-dts";

/**
 * Vite configuration.
 */
const viteConfig = defineConfig({
  build: {
    outDir: "build",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: pkg.name,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
});

export default viteConfig;
