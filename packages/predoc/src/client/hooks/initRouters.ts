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
          const curPath = paths.slice(0, i + 1).join("/");
          const idx1 = routes.findIndex(item => item.path === '/' + curPath + '/');
          if (idx1 === -1 && i < paths.length - 1) {
            // 找不到 index
            const newItem = {
              path: p,
              fullPath: paths.slice(0, i + 1).join('/'),
              children: [],
              hasIndex: false,
              extra: {
                default: () => []
              }
            };
            cur.push(newItem);
            cur = newItem.children;
          } else {
            const matchedList = matchRoutes(routes, '/' + curPath);
            const matched = matchedList
              ? matchedList[matchedList.length - 1]
              : null;
            
            const moduleInfo = await matched.route.preload();

            const newItem = {
              path: p,
              fullPath: paths.slice(0, i + 1).join('/'),
              children: [],
              extra: moduleInfo || {},
              hasIndex: true,
            };
            cur.push(newItem);
            cur = newItem.children;
          }
        } else {
          cur = cur[idx].children;
        }
      }
    }
    return list;
  };

  return await generateList();
}
