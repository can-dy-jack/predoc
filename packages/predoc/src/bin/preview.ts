import handler from 'serve-handler';
import { createServer } from 'http';
import { resolve } from 'path';

const DEFAULT_PORT = 4173;

export async function preview(root: string, { port }: { port?: number }) {
  // const config = await resolveConfig(root, 'serve', 'production');
  const listenPort = port ?? DEFAULT_PORT;
  const outputDir = resolve(root, 'build');
  
  const server = createServer((request, response) => {
    return handler(request, response, {
      public: outputDir
    });
  });
  server.listen(listenPort, () => {
    console.log(`Running at http://localhost:${listenPort}`);
  });
}
