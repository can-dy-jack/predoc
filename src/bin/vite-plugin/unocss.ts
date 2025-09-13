import pluginUnocss from 'unocss/vite';
import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind3, presetIcons } from 'unocss';

export function pluginViteUnocss() {
  const options: VitePluginConfig = {
    presets: [presetAttributify(), presetWind3({}), presetIcons()]
  };
  return pluginUnocss(options);
}
