import { useRoutes } from 'react-router-dom';
import { routes } from 'predoc:route';

export const Routers = () => {
  // console.log('routes', JSON.stringify(routes, null, 2));
  const routeElement = useRoutes(routes);
  return routeElement;
};
