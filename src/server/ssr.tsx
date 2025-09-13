import { renderToString } from 'react-dom/server';
import { App } from './App';
import { StaticRouter } from 'react-router-dom';

export function render(pagePath: string) {
  return renderToString(
    <StaticRouter location={pagePath} >
      <App />
    </StaticRouter>
  );
}

export { routes } from 'redoc:route';
