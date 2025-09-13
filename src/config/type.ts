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
  nav?: NavItemWithLink[];
  sidebar?: Sidebar;
  footer?: Footer;
}

export interface Footer {
  message?: string;
  copyright?: string;
}

export type NavItemWithLink = {
  text: string;
  link: string;
};

export interface Sidebar {
  [path: string]: SidebarGroup[];
}

export interface SidebarGroup {
  text?: string;
  items: SidebarItem[];
}

export type SidebarItem =
  | { text: string; link: string }
  | { text: string; link?: string; items: SidebarItem[] };
