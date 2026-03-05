"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium, FaRocket, FaBrain, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import ContactCTA from '@/components/ContactCTA';
import GradientButton from '@/components/GradientButton';
import GlassCard from '@/components/GlassCard';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  const projects = [
    {
      slug: 'med-vision',
      title: t('projects.medVision.title'),
      subtitle: t('projects.medVision.subtitle'),
      description: t('projects.medVision.description'),
      techStack: ['FastAPI', 'Next.js', 'Vertex AI', 'FHIR'],
    },
    {
      slug: 'xian',
      title: t('projects.xian.title'),
      subtitle: t('projects.xian.subtitle'),
      description: t('projects.xian.description'),
      techStack: ['Next.js 16', 'React 19', 'Voice AI', 'PDCA'],
    },
    {
      slug: 'career-creator',
      title: t('projects.careerCreator.title'),
      subtitle: t('projects.careerCreator.subtitle'),
      description: t('projects.careerCreator.description'),
      techStack: ['Next.js 14', 'FastAPI', 'GCS', 'WebSocket'],
    },
    {
      slug: 'jutor',
      title: t('projects.jutor.title'),
      subtitle: t('projects.jutor.subtitle'),
      description: t('projects.jutor.description'),
      techStack: ['FastAPI', 'OpenAI', 'Speech API', 'React'],
    },
    {
      slug: 'cutor',
      title: t('projects.cutor.title'),
      subtitle: t('projects.cutor.subtitle'),
      description: t('projects.cutor.description'),
      techStack: ['Claude AI', 'GPT-4', 'OCR', 'Next.js'],
    },
    {
      slug: 'ai-square',
      title: t('projects.aiSquare.title'),
      subtitle: t('projects.aiSquare.subtitle'),
      description: t('projects.aiSquare.description'),
      techStack: ['React', 'Monorepo', 'CI/CD', '14 Languages'],
    },
  ];

  const blogPosts = [
    {
      slug: 'superclaude-01-emergency-3am',
      title: locale === 'zh-TW'
        ? '上百萬打水漂後，他找到我'
        : 'After Wasting Millions, He Found Me',
      date: '2026-01-14',
      description: locale === 'zh-TW'
        ? 'SuperClaude 實戰案例：3AM 緊急救援，用 TDD + CI/CD 拯救瀕死專案'
        : 'SuperClaude case study: 3AM emergency rescue using TDD + CI/CD',
    },
    {
      slug: 'five-questions-before-ai',
      title: locale === 'zh-TW'
        ? '導入 AI 前的五個關鍵問題'
        : '5 Questions Before AI Adoption',
      date: '2025-11-20',
      description: locale === 'zh-TW'
        ? '在投資 AI 之前，先回答這五個問題'
        : 'Answer these 5 questions before investing in AI',
    },
    {
      slug: 'why-ai-projects-fail',
      title: locale === 'zh-TW'
        ? '為什麼 AI 專案會失敗'
        : 'Why AI Projects Fail',
      date: '2025-10-15',
      description: locale === 'zh-TW'
        ? '從實戰經驗分析 AI 專案失敗的常見原因'
        : 'Common reasons AI projects fail, from real experience',
    },
  ];

  const services = [
    {
      key: 'fastPrototype' as const,
      icon: FaRocket,
      title: locale === 'zh-TW' ? '1 週原型 Sprint' : '1-week Prototype Sprint',
      timeline: t('services.fastPrototype.timeline'),
      price: t('services.fastPrototype.price'),
      note: locale === 'zh-TW' ? '互動原型 + Demo' : 'Interactive prototype + demo',
      featured: false,
    },
    {
      key: 'mvp' as const,
      icon: FaBrain,
      title: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
      timeline: t('services.mvp.timeline'),
      price: t('services.mvp.price'),
      note: locale === 'zh-TW' ? '部署 + 追蹤 + 交接' : 'Deployed, tracked, handed off',
      featured: true,
    },
    {
      key: 'strategyConsulting' as const,
      icon: FaCode,
      title: locale === 'zh-TW' ? 'AI 策略 / 培訓' : 'AI Strategy / Training',
      timeline: t('services.strategyConsulting.timeline'),
      price: t('services.strategyConsulting.price'),
      note: locale === 'zh-TW' ? '路線圖 + 選型 + 工作坊' : 'Roadmap, stack, workshop',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-stone-900">
      {/* ========== Section 1: HERO ========== */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-accent text-sm font-medium rounded-full border border-amber-200 mb-6">
              <FaRocket className="w-3.5 h-3.5" />
              {t('hero.badge')}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-stone-900 leading-tight mb-6">
              {t('hero.headlineLine1')}<br />
              {t('hero.headlineLine2')}
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-8 whitespace-pre-line">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-wrap gap-4">
              <GradientButton
                href="https://calendly.com/young-tsai/ai"
                size="lg"
                variant="primary"
                external
              >
                {t('hero.ctaPrimary')}
              </GradientButton>
              <GradientButton
                href="#projects"
                size="lg"
                variant="outline"
              >
                {t('hero.ctaSecondary')}
              </GradientButton>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/tzu-yang-tsai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Youngger9765"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://medium.com/young-tsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent transition-colors"
                aria-label="Medium"
              >
                <FaMedium className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-stone-200 shadow-soft-md overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/young.jpg"
                  alt="Young Tsai - AI Product Consultant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== Section 2: SERVICES ========== */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {locale === 'zh-TW' ? '快速啟動方案' : 'Quick Start Packages'}
            </h2>
            <p className="text-lg text-stone-300">
              {locale === 'zh-TW' ? '選擇最適合您的合作方式' : 'Choose the right way to work together'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((pkg, index) => (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative bg-white rounded-xl border p-8 shadow-soft hover:shadow-soft-md transition-all ${
                  pkg.featured
                    ? 'border-accent ring-2 ring-accent/20'
                    : 'border-stone-200'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {locale === 'zh-TW' ? '最受歡迎' : 'Most Popular'}
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-accent mb-6">
                  <pkg.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-stone-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-sm text-stone-600 mb-2">{pkg.timeline}</p>
                <p className="text-3xl font-bold text-stone-900 mb-2">
                  {pkg.price}
                </p>
                <p className="text-sm text-stone-600 mb-6 pb-6 border-b border-stone-200">
                  {pkg.note}
                </p>

                <a
                  href="https://calendly.com/young-tsai/ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors"
                >
                  {locale === 'zh-TW' ? '預約諮詢' : 'Book a consult'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Section 3: PROJECTS ========== */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            {locale === 'zh-TW'
              ? '精選技術專案與產品開發經驗'
              : 'Featured technical projects and product development experience'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={`/${locale}/projects/${project.slug}`} className="block h-full">
              <GlassCard hover className="p-6 h-full flex flex-col cursor-pointer">
                <h3 className="text-xl font-bold text-stone-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-stone-600 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <GradientButton
            href={`/${locale}/projects`}
            variant="primary"
            size="lg"
          >
            {locale === 'zh-TW' ? '查看所有專案' : 'View All Projects'}
          </GradientButton>
        </div>
      </section>

      {/* ========== Section 4: BLOG ========== */}
      <section className="bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              {t('blog.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="block h-full p-6 bg-white rounded-xl border border-stone-200 shadow-soft hover:shadow-warm-glow transition-all group"
                >
                  <p className="text-sm text-stone-500 mb-2">{post.date}</p>
                  <h3 className="font-semibold text-stone-900 mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="text-accent font-medium text-sm hover:text-accent-hover transition-colors">
                    {t('blog.readMore')} &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/blog`}
              className="text-accent font-medium hover:text-accent-hover transition-colors"
            >
              {t('blog.viewAll')} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ========== Section 5: CTA ========== */}
      <ContactCTA />
    </div>
  );
}
