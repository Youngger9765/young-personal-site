"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium, FaRocket, FaBrain, FaCode, FaQuestionCircle, FaLightbulb, FaCheckCircle, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import Navigation from '@/components/Navigation';
import ContactCTA from '@/components/ContactCTA';
import QuickConsultForm from '@/components/QuickConsultForm';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const projects = [
    {
      slug: 'ai-square',
      title: t('projects.aiSquare.title'),
      subtitle: t('projects.aiSquare.subtitle'),
      description: t('projects.aiSquare.description'),
      summary: {
        problem: t('projects.aiSquare.problem'),
        solution: t('projects.aiSquare.solution'),
        result: t('projects.aiSquare.result'),
        timeline: t('projects.aiSquare.timeline'),
      },
    },
    {
      slug: 'vaitor',
      title: t('projects.vaitor.title'),
      subtitle: t('projects.vaitor.subtitle'),
      description: t('projects.vaitor.description'),
      summary: {
        problem: t('projects.vaitor.problem'),
        solution: t('projects.vaitor.solution'),
        result: t('projects.vaitor.result'),
        timeline: t('projects.vaitor.timeline'),
      },
    },
    {
      slug: 'jutor',
      title: t('projects.jutor.title'),
      subtitle: t('projects.jutor.subtitle'),
      description: t('projects.jutor.description'),
      summary: {
        problem: t('projects.jutor.problem'),
        solution: t('projects.jutor.solution'),
        result: t('projects.jutor.result'),
        timeline: t('projects.jutor.timeline'),
      },
    },
    {
      slug: 'cutor',
      title: t('projects.cutor.title'),
      subtitle: t('projects.cutor.subtitle'),
      description: t('projects.cutor.description'),
      summary: {
        problem: t('projects.cutor.problem'),
        solution: t('projects.cutor.solution'),
        result: t('projects.cutor.result'),
        timeline: t('projects.cutor.timeline'),
      },
    },
    {
      slug: 'duotopia',
      title: t('projects.duotopia.title'),
      subtitle: t('projects.duotopia.subtitle'),
      description: t('projects.duotopia.description'),
      summary: {
        problem: t('projects.duotopia.problem'),
        solution: t('projects.duotopia.solution'),
        result: t('projects.duotopia.result'),
        timeline: t('projects.duotopia.timeline'),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Simple Background */}
      <div className="fixed inset-0 z-0 bg-white" />

      {/* Navigation */}
      <Navigation />

      <div className="relative z-10">
        {/* Hero Section - Minimalist Redesign */}
        <section id="hero" className="max-w-5xl mx-auto px-6 pt-40 pb-32 min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-16 w-full"
          >
            {/* Photo - Simplified */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-warm-cream to-slate-blue/10 border-4 border-white shadow-2xl overflow-hidden group">
                <Image
                  src="/images/young.jpg"
                  alt="Young Tsai - AI Product Consultant"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-block px-4 py-2 bg-warm-cream text-slate-blue rounded-full text-base md:text-lg font-semibold mb-8">
                  {t('hero.badge')}
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight tracking-tight whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.headline')}
              </motion.h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed whitespace-pre-line">
                {t('hero.subheadline')}
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <a
                  href="https://calendly.com/young-tsai/ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-colors font-semibold"
                >
                  {t('hero.ctaPrimary')}
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors font-semibold"
                >
                  {t('hero.ctaSecondary')}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Youngger9765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://medium.com/young-tsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Medium"
                >
                  <FaMedium className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Packages Strip */}
        <section className="border-t border-gray-200 bg-gradient-to-r from-white via-warm-cream/40 to-blue-50">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: FaRocket,
                  title: locale === 'zh-TW' ? '1 週原型 Sprint' : '1-week Prototype Sprint',
                  timeline: locale === 'zh-TW' ? '7 天內交付' : 'Delivery in 7 days',
                  price: locale === 'zh-TW' ? '$15,000 起' : 'From $15,000',
                  note: locale === 'zh-TW' ? '互動原型 + Demo' : 'Interactive prototype + demo',
                },
                {
                  icon: FaBrain,
                  title: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
                  timeline: locale === 'zh-TW' ? '4 週上線' : 'Live in 4 weeks',
                  price: locale === 'zh-TW' ? '$50,000 起' : 'From $50,000',
                  note: locale === 'zh-TW' ? '部署 + 追蹤 + 交接' : 'Deployed, tracked, handed off',
                },
                {
                  icon: FaCode,
                  title: locale === 'zh-TW' ? 'AI 策略 / 培訓' : 'AI Strategy / Training',
                  timeline: locale === 'zh-TW' ? '2-4 週顧問' : '2-4 weeks advisory',
                  price: locale === 'zh-TW' ? '$8,000 起' : 'From $8,000',
                  note: locale === 'zh-TW' ? '路線圖 + 選型 + 工作坊' : 'Roadmap, stack, workshop',
                },
              ].map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-warm-cream flex items-center justify-center text-slate-blue">
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-semibold text-gray-900 truncate">{pkg.title}</div>
                    <div className="text-sm text-gray-700">{pkg.timeline}</div>
                    <div className="text-sm text-slate-blue font-semibold">{pkg.price}</div>
                    <div className="text-xs text-gray-600">{pkg.note}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 whitespace-nowrap">
                    <a
                      href="https://calendly.com/young-tsai/ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-coral-orange hover:underline"
                    >
                      {locale === 'zh-TW' ? '預約諮詢' : 'Book a consult'}
                    </a>
                    <a
                      href="#services"
                      className="text-xs font-semibold text-slate-blue hover:underline"
                    >
                      {locale === 'zh-TW' ? '查看方案' : 'See plans'}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-left"
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-12">
                {t('about.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-left">{t('about.intro')}</p>
                <p className="text-left">{t('about.paragraph1')}</p>
                <p className="text-left">{t('about.paragraph2')}</p>
                <p className="text-left">{t('about.paragraph3')}</p>
                <p className="text-left text-gray-600 text-base">{t('about.paragraph4')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-16 text-center">
              {t('services.title')}
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaRocket,
                  title: locale === 'zh-TW' ? '1 週原型 Sprint' : '1-week Prototype Sprint',
                  deliverables: locale === 'zh-TW'
                    ? ['互動原型（前後端+AI API）', '用戶腳本與 Demo', '技術文件與下一步計畫']
                    : ['Interactive prototype (frontend + AI API)', 'User script & demo', 'Tech notes and next steps'],
                  timeline: locale === 'zh-TW' ? '7 天' : '7 days',
                  price: locale === 'zh-TW' ? '$15,000 起' : 'From $15,000',
                },
                {
                  icon: FaBrain,
                  title: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
                  deliverables: locale === 'zh-TW'
                    ? ['可上線 MVP（含部署）', '資料與事件追蹤', '運營手冊與交接']
                    : ['Launch-ready MVP (with deployment)', 'Data/events tracking', 'Runbook & handoff'],
                  timeline: locale === 'zh-TW' ? '4 週' : '4 weeks',
                  price: locale === 'zh-TW' ? '$50,000 起' : 'From $50,000',
                },
                {
                  icon: FaCode,
                  title: locale === 'zh-TW' ? 'AI 策略 / 培訓' : 'AI Strategy / Training',
                  deliverables: locale === 'zh-TW'
                    ? ['AI 機會盤點與路線圖', '技術選型與成本估算', '實作工作坊（半天/一天）']
                    : ['AI opportunities & roadmap', 'Tech stack + cost plan', 'Hands-on workshop (half/full day)'],
                  timeline: locale === 'zh-TW' ? '2-4 週' : '2-4 weeks',
                  price: locale === 'zh-TW' ? '$8,000 起' : 'From $8,000',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <service.icon className="w-10 h-10 text-slate-blue" />
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-6 text-gray-700 leading-relaxed">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-coral-orange mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-gray-200 text-sm text-gray-700 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-blue">{service.timeline}</div>
                      <div className="text-gray-600">{service.price}</div>
                    </div>
                    <a
                      href="https://calendly.com/young-tsai/ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors font-semibold text-sm"
                    >
                      {t('projects.consultCta')}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Consult Form */}
        <section className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <QuickConsultForm />
          </div>
        </section>

        {/* Projects Section - Vertical List */}
        <section id="projects" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent text-center">
              {t('projects.title')}
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <Link key={project.slug} href={`/${locale}/projects/${project.slug}`}>
                  <div className="group rounded-2xl bg-white border border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-1/3 h-40 md:h-full bg-gradient-to-br from-warm-cream via-blue-50 to-purple-50 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-slate-blue/30"
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
                      <div className="flex-1 p-5 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-slate-blue transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-blue font-medium">
                            {project.subtitle}
                          </p>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                          {[
                            { icon: FaQuestionCircle, text: project.summary.problem, label: t('projects.summary.problem') },
                            { icon: FaLightbulb, text: project.summary.solution, label: t('projects.summary.solution') },
                            { icon: FaCheckCircle, text: project.summary.result, label: t('projects.summary.result') },
                            { icon: FaClock, text: project.summary.timeline, label: t('projects.summary.timeline') },
                          ].map((item) => (
                            <div key={item.label} className="flex items-start gap-2">
                              <div className="mt-0.5 text-slate-blue">
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <span className="font-semibold text-gray-900 mr-1">{item.label}:</span>
                                <span className="line-clamp-2">{item.text}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2">
                          <a
                            href="https://calendly.com/young-tsai/ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-blue text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition-colors"
                          >
                            {t('projects.consultCta')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center pt-4">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 text-slate-blue hover:text-gray-900 transition-colors font-semibold group"
              >
                <span>{locale === 'zh-TW' ? '更多專案' : 'More projects'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials - Temporarily Hidden */}
        {/*
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              {t('testimonials.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: t('testimonials.testimonial1.quote'),
                  author: t('testimonials.testimonial1.author'),
                  role: t('testimonials.testimonial1.role'),
                  company: t('testimonials.testimonial1.company'),
                },
                {
                  quote: t('testimonials.testimonial2.quote'),
                  author: t('testimonials.testimonial2.author'),
                  role: t('testimonials.testimonial2.role'),
                  company: t('testimonials.testimonial2.company'),
                },
                {
                  quote: t('testimonials.testimonial3.quote'),
                  author: t('testimonials.testimonial3.author'),
                  role: t('testimonials.testimonial3.role'),
                  company: t('testimonials.testimonial3.company'),
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-purple-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <ContactCTA />
      </div>
    </div>
  );
}
