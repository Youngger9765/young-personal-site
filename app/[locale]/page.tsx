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
        {/* Hero Section - Modern & Bold */}
        <section id="hero" className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-20 w-full"
          >
            {/* Photo - Modern Design */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-coral-orange/20 via-purple-500/20 to-slate-blue/20 rounded-full blur-2xl"></div>

                {/* Photo Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white group">
                  <Image
                    src="/images/young.jpg"
                    alt="Young Tsai - AI Product Consultant"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-coral-orange/10 to-purple-500/10 border border-coral-orange/30 text-slate-blue rounded-full text-base md:text-lg font-bold mb-10 shadow-sm">
                  <span className="w-2 h-2 bg-coral-orange rounded-full mr-2 animate-pulse"></span>
                  {t('hero.badge')}
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 bg-gradient-to-r from-gray-900 via-slate-blue to-gray-700 bg-clip-text text-transparent leading-tight tracking-tight whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.headline')}
              </motion.h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-14 leading-relaxed whitespace-pre-line font-medium">
                {t('hero.subheadline')}
              </p>

              <div className="flex flex-wrap gap-6 mb-14">
                <a
                  href="https://calendly.com/young-tsai/ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-gradient-to-r from-coral-orange to-orange-500 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
                >
                  {t('hero.ctaPrimary')}
                </a>
                <a
                  href="#projects"
                  className="px-10 py-5 bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 font-bold text-lg shadow-lg"
                >
                  {t('hero.ctaSecondary')}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-gray-700 hover:bg-gradient-to-br hover:from-coral-orange hover:to-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Youngger9765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-gray-700 hover:bg-gradient-to-br hover:from-coral-orange hover:to-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://medium.com/young-tsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-gray-700 hover:bg-gradient-to-br hover:from-coral-orange hover:to-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
                  aria-label="Medium"
                >
                  <FaMedium className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Packages Strip */}
        <section className="relative overflow-hidden border-y border-gray-200 bg-gradient-to-br from-slate-100 via-warm-cream to-purple-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-blue to-gray-900 bg-clip-text text-transparent mb-3">
                {locale === 'zh-TW' ? '快速啟動方案' : 'Quick Start Packages'}
              </h2>
              <p className="text-gray-600 text-lg">
                {locale === 'zh-TW' ? '選擇最適合您的合作方式' : 'Choose the right way to work together'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FaRocket,
                  title: locale === 'zh-TW' ? '1 週原型 Sprint' : '1-week Prototype Sprint',
                  timeline: locale === 'zh-TW' ? '7 天內交付' : 'Delivery in 7 days',
                  price: locale === 'zh-TW' ? '$15,000 起' : 'From $15,000',
                  note: locale === 'zh-TW' ? '互動原型 + Demo' : 'Interactive prototype + demo',
                  gradient: 'from-orange-400 to-coral-orange',
                },
                {
                  icon: FaBrain,
                  title: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
                  timeline: locale === 'zh-TW' ? '4 週上線' : 'Live in 4 weeks',
                  price: locale === 'zh-TW' ? '$50,000 起' : 'From $50,000',
                  note: locale === 'zh-TW' ? '部署 + 追蹤 + 交接' : 'Deployed, tracked, handed off',
                  gradient: 'from-purple-500 to-purple-600',
                  featured: true,
                },
                {
                  icon: FaCode,
                  title: locale === 'zh-TW' ? 'AI 策略 / 培訓' : 'AI Strategy / Training',
                  timeline: locale === 'zh-TW' ? '2-4 週顧問' : '2-4 weeks advisory',
                  price: locale === 'zh-TW' ? '$8,000 起' : 'From $8,000',
                  note: locale === 'zh-TW' ? '路線圖 + 選型 + 工作坊' : 'Roadmap, stack, workshop',
                  gradient: 'from-slate-blue to-gray-700',
                },
              ].map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                    pkg.featured ? 'border-purple-500 ring-4 ring-purple-500/20' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                      {locale === 'zh-TW' ? '最受歡迎' : 'Most Popular'}
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <pkg.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">{pkg.timeline}</div>
                  <div className="text-3xl font-black bg-gradient-to-r from-slate-blue to-gray-900 bg-clip-text text-transparent mb-2">{pkg.price}</div>
                  <div className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">{pkg.note}</div>

                  <div className="space-y-3">
                    <a
                      href="https://calendly.com/young-tsai/ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-coral-orange to-orange-500 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      {locale === 'zh-TW' ? '預約諮詢' : 'Book a consult'}
                    </a>
                    <a
                      href="#services"
                      className="block w-full text-center text-sm font-semibold text-slate-blue hover:text-gray-900 transition-colors"
                    >
                      {locale === 'zh-TW' ? '查看詳細方案 →' : 'See details →'}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-blue via-purple-600 to-gray-900 bg-clip-text text-transparent mb-12 text-center">
                {t('about.title')}
              </h2>
              <div className="space-y-8 text-xl text-gray-800 leading-relaxed">
                <p className="text-left first-letter:text-6xl first-letter:font-black first-letter:text-purple-600 first-letter:mr-2 first-letter:float-left">
                  {t('about.intro')}
                </p>
                <p className="text-left pl-4 border-l-4 border-coral-orange">{t('about.paragraph1')}</p>
                <p className="text-left">{t('about.paragraph2')}</p>
                <p className="text-left pl-4 border-l-4 border-purple-500">{t('about.paragraph3')}</p>
                <p className="text-left text-gray-600 text-lg italic bg-gray-50 p-6 rounded-2xl">{t('about.paragraph4')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-t border-gray-200 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-coral-orange bg-clip-text text-transparent mb-6">
                {t('services.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {locale === 'zh-TW' ? '靈活的合作方式，符合您的時程與預算' : 'Flexible engagement models to fit your timeline and budget'}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {[
                {
                  icon: FaRocket,
                  title: locale === 'zh-TW' ? '1 週原型 Sprint' : '1-week Prototype Sprint',
                  deliverables: locale === 'zh-TW'
                    ? ['互動原型（前後端+AI API）', '用戶腳本與 Demo', '技術文件與下一步計畫']
                    : ['Interactive prototype (frontend + AI API)', 'User script & demo', 'Tech notes and next steps'],
                  timeline: locale === 'zh-TW' ? '7 天' : '7 days',
                  price: locale === 'zh-TW' ? '$15,000 起' : 'From $15,000',
                  gradient: 'from-orange-500 to-coral-orange',
                },
                {
                  icon: FaBrain,
                  title: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
                  deliverables: locale === 'zh-TW'
                    ? ['可上線 MVP（含部署）', '資料與事件追蹤', '運營手冊與交接']
                    : ['Launch-ready MVP (with deployment)', 'Data/events tracking', 'Runbook & handoff'],
                  timeline: locale === 'zh-TW' ? '4 週' : '4 weeks',
                  price: locale === 'zh-TW' ? '$50,000 起' : 'From $50,000',
                  gradient: 'from-purple-500 to-purple-700',
                  featured: true,
                },
                {
                  icon: FaCode,
                  title: locale === 'zh-TW' ? 'AI 策略 / 培訓' : 'AI Strategy / Training',
                  deliverables: locale === 'zh-TW'
                    ? ['AI 機會盤點與路線圖', '技術選型與成本估算', '實作工作坊（半天/一天）']
                    : ['AI opportunities & roadmap', 'Tech stack + cost plan', 'Hands-on workshop (half/full day)'],
                  timeline: locale === 'zh-TW' ? '2-4 週' : '2-4 weeks',
                  price: locale === 'zh-TW' ? '$8,000 起' : 'From $8,000',
                  gradient: 'from-blue-500 to-cyan-500',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative p-10 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${
                    service.featured ? 'border-purple-500 ring-4 ring-purple-500/30 scale-105' : 'border-gray-700'
                  } hover:border-white/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 flex flex-col`}
                >
                  {service.featured && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-sm font-black rounded-full shadow-2xl">
                      ⭐ {locale === 'zh-TW' ? '最受歡迎' : 'Most Popular'}
                    </div>
                  )}

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-2xl`}>
                    <service.icon className="w-10 h-10" />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-6">
                    {service.title}
                  </h3>

                  <ul className="space-y-4 mb-10 text-gray-300 leading-relaxed flex-1">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-coral-orange mt-1 text-xl">✓</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-700 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{locale === 'zh-TW' ? '時程' : 'Timeline'}</div>
                        <div className="font-bold text-white text-lg">{service.timeline}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">{locale === 'zh-TW' ? '投資' : 'Investment'}</div>
                        <div className={`font-black text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.price}
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://calendly.com/young-tsai/ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center px-6 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
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

        {/* Projects Section - Modern Cards */}
        <section id="projects" className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-blue via-purple-600 to-gray-900 bg-clip-text text-transparent mb-4">
                {t('projects.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {locale === 'zh-TW' ? '從概念到上線，打造真正有價值的 AI 產品' : 'From concept to launch, building AI products that matter'}
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Link key={project.slug} href={`/${locale}/projects/${project.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative rounded-3xl bg-white border-2 border-gray-200 hover:border-purple-500 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden"
                  >
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-coral-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col md:flex-row">
                      {/* Project Visual */}
                      <div className="relative md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-purple-100 via-warm-cream to-orange-50 flex items-center justify-center overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0">
                          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-coral-orange/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        </div>

                        {/* Icon */}
                        <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-coral-orange flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="flex-1 p-8 md:p-10">
                        <div className="mb-6">
                          <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-lg text-purple-600 font-bold">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>

                        {/* Key Metrics Grid */}
                        <div className="grid sm:grid-cols-2 gap-5 mb-8">
                          {[
                            { icon: FaQuestionCircle, text: project.summary.problem, label: t('projects.summary.problem'), color: 'text-red-500' },
                            { icon: FaLightbulb, text: project.summary.solution, label: t('projects.summary.solution'), color: 'text-yellow-500' },
                            { icon: FaCheckCircle, text: project.summary.result, label: t('projects.summary.result'), color: 'text-green-500' },
                            { icon: FaClock, text: project.summary.timeline, label: t('projects.summary.timeline'), color: 'text-blue-500' },
                          ].map((item) => (
                            <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-300">
                              <div className={`mt-1 ${item.color}`}>
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-bold text-gray-900 text-sm mb-1">{item.label}</div>
                                <div className="text-gray-700 text-sm leading-snug">{item.text}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-4">
                          <a
                            href="https://calendly.com/young-tsai/ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                          >
                            {t('projects.consultCta')}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </a>
                          <span className="text-gray-500 text-sm font-medium">
                            {locale === 'zh-TW' ? '點擊查看完整案例' : 'Click for full case study'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center pt-12">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-xl hover:bg-purple-600 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <span>{locale === 'zh-TW' ? '查看所有專案' : 'View all projects'}</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
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
