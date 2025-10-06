import { Header, PropsWithIsland } from '../../../type';
import { useRef, useEffect } from 'react';
import { bindingAsideScroll, scrollToTarget } from './toc';

interface AsideProps {
  headers: Header[];
}

export function Toc(props: AsideProps & PropsWithIsland) {
  const { headers = [] } = props;
  const hasOutline = headers.length > 0;
  const markerRef = useRef(null);

  useEffect(() => {
    const unbinding = bindingAsideScroll();
    return () => {
      unbinding();
    };
  }, []);

  const onClickItem = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      scrollToTarget(target, false);
    }
  }

  const renderHeader = (header: Header) => {
    return (
      <li
        key={header.id}
        className='predoc-toc-item'
        onClick={e => {
          onClickItem(header.id)
        }}
      >
        <a
          href={`#${header.id}`}
          style={{
            paddingLeft: (header.depth - 2) * 10 + 'px',
          }}
          onClick={e => {
            e.preventDefault();
            onClickItem(header.id)
          }}
          className='predoc-toc-link'
        >
          {header.text}
        </a>
      </li>
    );
  };

  return (
    <div className='predoc-toc-box' id='aside-container'>
      {hasOutline && (
        <div className='predoc-toc'>
          <div ref={markerRef} id="aside-marker"></div>
          <nav className='predoc-toc-nav'>
            <ul className='predoc-toc-list'>{headers.map(renderHeader)}</ul>
          </nav>
        </div>
      )}
    </div>
  );
}
