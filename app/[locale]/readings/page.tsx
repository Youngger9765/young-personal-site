import type { Metadata } from 'next';
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { getReadingDigests } from '@/lib/readings';
import ContactCTA from '@/components/ContactCTA';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '每週閱讀筆記' : 'Weekly Readings';
  const description = isZh
    ? '每週精選全球科技、AI、經濟情報，消化數百篇文章後的關鍵洞察。'
    : 'Weekly curated intelligence from global tech, AI, and economic sources. Key insights distilled from hundreds of articles.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${locale}/readings`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/readings`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/readings`,
        en: `${SITE_URL}/en/readings`,
      },
    },
  };
}

export default async function ReadingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  const digests = await getReadingDigests(locale);

  return (
    <div className="min-h-screen bg-background">

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            {t('readings.title')}
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            {t('readings.subtitle')}
          </p>
        </div>

        {/* Reading Digests */}
        {digests.length > 0 ? (
          <div className="mb-16 space-y-6">
            {digests.map((digest) => (
              <Link
                key={digest.slug}
                href={`/${locale}/readings/${digest.slug}`}
                className="group block p-6 md:p-8 rounded-2xl bg-white border border-stone-100 hover:border-stone-200 shadow-soft hover:shadow-soft-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  {/* Date + Week column */}
                  <div className="md:w-32 md:flex-shrink-0 mb-3 md:mb-0 md:pt-1">
                    <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent font-bold text-sm rounded-lg mb-2">
                      {digest.week.replace('2026-', '')}
                    </span>
                    <time className="block text-sm text-stone-400 font-medium">
                      {new Date(digest.date).toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Article count badge */}
                    <div className="flex items-center gap-3 mb-3">
                      {digest.articleCount && digest.sourceCount && (
                        <span className="text-xs text-stone-400">
                          {digest.articleCount} {t('readings.articles')} | {digest.sourceCount}+ {t('readings.sources')}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                      {digest.title}
                    </h3>

                    {digest.excerpt && (
                      <p className="text-stone-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {digest.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-4">
                      {digest.tags && digest.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {digest.tags.slice(0, 4).map((tag) => (
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
                        {t('readings.readMore')} →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400">
            {locale === 'zh-TW' ? '閱讀筆記即將推出，敬請期待！' : 'Reading digests coming soon!'}
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
