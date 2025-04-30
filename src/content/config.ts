import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    updated: z.string().optional(),
    featuredImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts,
};
