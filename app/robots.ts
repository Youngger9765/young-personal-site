import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://young-tsai.vercel.app';

  // Block indexing on preview/non-production
  const isProduction = process.env.VERCEL_ENV === 'production' || !process.env.VERCEL_ENV;

  return {
    rules: [
      {
        userAgent: '*',
        allow: isProduction ? '/' : undefined,
        disallow: isProduction
            ? ['/api/', '/_next/', '/admin/', '/en/proposals/', '/zh-TW/proposals/']
            : '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
