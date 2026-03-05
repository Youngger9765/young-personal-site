import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh-TW';

  return {
    title: isZh ? '企業 AI 培訓 | Young Tsai' : 'Corporate AI Training | Young Tsai',
    description: isZh
      ? '針對企業實際工作場景設計的 AI 工作坊：自動化流程、快速建站、AI 工具實戰、導入策略、醫療 AI'
      : 'Practical AI workshops for teams: workflow automation, website building, AI tools, adoption strategy, healthcare AI',
    openGraph: {
      title: isZh ? '企業 AI 培訓' : 'Corporate AI Training',
      description: isZh
        ? '讓你的團隊真的會用 AI'
        : 'Get Your Team Actually Using AI',
    },
  };
}

export default function WorkshopsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
