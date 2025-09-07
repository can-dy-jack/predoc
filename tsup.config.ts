import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/bin/index.ts'],
  bundle: true,
  splitting: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true,
});
