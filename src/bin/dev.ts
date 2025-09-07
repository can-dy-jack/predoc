import { createServer } from 'vite';
import { pluginHTML } from './vite-plugin/html';
// @ts-ignore
import pluginReact from '@vitejs/plugin-react';
import { resolveConfig } from '../config';

export async function createDevServer(root: string = process.cwd()) {
  const config = await resolveConfig(root, 'serve', 'development');
  console.log(config);
  return createServer({
    root,
    plugins: [pluginHTML(), pluginReact()],
  });
}
