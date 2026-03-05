import { Metadata } from 'next';
import StructuredData, { getServiceSchema } from '@/components/StructuredData';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '服務方案' : 'Services';
  const description = isZh
    ? 'AI 產品開發服務：1 週原型 Sprint、4 週 MVP 開發、AI 策略顧問、企業 AI 培訓與工作坊。'
    : 'AI product services: 1-week Prototype Sprint, 4-week MVP development, AI Strategy Consulting, and Corporate AI Training.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${locale}/services`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/services`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/services`,
        en: `${SITE_URL}/en/services`,
      },
    },
  };
}

export default async function ServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <StructuredData data={getServiceSchema(locale)} />
      {children}
    </>
  );
}
