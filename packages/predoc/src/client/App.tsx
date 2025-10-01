import { matchRoutes } from 'react-router-dom';
import { PageData } from './type';
import { Layout } from './Layout';
import { routes } from 'predoc:route';
import siteData from 'predoc:site-data';
import React from 'react';

export function App() {
  return <Layout />;
}

export async function initPageData(routePath: string): Promise<PageData> {
  const matchedList = matchRoutes(routes, routePath);
  const matched = matchedList ? matchedList[matchedList.length - 1] : null;
  if (matched) {
    const moduleInfo = await matched.route.preload();

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
