import fs from 'fs-extra';
import { dirname, join } from 'path';
import { RollupOutput } from 'rollup';
import { RouteObject } from 'react-router-dom';

export async function renderPage(
  render: (url: string) => string,
  routes: RouteObject[],
  root: string,
  clientBundle: RollupOutput
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  );
  console.log('Rendering page in server side...');
  return Promise.all(
    routes.map(async (route) => {
      const routePath = route.path;
      const appHtml = render(routePath);
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>title</title>
            <meta name="description" content="xxx">
          </head>
          <body>
            <div id="root">${appHtml}</div>
            <script type="module" src="/${clientChunk?.fileName}"></script>
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
