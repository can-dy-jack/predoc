import { Header, PropsWithIsland } from '../../../type';
import { useRef, HTMLDivElement, useEffect } from 'react';
import { bindingAsideScroll, scrollToTarget } from './toc';
import React from 'react';
// import { useHeaders } from '../../logic/useHeaders';

interface AsideProps {
  headers: Header[];
}

export function Toc(props: AsideProps & PropsWithIsland) {
  const { headers = [] } = props;
  // 是否展示大纲栏
  const hasOutline = headers.length > 0;
  // 当前标题会进行高亮处理，我们会在这个标题前面加一个 marker 元素
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unbinding = bindingAsideScroll();
    return () => {
      unbinding();
    };
  }, []);

  const renderHeader = (header: Header) => {
    return (
      <li key={header.id}>
        <a
          href={`#${header.id}`}
          style={{
            paddingLeft: (header.depth - 2) * 12
          }}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(header.id);
            if (target) {
              scrollToTarget(target, false);
            }
          }
        }
        >
          {header.text}
        </a>
      </li>
    );
  };

  return (
    <div>
      <div>
        {hasOutline && (
          <div>
            <div
              ref={markerRef}
              id="aside-marker"
              ></div>
            <div>
              ON THIS PAGE
            </div>
            <nav>
              <ul>{headers.map(renderHeader)}</ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
