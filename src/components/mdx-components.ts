import Aside from './blog/Aside.astro';
import CodeBlock from './blog/CodeBlock.astro';
import CodeHeader from './blog/CodeHeader.astro';
import HorizontalRule from './blog/HorizontalRule.astro';
import Image from './blog/Image.astro';
import type { MDXComponents } from 'mdx/types';

export const components: MDXComponents = {
  Aside,
  CodeHeader,
  CodeBlock,
  HorizontalRule,
  Image,
};
