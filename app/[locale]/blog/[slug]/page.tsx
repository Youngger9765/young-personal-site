import type { Metadata } from 'next';
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import { getTranslations } from "next-intl/server";
import StructuredData, { getBlogPostSchema } from "@/components/StructuredData";

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  const isZh = locale === 'zh-TW';
  const url = `${SITE_URL}/${locale}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description || '',
      type: 'article',
      locale: isZh ? 'zh_TW' : 'en_US',
      url,
      siteName: 'Young Tsai',
      publishedTime: post.date,
      authors: [post.author || 'Young Tsai'],
      tags: post.tags,
      images: [
        {
          url: '/images/young.jpg',
          width: 800,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || '',
      images: ['/images/young.jpg'],
    },
    alternates: {
      canonical: url,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/blog/${slug}`,
        en: `${SITE_URL}/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const post = await getBlogPost(slug);
  const t = await getTranslations();

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'zh-TW' ? 'zh-TW' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={getBlogPostSchema({ ...post, locale })} />
      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 pt-32 pb-10">
        {/* Category + Reading Time */}
        <div className="flex items-center gap-3 mb-6">
          {post.category && (
            <span className="px-3 py-1 bg-amber-50 text-accent text-sm font-semibold rounded-full border border-amber-200">
              {post.category}
            </span>
          )}
          {post.readingTime && (
            <span className="text-sm text-gray-400">
              {post.readingTime}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Description */}
        {post.description && (
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            {post.description}
          </p>
        )}

        {/* Meta: Author + Date */}
        <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center text-white font-bold text-sm">
            {post.author ? post.author.charAt(0).toUpperCase() : 'Y'}
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-800">
              {post.author || 'Young'}
            </div>
            <time className="text-sm text-gray-400">{formattedDate}</time>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none
          prose-headings:text-slate-900
          prose-p:text-gray-700 prose-p:leading-[1.85]
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-800
          prose-blockquote:border-l-accent prose-blockquote:bg-amber-50/50 prose-blockquote:text-gray-600
          prose-code:text-slate-800 prose-code:bg-gray-100 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#0d1117] prose-pre:border-0 prose-pre:rounded-xl
          prose-img:rounded-xl prose-img:shadow-soft
          prose-hr:border-gray-200
        ">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeHighlight,
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                ],
              },
            }}
          />
        </div>
      </article>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 pb-10">
          <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-gray-50 text-gray-500 rounded-lg text-sm border border-gray-100 hover:border-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-gray-200">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-slate-800 font-medium transition-colors text-sm"
          >
            <span className="text-lg">←</span> {t('insights.title')}
          </Link>
          <a
            href="https://calendly.com/young-tsai/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-soft hover:shadow-soft-md transition-all text-sm"
          >
            {t('projects.consultCta')} →
          </a>
        </div>
      </footer>
    </div>
  );
}
