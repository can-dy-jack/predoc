import { useRoutes } from 'react-router-dom';
import { routes } from 'predoc:route';
import { ReactElement } from 'react';

export const Routers: ReactElement = () => {
  // console.log('routes', routes);
  const routeElement = useRoutes(routes);
  return routeElement;
};
