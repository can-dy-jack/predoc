import pluginMdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkMDXFrontMatter from 'remark-mdx-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';
import { rehypePluginCodeLine } from './rehype/codeLine';
import rehypeShiki from '@shikijs/rehype';
import { remarkPluginToc } from './remark/toc';
import { SiteConfig } from 'config/type';

export function pluginMdxRollup(config: SiteConfig) {
  const codeLineTheme = config.siteData.themeConfig.codeLine.theme;
  let lightTheme = '';
  let darkTheme = '';
  if (typeof codeLineTheme === 'string') {
    lightTheme = codeLineTheme || 'github-light';
    darkTheme = codeLineTheme || 'github-light';
  } else {
    lightTheme = codeLineTheme.light || 'github-light';
    darkTheme = codeLineTheme.dark || 'github-dark';
  }

  return [
    pluginMdx({
      remarkPlugins: [
        remarkGfm, 
        remarkFrontmatter, 
        remarkMDXFrontMatter,
        remarkPluginToc,
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              class: 'header-anchor'
            },
            content: {
              type: 'text',
              value: '#'
            }
          }
        ],
        rehypePluginCodeLine,
        [
          rehypeShiki, 
          {
            themes: {
              light: lightTheme,
              dark: darkTheme,
            }
          }
        ]
      ]
    })
  ];
}
