"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export default function ContactCTA() {
  const t = useTranslations('contactCTA');

  return (
    <section className="border-t border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {t('headline')}
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tzu-yang-tsai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md group"
            >
              <FaLinkedin className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-gray-900 mb-2">{t('linkedin.title')}</p>
              <p className="text-sm text-gray-600">{t('linkedin.subtitle')}</p>
            </a>

            {/* Email */}
            <a
              href="mailto:young@example.com"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md group"
            >
              <FaEnvelope className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-gray-900 mb-2">{t('email.title')}</p>
              <p className="text-sm text-gray-600">{t('email.subtitle')}</p>
            </a>

            {/* Calendar - Primary CTA */}
            <a
              href="https://calendly.com/young-tsai/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg group"
            >
              <FaCalendarAlt className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-semibold mb-2">{t('calendar.title')}</p>
              <p className="text-sm text-purple-100">{t('calendar.subtitle')}</p>
            </a>
          </div>

          <p className="text-gray-600">
            {t('footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
