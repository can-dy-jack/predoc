import { BuiltinTheme } from 'shiki';
import type { UserConfig as ViteConfig } from 'vite';

export interface SiteConfig {
  root: string;
  configPath: string;
  siteData: UserConfig;
}

export interface UserConfig {
  vite?: ViteConfig;
  themeConfig?: ThemeConfig;
  title?: string;
  description?: string;
}

export interface ThemeConfig {
  footer?: Footer;
  codeLine?: {
    theme?: BuiltinTheme | {
      light: BuiltinTheme;
      dark: BuiltinTheme;
    }
  }
}

export interface Footer {
  message?: string;
  copyright?: string;
}
