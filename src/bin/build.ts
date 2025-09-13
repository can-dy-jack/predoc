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

  const serverEntry = join(root, '.redoc', 'ssr.js');
  const { render, routes } = await import(pathToFileURL(serverEntry).href);
  renderPage(render, routes, root, clientResult);
}

async function bundle(root: string, config: SiteConfig) {
  const resolveConfig = (type: 'client' | 'server'): InlineConfig => {
    const isServer = type === 'server';
    return {
      root,
      mode: 'production',
      plugins: createVitePlugin(config, undefined, isServer),
      ssr: {
        noExternal: ['react-router-dom'],
      },
      build: {
        ssr: isServer,
        outDir: isServer ? join(root, '.redoc') : join(root, 'build'),
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
