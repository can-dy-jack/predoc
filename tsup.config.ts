import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: {
    index: './src/bin/index.ts',
    cli: './src/bin/cli.ts',
    dev: './src/bin/dev.ts',
  },
  bundle: true,
  splitting: true,
  minify: process.env.NODE_ENV === 'production',
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true,
});
