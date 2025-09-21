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
      }
    });
  };
}
