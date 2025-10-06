import { PageData } from '../type';
import { routes } from 'predoc:route';
import siteData from 'predoc:site-data';
import { matchRoutes } from 'react-router-dom';

export async function initPageData(routePath: string): Promise<PageData> {
  const matchedList = matchRoutes(routes, routePath);
  const matched = matchedList ? matchedList[matchedList.length - 1] : null;
  if (matched) {
    const moduleInfo = await matched.route.preload();

    return {
      siteData: siteData.siteData,
      pageType: moduleInfo.frontmatter?.pageType ?? 'doc',
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc,
      title: moduleInfo.title
    };
  }
  return {
    pageType: '404',
    siteData: siteData.siteData,
    pagePath: routePath,
    frontmatter: {},
    title: '404'
  };
}
