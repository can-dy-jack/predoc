import { usePrevNextPage } from '../../hooks/usePrevNextPage';
import React from 'react';

export function DocFooter() {
  const { prevPage, nextPage } = usePrevNextPage();

  return (
    <div>
      <div>
        <div>
          {prevPage && (
            <a href={prevPage.link}>
              <span>上一页</span>
              <span>{prevPage.text}</span>
            </a>
          )}
        </div>
        <div>
          {nextPage && (
            <a
              href={nextPage.link}
            >
              <span>下一页</span>
              <span >{nextPage.text}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
