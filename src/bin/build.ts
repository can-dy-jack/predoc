import { build as buildVite, InlineConfig } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constant';
import { join } from 'path';
import { renderPage } from './renderPage';
import { RollupOutput } from 'rollup';
import { pathToFileURL } from 'url';
import { SiteConfig } from '../config/type';
import { createVitePlugin } from './vite-plugin';

export async function build(root: string = process.cwd(), config: SiteConfig) {
  const [clientResult] = await bundle(root, config);

  console.log('clientResult.', clientResult);

  const serverEntry = join(root, '.redoc', 'ssr.js');
  const { render } = await import(pathToFileURL(serverEntry).href);
  renderPage(render, root, clientResult);
}

async function bundle(root: string, config: SiteConfig) {
  const resolveConfig = (type: 'client' | 'server'): InlineConfig => {
    const isServer = type === 'server';
    return {
      root,
      mode: 'production',
      plugins: createVitePlugin(config),
      ssr: {
        noExternal: ['react-router-dom'],
      },
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
  } catch (e) {
    console.error(e);
    throw e;
  }
}
