import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://young-tsai.vercel.app';
  const locales = ['en', 'zh-TW'];

  // Static pages with their priorities
  const staticPages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/speaking', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/workshops', priority: 0.8, changeFrequency: 'monthly' },
  ];

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

  // Speaking event slugs
  const speakingSlugs = [
    'userxper-ai-ux-2024',
    'teacher-ai-workshop',
    'mediatek-ai-day-2024',
    'meta-llm-taiwan-pitch',
    'ntu-cep-2024',
    'techorange-ai-agent-2025',
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
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

    // Speaking event detail pages
    for (const slug of speakingSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/speaking/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
