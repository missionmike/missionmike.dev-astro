import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    updated: z.string().optional(),
    featuredImage: z.string().optional(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    updated: z.string().optional(),
    featuredImage: z.string().optional(),
    draft: z.boolean().optional(),
    gitHubUrl: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  posts,
  projects,
};
