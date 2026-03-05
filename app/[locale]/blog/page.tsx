import type { Metadata } from 'next';
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { getBlogPosts } from '@/lib/blog';
import ContactCTA from '@/components/ContactCTA';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '技術文章與洞察' : 'Insights & Articles';
  const description = isZh
    ? 'AI 產品開發、技術實戰與創業心得。分享 FastAPI、Next.js、GCP 雲端架構的實務經驗。'
    : 'Thoughts on AI product development, engineering, and building products that scale. Real-world experience with FastAPI, Next.js, and GCP.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${locale}/blog`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/blog`,
        en: `${SITE_URL}/en/blog`,
      },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-background">

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            {t('insights.title')}
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            {locale === 'zh-TW'
              ? 'AI 產品開發、技術實戰與創業心得'
              : 'Thoughts on AI product development, engineering, and building products that scale'}
          </p>
        </div>

        {/* Blog Posts */}
        {blogPosts.length > 0 ? (
          <div className="mb-16 space-y-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group block p-6 md:p-8 rounded-2xl bg-white border border-stone-100 hover:border-stone-200 shadow-soft hover:shadow-soft-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  {/* Date column */}
                  <div className="md:w-32 md:flex-shrink-0 mb-3 md:mb-0 md:pt-1">
                    <time className="text-sm text-stone-400 font-medium">
                      {new Date(post.date).toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Category + Reading Time */}
                    <div className="flex items-center gap-3 mb-3">
                      {post.category && (
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          {post.category}
                        </span>
                      )}
                      {post.readingTime && (
                        <span className="text-xs text-stone-400">{post.readingTime}</span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {post.description && (
                      <p className="text-stone-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {post.description}
                      </p>
                    )}

                    <div className="flex items-center gap-4">
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-stone-50 rounded text-xs text-stone-400 border border-stone-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="text-accent font-medium text-sm ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        {t('insights.readMore')} →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400">
            {locale === 'zh-TW' ? '文章即將推出，敬請期待！' : 'Articles coming soon!'}
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://calendly.com/young-tsai/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-soft hover:shadow-soft-md transition-all text-sm"
          >
            {t('projects.consultCta')} →
          </a>
        </div>
      </div>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
}
