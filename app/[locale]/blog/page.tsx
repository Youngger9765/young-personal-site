"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';

export default function BlogPage() {
  const t = useTranslations();

  const articles = [
    {
      title: t('insights.article1.title'),
      excerpt: t('insights.article1.excerpt'),
      date: t('insights.article1.date'),
      readTime: t('insights.article1.readTime'),
    },
    {
      title: t('insights.article2.title'),
      excerpt: t('insights.article2.excerpt'),
      date: t('insights.article2.date'),
      readTime: t('insights.article2.readTime'),
    },
    {
      title: t('insights.article3.title'),
      excerpt: t('insights.article3.excerpt'),
      date: t('insights.article3.date'),
      readTime: t('insights.article3.readTime'),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
            {t('insights.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on AI product development, engineering leadership, and building products that scale
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href="https://medium.com/young-tsai"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-blue transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-coral-orange font-medium group-hover:gap-3 transition-all">
                {t('insights.readMore')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All on Medium CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://medium.com/young-tsai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-blue text-white rounded-lg hover:bg-slate-blue/90 transition-colors font-semibold shadow-lg hover:shadow-xl group"
          >
            {t('insights.viewAll')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
