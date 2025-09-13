import { SiteConfig } from 'config/type';
import { pluginConfig } from './config';
import { pluginHTML } from './html';
import { pluginRoute } from './route';
// @ts-expect-error I known what I'm doing
import pluginReact from '@vitejs/plugin-react';
import { createPluginMdx } from './mdx';
import { pluginViteUnocss } from './unocss';

export function createVitePlugin(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR: boolean = false
) {
  return [
    pluginViteUnocss(),
    pluginHTML(),
    pluginReact({
      jsxRuntime: 'automatic',
      // reactRefreshHost: 'http://localhost:3000',
    }),
    pluginConfig(config, restartServer),
    pluginRoute({ root: config.root, ssr: isSSR }),
    createPluginMdx(),
  ];
}