import { RouteItem, useRouters } from "@client";
import { useLocation } from "react-router-dom";

type Breads = {
  title: string;
  path: string;
  hasIndex: Boolean;
}

export function useBreadcrumb() {
  const routes = useRouters();
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter(item => item != '');

  function getTitle (item: RouteItem) {
    return item?.extra?.frontmatter?.title || item?.extra?.title || item.path;
  }

  const breads: Breads[] = [{
    title: "首页",
    path: '/',
    hasIndex: true
  }];
  let curList = routes;
  for (let path of paths) {
    for (let route of curList) {
      if (route.path === path) {
        breads.push({
          title: getTitle(route),
          path: '/' + route.fullPath,
          hasIndex: route.children && route.children.length > 0 && route.hasIndex,
        });
        curList = route.children;
        break;
      }
    }
  }

  return breads;
}