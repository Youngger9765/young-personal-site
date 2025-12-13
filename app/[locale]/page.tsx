"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaMedium, FaRocket, FaBrain, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import ContactCTA from '@/components/ContactCTA';

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

        {/* About Section */}
        <section id="about" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-12">
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
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-16">
              {t('services.title')}
            </h2>
            <div className="space-y-12">
              {[
                {
                  icon: FaRocket,
                  title: t('services.product.title'),
                  pain: t('services.product.pain'),
                  solution: t('services.product.solution'),
                  value: t('services.product.value'),
                  note: t('services.product.note'),
                },
                {
                  icon: FaBrain,
                  title: t('services.strategy.title'),
                  pain: t('services.strategy.pain'),
                  solution: t('services.strategy.solution'),
                  value: t('services.strategy.value'),
                  note: t('services.strategy.note'),
                },
                {
                  icon: FaCode,
                  title: t('services.consulting.title'),
                  pain: t('services.consulting.pain'),
                  solution: t('services.consulting.solution'),
                  value: t('services.consulting.value'),
                  note: t('services.consulting.note'),
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-6">
                      <service.icon className="w-10 h-10 text-slate-blue group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-slate-blue transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-28 text-base font-bold text-gray-900 mt-1">{t('services.labels.pain')}</div>
                        <p className="flex-1 text-gray-700 leading-relaxed">{service.pain}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-28 text-base font-bold text-slate-blue mt-1">{t('services.labels.solution')}</div>
                        <p className="flex-1 text-gray-900 font-medium leading-relaxed">{service.solution}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-28 text-base font-bold text-coral-orange mt-1">{t('services.labels.value')}</div>
                        <p className="flex-1 text-gray-700 leading-relaxed">{service.value}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 border-t border-warm-cream pt-4">
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
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-16">
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
                  <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                    {/* Project Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-warm-cream to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-slate-blue mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-slate-blue text-sm font-medium">{t('projects.projectScreenshot')}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {t('projects.caseStudyLabel')}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-blue text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    <div className="mb-6">
                      <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-4">
                        {t('projects.impactLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-slate-blue mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent mb-4">
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
