"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaEnvelope, FaCalendarAlt, FaCopy, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactCTA() {
  const t = useTranslations('contactCTA');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = t('email.address');
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-gray-200 bg-gradient-to-br from-warm-cream to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-blue to-gray-600 bg-clip-text text-transparent">
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
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md group"
            >
              <FaLinkedin className="w-8 h-8 text-slate-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-gray-900 mb-2">{t('linkedin.title')}</p>
              <p className="text-sm text-gray-600">{t('linkedin.subtitle')}</p>
            </a>

            {/* Email */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-slate-blue transition-all shadow-sm hover:shadow-md">
              <FaEnvelope className="w-8 h-8 text-slate-blue mx-auto mb-4" />
              <p className="font-semibold text-gray-900 mb-2">{t('email.title')}</p>
              <p className="text-sm text-gray-600 mb-3">{t('email.subtitle')}</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <code className="text-sm text-gray-700 bg-gray-50 px-3 py-1.5 rounded border border-gray-200">
                  {t('email.address')}
                </code>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 hover:bg-warm-cream rounded transition-colors"
                  title={copied ? '已複製！' : '複製'}
                >
                  {copied ? (
                    <FaCheck className="w-4 h-4 text-green-600" />
                  ) : (
                    <FaCopy className="w-4 h-4 text-slate-blue" />
                  )}
                </button>
              </div>
            </div>

            {/* Calendar - Primary CTA */}
            <a
              href="https://calendly.com/young-tsai/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-coral-orange text-white rounded-xl hover:bg-[#FF7043] transition-all shadow-md hover:shadow-lg group"
            >
              <FaCalendarAlt className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-semibold mb-2">{t('calendar.title')}</p>
              <p className="text-sm text-white/90">{t('calendar.subtitle')}</p>
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
