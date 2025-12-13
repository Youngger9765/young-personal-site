"use client";

import * as React from 'react';
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from '@/components/Navigation';

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const projectSlugs = [
  'vaitor',
  'healthcare-dashboard',
  'jutor-cutor',
  'learning-recommendation',
  'assessment-platform',
  'content-management',
  'edtech-analytics',
  'teacher-tools'
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
    'vaitor': 'vaitor',
    'healthcare-dashboard': 'healthcare',
    'jutor-cutor': 'jutor',
    'learning-recommendation': 'learningRecommendation',
    'assessment-platform': 'assessmentPlatform',
    'content-management': 'contentManagement',
    'edtech-analytics': 'dataAnalytics',
    'teacher-tools': 'teacherTools'
  };

  const projectKey = slugToKey[slug];
  const detailKey = `${projectKey}Detail` as
    'vaitorDetail' |
    'jutorDetail' |
    'healthcareDetail' |
    'learningRecommendationDetail' |
    'assessmentPlatformDetail' |
    'contentManagementDetail' |
    'dataAnalyticsDetail' |
    'teacherToolsDetail';

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
        </motion.div>
      </section>

      {/* Project Screenshot */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-warm-cream via-blue-50 to-purple-50"
        >
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
    'vaitor': ["Python", "FastAPI", "React", "PostgreSQL", "AWS", "NLP", "Recommendation Algorithms"],
    'jutor-cutor': ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "Speech Recognition", "OpenAI"],
    'healthcare-dashboard': ["Next.js", "Python", "BigQuery", "GCP", "Looker", "Data Pipeline", "Real-time Analytics"],
    'learning-recommendation': ["Python", "TensorFlow", "Redis", "PostgreSQL", "Apache Kafka", "Collaborative Filtering", "Deep Learning"],
    'assessment-platform': ["Next.js", "Python", "PostgreSQL", "OpenAI", "NLP", "Plagiarism Detection", "LMS Integration"],
    'content-management': ["React", "Node.js", "MongoDB", "AWS S3", "Elasticsearch", "i18n", "Version Control"],
    'edtech-analytics': ["Python", "Apache Airflow", "BigQuery", "Tableau", "PostgreSQL", "Real-time Processing", "Predictive Analytics"],
    'teacher-tools': ["Next.js", "Python", "OpenAI GPT-4", "PostgreSQL", "Redis", "Natural Language Generation", "Task Automation"],
  };

  return techStacks[slug] || [];
}
