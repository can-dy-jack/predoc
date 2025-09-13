import pluginMdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkMDXFrontMatter from 'remark-mdx-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';
import { rehypePluginCodeLine } from './rehype/codeLine';
import rehypeShiki from '@shikijs/rehype';

export function pluginMdxRollup() {
  return [
    pluginMdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMDXFrontMatter],
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
              light: 'vitesse-dark',
              dark: 'vitesse-dark',
            }
          }
        ]
      ]
    })
  ];
}
