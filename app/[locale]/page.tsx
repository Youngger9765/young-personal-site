"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium, FaRocket, FaBrain, FaCode, FaQuestionCircle, FaLightbulb, FaCheckCircle, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import ContactCTA from '@/components/ContactCTA';
import QuickConsultForm from '@/components/QuickConsultForm';
import GradientButton from '@/components/GradientButton';
import GlassCard from '@/components/GlassCard';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const projects = [
    {
      slug: 'ai-square',
      title: t('projects.aiSquare.title'),
      subtitle: t('projects.aiSquare.subtitle'),
      description: t('projects.aiSquare.description'),
      techStack: ['React', 'Monorepo', 'CI/CD', 'TypeScript'],
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
      techStack: ['Vue.js', 'TypeScript', 'Google Cloud', 'Firebase'],
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
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
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
      techStack: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
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
      techStack: ['Next.js', 'React', 'Firebase', 'Tailwind CSS'],
      summary: {
        problem: t('projects.duotopia.problem'),
        solution: t('projects.duotopia.solution'),
        result: t('projects.duotopia.result'),
        timeline: t('projects.duotopia.timeline'),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-primary/5 to-orange-primary/5 text-gray-900 overflow-hidden">
      {/* Gradient orbs - subtle background decoration */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-orange-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section - Gradient Glass Minimalism */}
        <section id="hero" className="max-w-6xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-purple-pink text-white rounded-pill text-sm font-medium mb-6 shadow-gradient-glow">
                <FaRocket className="w-4 h-4" />
                <span>{t('hero.badge')}</span>
              </div>

              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
                  {t('hero.headline')}
                </span>
              </h1>

              <p className="font-sans text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
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
                <a href="https://www.linkedin.com/in/tzu-yang-tsai/" target="_blank" rel="noopener noreferrer" className="text-purple-primary hover:text-purple-dark transition-colors" aria-label="LinkedIn">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Youngger9765" target="_blank" rel="noopener noreferrer" className="text-purple-primary hover:text-purple-dark transition-colors" aria-label="GitHub">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://medium.com/young-tsai" target="_blank" rel="noopener noreferrer" className="text-purple-primary hover:text-purple-dark transition-colors" aria-label="Medium">
                  <FaMedium className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Right: Photo with Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <GlassCard hover className="p-2">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/young.jpg"
                    alt="Young Tsai - AI Product Consultant"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </GlassCard>
              {/* Gradient glow behind photo */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-purple-orange blur-2xl opacity-30 rounded-2xl" />
            </motion.div>
          </div>
        </section>

        {/* Quick Packages Strip */}
        <section className="relative overflow-hidden border-y border-gray-200 bg-gradient-to-br from-slate-100 via-white to-purple-50">
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
                  price: locale === 'zh-TW' ? 'NT$15,000 起' : 'From $500',
                  note: locale === 'zh-TW' ? '互動原型 + Demo' : 'Interactive prototype + demo',
                  gradient: 'from-orange-400 to-coral-orange',
                },
                {
                  icon: FaBrain,
                  title: locale === 'zh-TW' ? '4 週 MVP' : '4-week MVP',
                  timeline: locale === 'zh-TW' ? '4 週上線' : 'Live in 4 weeks',
                  price: locale === 'zh-TW' ? 'NT$50,000 起' : 'From $1,600',
                  note: locale === 'zh-TW' ? '部署 + 追蹤 + 交接' : 'Deployed, tracked, handed off',
                  gradient: 'from-purple-500 to-purple-600',
                  featured: true,
                },
                {
                  icon: FaCode,
                  title: locale === 'zh-TW' ? 'AI 策略 / 培訓' : 'AI Strategy / Training',
                  timeline: locale === 'zh-TW' ? '2-4 週顧問' : '2-4 weeks advisory',
                  price: locale === 'zh-TW' ? 'NT$8,000 起' : 'From $250',
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

        {/* About Section - Gradient Background */}
        <section id="about" className="relative py-20 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-pink-accent/5 to-orange-primary/10" />

          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-sans text-4xl md:text-5xl font-black mb-4 text-center">
                <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
                  {t('about.title')}
                </span>
              </h2>
              <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                {t('about.intro')}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Story Cards */}
                <div className="space-y-6">
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-purple-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-gradient-glow">
                        <FaBrain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                          {t('about.beliefs.aiDriven.title')}
                        </h3>
                        <p className="text-gray-600">
                          {t('about.page.belief1')}
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-purple-pink rounded-xl flex items-center justify-center flex-shrink-0 shadow-gradient-glow">
                        <FaCode className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                          {t('about.beliefs.solveReal.title')}
                        </h3>
                        <p className="text-gray-600">
                          {t('about.page.belief2')}
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-orange-pink rounded-xl flex items-center justify-center flex-shrink-0 shadow-gradient-glow">
                        <FaLightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                          {t('about.beliefs.fastIteration.title')}
                        </h3>
                        <p className="text-gray-600">
                          {t('about.page.belief3')}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Right: Journey & Brand */}
                <div className="space-y-6">
                  <GlassCard gradient className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-gray-900 mb-4">
                      {t('about.journey.title')}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('about.paragraph1')}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {t('about.paragraph2')}
                    </p>
                  </GlassCard>

                  <GlassCard className="p-8 bg-gradient-to-br from-purple-primary/5 to-orange-primary/5">
                    <p className="font-sans text-xl font-semibold text-gray-900 italic leading-relaxed">
                      &ldquo;{t('about.brandStatement')}&rdquo;
                    </p>
                  </GlassCard>

                  <div className="text-center">
                    <GradientButton
                      href={`/${locale}/contact`}
                      variant="primary"
                      size="lg"
                    >
                      {t('about.cta')} →
                    </GradientButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Three Cards */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-4xl md:text-5xl font-black mb-4 text-center">
              <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h2>
            <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>

            {/* Three Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  key: 'fastPrototype',
                  icon: FaRocket,
                  gradient: 'from-orange-primary to-orange-dark',
                },
                {
                  key: 'mvp',
                  icon: FaBrain,
                  gradient: 'from-purple-primary to-purple-dark',
                  featured: true,
                },
                {
                  key: 'strategyConsulting',
                  icon: FaCode,
                  gradient: 'from-pink-accent to-purple-primary',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard hover className={`p-8 h-full flex flex-col ${service.featured ? 'ring-2 ring-purple-primary' : ''}`}>
                    {service.featured && (
                      <div className="inline-block px-3 py-1 bg-gradient-purple-pink text-white text-xs font-semibold rounded-pill mb-4 self-start">
                        ⭐ {t('services.featured.badge')}
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-gradient-glow`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
                      {t(`services.${service.key}.title`)}
                    </h3>

                    <p className="text-gray-700 mb-4">
                      {t(`services.${service.key}.tagline`)}
                    </p>

                    <div className="text-4xl font-black text-purple-primary mb-2">
                      {t(`services.${service.key}.price`)}
                    </div>

                    <p className="text-sm text-gray-600 mb-6">
                      {t(`services.${service.key}.timeline`)}
                    </p>

                    <div className="mb-6 flex-grow">
                      <p className="text-sm text-gray-700">
                        {t(`services.${service.key}.ideal`)}
                      </p>
                    </div>
                    
                    <GradientButton
                      href="https://calendly.com/young-tsai/ai"
                      variant="primary"
                      size="lg"
                      external
                      className="w-full"
                    >
                      {t('projects.consultCta')}
                    </GradientButton>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quick Consult Form */}
        <section className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <QuickConsultForm />
          </div>
        </section>

        {/* Projects Section - Gradient Glass Minimalism */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-4xl md:text-5xl font-black mb-4 text-center">
              <span className="bg-gradient-purple-pink bg-clip-text text-transparent">
                {t('projects.title')}
              </span>
            </h2>
            <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {locale === 'zh-TW' ? '精選技術專案與產品開發經驗' : 'Featured technical projects and product development experience'}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projects.slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard hover className="p-6 h-full flex flex-col">
                    <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-purple-primary font-medium text-sm mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-primary/10 to-orange-primary/10 text-purple-dark text-xs font-medium rounded-pill border border-purple-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <GradientButton
                      href={`/${locale}/projects/${project.slug}`}
                      variant="outline"
                      size="sm"
                    >
                      {locale === 'zh-TW' ? '查看詳情' : 'View Details'}
                    </GradientButton>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="text-center">
              <GradientButton
                href={`/${locale}/projects`}
                variant="primary"
                size="lg"
              >
                {locale === 'zh-TW' ? '查看所有專案 →' : 'View All Projects →'}
              </GradientButton>
            </div>
          </motion.div>
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
