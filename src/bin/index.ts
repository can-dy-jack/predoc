import { cac } from 'cac';
import { resolve } from 'path';
import { createDevServer } from './dev';
import { build } from './build';

import { version } from '../../package.json';

const cli = cac('redoc').version(version).help();

cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    const r = root ? resolve(root) : process.cwd();
    const serve = await createDevServer(r);
    await serve.listen();
    serve.printUrls();
    // console.log("Starting dev server...", r);
  });

cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    try {
      const r = resolve(root || process.cwd());

      await build(r);
    } catch (e) {
      console.error(e);
    }
    // console.log("Building for production...", root);
  });

cli.parse();
