'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
// import ProposalPasswordGate from '@/components/ProposalPasswordGate';
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

  // 直接顯示內容，不需要密碼
  return <ProposalContent proposal={proposal} />;
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
            {proposal.logo && (
              <div className="mb-6">
                <img
                  src={proposal.logo}
                  alt={proposal.client}
                  className="w-20 h-20 mx-auto rounded-full bg-white p-1 shadow-lg"
                />
              </div>
            )}
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
          <div className="flex justify-center gap-4 opacity-90">
            {theme.colors.map((color, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full shadow-md"
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
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
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
                  className="px-4 py-2 rounded-full text-base font-medium"
                  style={{
                    backgroundColor: `${theme.primary}10`,
                    color: theme.primary,
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-base text-gray-500 mt-2">{sections.scope.rolesNote}</p>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-gray-800">核心功能</h4>
            {sections.scope.features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} theme={theme} index={i} />
            ))}
          </div>

          {/* User Interaction Flow Diagram */}
          {sections.scope.architecture && (
            <div className="mt-10 mb-8">
              <h4 className="font-semibold text-gray-800 text-lg mb-6 text-center">
                {sections.scope.architecture.title}
              </h4>
              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Top Role Card (Admin) */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-48"
                    >
                      <div
                        className="rounded-2xl p-4 text-white shadow-xl"
                        style={{ backgroundColor: sections.scope.architecture.roles[0].color }}
                      >
                        <div className="text-center mb-3">
                          <span className="text-3xl">{sections.scope.architecture.roles[0].icon}</span>
                          <div className="font-bold mt-1 text-sm">{sections.scope.architecture.roles[0].name}</div>
                        </div>
                        <div className="space-y-1.5">
                          {sections.scope.architecture.roles[0].actions.map((action, j) => (
                            <div
                              key={j}
                              className="text-xs bg-white/20 rounded px-2 py-1 text-center"
                            >
                              {action}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Flow Arrow: Admin to Platform */}
                  <div className="flex justify-center mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xs bg-white px-2 py-1 rounded shadow text-gray-600 font-medium mb-1">指派班級</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Center Platform */}
                  <div className="flex justify-center my-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div
                        className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
                        style={{ backgroundColor: theme.primary }}
                      >
                        <span className="text-3xl mb-2">🖥️</span>
                        <span className="font-bold text-sm text-center px-2">{sections.scope.architecture.center.name}</span>
                      </div>
                      {/* Pulse animation */}
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-20"
                        style={{ backgroundColor: theme.primary }}
                      />
                    </motion.div>
                  </div>

                  {/* Platform Features */}
                  <div className="flex justify-center gap-2 flex-wrap mb-6">
                    {sections.scope.architecture.center.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Flow Arrows to Bottom Roles */}
                  <div className="flex justify-between max-w-2xl mx-auto px-8 mb-2">
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-gray-400 mb-1 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span className="text-xs bg-white px-2 py-1 rounded shadow text-gray-600 font-medium">派發作業</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-gray-400 mb-1 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span className="text-xs bg-white px-2 py-1 rounded shadow text-gray-600 font-medium">評量回饋</span>
                    </div>
                  </div>

                  {/* Bottom Role Cards (Coach & Student) */}
                  <div className="flex justify-center gap-8 mt-6">
                    {sections.scope.architecture.roles.slice(1).map((role, i) => (
                      <motion.div
                        key={role.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="w-48"
                      >
                        <div
                          className="rounded-2xl p-4 text-white shadow-xl"
                          style={{ backgroundColor: role.color }}
                        >
                          <div className="text-center mb-3">
                            <span className="text-3xl">{role.icon}</span>
                            <div className="font-bold mt-1 text-sm">{role.name}</div>
                          </div>
                          <div className="space-y-1.5">
                            {role.actions.map((action, j) => (
                              <div
                                key={j}
                                className="text-xs bg-white/20 rounded px-2 py-1 text-center"
                              >
                                {action}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Horizontal Flow Between Coach and Student */}
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500 bg-white px-3 py-2 rounded-lg shadow">
                      <span className="font-medium text-gray-600">繳交作業</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="font-medium text-gray-600">查看進度</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - Vertical Stack */}
                <div className="md:hidden space-y-4">
                  {/* Center Platform - First on mobile */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <span className="text-2xl mb-1">🖥️</span>
                      <span className="font-bold text-xs text-center px-2">{sections.scope.architecture.center.name}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center mt-3">
                      {sections.scope.architecture.center.features.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Role Cards - Stacked */}
                  {sections.scope.architecture.roles.map((role, i) => (
                    <motion.div
                      key={role.id}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div
                        className="rounded-2xl p-4 text-white shadow-xl"
                        style={{ backgroundColor: role.color }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{role.icon}</span>
                          <div className="font-bold text-sm">{role.name}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {role.actions.map((action, j) => (
                            <div
                              key={j}
                              className="text-xs bg-white/20 rounded px-2 py-1 text-center"
                            >
                              {action}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Section>

        {/* 時程規劃 */}
        <Section title={sections.timeline.title} theme={theme}>
          {/* Summary */}
          <div
            className="text-center p-4 rounded-xl mb-8 text-lg font-medium"
            style={{ backgroundColor: `${theme.primary}10`, color: theme.primary }}
          >
            {sections.timeline.summary}
          </div>

          {/* Visual Timeline */}
          <div className="space-y-8">
            {sections.timeline.milestones.map((milestone, i) => (
              <div key={i} className="relative">
                {/* Phase Header */}
                <div
                  className="flex items-center gap-3 mb-4 p-3 rounded-lg text-white"
                  style={{ backgroundColor: milestone.color }}
                >
                  <span className="text-2xl font-bold">{milestone.phase}</span>
                  <span className="text-sm opacity-80">（{milestone.duration}）</span>
                </div>

                {/* Steps */}
                <div className="grid gap-4 ml-4">
                  {milestone.steps.map((step, j) => (
                    <div
                      key={j}
                      className="relative pl-8 border-l-2 pb-4"
                      style={{ borderColor: milestone.color }}
                    >
                      <div
                        className="absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: milestone.color }}
                      >
                        {j + 1}
                      </div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <span
                          className="text-sm font-mono px-2 py-0.5 rounded"
                          style={{ backgroundColor: `${milestone.color}15`, color: milestone.color }}
                        >
                          第 {step.week} 週
                        </span>
                        <span className="font-semibold text-gray-800">{step.title}</span>
                      </div>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trial Terms */}
          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">試行期條款</h4>
            <ul className="text-amber-700 space-y-1">
              {sections.timeline.trialTerms.map((term, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span>•</span>
                  {term}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-base text-gray-500 mt-6 italic">
            {sections.timeline.note}
          </p>
        </Section>

        {/* 方案優勢 */}
        {sections.advantages && (
          <Section title={sections.advantages.title} theme={theme}>
            <p className="text-gray-700 mb-6">{sections.advantages.intro}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.advantages.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl border-2 transition-all hover:shadow-md"
                  style={{ borderColor: `${theme.primary}30` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

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
                <ul className="text-gray-600 text-base space-y-1">
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
                  style={{ backgroundColor: (theme.featureColors || theme.colors)[i % (theme.featureColors || theme.colors).length] }}
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
            href={proposal.contact.calendar || `mailto:${proposal.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
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
  theme: { primary: string; colors: string[]; featureColors?: string[] };
  index: number;
}) {
  const iconColors = theme.featureColors || theme.colors;
  return (
    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: iconColors[index % iconColors.length] }}
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
        <ul className="text-gray-600 text-base space-y-1">
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
