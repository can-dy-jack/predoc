import { createServer } from 'vite';
import { createVitePlugin } from './vite-plugin';
import { resolveConfig } from '../config';
import { ROOT } from './constant';

export async function createDevServer(root: string = process.cwd(), restartServer: () => Promise<void>) {
  const config = await resolveConfig(root, 'serve', 'development');
  // console.log(config);
  return createServer({
    // root: ROOT, // root
    plugins: createVitePlugin(config, restartServer),
    server: {
      port: 3000,
      fs: {
        allow: [ROOT]
      }
    },
  });
}
