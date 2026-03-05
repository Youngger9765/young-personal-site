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

  const articleUrl = `${SITE_URL}/${locale}/blog/${slug}`;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <StructuredData data={getBlogPostSchema({ ...post, locale })} />

      {/* Article Header - centered, narrow */}
      <header className="max-w-2xl mx-auto px-6 pt-32 pb-8">
        {/* Category + Reading time - small, subtle */}
        <div className="flex items-center gap-2 mb-6 text-sm text-stone-400">
          {post.category && (
            <span className="uppercase tracking-widest font-medium text-accent">
              {post.category}
            </span>
          )}
          {post.category && post.readingTime && <span>·</span>}
          {post.readingTime && <span>{post.readingTime}</span>}
        </div>

        {/* Title - big serif */}
        <h1 className="font-serif text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold text-stone-900 leading-[1.15] mb-6">
          {post.title}
        </h1>

        {/* Description/subtitle - lighter */}
        {post.description && (
          <p className="text-xl text-stone-500 leading-relaxed mb-8">
            {post.description}
          </p>
        )}

        {/* Author line - clean */}
        <div className="flex items-center gap-3 py-6 border-y border-stone-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center text-white font-bold text-sm">
            {post.author ? post.author.charAt(0).toUpperCase() : 'Y'}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-stone-800">
              {post.author || 'Young Tsai'}
            </span>
            <time className="text-sm text-stone-400">{formattedDate}</time>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-2xl mx-auto px-6 pb-12">
        <div className="prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-stone-900
          prose-h2:text-[1.75rem] prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-[1.375rem] prose-h3:mt-10 prose-h3:mb-3
          prose-p:text-stone-700 prose-p:leading-[1.9] prose-p:text-[1.0625rem]
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-stone-800
          prose-blockquote:border-l-accent prose-blockquote:bg-amber-50/50 prose-blockquote:text-stone-600 prose-blockquote:not-italic
          prose-code:text-stone-800 prose-code:bg-stone-100 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#0d1117] prose-pre:border-0 prose-pre:rounded-xl
          prose-img:rounded-xl prose-img:shadow-soft
          prose-hr:border-stone-200
          prose-li:text-stone-700 prose-li:leading-[1.85]
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

      {/* Share Bar */}
      <div className="max-w-2xl mx-auto px-6 pb-8">
        <div className="flex items-center gap-3 py-6 border-y border-stone-200">
          <span className="text-sm text-stone-400 mr-2">Share</span>
          {/* LinkedIn share */}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:border-accent hover:text-accent transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          {/* X (Twitter) share */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:border-accent hover:text-accent transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X
          </a>
        </div>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="max-w-2xl mx-auto px-6 pb-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-stone-50 text-stone-500 rounded-full text-sm border border-stone-100 hover:border-accent/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer nav */}
      <footer className="max-w-2xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-stone-200">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 font-medium transition-colors text-sm"
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
