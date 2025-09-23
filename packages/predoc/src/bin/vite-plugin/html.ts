import { Plugin } from 'vite';
import { CLIENT_ENTRY_PATH } from '../constant';
import { generatePredocHTML } from '@predoc/html';

export function pluginHTML(): Plugin {
  return {
    name: 'predoc:html',
    apply: 'serve',
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          // let html = await readFileSync(HTML_PATH, 'utf-8');
          let html = generatePredocHTML();

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
