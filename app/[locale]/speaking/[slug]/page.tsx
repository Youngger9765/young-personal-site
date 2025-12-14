"use client";

import * as React from 'react';
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from '@/components/Navigation';

interface SpeakingDetailProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const speakingSlugs = [
  'teacher-ai-workshop',
  'mediatek-ai-day-2024',
  'meta-llm-taiwan-pitch'
];

export default function SpeakingDetailPage({ params }: SpeakingDetailProps) {
  const t = useTranslations('speaking');
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

  if (!speakingSlugs.includes(slug)) {
    notFound();
  }

  // Map slugs to translation keys
  const slugToKey: Record<string, string> = {
    'teacher-ai-workshop': 'teacherAiWorkshop',
    'mediatek-ai-day-2024': 'mediatekAiDay',
    'meta-llm-taiwan-pitch': 'metaLlmPitch'
  };

  const eventKey = slugToKey[slug];
  const detailKey = `${eventKey}Detail` as
    'teacherAiWorkshopDetail' |
    'mediatekAiDayDetail' |
    'metaLlmPitchDetail';

  const event = {
    title: t(`${eventKey}.title`),
    subtitle: t(`${eventKey}.subtitle`),
    organization: t(`${detailKey}.organization`),
    role: t(`${detailKey}.role`),
    date: t(`${detailKey}.date`),
    description: t(`${detailKey}.description`),
    highlights: [
      t(`${detailKey}.highlight1`),
      t(`${detailKey}.highlight2`),
      t(`${detailKey}.highlight3`),
      t(`${detailKey}.highlight4`),
    ],
    youtubeUrl: getYoutubeUrl(slug),
    eventUrl: getEventUrl(slug),
    mediaLinks: getMediaLinks(slug, locale),
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <Link
          href={`/${locale}/speaking`}
          className="inline-flex items-center gap-2 text-slate-blue hover:text-gray-900 transition-colors font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          {t('gallery.backToSpeaking')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
            {event.title}
          </h1>
          <p className="text-xl text-slate-blue font-medium mb-4">
            {event.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-8 text-gray-600 justify-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{event.organization}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{event.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{event.date}</span>
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {event.youtubeUrl && (
              <a
                href={event.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t('gallery.watchVideo')}
              </a>
            )}
            {event.eventUrl && (
              <a
                href={event.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-blue text-white rounded-lg hover:bg-gray-900 transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {slug === 'meta-llm-taiwan-pitch'
                  ? (locale === 'zh-TW' ? '查看作品' : 'Visit Project')
                  : t('gallery.viewEvent')
                }
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* Video/Image Embed or Placeholder */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {event.youtubeUrl ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src={getYoutubeEmbedUrl(event.youtubeUrl)}
                title={event.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          ) : slug === 'meta-llm-taiwan-pitch' ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/meta-jutor.jpg"
                alt="Meta LLM Taiwan Pitch Hackathon - Jutor AI"
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
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                  <p className="text-slate-blue text-sm font-medium">
                    {t('gallery.eventPlaceholder')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Event Description */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          {event.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Key Highlights */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-8">
            {t('gallery.keyHighlights')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {event.highlights.map((highlight, index) => (
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
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Media Coverage */}
      {event.mediaLinks && (
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {locale === 'zh-TW' ? '媒體報導' : 'Media Coverage'}
            </h3>
            <div className="space-y-4">
              {event.mediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border-2 border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${index === 1 ? 'bg-coral-orange' : 'bg-slate-blue'} flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 ${index === 1 ? 'bg-coral-orange' : 'bg-slate-blue'} text-white text-xs font-semibold rounded-full`}>
                          {link.source}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {index === 0
                          ? (locale === 'zh-TW'
                              ? '均一教育平台 AI 英語家教 Jutor 獲 Meta Llama 黑客松決賽肯定...'
                              : 'Jutor AI English Tutor recognized at Meta Llama Hackathon Finals...')
                          : (locale === 'zh-TW'
                              ? '親子天下報導均一如何運用 Meta LLM 技術打造 AI 英文學習工具...'
                              : 'CommonWealth Parenting reports on how Junyi uses Meta LLM to build AI English learning tools...')
                        }
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
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Back to Gallery CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-warm-cream to-blue-50 border border-gray-200"
        >
          <Link
            href={`/${locale}/speaking`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-blue text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {t('gallery.backToSpeaking')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function getYoutubeUrl(slug: string): string | null {
  const urls: Record<string, string | null> = {
    'teacher-ai-workshop': null,
    'mediatek-ai-day-2024': 'https://www.youtube.com/watch?v=EBLfH5-VxwE',
    'meta-llm-taiwan-pitch': null,
  };
  return urls[slug] || null;
}

function getEventUrl(slug: string): string | null {
  const urls: Record<string, string | null> = {
    'teacher-ai-workshop': 'https://flipedu.parenting.com.tw/article/009501',
    'mediatek-ai-day-2024': 'https://www.mediatekfoundation.org/app-list/view/064B83Ceb9c0',
    'meta-llm-taiwan-pitch': 'https://www.jutor.ai/',
  };
  return urls[slug] || null;
}

function getMediaLinks(slug: string, locale: string): Array<{ title: string; url: string; source: string }> | null {
  const linksZh: Record<string, Array<{ title: string; url: string; source: string }> | null> = {
    'teacher-ai-workshop': null,
    'mediatek-ai-day-2024': null,
    'meta-llm-taiwan-pitch': [
      {
        title: '均一 AI 英語家教 Jutor 獲 Meta Llama 黑客松決賽肯定',
        url: 'https://www.facebook.com/JunyiAcademy/posts/972099254961553/',
        source: '均一教育平台 Facebook'
      },
      {
        title: 'Meta LLM應用於教育：均一AI英文學習工具',
        url: 'https://flipedu.parenting.com.tw/article/009564',
        source: '親子天下翻轉教育'
      }
    ]
  };

  const linksEn: Record<string, Array<{ title: string; url: string; source: string }> | null> = {
    'teacher-ai-workshop': null,
    'mediatek-ai-day-2024': null,
    'meta-llm-taiwan-pitch': [
      {
        title: 'Jutor AI English Tutor Recognized at Meta Llama Hackathon Finals',
        url: 'https://www.facebook.com/JunyiAcademy/posts/972099254961553/',
        source: 'Junyi Academy Facebook'
      },
      {
        title: 'Meta LLM Applied to Education: Junyi AI English Learning Tool',
        url: 'https://flipedu.parenting.com.tw/article/009564',
        source: 'FlipEdu by CommonWealth Parenting'
      }
    ]
  };

  const links = locale === 'zh-TW' ? linksZh : linksEn;
  return links[slug] || null;
}

function getYoutubeEmbedUrl(youtubeUrl: string): string {
  const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
  return `https://www.youtube.com/embed/${videoId}`;
}
