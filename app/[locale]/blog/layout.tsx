import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  return {
    title: isZh ? '部落格 | Young Tsai' : 'Blog | Young Tsai',
    description: isZh
      ? 'AI 產品開發、技術分享、實戰經驗文章'
      : 'Articles on AI product development, tech insights, and real-world experience',
    openGraph: {
      title: isZh ? '部落格' : 'Blog',
      description: isZh ? 'AI 產品開發實戰分享' : 'AI product development insights',
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
