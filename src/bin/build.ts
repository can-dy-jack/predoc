import { build as buildVite, InlineConfig } from 'vite';
import { CLIENT_ENTRY_PATH, CLIENT_OUTPUT, EXTERNALS, ROOT, SERVER_ENTRY_PATH } from './constant';
import { join } from 'path';
import { renderPage } from './renderPage';
import { RollupOutput } from 'rollup';
import { pathToFileURL } from 'url';
import { SiteConfig } from '../config/type';
import { createVitePlugin } from './vite-plugin';
import fs from 'fs-extra';

export async function build(root: string = process.cwd(), config: SiteConfig) {
  const [clientResult] = await bundle(root, config);

  const serverEntry = join(root, '.predoc', 'ssr.js');
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
        noExternal: ['react-router-dom', 'lodash-es'],
      },
      build: {
        ssr: isServer,
        outDir: isServer ? join(root, '.predoc') : join(root, CLIENT_OUTPUT),
        rollupOptions: {
          input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
          output: {
            format: 'esm', // isServer ? 'cjs' : 
          },
          external: EXTERNALS,
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

    const publicDir = join(root, 'public');
    if (fs.pathExistsSync(publicDir)) {
      await fs.copy(publicDir, join(root, CLIENT_OUTPUT));
    }

    await fs.copy(join(ROOT, 'vendors'), join(root, CLIENT_OUTPUT));
    return [clientResult, serverResult] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
