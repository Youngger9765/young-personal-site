import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  return {
    title: isZh ? '專案作品 | Young Tsai' : 'Projects | Young Tsai',
    description: isZh
      ? '精選 AI 產品開發專案：醫療 SDM、長照 PDCA、教育科技'
      : 'Featured AI product projects: Medical SDM, Eldercare PDCA, EdTech',
    openGraph: {
      title: isZh ? '專案作品集' : 'Project Portfolio',
      description: isZh ? 'AI 產品開發實績' : 'AI product development portfolio',
    },
  };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
