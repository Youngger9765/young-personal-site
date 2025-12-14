"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { FaLinkedin } from 'react-icons/fa';
import ContactCTA from '@/components/ContactCTA';

export default function AboutPage() {
  const t = useTranslations();

  const metrics = [
    {
      value: t('about.metrics.savings.value'),
      label: t('about.metrics.savings.label'),
      description: t('about.metrics.savings.description'),
    },
    {
      value: t('about.metrics.growth.value'),
      label: t('about.metrics.growth.label'),
      description: t('about.metrics.growth.description'),
    },
    {
      value: t('about.metrics.retention.value'),
      label: t('about.metrics.retention.label'),
      description: t('about.metrics.retention.description'),
    },
    {
      value: t('about.metrics.leaders.value'),
      label: t('about.metrics.leaders.label'),
      description: t('about.metrics.leaders.description'),
    },
  ];

  const skills = [
    t('about.skills.ai'),
    t('about.skills.dataProduct'),
    t('about.skills.fullStack'),
    t('about.skills.dataEngineering'),
    t('about.skills.teamLeadership'),
    t('about.skills.edtech'),
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple Background */}
      <div className="fixed inset-0 z-0 bg-white" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
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
          <div className="max-w-4xl mx-auto px-6 py-24 text-left">
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
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
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
                  {
                    period: t('about.milestones.engineer.period'),
                    title: t('about.milestones.engineer.title'),
                    highlights: [
                      t('about.milestones.engineer.highlight1'),
                      t('about.milestones.engineer.highlight2')
                    ],
                    icon: '🛠️',
                    color: 'from-gray-700 to-gray-500'
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

        {/* Metrics & Skills */}
        <section className="border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Impact Numbers */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {t('about.metrics.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-white to-warm-cream/20 border border-gray-200 shadow-sm"
                    >
                      <div className="text-3xl font-extrabold text-slate-blue mb-2">
                        {metric.value}
                      </div>
                      <div className="text-gray-900 font-semibold mb-2">{metric.label}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {t('about.skills.title')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-800 font-medium hover:border-slate-blue transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Beliefs + Working Style */}
        <section className="border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-24 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Beliefs Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 tracking-tight">
                  {t('about.page.beliefs')}
                </h2>
                <div className="space-y-5">
                  {[
                    { text: t('about.page.belief1') },
                    { text: t('about.page.belief2') },
                    { text: t('about.page.belief3') }
                  ].map((belief, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="group relative"
                    >
                      {/* Enhanced left accent border with shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-blue via-slate-blue to-slate-blue/50 rounded-full shadow-[2px_0_8px_rgba(71,85,105,0.15)] transition-all duration-300 group-hover:w-1.5 group-hover:shadow-[3px_0_12px_rgba(71,85,105,0.25)]" />

                      {/* Premium content card with refined depth */}
                      <div className="relative pl-7 pr-7 py-6 bg-gradient-to-br from-white via-warm-cream/10 to-warm-cream/20 rounded-r-2xl border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-slate-blue/30 hover:bg-gradient-to-br hover:from-white hover:via-warm-cream/15 hover:to-warm-cream/25">
                        {/* Subtle top-left decorative element */}
                        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-slate-blue/5 to-transparent rounded-br-3xl pointer-events-none" />

                        {/* Text content with enhanced typography */}
                        <p className="relative text-gray-800 leading-[1.7] text-[16.5px] font-medium tracking-wide text-center">
                          {belief.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Working Style Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 tracking-tight">
                  {t('about.page.workingStyle')}
                </h2>
                <div className="space-y-5">
                  {[
                    { text: t('about.page.style1') },
                    { text: t('about.page.style2') },
                    { text: t('about.page.style3') }
                  ].map((style, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="group relative"
                    >
                      {/* Enhanced left accent border with shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-blue via-slate-blue to-slate-blue/50 rounded-full shadow-[2px_0_8px_rgba(71,85,105,0.15)] transition-all duration-300 group-hover:w-1.5 group-hover:shadow-[3px_0_12px_rgba(71,85,105,0.25)]" />

                      {/* Premium content card with refined depth */}
                      <div className="relative pl-7 pr-7 py-6 bg-gradient-to-br from-white via-warm-cream/10 to-warm-cream/20 rounded-r-2xl border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-slate-blue/30 hover:bg-gradient-to-br hover:from-white hover:via-warm-cream/15 hover:to-warm-cream/25">
                        {/* Subtle top-left decorative element */}
                        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-slate-blue/5 to-transparent rounded-br-3xl pointer-events-none" />

                        {/* Text content with enhanced typography */}
                        <p className="relative text-gray-800 leading-[1.7] text-[16.5px] font-medium tracking-wide text-center">
                          {style.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}
