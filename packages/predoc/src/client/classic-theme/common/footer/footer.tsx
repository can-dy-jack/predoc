
import { usePageData } from '@client';
import './footer.scss';
import { Icon, Link } from '../../components';

export function Footer() {
  const pageData = usePageData();
  const footer = pageData?.siteData?.themeConfig?.footer;
  const links = footer?.links;

  return (
    <footer className="predoc-footer">
      <div className="predoc-footer-container">
        <div className="predoc-footer-links">
          {
            links?.map((group, index) => (
              <div key={index} className='predoc-footer-links-group'>
                <h2 className='predoc-footer-links-group-title'>{group.label}</h2>
                {
                  group?.items?.map((item, index2) => (
                    <div className='predoc-footer-link' key={index2}>
                      <Link href={item.href}>{item.label}</Link>
                      <Icon type='link' />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className="predoc-footer-copyright">
          <p dangerouslySetInnerHTML={{ __html: footer?.copyright || `© ${new Date().getFullYear()} Predoc, Inc` }}></p>
        </div>
      </div>
    </footer>
  );
}