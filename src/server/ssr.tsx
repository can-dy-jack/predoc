import { renderToString } from 'react-dom/server';
import { App } from './App';
import { StaticRouter } from 'react-router-dom';

export function render() {
  return renderToString(
    <StaticRouter location="/" >
      <App />
    </StaticRouter>
  );
}