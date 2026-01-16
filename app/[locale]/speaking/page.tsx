"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";

interface SpeakingCardData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function SpeakingGalleryPage() {
  const t = useTranslations('speaking');
  const locale = useLocale();

  const speakingEvents: SpeakingCardData[] = [
    {
      slug: 'userxper-ai-ux-2024',
      title: t('userxperAiUx.title'),
      subtitle: t('userxperAiUx.subtitle'),
      description: t('userxperAiUx.description'),
    },
    {
      slug: 'teacher-ai-workshop',
      title: t('teacherAiWorkshop.title'),
      subtitle: t('teacherAiWorkshop.subtitle'),
      description: t('teacherAiWorkshop.description'),
    },
    {
      slug: 'mediatek-ai-day-2024',
      title: t('mediatekAiDay.title'),
      subtitle: t('mediatekAiDay.subtitle'),
      description: t('mediatekAiDay.description'),
    },
    {
      slug: 'meta-llm-taiwan-pitch',
      title: t('metaLlmPitch.title'),
      subtitle: t('metaLlmPitch.subtitle'),
      description: t('metaLlmPitch.description'),
    },
  ];

  const eventImages: Record<string, string | null> = {
    'userxper-ai-ux-2024': '/images/Uxer.png',
    'teacher-ai-workshop': '/images/vibe-coding.jpg',
    'mediatek-ai-day-2024': null, // has video; show play overlay
    'meta-llm-taiwan-pitch': '/images/meta-jutor.jpg',
  };

  const slugHasYoutube = (slug: string) => {
    const urls: Record<string, string | null> = {
      'userxper-ai-ux-2024': null,
      'teacher-ai-workshop': null,
      'mediatek-ai-day-2024': 'https://www.youtube.com/watch?v=EBLfH5-VxwE',
      'meta-llm-taiwan-pitch': null,
    };
    return Boolean(urls[slug]);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Speaking Events Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakingEvents.map((event, index) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/${locale}/speaking/${event.slug}`}>
                <div className="group h-full rounded-2xl bg-white border border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-xl overflow-hidden cursor-pointer">
                  {/* Event Thumbnail */}
                  <div className="relative h-56 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
                    {eventImages[event.slug] ? (
                      <Image
                        src={eventImages[event.slug]!}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    ) : slugHasYoutube(event.slug) ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <svg
                          className="w-16 h-16 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-slate-blue/30 group-hover:text-slate-blue/50 transition-colors"
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
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-blue/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="text-white text-lg font-semibold mb-2">
                          {t('gallery.viewDetails')}
                        </div>
                        <div className="text-white/80 text-sm">
                          →
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-slate-blue font-medium mb-3">
                      {event.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
