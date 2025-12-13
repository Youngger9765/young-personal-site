"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Navigation from '@/components/Navigation';

interface ProjectCardData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ProjectsGalleryPage() {
  const t = useTranslations('projects');
  const locale = useLocale();

  const projects: ProjectCardData[] = [
    {
      slug: 'vaitor',
      title: t('vaitor.title'),
      subtitle: t('vaitor.subtitle'),
      description: t('vaitor.description'),
    },
    {
      slug: 'healthcare-dashboard',
      title: t('healthcare.title'),
      subtitle: t('healthcare.subtitle'),
      description: t('healthcare.description'),
    },
    {
      slug: 'jutor-cutor',
      title: t('jutor.title'),
      subtitle: t('jutor.subtitle'),
      description: t('jutor.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/${locale}/projects/${project.slug}`}>
                <div className="group h-full rounded-2xl bg-white border border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-xl overflow-hidden cursor-pointer">
                  {/* Project Thumbnail */}
                  <div className="relative h-56 bg-gradient-to-br from-warm-cream via-blue-50 to-purple-50 overflow-hidden">
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

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

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-blue font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
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
