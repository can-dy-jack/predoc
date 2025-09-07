import { join } from 'path';

export const ROOT = join(__dirname, '..');
export const HTML_PATH = join(ROOT, 'index.html');
export const CLIENT_ENTRY_PATH = join(ROOT, 'src/server/client.tsx');
export const SERVER_ENTRY_PATH = join(ROOT, 'src/server/ssr.tsx');
