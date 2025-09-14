import { useLocation } from 'react-router-dom';
import { Sidebar } from './aside';
import { usePageData } from '../hooks';
import { Routers } from '@server';
import { DocFooter } from './footer';
import { Toc } from './toc';

export function DocLayout() {
  const { siteData, toc } = usePageData();
  const sidebarData = siteData.siteData.themeConfig?.sidebar || {};
  const { pathname } = useLocation();
  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });

  const matchedSidebar = sidebarData[matchedSidebarKey] || [];

  return (
    <div>
      <Sidebar sidebarData={matchedSidebar} pathname={pathname} />
      <div>
        <div>
          <div className="redoc-doc">
            <Routers />
          </div>
          <div>
            <DocFooter />
          </div>
        </div>
      </div>
      <div>
        <Toc headers={toc} __island />
      </div>
    </div>
  );
}
