import { renderToString } from 'react-dom/server';
import { App, initPageData } from '../client/App';
import { StaticRouter } from 'react-router-dom';
import { PageDataContext } from '../client/hooks';
import { HelmetProvider } from 'react-helmet-async';

export interface RenderResult {
  appHtml: string;
  islandProps: unknown[];
  islandToPathMap: Record<string, string>;
}

export async function render(pagePath: string, helmetContext: object) {

  const pageData = await initPageData(pagePath);

  const { clearIslandData, data } = await import('./jsx-runtime');
  clearIslandData();

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <PageDataContext.Provider value={pageData}>
        <StaticRouter location={pagePath} >
          <App />
        </StaticRouter>
      </PageDataContext.Provider>
    </HelmetProvider>
  );

  const { islandProps, islandToPathMap } = data;
  return {
    appHtml,
    islandProps,
    islandToPathMap
  };
}

export { routes } from 'redoc:route';
