"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { FaLinkedin } from 'react-icons/fa';

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

            <div className="space-y-12">
              {[
                {
                  period: t('about.milestones.current.period'),
                  title: t('about.milestones.current.title'),
                  highlights: [
                    t('about.milestones.current.highlight1'),
                    t('about.milestones.current.highlight2')
                  ],
                },
                {
                  period: t('about.milestones.deputy.period'),
                  title: t('about.milestones.deputy.title'),
                  highlights: [
                    t('about.milestones.deputy.highlight1'),
                    t('about.milestones.deputy.highlight2')
                  ],
                },
                {
                  period: t('about.milestones.lead.period'),
                  title: t('about.milestones.lead.title'),
                  highlights: [
                    t('about.milestones.lead.highlight1'),
                    t('about.milestones.lead.highlight2')
                  ],
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="border-l-4 border-purple-600 pl-8 py-2"
                >
                  <div className="text-sm font-bold text-purple-600 mb-2">
                    {milestone.period}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 whitespace-pre-line">
                    {milestone.title}
                  </h3>
                  <ul className="space-y-2">
                    {milestone.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{t('about.page.belief1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{t('about.page.belief2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
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
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{t('about.page.style1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{t('about.page.style2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{t('about.page.style3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {t('about.page.cta')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('about.page.ctaSubtitle')}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg font-semibold"
                >
                  <FaLinkedin className="w-5 h-5" />
                  {t('about.viewLinkedIn')}
                </a>
                <a
                  href="https://calendly.com/app/scheduling/meeting_types/user/me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors font-semibold"
                >
                  {t('nav.contact')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
