'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ProposalPasswordGate from '@/components/ProposalPasswordGate';
import { proposal as tftProposal } from '@/lib/proposals/tft-classroom-observation';

// 提案註冊表
const proposals: Record<string, typeof tftProposal> = {
  'tft-classroom-observation': tftProposal,
};

export default function ProposalPage() {
  const params = useParams();
  const slug = params.slug as string;
  const proposal = proposals[slug];

  if (!proposal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">提案不存在</h1>
          <p className="text-gray-500">請確認連結是否正確</p>
        </div>
      </div>
    );
  }

  const { theme } = proposal;

  return (
    <ProposalPasswordGate
      slug={slug}
      clientName={proposal.client}
      theme={theme}
    >
      <ProposalContent proposal={proposal} />
    </ProposalPasswordGate>
  );
}

function ProposalContent({ proposal }: { proposal: typeof tftProposal }) {
  const { theme, sections } = proposal;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <header
        className="relative py-20 md:py-28"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest opacity-70 mb-4">
              {proposal.client} · {proposal.date}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {proposal.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
              {proposal.summary}
            </p>
          </motion.div>
        </div>

        {/* Decorative circles */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <div className="flex justify-center gap-3 opacity-30">
            {theme.colors.map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* 專案目標 */}
        <Section title={sections.objective.title} theme={theme}>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {sections.objective.content}
          </p>
        </Section>

        {/* 系統規格 */}
        <Section title={sections.scope.title} theme={theme}>
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-3">使用角色</h4>
            <div className="flex flex-wrap gap-2">
              {sections.scope.roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${theme.primary}10`,
                    color: theme.primary,
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">{sections.scope.rolesNote}</p>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-gray-800">核心功能</h4>
            {sections.scope.features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} theme={theme} index={i} />
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">本階段不包含</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              {sections.scope.excluded.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-gray-400">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 時程規劃 */}
        <Section title={sections.timeline.title} theme={theme}>
          <div className="space-y-6">
            {sections.timeline.phases.map((phase, i) => (
              <div
                key={i}
                className="relative pl-8 border-l-2"
                style={{ borderColor: theme.primary }}
              >
                <div
                  className="absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px]"
                  style={{ backgroundColor: theme.primary }}
                />
                <h4 className="font-semibold text-gray-800 mb-2">{phase.name}</h4>
                <ul className="text-gray-600 space-y-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: theme.accent }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            {sections.timeline.note}
          </p>
        </Section>

        {/* 設計原則 */}
        <Section title={sections.principles.title} theme={theme}>
          <div className="grid md:grid-cols-2 gap-6">
            {sections.principles.items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-100 bg-gray-50"
              >
                <h4 className="font-semibold text-gray-800 mb-3">{item.name}</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {item.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 費用說明 */}
        <Section title={sections.pricing.title} theme={theme}>
          <div className="space-y-6">
            {sections.pricing.items.map((item, i) => (
              <PricingCard key={i} item={item} theme={theme} />
            ))}
          </div>

          {/* 三年總成本 */}
          <div
            className="mt-10 p-6 rounded-2xl text-white"
            style={{ backgroundColor: theme.primary }}
          >
            <h4 className="text-lg font-semibold mb-4">
              {sections.pricing.threeYearEstimate.title}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {sections.pricing.threeYearEstimate.items.map((est, i) => (
                <div key={i}>
                  <p className="text-sm opacity-70">{est.name}</p>
                  <p className="font-semibold">{est.amount}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-lg">
                <span className="opacity-70">三年總計：</span>
                <span className="font-bold">
                  {sections.pricing.threeYearEstimate.total}
                </span>
              </p>
            </div>
          </div>
        </Section>

        {/* 合作模式 */}
        <Section title={sections.cooperation.title} theme={theme}>
          <p className="text-gray-700 mb-6">{sections.cooperation.intro}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {sections.cooperation.modes.map((mode, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border-2 transition-colors hover:border-opacity-50"
                style={{ borderColor: theme.primary }}
              >
                <h4
                  className="font-semibold mb-2"
                  style={{ color: theme.primary }}
                >
                  {mode.name}
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {mode.details.map((detail, j) => (
                    <li key={j}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">
            {sections.cooperation.note}
          </p>
        </Section>

        {/* 執行價值 */}
        <Section title={sections.value.title} theme={theme}>
          <div className="space-y-4">
            {sections.value.items.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: theme.colors[i % theme.colors.length] }}
                >
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center p-10 rounded-2xl"
          style={{ backgroundColor: `${theme.primary}08` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: theme.primary }}
          >
            準備好開始了嗎？
          </h3>
          <p className="text-gray-600 mb-6">
            期待與您進一步討論專案細節
          </p>
          <a
            href={`mailto:${proposal.contact.email}?subject=${encodeURIComponent(`${proposal.client} - ${proposal.title}`)}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme.primary }}
          >
            {proposal.contact.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 border-t">
        <p>© {new Date().getFullYear()} · 此提案為機密文件，請勿外流</p>
      </footer>
    </div>
  );
}

// --- Sub-components ---

function Section({
  title,
  theme,
  children,
}: {
  title: string;
  theme: { primary: string };
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className="text-2xl font-bold mb-6 pb-2 border-b-2"
        style={{ borderColor: theme.primary, color: theme.primary }}
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function FeatureCard({
  feature,
  theme,
  index,
}: {
  feature: { name: string; items: string[] };
  theme: { primary: string; colors: string[] };
  index: number;
}) {
  return (
    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: theme.colors[index % theme.colors.length] }}
        >
          {index + 1}
        </div>
        <h5 className="font-semibold text-gray-800">{feature.name}</h5>
      </div>
      <ul className="text-gray-600 text-sm space-y-1 ml-11">
        {feature.items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({
  item,
  theme,
}: {
  item: {
    name: string;
    amount?: string;
    note?: string;
    includes?: string[];
    subitems?: Array<{ name: string; details: string[] }>;
  };
  theme: { primary: string; accent: string };
}) {
  return (
    <div className="p-6 rounded-xl border border-gray-200">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        {item.amount && (
          <span
            className="text-xl font-bold"
            style={{ color: theme.primary }}
          >
            {item.amount}
          </span>
        )}
      </div>
      {item.note && <p className="text-sm text-gray-500 mb-3">{item.note}</p>}
      {item.includes && (
        <ul className="text-gray-600 text-sm space-y-1">
          {item.includes.map((inc, i) => (
            <li key={i} className="flex items-center gap-2">
              <span style={{ color: theme.accent }}>✓</span>
              {inc}
            </li>
          ))}
        </ul>
      )}
      {item.subitems && (
        <div className="space-y-4 mt-4">
          {item.subitems.map((sub, i) => (
            <div key={i} className="pl-4 border-l-2 border-gray-200">
              <h5 className="font-medium text-gray-700 mb-1">{sub.name}</h5>
              <ul className="text-gray-500 text-sm space-y-1">
                {sub.details.map((d, j) => (
                  <li key={j}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
