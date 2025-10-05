import { UserConfig } from '../config/type';
import { ComponentType } from 'react';

export type PageType = 'home' | 'doc' | 'custom' | '404';

export interface Header {
  id: string;
  text: string;
  depth: number;
}

export interface Feature {
  icon: string;
  title: string;
  details: string;
}

export interface Hero {
  name?: string;
  text?: string;
  tagline?: string;
  image?: {
    src?: string;
    alt?: string;
  };
  actions?: {
    text?: string;
    link?: string;
    theme?: 'default' | 'primary' | 'dark';
    type?: 'link' | 'fill';
  }[];
}

export interface FrontMatter {
  title?: string;
  description?: string;
  pageType?: PageType;
  sidebar?: boolean;
  outline?: boolean;

  features?: Feature[];
  hero?: Hero;
}

export interface PageData {
  siteData: UserConfig;
  pagePath: string;
  frontmatter: FrontMatter;
  pageType: PageType;
  toc?: Header[];
  title?: string;
}

export interface PageModule {
  default: ComponentType;
  frontmatter?: FrontMatter;
  [key: string]: unknown;
  toc?: Header[];
  title?: string;
}

export type PropsWithIsland = {
  __island?: boolean;
};
