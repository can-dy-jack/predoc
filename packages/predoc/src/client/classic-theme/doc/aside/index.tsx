import { RouteItem, useRouters } from '@client';
import { Link } from '../../components/link';
import { useLocation } from 'react-router-dom';
import { children } from 'hastscript/lib/jsx-classic';

interface SidebarProps {
}

export function Sidebar(props: SidebarProps) {
  // FIXME + base
  const { pathname } = useLocation();
  const routes = useRouters();

  const currentSides = routes.filter(route => {
    return route.fullPath === pathname.split('/')[1];
  });
  // console.log(
  //   1, pathname, routes, currentSides
  // )
  const sides = currentSides.length > 0 ? [
    {
      ...currentSides[0],
      children: [],
    },
    ...currentSides[0].children
  ] : [];

  function getText(item: RouteItem) {
    return item.extra.frontmatter?.title || item.extra.title || item.path || "";
  }

  const renderGroup = (items: RouteItem[], level: number = 1) => {
    return (
      items?.map(item => (
        <section 
          key={item.fullPath} 
          className={`predoc-side predoc-side-level-${level}${item.fullPath === pathname ? ' active' : ''}`}
        >
          <div 
            className={`predoc-side-title predoc-side-level-${level}-title`}           
            style={{
              marginLeft: level / 2 + 'rem'
            }}
          >
            <Link isMenu isCurrent={'/' + item.fullPath === pathname} href={'/' + item.fullPath}>
              { getText(item) }
            </Link>
          </div>
          { renderGroup(item.children, level + 1) }
        </section>
      ))
    );
  };

  return (
    <aside className="predoc-doc-aside-container">
      <nav>{renderGroup(sides)}</nav>
    </aside>
  );
}
