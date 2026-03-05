import { Metadata } from 'next';

const SITE_URL = 'https://young-tsai.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  const title = isZh ? '企業 AI 培訓' : 'Corporate AI Training';
  const description = isZh
    ? '針對企業實際工作場景設計的 AI 工作坊：自動化流程、快速建站、AI 工具實戰、導入策略、醫療 AI。讓你的團隊真的會用 AI。'
    : 'Practical AI workshops for teams: workflow automation, website building, AI tools, adoption strategy, and healthcare AI. Get your team actually using AI.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${locale}/workshops`,
      siteName: 'Young Tsai',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/workshops`,
      languages: {
        'zh-TW': `${SITE_URL}/zh-TW/workshops`,
        en: `${SITE_URL}/en/workshops`,
      },
    },
  };
}

export default function WorkshopsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
