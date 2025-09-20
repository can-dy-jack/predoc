import { SiteConfig } from 'config/type';
import { pluginMdxRollup } from './mdxRollup';

export function createPluginMdx(config: SiteConfig) {
  return [pluginMdxRollup(config)];
}