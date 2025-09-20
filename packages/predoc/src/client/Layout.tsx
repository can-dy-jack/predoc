import 'uno.css';
import './styles/vars.css';
import './styles/base.css';
import './styles/themes.css';

import { usePageData } from './hooks';
import { Navigation } from './components';
import { HomeLayout } from './home';
import { DocLayout } from './doc';
import { Helmet } from 'react-helmet-async';
import { NotFoundLayout } from './notFound';

export function Layout() {
  const pageData = usePageData();

  const { pageType, title } = pageData;

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
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navigation />
      <div>{getContent()}</div>
    </>
  );
}