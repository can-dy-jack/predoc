import fs from 'fs-extra';
import { dirname, join } from 'path';
import { RollupOutput } from 'rollup';
import { RouteObject } from 'react-router-dom';
import { RenderResult } from '../server/ssr';
import { buildIslands } from './buildIsland';
import { normalizeVendorFilename } from '../utils';
import { EXTERNALS } from './constant';

export async function renderPage(
  render: (url: string) => RenderResult,
  routes: RouteObject[],
  root: string,
  clientBundle: RollupOutput
) {
  
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  );
  console.log('Rendering page in server side...');
  return Promise.all(
    [
      ...routes,
      {
        path: '/404'
      }
    ].map(async (route) => {
      const routePath = route.path;

      const { appHtml, islandToPathMap, islandProps = [] } = await render(routePath);

      const styleAssets = clientBundle.output.filter(
        (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css')
      );
      const islandBundle = await buildIslands(root, islandToPathMap);
      const islandsCode = (islandBundle as RollupOutput).output[0].code;

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>Predoc</title>
            <meta name="description" content="xxx">
            ${styleAssets
            .map((item) => `<link rel="stylesheet" href="/${item.fileName}">`)
            .join('\n')}
          </head>
          <body>
          <script type="importmap">
            {
              "imports": {
                ${EXTERNALS.map(
                  (name) => `"${name}": "/${normalizeVendorFilename(name)}"`
                ).join(',')}
              }
            }
          </script>
            <script type="module">${islandsCode}</script>
            <div id="predoc-app">${appHtml}</div>
            <script type="module" src="/${clientChunk?.fileName}"></script>
            <script id="island-props">${JSON.stringify(islandProps)}</script>
          </body>
        </html>`.trim();
      const fileName = routePath.endsWith('/')
        ? `${routePath}index.html`
        : `${routePath}.html`;
      await fs.ensureDir(join(root, 'build', dirname(fileName)));
      await fs.writeFile(join(root, 'build', fileName), html);
    })
  );
}
