'use client';

import { useLocale, useTranslations } from 'next-intl';
import GradientButton from './GradientButton';
import GlassCard from './GlassCard';

export default function ContactCTA() {
  const locale = useLocale();
  const t = useTranslations('contactCTA');

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-purple-orange opacity-90" />

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-dark/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <GlassCard className="p-12 md:p-16 backdrop-blur-glass-lg">
          <h2 className="font-sans text-4xl md:text-5xl font-black text-gray-900 mb-6">
            {t('heading')}
          </h2>
          <p className="font-sans text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('subheading')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GradientButton
              href={`/${locale}/contact`}
              variant="primary"
              size="lg"
            >
              {t('button')} →
            </GradientButton>
          </div>
          <p className="font-sans text-sm text-gray-600 mt-6">
            {t('responseTime')}
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
