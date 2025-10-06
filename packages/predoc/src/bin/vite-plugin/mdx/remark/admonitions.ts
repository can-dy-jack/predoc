import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function remarkAdmonitionPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        // if (node.name !== 'note') return;

        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';

        data.hName = tagName;
        const prop = h(tagName, node.attributes || {}).properties;
        data.hProperties = {
          ...prop,
          class: ['admonition', 'admonition-' + (node.name || 'info'), node.attributes?.class]
        };

        // If a title property exists on the directive, prepend a div child
        // that will render as the admonition title. We use `data.hChildren`
        // so that hast/MDX renderer will pick up the explicit children.
        const titleText = prop?.title || node.attributes?.title || node.attributes?.label;
        if (titleText) {
          const titleString = String(titleText);
          // create a HAST element node for the title div
          const titleNode = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['admonition-title'] },
            children: [
              { type: 'text', value: titleString }
            ]
          } as any;

          node.children = node.children || [];
          node.children.unshift(titleNode);
        }
      }
    });
  };
}
