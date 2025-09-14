import { cac } from 'cac';
import { resolve } from 'path';
import { build } from './build';

import { version } from '../../package.json';
import { resolveConfig } from '../config';
import { preview } from './preview';

const cli = cac('predoc').version(version).help();

cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    const createServer = async () => {
      const { createDevServer } = await import('./dev.js');
      const server = await createDevServer(root, async () => {
        await server.close();
        await createServer();
      });
      await server.listen();
      server.printUrls();
    };
    await createServer();
  
    // const r = root ? resolve(root) : process.cwd();
    // const serve = await createDevServer(r);
    // await serve.listen();
    // serve.printUrls();
    // console.log("Starting dev server...", r);
  });

cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    try {
      const r = resolve(root || process.cwd());

      const config = await resolveConfig(root, 'build', 'production');
      
      await build(r, config);
    } catch (e) {
      console.error(e);
    }
    // console.log("Building for production...", root);
  });

cli
  .command('preview [root]', 'preview production build')
  .option('--port <port>', 'port to use for preview server')
  .action(async (root: string, { port }: { port: number }) => {
    try {
      root = resolve(root);
      await preview(root, { port });
    } catch (e) {
      console.log(e);
    }
  });

cli.parse();
