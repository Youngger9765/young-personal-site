import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  return {
    title: isZh ? '關於我 | Young Tsai' : 'About | Young Tsai',
    description: isZh
      ? '十年產品開發經驗的 AI 產品顧問，專精 FastAPI、Next.js、GCP'
      : 'AI Product Consultant with 10+ years of product development experience',
    openGraph: {
      title: isZh ? '關於 Young Tsai' : 'About Young Tsai',
      description: isZh ? 'AI 產品顧問 · 十年產品開發經驗' : 'AI Product Consultant · 10+ years experience',
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
