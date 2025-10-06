import { Plugin } from 'vite';
import { SiteConfig } from '../../config/type';
import { join, relative } from 'path';
import { ROOT } from '../constant';
import { pathExists } from 'fs-extra';
import sirv from 'sirv';

export const SITE_DATA_ID = 'predoc:site-data';

export function pluginConfig(config: SiteConfig, restartServer: () => Promise<void>): Plugin {
  return {
    name: 'predoc:config',
    resolveId(source) {
      if (source === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config)}`;
      }
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath];
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file));

      if (include(ctx.file)) {
        console.log(
          `\n${relative(config.root, ctx.file)} changed, restarting server...`
        );
        // 重启 Dev Server
        await restartServer();
      }
    },
    config() {
      return {
        root: ROOT,
        resolve: {
          alias: {
            '@server': join(ROOT, 'src', 'server', 'index.ts'),
            '@client': join(ROOT, 'src', 'client', 'index.ts'),
          }
        },
        css: {
          modules: {
            localsConvention: 'camelCaseOnly',
          }
        }
      };
    },
    configureServer(server) {
      const publicDir = join(config.root, 'public');
      if (pathExists(publicDir)) {
        server.middlewares.use(sirv(publicDir));
      }
    }
  };
}
