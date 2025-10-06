import { PageModule } from "@client";
import { createContext, useContext } from "react";

export interface RouteItem {
  path: string;
  fullPath: string;
  extra: PageModule;
  children: RouteItem[];
}

export type RouteList = RouteItem[];

export const RoutersContext = createContext<RouteList>([]);

export function useRouters(): RouteList {
  return useContext(RoutersContext);
}
