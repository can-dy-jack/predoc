import { usePrevNextPage } from '../../hooks/usePrevNextPage';

export function DocFooter() {
  const { prevPage, nextPage } = usePrevNextPage();

  return (
    <div className='predoc-doc-prev-next'>
      <div className='predoc-doc-prev'>
        {prevPage && (
          <a href={'/' + prevPage.link} className='predoc-doc-prev-link' title={prevPage.text}>
            <span className='predoc-doc-prev-tip'>上一页</span>
            <span className='predoc-doc-prev-title'>{prevPage.text}</span>
          </a>
        )}
      </div>
      <div className='predoc-doc-next'>
        {nextPage && (
          <a
            href={'/' + nextPage.link}
            className='predoc-doc-next-link'
            title={nextPage.text}
          >
            <span className='predoc-doc-next-tip'>下一页</span>
            <span className='predoc-doc-next-title'>{nextPage.text}</span>
          </a>
        )}
      </div>
    </div>
  );
}
