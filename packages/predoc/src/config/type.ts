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
  },
  math?: Record<string, string>;
}

export interface Footer {
  copyright?: string;
  links?: FooterLinkGroup[];
}

export interface FooterLinkGroup {
  label: string;
  items: FooterLinkItem[];
}
export interface FooterLinkItem {
  href: string;
  label: string;
}
