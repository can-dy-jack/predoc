import { HomeHero } from './hero';
import { HomeFeature } from './feature';
import { usePageData } from '../hooks';
import { Button } from '../components/button';

export function HomeLayout() {
  const pageData = usePageData();
  const frontmatter = pageData.frontmatter;

  return (
    <div>
      <HomeHero hero={frontmatter.hero} />
      <HomeFeature features={frontmatter.features} />
    </div>
  );
}
