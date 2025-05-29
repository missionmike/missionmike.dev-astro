import fs from 'fs';
import { getAllFiles } from './files';
import matter from 'gray-matter';
import path from 'path';

export interface Project {
  title: string;
  date: string;
  summary: string;
  path: string;
  tags: string[];
  featuredImage?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  order?: number;
}

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

  if (!fs.existsSync(projectsDirectory)) {
    console.error(`Projects directory not found: ${projectsDirectory}`);
    return [];
  }

  const filePaths = getAllFiles(projectsDirectory).filter((file) => file.endsWith('.mdx'));

  const allProjectsData = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const relativePath = path.relative(projectsDirectory, filePath);
    const id = relativePath.replace(/\.mdx$/, '');

    return {
      id,
      path: `/project/${id}`,
      title: data.title || '',
      summary: data.summary || content.split('\n')[0],
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      featuredImage: data.featuredImage || undefined,
      featured: data.featured || false,
      githubUrl: data.gitHubUrl || data.githubUrl || undefined, // Handle both cases
      order: data.order || 0,
      liveUrl: data.liveUrl || undefined,
    } as Project;
  });

  const sortedProjects = allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  return sortedProjects;
}

export function getFeaturedProjects(): Project[] {
  const projects = getAllProjects();

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return featuredProjects;
}

export function getAllProjectTags(): string[] {
  const tags = new Set<string>();
  getAllProjects().forEach((project) => {
    project.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
