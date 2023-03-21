import { defineConfig } from "tsup";

// TODO https://tsup.egoist.dev/#minify-output

const tsupConfig = defineConfig({
  entry: { "l2b-common": "src/index.ts" },
  // entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  splitting: false,
  treeshake: true,
  sourcemap: true,
  minify: true,
  clean: true,
  dts: true,
  outDir: "build",
  external: ["react"],
});

export default tsupConfig;
