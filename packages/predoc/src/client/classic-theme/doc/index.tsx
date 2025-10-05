import { useLocation } from 'react-router-dom';
import { Sidebar } from './aside';
import { usePageData } from '../hooks';
import { DocFooter } from './footer';
import { Toc } from './toc';
import React from 'react';

import './index.scss';
import { Routers } from '@server';

export function DocLayout() {
  const { siteData, toc } = usePageData();
  const sidebarData = siteData.themeConfig?.sidebar || {};
  const { pathname } = useLocation();
  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });

  console.log('doc: ', sidebarData, matchedSidebarKey, pathname);
  const matchedSidebar = sidebarData[matchedSidebarKey] || [];

  return (
    <>
      <div className="predoc-doc">
        <div className="predoc-doc-aside">
          <Sidebar sidebarData={matchedSidebar} pathname={pathname} />
        </div>
        <div className="predoc-doc-container">
          <div className="predoc-doc-content">
            <div className="predoc-doc-render markdown-body">
              <Routers />
            </div>
            <div className="predoc-doc-footer">
              <DocFooter />
            </div>
          </div>

          <div className="predoc-doc-toc">
            <div className="predoc-doc-toc-box"><Toc headers={toc} __island /></div>
          </div>
        </div>
      </div>
    </>
  );
}
