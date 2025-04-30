// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { rehypeExternalLinks } from './src/plugins/rehype-external-links';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      rehypePlugins: [rehypeRaw, rehypeExternalLinks],
      extendMarkdownConfig: true,
      smartypants: true,
    }),
  ],
});
