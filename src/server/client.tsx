import { createRoot } from 'react-dom/client';
import { App } from './App';

function render2Browser() {
  const root = document.getElementById('redoc-app');
  if (!root) {
    throw new Error('Root element not found');
  }

  createRoot(root).render(<App />);
}

render2Browser();