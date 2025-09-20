import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';

export const rehypePluginCodeLine: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'pre' &&
        node.children?.[0]?.type === 'element' &&
        node.children[0].tagName === 'code' &&
        !node.properties?.isVisited
      ) {
        const codeNode = node.children[0];
        const codeClassName = codeNode.properties?.className?.toString() || '';
        // language-xxx
        const langMatch = codeClassName.match(/language-(\w+)/);
        const lang = langMatch ? langMatch[1] : '';
        const clonedNode: Element = {
          type: 'element',
          tagName: 'pre',
          children: node.children,
          properties: {
            isVisited: true
          }, // node.children[0].properties
        };

        // 修改原来的 pre 标签 -> div 标签
        node.tagName = 'div';
        node.properties = node.properties || {};
        node.properties.className = codeClassName;

        // 构造 div 标签的子元素
        node.children = [
          {
            type: 'element',
            tagName: 'span',
            properties: {
              className: 'lang'
            },
            children: [
              {
                type: 'text',
                value: lang
              }
            ]
          },
          clonedNode
        ];
      }
    });
  };
};
