import { useLocation } from 'react-router-dom';
import { Sidebar } from './aside';
import { usePageData } from '../hooks';
import { Routers } from '@server';
import { DocFooter } from './footer';
import { Toc } from './toc';
import React from 'react';

import './index.scss';

export function DocLayout() {
  const { siteData, toc } = usePageData();
  const sidebarData = siteData.siteData.themeConfig?.sidebar || {};
  const { pathname } = useLocation();
  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });

  console.log('doc: ', sidebarData, matchedSidebarKey, pathname);
  const matchedSidebar = sidebarData[matchedSidebarKey] || [];

  return (
    <div className="predoc-doc">
      <div className="predoc-doc-aside">
        <Sidebar sidebarData={matchedSidebar} pathname={pathname} />
      </div>
      <div className="predoc-doc-container">
        <div className="predoc-doc-content">
          <div className="predoc-doc-render markdown-body">
            {/* <Outline /> */}
          </div>
          <div className="predoc-doc-footer">
            <DocFooter />
          </div>
        </div>

        <div className="predoc-doc-toc">
          <Toc headers={toc} __island />
        </div>
      </div>
    </div>
  );
}
