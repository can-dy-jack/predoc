import { HomeHero } from './hero';
import { HomeFeature } from './feature';
import { usePageData } from '../hooks';

export function HomeLayout() {
  const pageData = usePageData();
  const frontmatter = pageData.frontmatter;

  return (
    <div>
      <HomeHero hero={frontmatter.hero} __island />
      <HomeFeature features={frontmatter.features} />
    </div>
  );
}
