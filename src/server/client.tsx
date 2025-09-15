import { createRoot, hydrateRoot } from 'react-dom/client';
import { ComponentType } from 'react';
import { App, initPageData } from '../client/App';
// import siteData from 'predoc:site-data';
import { BrowserRouter } from 'react-router-dom';
import { PageDataContext } from '../client';

declare global {
    interface Window {
    ISLANDS: Record<string, ComponentType<unknown>>;
    ISLAND_PROPS: unknown[];
  }
}

async function render2Browser() {
  const root = document.getElementById('predoc-app');

  if (!root) {
    throw new Error('Root element not found');
  }

  // import.meta?.env?.DEV
  if (process.env.NODE_ENV == 'development') {
    // 初始化 PageData
    const pageData = await initPageData(window.location.pathname);
    createRoot(root).render(
        <PageDataContext.Provider value={pageData}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PageDataContext.Provider>
    );
  } else {
    // 生产环境下的 Partial Hydration
    const islands = document.querySelectorAll('[__island]');
    if (islands.length === 0) {
      return;
    }
    for (const island of islands) {
      // Aside:0
      const [id, index] = island.getAttribute('__island').split(':');
      const Element = window.ISLANDS[id] as ComponentType<unknown>;
      hydrateRoot(island, <Element {...window.ISLAND_PROPS[index]} />);
    }
  }
}

render2Browser();