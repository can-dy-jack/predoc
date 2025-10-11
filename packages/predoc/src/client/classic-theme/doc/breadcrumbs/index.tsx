import { useBreadcrumb } from "../../hooks";

import './index.scss';

export function Breadcrumbs() {
  const breads = useBreadcrumb();

  return (
    <ul className="breadcrumbs" aria-label="页面路径列表">
      {breads?.map((bread, index) => (
        <li className="breadcrumbs-item" key={bread.path}>
          {
            index > 0 ? (
              <span className="breadcrumbs-item-hr">
                <svg width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.1" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5 6L11 12L5 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            ) : (<></>)
          }
          {
            (bread.hasIndex && index !== (breads.length - 1)) ? (
              <a href={bread.path} className="breadcrumbs-link" title={bread.title}>
                {
                  bread.path == '/' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.1" fill="none" xmlns="http://www.w3.org/2000/svg" color="currenColor">
                      <path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  ) : (
                    <span>{bread.title}</span>
                  )
                }
              </a>
            ) : (
              <span className="breadcrumbs-item-text" title={bread.title}>{bread.title}</span>
            )
          }
        </li>
      ))}
    </ul>
  )
}
