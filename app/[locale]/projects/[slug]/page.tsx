"use client";

import * as React from 'react';
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import QuickConsultForm from '@/components/QuickConsultForm';

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const projectSlugs = [
  'med-vision',
  'xian',
  'career-creator',
  'duotopia',
  'ai-square',
  'vaitor',
  'jutor',
  'cutor'
];

const slugToKey: Record<string, string> = {
  'med-vision': 'medVision',
  'xian': 'xian',
  'career-creator': 'careerCreator',
  'duotopia': 'duotopia',
  'ai-square': 'aiSquare',
  'vaitor': 'vaitor',
  'jutor': 'jutor',
  'cutor': 'cutor'
};

const projectImages: Record<string, { src: string; alt: string }> = {
  'med-vision': { src: '/images/med-vision-hero.png', alt: 'Medical AI SDM Platform' },
  'xian': { src: '/images/xian-hero.png', alt: 'Long-term Care PDCA Management System' },
  'career-creator': { src: '/images/career-creator-hero.png', alt: 'Interactive Card Counseling System' },
  'duotopia': { src: '/images/duotopia-banner.jpg', alt: 'Duotopia - AI English Learning Platform' },
  'ai-square': { src: '/images/hourofai.jpeg', alt: 'AI Square - Hour of AI Program' },
  'vaitor': { src: '/images/vibe-coding.jpg', alt: 'Vaitor - AI Video Tutor' },
  'jutor': { src: '/images/jutor-hero.png', alt: 'Jutor - AI English Learning Platform' },
  'cutor': { src: '/images/cutor-hero.png', alt: 'Cutor - AI Writing Assistant' },
};

const projectLinks: Record<string, { url: string; labelZh: string; labelEn: string }> = {
  'ai-square': { url: 'https://ai-square.org/', labelZh: '查看官方網站', labelEn: 'Visit Official Website' },
  'duotopia': { url: 'https://duotopia.co/', labelZh: '查看作品', labelEn: 'Visit Project' },
  'jutor': { url: 'https://www.jutor.ai/', labelZh: '查看作品', labelEn: 'Visit Project' },
};

interface MediaItem {
  url: string;
  sourceZh: string;
  sourceEn: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  ctaZh?: string;
  ctaEn?: string;
}

