import { PageData } from '../type';
import { createContext, useContext } from 'react';

export const PageDataContext = createContext<PageData>({} as PageData);

export const usePageData = () => {
  return useContext(PageDataContext) as PageData;
};
