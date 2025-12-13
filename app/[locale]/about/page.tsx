"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { FaLinkedin } from 'react-icons/fa';
import ContactCTA from '@/components/ContactCTA';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple Background */}
      <div className="fixed inset-0 z-0 bg-white" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              {t('about.page.title')}
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              {t('about.page.subtitle')}
            </p>
          </motion.div>
        </section>

        {/* Personal Story */}
        <section className="border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-gray-700 leading-relaxed"
            >
              <p className="text-2xl text-gray-900">{t('about.intro')}</p>

              {/* Brand Statement Highlight */}
              <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-warm-cream to-white border-l-4 border-slate-blue">
                <p className="text-xl font-semibold text-slate-blue leading-relaxed">
                  {t('about.brandStatement')}
                </p>
              </div>

              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </motion.div>
          </div>
        </section>

        {/* Career Highlights - Timeline */}
        <section className="border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16">
              {t('about.careerHighlights')}
            </h2>

            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-slate-blue via-slate-blue/50 to-transparent" />

              <div className="space-y-12">
                {[
                  {
                    period: t('about.milestones.current.period'),
                    title: t('about.milestones.current.title'),
                    highlights: [
                      t('about.milestones.current.highlight1'),
                      t('about.milestones.current.highlight2')
                    ],
                    icon: '🚀',
                    color: 'from-coral-orange to-coral-orange/80'
                  },
                  {
                    period: t('about.milestones.deputy.period'),
                    title: t('about.milestones.deputy.title'),
                    highlights: [
                      t('about.milestones.deputy.highlight1'),
                      t('about.milestones.deputy.highlight2')
                    ],
                    icon: '📈',
                    color: 'from-slate-blue to-slate-blue/80'
                  },
                  {
                    period: t('about.milestones.lead.period'),
                    title: t('about.milestones.lead.title'),
                    highlights: [
                      t('about.milestones.lead.highlight1'),
                      t('about.milestones.lead.highlight2')
                    ],
                    icon: '💡',
                    color: 'from-slate-blue/90 to-slate-blue/70'
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative flex gap-6 group"
                  >
                    {/* Timeline node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-warm-cream border-4 border-slate-blue flex items-center justify-center text-lg shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-6">
                      {/* Period badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                        className="inline-block mb-3"
                      >
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${milestone.color} shadow-md`}>
                          {milestone.period}
                        </span>
                      </motion.div>

                      {/* Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="bg-gradient-to-br from-white to-warm-cream/30 rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:border-slate-blue/30"
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 whitespace-pre-line leading-tight">
                          {milestone.title}
                        </h3>

                        <div className="space-y-3">
                          {milestone.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                              className="flex items-start gap-3 text-gray-700 group/item"
                            >
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-slate-blue to-coral-orange mt-2 transition-transform duration-300 group-hover/item:scale-125" />
                              <span className="leading-relaxed text-base">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* LinkedIn CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <a
                href="https://www.linkedin.com/in/youngtsai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-blue text-white font-semibold rounded-xl hover:bg-slate-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaLinkedin className="text-xl" />
                {t('about.viewLinkedIn')}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Values & Beliefs */}
        <section className="border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
              {t('about.page.beliefs')}
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <ul className="space-y-4 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>{t('about.page.belief1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>{t('about.page.belief2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>{t('about.page.belief3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Working Style */}
        <section className="border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
              {t('about.page.workingStyle')}
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <ul className="space-y-4 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>{t('about.page.style1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>{t('about.page.style2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>{t('about.page.style3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}
