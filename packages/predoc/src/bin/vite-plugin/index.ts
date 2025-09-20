import { SiteConfig } from 'config/type';
import { pluginConfig } from './config';
import { pluginHTML } from './html';
import { pluginRoute } from './route';
// @ts-expect-error I known what I'm doing
import pluginReact from '@vitejs/plugin-react';
import { createPluginMdx } from './mdx';
import { join } from 'path';
import { ROOT } from '../constant';
import {babelPluginIsland} from './babel-plugin/island';
import EnvironmentPlugin from 'vite-plugin-environment';

export function createVitePlugin(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR: boolean = false
) {
  return [
    EnvironmentPlugin({
      NODE_ENV: isSSR ? 'development' : 'production',
    }),
    pluginHTML(),
    pluginReact({
      jsxRuntime: 'automatic',
      jsxImportSource: isSSR ?
        join(ROOT, 'src', 'server') :
        'react',
      babel: {
        plugins: [babelPluginIsland]
      }
    }),
    pluginConfig(config, restartServer),
    pluginRoute({ root: config.root, ssr: isSSR }),
    createPluginMdx(config),
  ];
}