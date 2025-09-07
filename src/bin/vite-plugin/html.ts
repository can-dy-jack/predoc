import { readFileSync } from 'fs';
import { Plugin } from 'vite';
import { CLIENT_ENTRY_PATH, HTML_PATH } from '../constant';

export function pluginHTML(): Plugin {
  return {
    name: 'redoc:html',
    apply: 'serve',
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFileSync(HTML_PATH, 'utf-8');

          try {
            html = await server.transformIndexHtml(req.url, html, req.originalUrl);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
          } catch (e) {
            next(e);
          }
        });
      };
    },
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: { type: 'module', src: `/@fs/${CLIENT_ENTRY_PATH}` },
            injectTo: 'body',
          }
        ]
      };
    }
  };
}
