'use client';

import { useLocale, useTranslations } from 'next-intl';
import BrutalButton from './BrutalButton';

export default function ContactCTA() {
  const locale = useLocale();
  const t = useTranslations('contactCTA');

  return (
    <div className="my-20 md:my-30 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative accent - top-left */}
        <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-deep-brown border-3 border-deep-brown" aria-hidden="true" />

        {/* Decorative accent - bottom-right */}
        <div className="absolute -bottom-6 -right-6 w-12 h-12 md:w-16 md:h-16 bg-bronze border-3 border-deep-brown" aria-hidden="true" />

        {/* Main CTA Container */}
        <div className="bg-amber-gold border-5 border-deep-brown shadow-brutal-lg p-12 md:p-16 lg:p-20 text-center">
          {/* Heading */}
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-deep-brown mb-6 md:mb-8">
            {t('heading')}
          </h2>

          {/* Subheading */}
          <p className="font-body text-xl md:text-2xl text-deep-brown/90 mb-10 md:mb-12">
            {t('subheading')}
          </p>

          {/* CTA Button */}
          <BrutalButton
            href={`/${locale}/contact`}
            size="lg"
            className="bg-deep-brown text-warm-cream border-deep-brown hover:bg-deep-brown/90"
            aria-label={t('button')}
          >
            {t('button')} →
          </BrutalButton>

          {/* Secondary Info */}
          <p className="font-ui text-sm md:text-base text-deep-brown/70 mt-6">
            {t('responseTime')}
          </p>
        </div>
      </div>
    </div>
  );
}
