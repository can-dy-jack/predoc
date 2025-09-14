/// <reference types="vite/client" />

declare module 'redoc:site-data' {
  import type { SiteConfig } from 'config/type';

  const siteData: SiteConfig;
  export default siteData;
}

declare module 'redoc:route' {
  // import { RouteObject } from 'react-router-dom';
  import type { ReactElement } from 'react';
  import { PageModule } from '../client/type';
  interface RouteItem {
    path: string;
    element: ReactElement;
    filePath: string;
    preload: () => Promise<PageModule>;
  }

  const routes: RouteItem[];
  export { routes };
}
