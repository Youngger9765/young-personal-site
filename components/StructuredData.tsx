interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getPersonSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Young Tsai',
    jobTitle: locale === 'zh-TW' ? 'AI 產品顧問' : 'AI Product Consultant',
    url: 'https://young-tsai.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/tzu-yang-tsai/',
      'https://github.com/Youngger9765',
      'https://medium.com/young-tsai',
    ],
    knowsAbout: ['AI Product Development', 'FastAPI', 'Next.js', 'Google Cloud Platform', 'Machine Learning'],
    worksFor: {
      '@type': 'Organization',
      name: locale === 'zh-TW' ? 'Young AI 產品顧問工作室' : 'Young AI Product Consulting',
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Young Tsai - AI Product Consultant',
    url: 'https://young-tsai.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://young-tsai.vercel.app/en/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBlogPostSchema(post: {
  title: string;
  description?: string;
  date: string;
  slug: string;
  author?: string;
  tags?: string[];
  locale?: string;
}) {
  const locale = post.locale || 'en';
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || '',
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Young Tsai',
      url: 'https://young-tsai.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Young Tsai',
      url: 'https://young-tsai.vercel.app',
    },
    url: `https://young-tsai.vercel.app/${locale}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://young-tsai.vercel.app/${locale}/blog/${post.slug}`,
    },
    ...(post.tags && post.tags.length > 0 && { keywords: post.tags.join(', ') }),
    inLanguage: locale === 'zh-TW' ? 'zh-TW' : 'en',
  };
}

export function getServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: locale === 'zh-TW' ? 'Young AI 產品顧問' : 'Young AI Product Consulting',
    description: locale === 'zh-TW'
      ? 'AI 產品開發、技術諮詢和顧問服務'
      : 'AI product development, technical consulting, and advisory services',
    url: 'https://young-tsai.vercel.app',
    priceRange: 'NT$8,000 - NT$100,000',
    areaServed: {
      '@type': 'Country',
      name: 'Taiwan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'zh-TW' ? '服務方案' : 'Service Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'zh-TW' ? '快速原型驗證' : 'Rapid Prototype',
            description: locale === 'zh-TW' ? '7 天內交付可演示原型' : 'Working prototype in 7 days',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
            description: locale === 'zh-TW' ? '完整可上線產品' : 'Full production-ready product',
          },
        },
      ],
    },
  };
}
