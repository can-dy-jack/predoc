import { useRouters } from "@client";
import { useLocation } from "react-router-dom";

export function useCurrentSides() {
  const { pathname } = useLocation();
  const routes = useRouters();

  const currentSides = routes.filter(route => {
    return route.fullPath === pathname.split('/')[1];
  });

  return currentSides;
}