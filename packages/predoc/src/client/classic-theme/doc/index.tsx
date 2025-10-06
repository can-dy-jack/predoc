import { Sidebar } from './aside';
import { usePageData } from '../hooks';
import { DocFooter } from './footer';
import { Toc } from './toc';

import './index.scss';
import { Routers } from '@server';

export function DocLayout() {
  const { toc } = usePageData();

  return (
    <>
      <div className="predoc-doc">
        <div className="predoc-doc-aside">
          <Sidebar />
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

        <div className='predoc-back2top' onClick={() => {
          window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
          });
        }}>
          T
        </div>
      </div>
    </>
  );
}
