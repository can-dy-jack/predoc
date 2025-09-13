declare module 'redoc:site-data' {
  import type { UserConfig } from 'config/type';

  const siteData: UserConfig;
  export default siteData;
}

declare module 'redoc:route' {
  import { RouteObject } from 'react-router-dom';
  const routes: RouteObject[];
  export { routes };
}
