import { Metadata } from 'next';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '專案作品' : 'Projects';
  const description = isZh
    ? '精選 AI 產品開發專案：醫療 SDM 決策支援、長照 PDCA 智慧管理、教育科技 AI 學習平台。'
    : 'Featured AI product projects: Medical SDM decision support, Eldercare PDCA management, EdTech AI learning platforms.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${locale}/projects`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/projects`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/projects`,
        en: `${SITE_URL}/en/projects`,
      },
    },
  };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
