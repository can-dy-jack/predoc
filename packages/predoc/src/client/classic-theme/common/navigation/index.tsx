import './index.scss';
import { SwitchAppearance } from '../../components/themeSwitch';
import { Icon } from '../../components/icons';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { PropsWithIsland, RouteItem, usePageData, useRouters } from '@client';
import { useLocation } from 'react-router-dom';

export function Navigation() {
  const routers = useRouters();
  const pageData = usePageData();

  return (
    <header className="predoc-nav">
      <div className="nav-left">
        <img alt="logo - predoc" src="/ico.png" width="24" height="24" />
        <Link href='/'>
          { pageData?.siteData?.title }
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-menus">
          {routers.map((item) => <NavItem key={item.fullPath} item={item} />)}
        </div>

        <div className="nav-theme-toggle">
          <SwitchAppearance __island />
        </div>

        <div className="icon-link">
          <Button type="link" size='small' href='/'>
            <Icon type='github' size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}

interface NavItemProps {
  item: RouteItem;
}
function NavItem(props: NavItemProps & PropsWithIsland) {
  const { item } = props;
  const { extra } = item;

  const text = extra?.frontmatter?.title || extra.title || item.path;

  const { pathname } = useLocation();
  const isCur = pathname.split("/")[1] === item.path;

  return (
    <div>
      <Link isMenu href={'/' + item.fullPath} isCurrent={isCur}>
        {text}
      </Link>
    </div>
  )
}