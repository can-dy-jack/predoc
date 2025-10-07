import { useLocation } from 'react-router-dom';
import { useCurrentSides } from './useCurrentSides';
import { RouteItem } from '@client';

interface SideList {
  link: string;
  text: string;
}

export function usePrevNextPage() {
  const sides = useCurrentSides();
  const { pathname } = useLocation();

  const flattenTitles: SideList[] = [];

  function getText(item: RouteItem) {
    return item.extra.frontmatter?.title || item.extra.title || item.path || "";
  }

  function getTitles(list: RouteItem[]) {
    list.forEach(item => {
      flattenTitles.push({
        link: item.fullPath,
        text: getText(item)
      });
      if (item.children) {
        getTitles(item.children);
      }
    })
  }
  getTitles(sides);

  // console.log(1, pathname, flattenTitles);
  const pageIndex = flattenTitles.findIndex((item) => '/' + item.link === pathname);

  const prevPage = flattenTitles[pageIndex - 1] || null;
  const nextPage = flattenTitles[pageIndex + 1] || null;

  return {
    prevPage,
    nextPage
  };
}
