"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/young-tsai/ai";

type AudienceType = "all" | "marketing" | "managers" | "digital";

interface CourseData {
  key: string;
  audienceType: AudienceType;
}

const courses: CourseData[] = [
  { key: "automation", audienceType: "all" },
  { key: "webpage", audienceType: "marketing" },
  { key: "aiTools", audienceType: "all" },
  { key: "strategy", audienceType: "managers" },
  { key: "healthcare", audienceType: "digital" },
];

const audienceStyles: Record<AudienceType, string> = {
  all: "bg-slate-100 text-slate-600",
  marketing: "bg-slate-100 text-slate-600",
  managers: "bg-amber-50 text-accent",
  digital: "bg-slate-100 text-slate-600",
};

interface SpeakingEventData {
  slug: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
}

const speakingEvents: SpeakingEventData[] = [
  {
    slug: "userxper-ai-ux-2024",
    titleKey: "userxperAiUx.title",
    subtitleKey: "userxperAiUx.subtitle",
    descriptionKey: "userxperAiUx.description",
  },
  {
    slug: "teacher-ai-workshop",
    titleKey: "teacherAiWorkshop.title",
    subtitleKey: "teacherAiWorkshop.subtitle",
    descriptionKey: "teacherAiWorkshop.description",
  },
  {
    slug: "mediatek-ai-day-2024",
    titleKey: "mediatekAiDay.title",
    subtitleKey: "mediatekAiDay.subtitle",
    descriptionKey: "mediatekAiDay.description",
  },
  {
    slug: "meta-llm-taiwan-pitch",
    titleKey: "metaLlmPitch.title",
    subtitleKey: "metaLlmPitch.subtitle",
    descriptionKey: "metaLlmPitch.description",
  },
  {
    slug: "ntu-cep-2024",
    titleKey: "ntuCep.title",
    subtitleKey: "ntuCep.subtitle",
    descriptionKey: "ntuCep.description",
  },
  {
    slug: "techorange-ai-agent-2025",
    titleKey: "techOrangeAiAgent.title",
    subtitleKey: "techOrangeAiAgent.subtitle",
    descriptionKey: "techOrangeAiAgent.description",
  },
];

const eventImages: Record<string, string | null> = {
  "userxper-ai-ux-2024": "/images/Uxer.png",
  "teacher-ai-workshop": "/images/vibe-coding.jpg",
  "mediatek-ai-day-2024": null,
  "meta-llm-taiwan-pitch": "/images/meta-jutor.jpg",
  "ntu-cep-2024": null,
  "techorange-ai-agent-2025": "/images/techorange-ai-agent.jpg",
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function WorkshopsPage() {
  const t = useTranslations("workshops");
  const tSpeaking = useTranslations("speaking");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-accent text-sm font-semibold mb-6">
            {t("badge")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            {t("subtitle")}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-soft hover:shadow-soft-md transition-all duration-200"
          >
            {t("ctaPrimary")}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Workshop Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.key}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-soft-md transition-all duration-200 flex flex-col"
            >
              {/* Audience Pill */}
              <span
                className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${audienceStyles[course.audienceType]}`}
              >
                {t(`audience.${course.audienceType}`)}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(`courses.${course.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                {t(`courses.${course.key}.description`)}
              </p>

              {/* CTA Link */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200"
              >
                {t("cardCta")}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Speaking Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("pastSpeaking.title")}
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              {t("pastSpeaking.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingEvents.map((event, index) => (
              <motion.div
                key={event.slug}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={`/${locale}/speaking/${event.slug}`}>
                  <div className="group h-full rounded-xl bg-white border border-slate-200 hover:shadow-soft-md transition-all duration-200 overflow-hidden cursor-pointer">
                    {/* Thumbnail */}
                    <div className="relative h-40 bg-slate-100 overflow-hidden">
                      {eventImages[event.slug] ? (
                        <Image
                          src={eventImages[event.slug]!}
                          alt={tSpeaking(event.titleKey)}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-slate-300"
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
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                        {tSpeaking(event.titleKey)}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {tSpeaking(event.subtitleKey)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t("ctaPrimary")}
          </h2>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-soft hover:shadow-soft-md transition-all duration-200"
          >
            {t("ctaPrimary")}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
