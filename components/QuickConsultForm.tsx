"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface QuickConsultFormProps {
  className?: string;
}

export default function QuickConsultForm({ className }: QuickConsultFormProps) {
  const t = useTranslations('projects');
  const [goal, setGoal] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note = [
      `${t('quickForm.labels.goal')}: ${goal || t('quickForm.placeholders.na')}`,
      `${t('quickForm.labels.timeline')}: ${timeline || t('quickForm.placeholders.na')}`,
      `${t('quickForm.labels.budget')}: ${budget || t('quickForm.placeholders.na')}`,
    ].join('\n');

    const params = new URLSearchParams();
    params.set('name', goal ? `Goal: ${goal}` : t('quickForm.placeholders.na'));
    if (email) {
      params.set('email', email);
    }
    // Some Calendly setups accept a1 as the first custom question; use it to pass the note.
    params.set('a1', note);

    const url = `https://calendly.com/young-tsai/ai?${params.toString()}`;
    // Copy to clipboard so user can paste into the notes field if prefill is ignored
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(note).then(() => setCopied(true)).catch(() => setCopied(false));
      setTimeout(() => setCopied(false), 2000);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br from-white/60 via-white to-blue-50 border border-gray-200 shadow-sm ${className || ''}`}>
          <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{t('quickForm.title')}</h3>
        <p className="text-sm text-gray-600">{t('quickForm.subtitle')}</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {copied && (
          <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            {t('quickForm.copied')}
          </div>
        )}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            {t('quickForm.labels.goal')}
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue resize-none"
            rows={3}
            placeholder={t('quickForm.placeholders.goal')}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            {t('quickForm.labels.email')}
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue"
            placeholder={t('quickForm.placeholders.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              {t('quickForm.labels.timeline')}
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="">{t('quickForm.placeholders.timeline')}</option>
              <option value={t('quickForm.options.timeline.week')}>{t('quickForm.options.timeline.week')}</option>
              <option value={t('quickForm.options.timeline.month')}>{t('quickForm.options.timeline.month')}</option>
              <option value={t('quickForm.options.timeline.quarter')}>{t('quickForm.options.timeline.quarter')}</option>
              <option value={t('quickForm.options.timeline.asap')}>{t('quickForm.options.timeline.asap')}</option>
              <option value={t('quickForm.options.timeline.tbd')}>{t('quickForm.options.timeline.tbd')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              {t('quickForm.labels.budget')}
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-blue focus:border-slate-blue"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">{t('quickForm.placeholders.budget')}</option>
              <option value={t('quickForm.options.budget.low')}>{t('quickForm.options.budget.low')}</option>
              <option value={t('quickForm.options.budget.mid')}>{t('quickForm.options.budget.mid')}</option>
              <option value={t('quickForm.options.budget.high')}>{t('quickForm.options.budget.high')}</option>
              <option value={t('quickForm.options.budget.tbd')}>{t('quickForm.options.budget.tbd')}</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-slate-blue text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
        >
          {t('quickForm.cta')}
        </button>
      </form>
    </div>
  );
}
