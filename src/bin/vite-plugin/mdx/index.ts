import { pluginMdxRollup } from './mdxRollup';

export function createPluginMdx() {
  return [pluginMdxRollup()];
}