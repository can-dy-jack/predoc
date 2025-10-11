import { visit } from 'unist-util-visit';

export type AdmonitionType = {
  type?: string[];
  title?: string;
};
export const admonitionTypes: Record<string, AdmonitionType> = {
  note: { title: '注意' },
  info: { title: '信息' },
  tip: { title: '提示' },
  summary: { title: '摘要' },
  tldr: { title: 'TL;DR' },
  success: { title: '成功' },
  faq: { title: '问题与反馈' },
  warning: { title: '警告' },
  caution: { title: '注意' },
  danger: { title: '危险' },
  err: { title: '错误' },
  bug: { title: 'Bug' },
  example: { title: '示例' },
  quote: { title: '引言' },
  cite: { title: '引证' }
};

export default function remarkAdmonitionPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        const data = node.data || (node.data = {});

        const type = node.name || 'note';
        const admonition = admonitionTypes[type] || {};
        const title = node.attributes.title || admonition.title || node.name;

        data.hName = 'div';
        data.hProperties = {
          className: `admonition admonition-${node.name.toLowerCase()}`
        };

        node.children.unshift({
          type: 'element',
          data: {
            hProperties: {
              className: 'admonition-title'
            }
          },
          children: [
            {
              type: 'text',
              value: title
            }
          ]
        });
      }
    });
  };
}
