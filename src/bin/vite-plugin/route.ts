import { normalizePath, Plugin } from 'vite';
import fastGlob from 'fast-glob';
import { relative } from 'path';
import type { ReactElement } from 'react';

export const ROUTE_MODULE_ID = 'redoc:route';

export interface RouteItem {
  path: string;
  element: ReactElement;
  filePath: string;
}

interface pluginRouteOption {
  root: string;
  ssr: boolean;
}

export function pluginRoute(option: pluginRouteOption): Plugin {
  const route = new Route(option.root);

  return {
    name: ROUTE_MODULE_ID,
    async configResolved() {
      await route.init();
    },
    resolveId(id) {
      if (id === ROUTE_MODULE_ID) {
        return '\0' + ROUTE_MODULE_ID;
      }
    },
    load(id) {
      if (id === '\0' + ROUTE_MODULE_ID) {
        return route.generateRoutesCode(option.ssr || false);
      }
    }
  };
}

interface RouteMeta {
  routePath: string;
  absolutePath: string;
}

export class Route {
  #scanDir: string;
  #routeData: RouteMeta[] = [];
  constructor(scanDir: string) {
    this.#scanDir = scanDir;
  }

  async init() {
    const files = fastGlob
      .sync(['**/*.{jsx,tsx,md,mdx}'], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ['**/node_modules/**', '**/build/**', 'config.ts']
      })
      .sort();
    files.forEach((file) => {
      const fileRelativePath = normalizePath(relative(this.#scanDir, file));
      // 1. 路由路径
      const routePath = this.normalizeRoutePath(fileRelativePath);
      // 2. 文件绝对路径
      this.#routeData.push({
        routePath,
        absolutePath: file
      });
    });
  }
  getRouteMeta(): RouteMeta[] {
    return this.#routeData;
  }

  normalizeRoutePath(rawPath: string) {
    const routePath = rawPath.replace(/\.(.*)?$/, '').replace(/index$/, '');
    return routePath.startsWith('/') ? routePath : `/${routePath}`;
  }

  generateRoutesCode(ssr: boolean = false) {
    return `
import React from 'react';
${ssr ? '' : 'import loadable from \'@loadable/component\';'}
${this.#routeData
  .map((route, index) => {
    return ssr ? 
      `import Route${index} from '${route.absolutePath}';` :
      `const Route${index} = loadable(() => import('${route.absolutePath}'));`;
  })
  .join('\n')}
export const routes = [
${this.#routeData
  .map((route, index) => {
    return `{ path: '${route.routePath}', element: React.createElement(Route${index}) }`;
  })
  .join(',\n')}
];`;
  }
}
