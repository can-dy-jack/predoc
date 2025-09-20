import pluginUnocss from 'unocss/vite';
import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind3, presetIcons } from 'unocss';

export function pluginViteUnocss() {
  const options: VitePluginConfig = {
    presets: [presetAttributify(), presetWind3({}), presetIcons()],
    rules: [
      [
        /^divider-(\w+)$/,
        ([, w]) => ({
          [`border-${w}`]: '1px solid var(--predoc-border-light)'
        })
      ],
      [
        'menu-item-before',
        {
          'margin-right': '12px',
          'margin-left': '12px',
          width: '1px',
          height: '24px',
          'background-color': '#ddd',
          content: '" "'
        }
      ]
    ]
  };
  return pluginUnocss(options);
}
