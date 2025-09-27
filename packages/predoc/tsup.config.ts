import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: {
    index: './src/bin/index.ts',
    cli: './src/bin/cli.ts',
    dev: './src/bin/dev.ts',
  },
  bundle: true,
  splitting: true,
  minify: false,
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  shims: true,
});
