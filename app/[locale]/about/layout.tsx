import { Metadata } from 'next';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '關於我' : 'About';
  const description = isZh
    ? '十年產品開發經驗的 AI 產品顧問，專精 FastAPI、Next.js、GCP。曾任知名教育平台副技術長，帶領團隊打造服務百萬用戶的產品。'
    : 'AI Product Consultant with 10+ years of product development experience, specializing in FastAPI, Next.js, and GCP. Former Deputy CTO building products serving millions.';

  return {
    title,
    description,
    openGraph: {
      title: isZh ? '關於 Young Tsai' : 'About Young Tsai',
      description,
      type: 'profile',
      url: `${SITE_URL}/${locale}/about`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/about`,
        en: `${SITE_URL}/en/about`,
      },
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
