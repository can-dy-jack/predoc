import { join } from 'path';

export const ROOT = join(__dirname, '..');
export const HTML_PATH = join(ROOT, 'index.html');
export const CLIENT_ENTRY_PATH = join(ROOT, 'src/server/client.tsx');
export const SERVER_ENTRY_PATH = join(ROOT, 'src/server/ssr.tsx');

export const MASK_SPLITTER = '!!ISLAND!!';

export const CLIENT_OUTPUT = 'build';

export const EXTERNALS = [
  'react',
  'react-dom',
  'react-dom/client',
  'react/jsx-runtime'
];
