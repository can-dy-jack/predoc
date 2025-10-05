import { usePageData } from '../../hooks';

import './index.scss';
import { SwitchAppearance } from '../themeSwitch';
import React from 'react';
import { Icon } from '../icons';
import { Button } from '../button';
import { Link } from '../link';

export function Navigation() {
  const data = usePageData();
  const nav = data?.siteData?.siteData?.themeConfig?.nav || [];

  return (
    <header className="predoc-nav">
      <div className="nav-left">
        <img alt="logo - predoc" src="./ico.png" width="24" height="24" />
        <Link href='/'>
          predoc
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-menus">
          {nav.map((item) => (
            <div key={item.text}>
              <Link isMenu>
                {item.text}
              </Link>
            </div>
          ))}
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