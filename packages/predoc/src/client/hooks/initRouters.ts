import { routes } from 'predoc:route';
import { matchRoutes } from 'react-router-dom';
import { RouteList } from './useRouters';

export async function initRouters() {
  const generateList = async () => {
    const list: RouteList = [];
    for (const item of routes) {
      if (item.path === '/' || !item.path) {
        continue;
      }

      const paths = (item.path.split('/') || []).filter((item) => item !== '');
      let cur = list;

      for (let i = 0; i < paths.length; i++) {
        const p = paths[i];
        const idx = cur.findIndex((item2) => item2.path == p);
        if (idx === -1) {
          const matchedList = matchRoutes(routes, item.path);
          const matched = matchedList
            ? matchedList[matchedList.length - 1]
            : null;
          const moduleInfo = await matched.route.preload();
          const newItem = {
            path: p,
            fullPath: paths.slice(0, i + 1).join('/'),
            children: [],
            extra: moduleInfo || {}
          };
          cur.push(newItem);
          cur = newItem.children;
        } else {
          cur = cur[idx].children;
        }
      }
    }
    return list;
  };
  return await generateList();
}
