import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { getBlogPosts } from '@/lib/blog';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  const blogPosts = await getBlogPosts();

  // Medium articles (keeping as fallback/additional content)
  const mediumArticles = [
    {
      title: t('insights.article1.title'),
      excerpt: t('insights.article1.excerpt'),
      date: t('insights.article1.date'),
      readTime: t('insights.article1.readTime'),
    },
    {
      title: t('insights.article2.title'),
      excerpt: t('insights.article2.excerpt'),
      date: t('insights.article2.date'),
      readTime: t('insights.article2.readTime'),
    },
    {
      title: t('insights.article3.title'),
      excerpt: t('insights.article3.excerpt'),
      date: t('insights.article3.date'),
      readTime: t('insights.article3.readTime'),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
            {t('insights.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on AI product development, engineering leadership, and building products that scale
          </p>
        </div>

        {/* Blog Posts from MDX */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">最新文章</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{new Date(post.date).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    {post.author && (
                      <>
                        <span>•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-blue transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/50 rounded text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-coral-orange font-medium group-hover:gap-3 transition-all">
                    閱讀全文
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Medium Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Medium 精選</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mediumArticles.map((article, index) => (
              <a
                key={index}
                href="https://medium.com/young-tsai"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-coral-orange font-medium group-hover:gap-3 transition-all">
                  {t('insights.readMore')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All on Medium CTA */}
        <div className="text-center space-y-4">
          <a
            href="https://medium.com/young-tsai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-blue text-white rounded-lg hover:bg-slate-blue/90 transition-colors font-semibold shadow-lg hover:shadow-xl group"
          >
            {t('insights.viewAll')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <div>
            <a
              href="https://calendly.com/young-tsai/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-blue font-semibold hover:underline"
            >
              {t('projects.consultCta')}
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