const mediaCoverage: Record<string, MediaItem[]> = {
  'ai-square': [
    {
      url: 'https://tw.stock.yahoo.com/news/%E5%8F%B0%E7%81%A3hour-ai%E5%95%9F%E5%8B%95-%E5%9D%87-%E5%8F%B0%E7%A9%8D%E9%9B%BB%E6%94%9C%E6%89%8B%E6%8E%A8%E5%8B%95%E5%85%A8%E6%B0%91ai%E6%95%99%E8%82%B2-101702045.html',
      sourceZh: 'Yahoo 財經', sourceEn: 'Yahoo Finance',
      titleZh: '台灣Hour of AI啟動！知名教育平台、台積電攜手推動全民AI教育',
      titleEn: "Taiwan's Hour of AI Launches! Leading Education Platform and TSMC Join Forces for AI Education",
      excerptZh: '知名教育平台與台積電等企業攜手推動「1小時玩AI」計畫，讓全民都能參與 AI 教育...',
      excerptEn: "Leading Education Platform partners with TSMC to promote 'Hour of AI' initiative, making AI education accessible to everyone...",
    },
    {
      url: 'https://udn.com/news/story/6885/9161998',
      sourceZh: '聯合報', sourceEn: 'United Daily News',
      titleZh: '知名教育平台推『1小時玩AI』 企業相挺助學生入門',
      titleEn: "Leading Education Platform Launches 'Hour of AI' - Corporate Support Helps Students Get Started",
      excerptZh: '知名教育平台推出 AI 教育計畫，目標 25 萬參與者，獲微軟、Meta、台積電等企業支持...',
      excerptEn: 'Leading Education Platform launches AI education initiative targeting 250,000 participants, supported by Microsoft, Meta, TSMC...',
    },
  ],
  'jutor': [
    {
      url: 'https://flipedu.parenting.com.tw/article/009564',
      sourceZh: '親子天下翻轉教育', sourceEn: 'FlipEdu by CommonWealth Parenting',
      titleZh: 'Meta LLM應用於教育：知名教育平台 AI英文學習工具',
      titleEn: 'Meta LLM Applied to Education: Leading Education Platform AI English Learning Tool',
      excerptZh: '親子天下報導知名教育平台如何運用 Meta LLM 技術打造 AI 英文學習工具...',
      excerptEn: 'CommonWealth Parenting reports on how a leading education platform uses Meta LLM to build AI English learning tools...',
    },
    {
      url: 'https://vocus.cc/article/66e78933fd89780001ae952f',
      sourceZh: 'Vocus', sourceEn: 'Vocus',
      titleZh: 'Jutor AI 英語家教：結合 Meta Llama 的創新教育應用',
      titleEn: 'Jutor AI English Tutor: Innovative Educational Application with Meta Llama',
      excerptZh: '深入探討 Jutor 如何利用 Meta Llama 模型打造個人化 AI 英語學習體驗...',
      excerptEn: 'In-depth look at how Jutor leverages Meta Llama models to create personalized AI English learning experiences...',
    },
    {
      url: 'https://vocus.cc/article/642b69e5fd897800012b6fce',
      sourceZh: 'Vocus', sourceEn: 'Vocus',
      titleZh: 'AI 賦能教育：Jutor 的誕生與發展',
      titleEn: 'AI-Powered Education: The Birth and Development of Jutor',
      excerptZh: '從概念到實現，探索 Jutor AI 英語家教平台的發展歷程與技術創新...',
      excerptEn: 'From concept to implementation, explore the development journey and technological innovation of Jutor AI English tutoring platform...',
    },
  ],
  'vaitor': [
    {
      url: 'https://www.facebook.com/JunyiAcademy/posts/-ai-狐狸貓默默出現啦以平台上原有的課程影片-配合-ai-驅動的新功能-ai-狐狸貓-將逐漸進駐影片下方自動把影片轉化為文本打造師生各自專屬的功能讓自學力-x/852188293619317/',
      sourceZh: '知名教育平台', sourceEn: 'Leading Education Platform Foundation',
      titleZh: 'AI 狐狸貓功能發表',
      titleEn: 'AI Fox Cat Feature Launch',
      excerptZh: '以平台上原有的課程影片，配合 AI 驅動的新功能「AI 狐狸貓」，將逐漸進駐影片下方，自動把影片轉化為文本，打造師生各自專屬的功能...',
      excerptEn: 'Using existing course videos on the platform, combined with the AI-powered new feature "AI Fox Cat", which will gradually appear below videos, automatically converting videos into text...',
    },
    {
      url: 'https://sunnyteaching680228.blogspot.com/2024/04/ai.html',
      sourceZh: 'Sunny Teaching', sourceEn: 'Sunny Teaching',
      titleZh: 'AI 教學應用分享',
      titleEn: 'AI Teaching Application Sharing',
      excerptZh: '教學現場如何運用 AI 影片家教系統提升學習成效，實際應用案例與心得分享...',
      excerptEn: 'How to use AI video tutoring system in the classroom to enhance learning outcomes, practical application cases and experience sharing...',
    },
    {
      url: 'https://www.thsh.tp.edu.tw/uploads/1725321120011KwiQmzMv.pdf',
      sourceZh: '教育部推薦', sourceEn: 'Ministry of Education Recommended',
      titleZh: '教育部推薦 AI 教學工具',
      titleEn: 'Ministry of Education Recommended AI Teaching Tool',
      excerptZh: '獲教育部推薦之 AI 輔助教學工具，協助教師提升教學品質與學生學習成效...',
      excerptEn: 'Recommended by the Ministry of Education as an AI-assisted teaching tool to help teachers improve teaching quality and student learning outcomes...',
      ctaZh: '查看文件', ctaEn: 'View Document',
    },
  ],
  'cutor': [
    {
      url: 'https://flipedu.parenting.com.tw/article/010170',
      sourceZh: '親子天下翻轉教育', sourceEn: 'FlipEdu by CommonWealth Parenting',
      titleZh: '樂寫公益學習網獲「誠致程有威先生教育科技獎」金獎',
      titleEn: 'Happy Writing Charity Learning Network Wins Gold Award in Education Technology',
      excerptZh: '藉由平台內建 AI 功能，提供寫作靈感，學生可以輕鬆掌握文章架構，同時透過 AI 輔助批改，將圖片轉成文字，提供建議評語，可以大幅節省批閱負擔...',
      excerptEn: 'With built-in AI features, the platform provides writing inspiration, helping students easily grasp essay structure, while AI-assisted grading converts images to text and provides suggestion comments, significantly reducing grading workload...',
    },
    {
      url: 'https://flipedu.parenting.com.tw/teacher_resource/561',
      sourceZh: '親子天下翻轉教育', sourceEn: 'FlipEdu by CommonWealth Parenting',
      titleZh: 'AI 寫作助理教學應用資源',
      titleEn: 'AI Writing Assistant Teaching Resources',
      excerptZh: 'AI 寫作助理在教學現場的實際應用方式、教學資源與使用指南，協助教師運用 AI 技術提升寫作教學品質...',
      excerptEn: 'Practical application methods, teaching resources, and usage guides for AI writing assistants in the classroom, helping teachers use AI technology to improve writing instruction quality...',
      ctaZh: '查看資源', ctaEn: 'View Resources',
    },
  ],
};

// Summary section icons (inline SVG paths)
const summaryIcons: Record<string, string> = {
  problem: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z',
  solution: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  result: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  timeline: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
};

const hasDetailData = (key: string) =>
  ['duotopia', 'aiSquare', 'vaitor', 'jutor', 'cutor'].includes(key);

