import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/readings");

export interface ReadingDigest {
  slug: string;
  title: string;
  date: string;
  week: string;
  excerpt?: string;
  articleCount?: number;
  sourceCount?: number;
  tags?: string[];
  content: string;
}

export async function getReadingDigests(locale: string = 'zh-TW'): Promise<ReadingDigest[]> {
  try {
    const localeDir = path.join(contentDirectory, locale);
    const files = await fs.readdir(localeDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const digests = await Promise.all(
      mdxFiles.map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const digest = await getReadingDigest(slug, locale);
        return digest;
      })
    );

    // Filter out null digests and sort by date
    return digests
      .filter((digest): digest is ReadingDigest => digest !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error(`Error reading digests for locale ${locale}:`, error);
    return [];
  }
}

export async function getReadingDigest(slug: string, locale: string = 'zh-TW'): Promise<ReadingDigest | null> {
  try {
    const filePath = path.join(contentDirectory, locale, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      week: data.week || "",
      excerpt: data.excerpt,
      articleCount: data.articleCount,
      sourceCount: data.sourceCount,
      tags: data.tags,
      content,
    };
  } catch (error) {
    console.error(`Error reading digest ${slug} for locale ${locale}:`, error);
    return null;
  }
}
