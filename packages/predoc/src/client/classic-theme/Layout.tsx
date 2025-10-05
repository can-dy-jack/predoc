import './styles/vars.css';
import './styles/base.css';
import './styles/themes.css';
import './styles/markdown.css';
import './styles/markdown-extra.scss';

import { usePageData } from './hooks';
import { Navigation } from './components';
import { HomeLayout } from './home';
import { DocLayout } from './doc';
import { NotFoundLayout } from './notFound';
import React from 'react';
import { Routers } from '../../server/Routers';

export function Layout() {
  const pageData = usePageData();

  const { pageType } = pageData;

  console.log(1, pageData);

  const getContent = () => {
    if (pageType === 'home') {
      return < HomeLayout />;
    } else if (pageType === 'doc') {
      return <DocLayout />;
    } else {
      return <NotFoundLayout />;
    }
  };
  return (
    <>
      <Navigation />
      <div>{getContent()}</div>
      <Routers />
    </>
  );
}