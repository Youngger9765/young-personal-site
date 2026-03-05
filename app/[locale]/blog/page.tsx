import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { getBlogPosts } from '@/lib/blog';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
            {t('insights.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh-TW'
              ? 'AI 產品開發、技術實戰與創業心得'
              : 'Thoughts on AI product development, engineering, and building products that scale'}
          </p>
        </div>

        {/* Blog Posts from MDX */}
        {blogPosts.length > 0 ? (
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group p-6 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-md transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{new Date(post.date).toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    {post.author && (
                      <>
                        <span>·</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="text-accent font-medium text-sm">
                    {t('insights.readMore')} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            {locale === 'zh-TW' ? '文章即將推出，敬請期待！' : 'Articles coming soon!'}
          </div>
        )}

        {/* CTA */}
        <div className="text-center space-y-4">
          <a
            href="https://calendly.com/young-tsai/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
          >
            {t('projects.consultCta')} →
          </a>
        </div>
      </div>
    </div>
  );
}