function getTechStack(slug: string): string[] {
  const techStacks: Record<string, string[]> = {
    'med-vision': ["FastAPI", "Next.js", "Vertex AI", "FHIR", "Base44"],
    'xian': ["Next.js 16", "React 19", "Voice AI", "PDCA"],
    'career-creator': ["Next.js 14", "FastAPI", "GCS", "WebSocket"],
    'duotopia': ["Next.js", "React", "OpenAI Whisper", "Speech Recognition", "PostgreSQL", "Redis"],
    'ai-square': ["Next.js 15", "React 19", "Vertex AI", "i18n (14 languages)", "TypeScript"],
    'vaitor': ["Next.js", "Claude AI", "Video Processing", "React", "TypeScript"],
    'jutor': ["Python", "FastAPI", "OpenAI", "Speech Recognition", "PostgreSQL"],
    'cutor': ["Next.js", "Claude AI", "GPT-4", "React", "TypeScript"],
  };
  return techStacks[slug] || [];
}

// ─── Reusable sub-components ────────────────────────────────────

function SummaryCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
      <div className="flex-shrink-0 mt-0.5">
        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</div>
        <p className="text-gray-800 text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function MediaCard({ item, locale }: { item: MediaItem; locale: string }) {
  const isZh = locale === 'zh-TW';
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl border border-gray-200 bg-white hover:border-accent/40 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-50 text-accent border border-amber-200">
          {isZh ? item.sourceZh : item.sourceEn}
        </span>
      </div>
      <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors leading-snug">
        {isZh ? item.titleZh : item.titleEn}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
        {isZh ? item.excerptZh : item.excerptEn}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-accent transition-colors">
        {item.ctaZh && isZh ? item.ctaZh : item.ctaEn && !isZh ? item.ctaEn : (isZh ? '閱讀完整報導' : 'Read Full Article')}
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}

// ─── Main component ─────────────────────────────────────────────

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [resolvedParams, setResolvedParams] = React.useState<{ slug: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  const { slug } = resolvedParams;

  if (!projectSlugs.includes(slug)) {
    notFound();
  }

  const projectKey = slugToKey[slug];
  const detailKey = `${projectKey}Detail`;
  const isDetailed = hasDetailData(projectKey);

  const project = {
    title: t(`${projectKey}.title`),
    subtitle: t(`${projectKey}.subtitle`),
    description: isDetailed
      ? t(`${detailKey}.description`)
      : t(`${projectKey}.description`),
    summary: {
      problem: t(`${projectKey}.problem`),
      solution: t(`${projectKey}.solution`),
      result: t(`${projectKey}.result`),
      timeline: t(`${projectKey}.timeline`),
    },
    features: isDetailed ? [
      t(`${detailKey}.feature1`),
      t(`${detailKey}.feature2`),
      t(`${detailKey}.feature3`),
      t(`${detailKey}.feature4`),
      t(`${detailKey}.feature5`),
    ] : [],
    results: isDetailed ? [
      t(`${detailKey}.result1`),
      t(`${detailKey}.result2`),
      t(`${detailKey}.result3`),
      t(`${detailKey}.result4`),
    ] : [],
    impacts: isDetailed ? [
      t(`${projectKey}.impact1`),
      t(`${projectKey}.impact2`),
      t(`${projectKey}.impact3`),
    ] : [],
    techStack: getTechStack(slug),
  };

  const heroImage = projectImages[slug];
  const externalLink = projectLinks[slug];
  const media = mediaCoverage[slug];
  const isZh = locale === 'zh-TW';

  const fade = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-white">

      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-6">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          {t('gallery.backToProjects')}
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pb-10">
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-gray-500 font-medium mb-6">
            {project.subtitle}
          </p>

          {/* Description prose */}
          <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
            {project.description.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* External link */}
          {externalLink && (
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm rounded-lg hover:bg-accent-hover transition-colors font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {isZh ? externalLink.labelZh : externalLink.labelEn}
            </a>
          )}
        </motion.div>
      </header>

      {/* Hero Image */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {heroImage ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-soft-lg border border-gray-100">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm">{t('projectScreenshot')}</p>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Summary */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="grid sm:grid-cols-2 gap-3">
            {([
              { key: 'problem' as const, label: t('summary.problem'), value: project.summary.problem },
              { key: 'solution' as const, label: t('summary.solution'), value: project.summary.solution },
              { key: 'result' as const, label: t('summary.result'), value: project.summary.result },
              { key: 'timeline' as const, label: t('summary.timeline'), value: project.summary.timeline },
            ]).map((item) => (
              <SummaryCard key={item.key} icon={summaryIcons[item.key]} label={item.label} value={item.value} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      {project.features.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.25 }}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t('gallery.keyFeatures')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-accent/30 transition-colors"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {t('techStackLabel')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:border-accent/40 hover:bg-amber-50/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact & Results */}
      {project.results.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.35 }}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t('gallery.results')}
            </h2>
            <div className="space-y-3">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-sm leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Media Coverage */}
      {media && media.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {isZh ? '媒體報導' : 'Media Coverage'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {media.map((item, i) => (
                <MediaCard key={i} item={item} locale={locale} />
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Quick Consult Form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <QuickConsultForm />
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 py-10 border-t border-gray-200"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
            {t('gallery.backToProjects')}
          </Link>
          <a
            href="https://calendly.com/young-tsai/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-900 transition-colors text-sm font-semibold text-gray-700"
          >
            {t('consultCta')}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
