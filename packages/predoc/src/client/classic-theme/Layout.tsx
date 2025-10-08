import './styles/vars.css';
import './styles/base.css';
import './styles/themes.css';
import './styles/markdown.css';
import './styles/markdown-extra.scss';

import './layout.scss';

import { usePageData } from './hooks';
import { Navigation } from './components';
import { HomeLayout } from './home';
import { DocLayout } from './doc';
import { NotFoundLayout } from './notFound';
import { Footer } from './common/footer/footer';

export function Layout() {
  const { pageType, title, siteData } = usePageData();

  console.log(1, title, siteData)

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
    <div className="predoc-layout">
      <Navigation />
      <div className="predoc-layout-content">
        {getContent()}
        <Footer />  
      </div>

      <title>{ title + " | " + siteData.title }</title>
      {/* <meta name="keywords" content="predoc, html" /> */}
    </div>
  );
}