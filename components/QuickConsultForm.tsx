"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface QuickConsultFormProps {
  className?: string;
}

export default function QuickConsultForm({ className }: QuickConsultFormProps) {
  const t = useTranslations('quickForm');
  const [goal, setGoal] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note = [
      `${t('labels.goal')}: ${goal || t('placeholders.na')}`,
      `${t('labels.timeline')}: ${timeline || t('placeholders.na')}`,
      `${t('labels.budget')}: ${budget || t('placeholders.na')}`,
    ].join('\n');

    const url = `https://calendly.com/young-tsai/ai?text=${encodeURIComponent(note)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br from-warm-cream/60 via-white to-blue-50 border border-gray-200 shadow-sm ${className || ''}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{t('title')}</h3>
        <p className="text-sm text-gray-600">{t('subtitle')}</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            {t('labels.goal')}
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue resize-none"
            rows={3}
            placeholder={t('placeholders.goal')}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              {t('labels.timeline')}
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="">{t('placeholders.timeline')}</option>
              <option value={t('options.timeline.week')}>{t('options.timeline.week')}</option>
              <option value={t('options.timeline.month')}>{t('options.timeline.month')}</option>
              <option value={t('options.timeline.quarter')}>{t('options.timeline.quarter')}</option>
              <option value={t('options.timeline.asap')}>{t('options.timeline.asap')}</option>
              <option value={t('options.timeline.tbd')}>{t('options.timeline.tbd')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              {t('labels.budget')}
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">{t('placeholders.budget')}</option>
              <option value={t('options.budget.low')}>{t('options.budget.low')}</option>
              <option value={t('options.budget.mid')}>{t('options.budget.mid')}</option>
              <option value={t('options.budget.high')}>{t('options.budget.high')}</option>
              <option value={t('options.budget.tbd')}>{t('options.budget.tbd')}</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-slate-blue text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
        >
          {t('cta')}
        </button>
      </form>
    </div>
  );
}
