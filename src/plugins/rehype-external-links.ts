import type { Root } from 'hast';
import { visit } from 'unist-util-visit';

export function rehypeExternalLinks() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties?.href) {
        const href = node.properties.href.toString();
        if (href.startsWith('http://') || href.startsWith('https://')) {
          node.properties.target = '_blank';
          node.properties.rel = ['noopener', 'noreferrer'];
        }
      }
    });
  };
}
