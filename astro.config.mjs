// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      rehypePlugins: [rehypeRaw],
      extendMarkdownConfig: true,
      smartypants: true,
    }),
  ],
});
