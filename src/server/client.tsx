import { createRoot } from 'react-dom/client';
import { App } from './App';
import siteData from 'redoc:site-data';
import { BrowserRouter } from 'react-router-dom';

function render2Browser() {
  const root = document.getElementById('redoc-app');

  if (!root) {
    throw new Error('Root element not found');
  }

  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

render2Browser();