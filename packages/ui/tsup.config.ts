import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["index.ts"],
  banner: {
    js: "'use client'",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react"],
  injectStyle: true,
  ...options,
}));
