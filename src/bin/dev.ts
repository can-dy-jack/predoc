import { createServer } from 'vite';
import { pluginHTML } from './vite-plugin/html';
import { pluginConfig } from './vite-plugin/config';
// @ts-expect-error I known what I'm doing
import pluginReact from '@vitejs/plugin-react';
import { resolveConfig } from '../config';
import { ROOT } from './constant';
import { pluginRoute } from './vite-plugin/route';

export async function createDevServer(root: string = process.cwd(), restartServer: () => Promise<void>) {
  const config = await resolveConfig(root, 'serve', 'development');
  // console.log(config);
  return createServer({
    root: ROOT, // root
    plugins: [
      pluginHTML(),
      pluginReact(),
      pluginConfig(config, restartServer),
      pluginRoute({ root: config.root }),
    ],
    server: {
      port: 3000,
    },
  });
}
