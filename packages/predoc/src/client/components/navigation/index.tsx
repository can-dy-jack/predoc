import { NavItemWithLink } from 'config/type';
import { usePageData } from '../../hooks';

import styles from './index.module.scss';
import { SwitchAppearance } from '../themeSwitch';
import React from 'react';

export function MenuItem({ item }: { item: NavItemWithLink }) {
  return (
    <div className="text-sm font-medium mx-3">
      <a href={item.link} className={styles.link}>
        {item.text}
      </a>
    </div>
  );
}

export function Navigation() {
  const data = usePageData();
  const nav = data?.siteData?.siteData?.themeConfig?.nav || [];
  console.log(1, 'siteData', data);

  return (
    <header fixed="~" pos="t-0 l-0" w="full">
      <div
        flex="~"
        items="center"
        justify="between"
        className="px-8 h-14 divider-bottom"
      >
        <div>
          <a
            href="/"
            hover="opacity-60"
            className="w-full h-full text-1rem font-semibold flex items-center"
          >
            predoc
          </a>
        </div>
        <div flex="~">
          {/* 普通菜单 */}
          <div flex="~">
            {nav.map((item) => (
              <div key={item.text}>
                <MenuItem item={item} />
              </div>
            ))}
          </div>

          {/* 白天/夜间模式切换 */}
          <div before="menu-item-before" flex="~">
              <SwitchAppearance />
          </div>

          {/* 相关链接 */}
          <div className={styles.socialLinkIcon} ml="2" before="menu-item-before">
            <a href="/">
              <div className="i-carbon-logo-github w-5 h-5 fill-current"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}