import { Metadata } from 'next';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '演講與活動' : 'Speaking & Events';
  const description = isZh
    ? 'AI 產品開發、UX 設計與教育科技演講。曾受邀 UserXper、聯發科、科技橘報、台大等單位分享。'
    : 'Speaking on AI product development, UX design, and EdTech. Featured at UserXper, MediaTek, TechOrange, NTU, and more.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${locale}/speaking`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/speaking`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/speaking`,
        en: `${SITE_URL}/en/speaking`,
      },
    },
  };
}

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
