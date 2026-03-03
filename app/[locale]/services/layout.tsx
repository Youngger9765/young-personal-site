import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  return {
    title: isZh ? '服務方案 | Young Tsai' : 'Services | Young Tsai',
    description: isZh
      ? 'AI 產品開發服務：快速原型 NT$15K-30K、4週 MVP NT$50K-100K、AI 策略顧問'
      : 'AI product services: Rapid Prototype, 4-week MVP, AI Strategy Consulting',
    openGraph: {
      title: isZh ? '服務方案' : 'Services',
      description: isZh ? 'AI 產品開發與顧問服務' : 'AI product development and consulting services',
    },
  };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
