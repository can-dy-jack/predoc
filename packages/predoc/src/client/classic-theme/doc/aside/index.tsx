import { RouteItem } from '@client';
import { Link } from '../../components/link';
import { useCurrentSides } from '../../hooks';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

interface SidebarProps {
}

export function Sidebar(props: SidebarProps) {
  const currentSides = useCurrentSides();

  const sides = currentSides.length > 0 ? [
    {
      ...currentSides[0],
      children: [],
    },
    ...currentSides[0].children
  ] : [];

  return (
    <aside className="predoc-doc-aside-container">
      <nav>
        <GroupRender items={sides} />
      </nav>
    </aside>
  );
}

interface GroupRender {
  items: RouteItem[];
  level?: number;
}
function GroupRender(props: GroupRender) {
  const { items, level = 1 } = props;

  function getText(item: RouteItem) {
    return item.extra.frontmatter?.title || item.extra.title || item.path || "";
  }

  const [isOpen, setIsOpen] = useState(new Array(items.length).fill(true));

  const { pathname } = useLocation();

  function onToggle(item: RouteItem, index: number) {
    const newArr = [...isOpen.slice(0, index), !isOpen[index], ...isOpen.slice(index + 1)];
    setIsOpen(newArr);
  }

  function getChildHeight(items: RouteItem[]): number {
    let height = 0;
    for (let item of items) {
      height += 32;
      height += getChildHeight(item.children || []);
    }
    return height;
  }

  function hasIndex(item: RouteItem) {
    return (item.children && item.children.length > 0 && !item.hasIndex)
  }

  return (
    items?.map((item, pos) => (
      <section
        key={item.fullPath}
        className={`predoc-side predoc-side-level-${level}${item.fullPath === pathname ? ' active' : ''}`}
      >
        <div
          className={`predoc-side-title predoc-side-level-${level}-title${hasIndex(item) ?' predoc-link-no-index' : ''}${'/' + item.fullPath === pathname ? ' current' : ''}`}
          style={{
            marginLeft: level / 2 + 'rem'
          }}
          title={getText(item)}
        >
          {
            hasIndex(item) ? (
              <span 
                className='predoc-link predoc-link-menu'
                onClick={() => onToggle(item, pos)}
              >
                {getText(item)}
              </span>
            ) : (
              <Link isMenu isCurrent={'/' + item.fullPath === pathname} href={'/' + item.fullPath}>
                {getText(item)}
              </Link>
            )
          }
          {
            item.children && item.children.length > 0 && (
              <div className={`predoc-side-toggle ${isOpen[pos] ? 'open' : 'close'}`} onClick={() => onToggle(item, pos)}>
                <svg height="26" viewBox="0 0 48 48" width="26" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" fill='currentColor'></path>
                </svg>
              </div>
            )
          }
        </div>
        <div style={{
          transition: 'max-height 400ms linear',
          maxHeight: isOpen[pos] ? getChildHeight(item.children) + 'px' : 0,
          opacity: isOpen[pos] ? 1 : 0,
        }}>
          <GroupRender items={item.children} level={level + 1} />
        </div>
      </section>
    ))
  )
}
