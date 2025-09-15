import { useRoutes } from 'react-router-dom';
import { routes } from 'predoc:route';

export const Routers = () => {
  const routeElement = useRoutes(routes);
  return routeElement;
};
