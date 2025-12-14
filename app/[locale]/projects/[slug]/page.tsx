"use client";

import * as React from 'react';
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from '@/components/Navigation';

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const projectSlugs = [
  'duotopia',
  'ai-square',
  'vaitor',
  'jutor',
  'cutor'
];

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

  // Map slugs to translation keys
  const slugToKey: Record<string, string> = {
    'duotopia': 'duotopia',
    'ai-square': 'aiSquare',
    'vaitor': 'vaitor',
    'jutor': 'jutor',
    'cutor': 'cutor'
  };

  const projectKey = slugToKey[slug];
  const detailKey = `${projectKey}Detail` as
    'duotopiaDetail' |
    'aiSquareDetail' |
    'vaitorDetail' |
    'jutorDetail' |
    'cutorDetail';

  const project = {
    title: t(`${projectKey}.title`),
    subtitle: t(`${projectKey}.subtitle`),
    description: t(`${detailKey}.description`),
    features: [
      t(`${detailKey}.feature1`),
      t(`${detailKey}.feature2`),
      t(`${detailKey}.feature3`),
      t(`${detailKey}.feature4`),
      t(`${detailKey}.feature5`),
    ],
    results: [
      t(`${detailKey}.result1`),
      t(`${detailKey}.result2`),
      t(`${detailKey}.result3`),
      t(`${detailKey}.result4`),
    ],
    impacts: [
      t(`${projectKey}.impact1`),
      t(`${projectKey}.impact2`),
      t(`${projectKey}.impact3`),
    ],
    techStack: getTechStack(slug),
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-slate-blue hover:text-gray-900 transition-colors font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          {t('gallery.backToProjects')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-slate-blue font-medium mb-8">
            {project.subtitle}
          </p>
          {slug === 'ai-square' && (
            <div className="flex gap-4 mb-8">
              <a
                href="https://ai-square.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {locale === 'zh-TW' ? '查看官方網站' : 'Visit Official Website'}
              </a>
            </div>
          )}
          {slug === 'duotopia' && (
            <div className="flex gap-4 mb-8">
              <a
                href="https://duotopia.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {locale === 'zh-TW' ? '查看作品' : 'Visit Project'}
              </a>
            </div>
          )}
          {slug === 'jutor' && (
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.jutor.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {locale === 'zh-TW' ? '查看作品' : 'Visit Project'}
              </a>
            </div>
          )}
        </motion.div>
      </section>

      {/* Project Screenshot */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {slug === 'ai-square' ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hourofai.jpeg"
                alt="AI Square - Hour of AI Program"
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : slug === 'vaitor' ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/vibe-coding.jpg"
                alt="Vaitor - AI Video Tutor"
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-warm-cream via-blue-50 to-purple-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-slate-blue/40 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-slate-blue text-sm font-medium">
                    {t('projectScreenshot')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Project Description */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          {project.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-8">
            {t('gallery.keyFeatures')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-warm-cream/30 border border-gray-200 hover:border-slate-blue transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-blue flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-8">
            {t('techStackLabel')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-slate-blue transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact & Results */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-8">
            {t('gallery.results')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-coral-orange flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Media Coverage - AI Square only */}
          {slug === 'ai-square' && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'zh-TW' ? '媒體報導' : 'Media Coverage'}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://tw.stock.yahoo.com/news/%E5%8F%B0%E7%81%A3hour-ai%E5%95%9F%E5%8B%95-%E5%9D%87-%E5%8F%B0%E7%A9%8D%E9%9B%BB%E6%94%9C%E6%89%8B%E6%8E%A8%E5%8B%95%E5%85%A8%E6%B0%91ai%E6%95%99%E8%82%B2-101702045.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-coral-orange flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-coral-orange text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? 'Yahoo 財經' : 'Yahoo Finance'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? '台灣Hour of AI啟動！均一、台積電攜手推動全民AI教育' : "Taiwan's Hour of AI Launches! Junyi Academy and TSMC Join Forces for AI Education"}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '均一教育平台與台積電等企業攜手推動「1小時玩AI」計畫，讓全民都能參與 AI 教育...'
                          : "Junyi Academy partners with TSMC to promote 'Hour of AI' initiative, making AI education accessible to everyone..."}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://udn.com/news/story/6885/9161998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-blue flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-slate-blue text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? '聯合報' : 'United Daily News'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? '均一教育平台推『1小時玩AI』 企業相挺助學生入門' : "Junyi Academy Launches 'Hour of AI' - Corporate Support Helps Students Get Started"}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '均一教育平台推出 AI 教育計畫，目標 25 萬參與者，獲微軟、Meta、台積電等企業支持...'
                          : 'Junyi Academy launches AI education initiative targeting 250,000 participants, supported by Microsoft, Meta, TSMC...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Media Coverage - Jutor only */}
          {slug === 'jutor' && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'zh-TW' ? '媒體報導' : 'Media Coverage'}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://flipedu.parenting.com.tw/article/009564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-coral-orange flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-coral-orange text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? '親子天下翻轉教育' : 'FlipEdu by CommonWealth Parenting'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? 'Meta LLM應用於教育：均一AI英文學習工具' : 'Meta LLM Applied to Education: Junyi AI English Learning Tool'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '親子天下報導均一如何運用 Meta LLM 技術打造 AI 英文學習工具...'
                          : 'CommonWealth Parenting reports on how Junyi uses Meta LLM to build AI English learning tools...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://vocus.cc/article/66e78933fd89780001ae952f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-blue flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-slate-blue text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? 'Vocus' : 'Vocus'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? 'Jutor AI 英語家教：結合 Meta Llama 的創新教育應用' : 'Jutor AI English Tutor: Innovative Educational Application with Meta Llama'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '深入探討 Jutor 如何利用 Meta Llama 模型打造個人化 AI 英語學習體驗...'
                          : 'In-depth look at how Jutor leverages Meta Llama models to create personalized AI English learning experiences...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://vocus.cc/article/642b69e5fd897800012b6fce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-coral-orange flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-coral-orange text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? 'Vocus' : 'Vocus'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? 'AI 賦能教育：Jutor 的誕生與發展' : 'AI-Powered Education: The Birth and Development of Jutor'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '從概念到實現，探索 Jutor AI 英語家教平台的發展歷程與技術創新...'
                          : 'From concept to implementation, explore the development journey and technological innovation of Jutor AI English tutoring platform...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Vaitor Media Coverage */}
          {slug === 'vaitor' && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'zh-TW' ? '媒體報導' : 'Media Coverage'}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/JunyiAcademy/posts/-ai-狐狸貓默默出現啦以平台上原有的課程影片-配合-ai-驅動的新功能-ai-狐狸貓-將逐漸進駐影片下方自動把影片轉化為文本打造師生各自專屬的功能讓自學力-x/852188293619317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-blue flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-slate-blue text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? '均一平台教育基金會' : 'Junyi Academy Foundation'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? 'AI 狐狸貓功能發表' : 'AI Fox Cat Feature Launch'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '以平台上原有的課程影片，配合 AI 驅動的新功能「AI 狐狸貓」，將逐漸進駐影片下方，自動把影片轉化為文本，打造師生各自專屬的功能...'
                          : 'Using existing course videos on the platform, combined with the AI-powered new feature "AI Fox Cat", which will gradually appear below videos, automatically converting videos into text...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://sunnyteaching680228.blogspot.com/2024/04/ai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-coral-orange flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-coral-orange text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? 'Sunny Teaching' : 'Sunny Teaching'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? 'AI 教學應用分享' : 'AI Teaching Application Sharing'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '教學現場如何運用 AI 影片家教系統提升學習成效，實際應用案例與心得分享...'
                          : 'How to use AI video tutoring system in the classroom to enhance learning outcomes, practical application cases and experience sharing...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '閱讀完整報導' : 'Read Full Article'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.thsh.tp.edu.tw/uploads/1725321120011KwiQmzMv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-blue flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-slate-blue text-white text-xs font-semibold rounded-full">
                          {locale === 'zh-TW' ? '教育部推薦' : 'Ministry of Education Recommended'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {locale === 'zh-TW' ? '教育部推薦 AI 教學工具' : 'Ministry of Education Recommended AI Teaching Tool'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {locale === 'zh-TW'
                          ? '獲教育部推薦之 AI 輔助教學工具，協助教師提升教學品質與學生學習成效...'
                          : 'Recommended by the Ministry of Education as an AI-assisted teaching tool to help teachers improve teaching quality and student learning outcomes...'}
                      </p>
                      <div className="flex items-center gap-2 text-slate-blue text-sm font-medium">
                        <span>{locale === 'zh-TW' ? '查看文件' : 'View Document'}</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Back to Gallery CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border border-gray-200"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-blue text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {t('gallery.backToProjects')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function getTechStack(slug: string): string[] {
  const techStacks: Record<string, string[]> = {
    'duotopia': ["Next.js", "React", "OpenAI Whisper", "Speech Recognition", "PostgreSQL", "Redis"],
    'ai-square': ["Next.js 15", "React 19", "Vertex AI", "i18n (14 languages)", "TypeScript"],
    'vaitor': ["Next.js", "Claude AI", "Video Processing", "React", "TypeScript"],
    'jutor': ["Python", "FastAPI", "OpenAI", "Speech Recognition", "PostgreSQL"],
    'cutor': ["Next.js", "Claude AI", "GPT-4", "React", "TypeScript"],
  };

  return techStacks[slug] || [];
}
