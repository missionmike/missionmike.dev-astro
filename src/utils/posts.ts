import fs from 'fs';
import { getAllFiles } from './files';
import matter from 'gray-matter';
import path from 'path';

export interface Post {
  title: string;
  date: string;
  summary: string;
  path: string;
  tags?: string[];
  featuredImage?: string;
  featured?: boolean;
}

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const filePaths = getAllFiles(postsDirectory);

  const allPostsData = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const relativePath = path.relative(postsDirectory, filePath);
    const id = relativePath.replace(/\.mdx$/, '');

    return {
      id,
      path: `blog/${id}`,
      title: data.title || '',
      date: data.date || new Date().toISOString(),
      summary: data.summary || content.split('\n')[0],
      tags: data.tags || [],
      featuredImage: data.featuredImage || undefined,
      featured: data.featured || false,
    } as Post;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags || []);
  return [...new Set(tags)];
}
