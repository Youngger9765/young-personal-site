"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium, FaRocket, FaBrain, FaCode, FaChartLine, FaUsers, FaDollarSign, FaMicrophone, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';

export default function Home() {
  const t = useTranslations();

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
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden group">
                <div className="text-7xl md:text-8xl">👤</div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-sm px-4 text-center font-medium">{t('hero.photoPlaceholder')}</p>
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
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-8">
                  {t('hero.badge')}
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight tracking-tight"
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
                  href="https://calendly.com/app/scheduling/meeting_types/user/me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
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

        {/* About Section */}
        <section id="about" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
                {t('about.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{t('about.intro')}</p>
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
                <p className="text-gray-600 text-base">{t('about.paragraph4')}</p>
              </div>
            </motion.div>

            {/* Career Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto mt-16 pt-16 border-t border-gray-200"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-12 text-center">
                {t('about.careerHighlights')}
              </h3>

              {/* Centered Card Layout */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    period: t('about.milestones.lead.period'),
                    title: t('about.milestones.lead.title'),
                    highlights: [
                      t('about.milestones.lead.highlight1'),
                      t('about.milestones.lead.highlight2')
                    ],
                    gradient: 'from-indigo-500 to-indigo-600'
                  },
                  {
                    period: t('about.milestones.deputy.period'),
                    title: t('about.milestones.deputy.title'),
                    highlights: [
                      t('about.milestones.deputy.highlight1'),
                      t('about.milestones.deputy.highlight2')
                    ],
                    gradient: 'from-blue-500 to-blue-600'
                  },
                  {
                    period: t('about.milestones.current.period'),
                    title: t('about.milestones.current.title'),
                    highlights: [
                      t('about.milestones.current.highlight1'),
                      t('about.milestones.current.highlight2')
                    ],
                    gradient: 'from-purple-500 to-purple-600'
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="h-full p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 transition-all shadow-md hover:shadow-xl">
                      {/* Period Badge */}
                      <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.gradient} text-white text-sm font-bold mb-4 shadow-sm`}>
                        {milestone.period}
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-gray-900 mb-4 leading-snug min-h-[3.5rem] group-hover:text-purple-600 transition-colors whitespace-pre-line">
                        {milestone.title}
                      </h4>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {milestone.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Decorative gradient on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="text-center flex justify-center gap-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group"
                >
                  {t('about.page.readFullStory')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group"
                >
                  {t('about.viewLinkedIn')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="track-record" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16"
            >
              {t('trackRecord.title')}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaDollarSign,
                  metric: t('trackRecord.metrics.savings.metric'),
                  description: t('trackRecord.metrics.savings.description'),
                },
                {
                  icon: FaChartLine,
                  metric: t('trackRecord.metrics.growth.metric'),
                  description: t('trackRecord.metrics.growth.description'),
                },
                {
                  icon: FaUsers,
                  metric: t('trackRecord.metrics.retention.metric'),
                  description: t('trackRecord.metrics.retention.description'),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="mb-6">
                    <item.icon className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    {item.metric}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              {t('services.title')}
            </h2>
            <div className="space-y-12">
              {[
                {
                  icon: FaRocket,
                  title: t('services.product.title'),
                  description: t('services.product.description'),
                  note: t('services.product.note'),
                },
                {
                  icon: FaBrain,
                  title: t('services.strategy.title'),
                  description: t('services.strategy.description'),
                  note: t('services.strategy.note'),
                },
                {
                  icon: FaCode,
                  title: t('services.consulting.title'),
                  description: t('services.consulting.description'),
                  note: t('services.consulting.note'),
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-5 gap-8 group"
                >
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-2">
                      <service.icon className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {service.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              {t('projects.title')}
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: t('projects.vaitor.title'),
                  subtitle: t('projects.vaitor.subtitle'),
                  description: t('projects.vaitor.description'),
                  impact: [
                    t('projects.vaitor.impact1'),
                    t('projects.vaitor.impact2'),
                    t('projects.vaitor.impact3')
                  ],
                  tech: ["Python", "FastAPI", "React", "PostgreSQL", "AWS"],
                },
                {
                  title: t('projects.healthcare.title'),
                  subtitle: t('projects.healthcare.subtitle'),
                  description: t('projects.healthcare.description'),
                  impact: [
                    t('projects.healthcare.impact1'),
                    t('projects.healthcare.impact2'),
                    t('projects.healthcare.impact3')
                  ],
                  tech: ["Next.js", "Python", "BigQuery", "GCP", "Looker"],
                },
                {
                  title: t('projects.jutor.title'),
                  subtitle: t('projects.jutor.subtitle'),
                  description: t('projects.jutor.description'),
                  impact: [
                    t('projects.jutor.impact1'),
                    t('projects.jutor.impact2'),
                    t('projects.jutor.impact3')
                  ],
                  tech: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md overflow-hidden">
                    {/* Project Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-purple-600 text-sm font-medium">{t('projects.projectScreenshot')}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {t('projects.caseStudyLabel')}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-purple-600 text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        {t('projects.impactLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        {t('projects.techStackLabel')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog/Insights Section */}
        <section className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {t('insights.title')}
              </h2>
              <Link
                href="https://medium.com/young-tsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group"
              >
                {t('insights.viewAll')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
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
              ].map((article, index) => (
                <motion.a
                  key={index}
                  href="https://medium.com/young-tsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                    {t('insights.readMore')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.a>
              ))}
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

        {/* Speaking & Recognition */}
        <section className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              {t('speaking.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: FaMicrophone,
                  title: t('speaking.mediatek.title'),
                  subtitle: t('speaking.mediatek.subtitle')
                },
                {
                  icon: FaTrophy,
                  title: t('speaking.meta.title'),
                  subtitle: t('speaking.meta.subtitle')
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                >
                  <item.icon className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="border-t border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                {t('contact.subtitle')}
              </p>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md group"
                >
                  <FaLinkedin className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-900 mb-2">{t('contact.linkedin.title')}</p>
                  <p className="text-sm text-gray-600">{t('contact.linkedin.subtitle')}</p>
                </a>

                <a
                  href="mailto:young.tsai.9765@gmail.com?subject=Website%20Contact%20-%20AI%20Product%20Consulting"
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md group"
                >
                  <svg className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold text-gray-900 mb-2">{t('contact.email.title')}</p>
                  <p className="text-sm text-gray-600">{t('contact.email.subtitle')}</p>
                </a>

                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg group"
                >
                  <svg className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold mb-2">{t('contact.calendar.title')}</p>
                  <p className="text-sm text-purple-100">{t('contact.calendar.subtitle')}</p>
                </a>
              </div>

              <p className="text-gray-600">
                {t('contact.location')}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
