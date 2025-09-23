import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: {
    index: './src/index.ts',
  },
  bundle: true,
  splitting: true,
  minify: true,
  outDir: 'dist',
  format: 'esm',
  dts: true,
  shims: true,
});
