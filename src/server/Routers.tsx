import { useRoutes } from 'react-router-dom';
import { routes } from 'redoc:route';

export const Routers = () => {
  // console.log('routes', routes);
  const routeElement = useRoutes(routes);
  return routeElement;
};
