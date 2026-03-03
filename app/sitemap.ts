import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://young-tsai.vercel.app';
  const locales = ['en', 'zh-TW'];

  // Static pages
  const staticPages = ['', '/about', '/projects', '/services', '/speaking', '/blog'];

  // Get blog post slugs
  const blogDir = path.join(process.cwd(), 'content/blog');
  let blogSlugs: string[] = [];
  try {
    blogSlugs = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''));
  } catch {
    // content/blog may not exist in build
  }

  // Project slugs
  const projectSlugs = ['med-vision', 'xian', 'career-creator', 'jutor', 'cutor', 'ai-square', 'duotopia', 'vaitor'];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }

    // Blog posts
    for (const slug of blogSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }

    // Project detail pages
    for (const slug of projectSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
