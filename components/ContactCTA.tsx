'use client';

import { useLocale, useTranslations } from 'next-intl';
import GradientButton from './GradientButton';

export default function ContactCTA() {
  const locale = useLocale();
  const t = useTranslations('contactCTA');

  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {t('heading')}
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          {t('subheading')}
        </p>
        <GradientButton
          href="https://calendly.com/young-tsai/ai"
          variant="primary"
          size="lg"
          external
        >
          {t('button')}
        </GradientButton>
        <p className="text-sm text-slate-500 mt-4">
          {t('responseTime')}
        </p>
      </div>
    </section>
  );
}
