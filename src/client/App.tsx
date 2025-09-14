import { matchRoutes } from 'react-router-dom';
import { PageData } from './type';
import { Layout } from './Layout';
import { routes } from 'redoc:route';
import siteData from 'redoc:site-data';

export function App() {
  return <Layout />;
}

export async function initPageData(routePath: string): Promise<PageData> {
  const matched = matchRoutes(routes, routePath);
  if (matched) {
    const moduleInfo = await matched[0].route.preload();

    return {
      siteData,
      pageType: moduleInfo.frontmatter?.pageType ?? 'doc',
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc,
      title: moduleInfo.title
    };
  }
  return {
    pageType: '404',
    siteData,
    pagePath: routePath,
    frontmatter: {},
    title: '404'
  };
}
