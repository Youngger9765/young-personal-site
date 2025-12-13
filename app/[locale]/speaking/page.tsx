"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import { FaMicrophone, FaTrophy } from "react-icons/fa";

export default function SpeakingPage() {
  const t = useTranslations();

  const speakingItems = [
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
            {t('speaking.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conference talks, industry events, and recognition for contributions to AI and education technology
          </p>
        </motion.div>

        {/* Speaking Items Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {speakingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-slate-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <item.icon className="w-12 h-12 text-slate-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future Speaking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-warm-cream to-gray-50 rounded-2xl p-12 text-center border-2 border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in having me speak at your event?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I speak on topics including AI product development, engineering leadership, and building scalable EdTech platforms.
          </p>
          <a
            href="https://calendly.com/young-tsai/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            Schedule a Call
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
