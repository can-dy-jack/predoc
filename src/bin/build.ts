import { build as buildVite, InlineConfig } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constant';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import pluginReact from '@vitejs/plugin-react';
import { join } from 'path';
import { renderPage } from './renderPage';
import { RollupOutput } from 'rollup';
import { pathToFileURL } from 'url';

export async function build(root: string = process.cwd()) {
  const [clientResult, serverResult] = await bundle(root);

  const serverEntry = join(root, '.redoc', 'ssr.js');
  const { render } = await import(pathToFileURL(serverEntry).href);
  renderPage(render, root, clientResult);
}

async function bundle(root: string) {
  const resolveConfig = (type: 'client' | 'server'): InlineConfig => {
    const isServer = type === 'server';
    return {
      root,
      mode: 'production',
      plugins: [pluginReact()],
      build: {
        ssr: isServer,
        outDir: isServer ? '.redoc' : 'build',
        rollupOptions: {
          input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
          output: {
            format: isServer ? 'cjs' : 'esm',
          },
        },
      },
    };
  };

  console.log('Building client + server bundles...');

  try {
    const [clientResult, serverResult] = await Promise.all([
      buildVite(resolveConfig('client')),
      buildVite(resolveConfig('server')),
    ]);

    return [clientResult, serverResult] as [RollupOutput, RollupOutput];
  } catch (e) {}
}
