"use client";

import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { FaCompass, FaTools, FaMicrophone, FaHandshake, FaArrowRight, FaUsers, FaRocket, FaCheckCircle, FaCalendarAlt, FaClock, FaLaptopCode, FaFileAlt, FaGraduationCap, FaCog, FaLightbulb, FaMagic, FaComments } from "react-icons/fa";
import ContactCTA from '@/components/ContactCTA';

// Featured Plan Card Component - 精選方案卡片
function FeaturedPlanCard({ planType }: { planType: 'coaching' | 'workshop' }) {
  const t = useTranslations('services');
  
  const gradients = {
    coaching: "from-violet-600 via-purple-600 to-indigo-600",
    workshop: "from-amber-500 via-orange-500 to-red-500"
  };
  
  const icons = {
    coaching: <FaUsers className="w-8 h-8" />,
    workshop: <FaRocket className="w-8 h-8" />
  };

  const gradient = gradients[planType];
  const icon = icons[planType];

  // Build deliverables dynamically based on plan type
  const getDeliverables = () => {
    if (planType === 'coaching') {
      return [
        {
          title: t('coaching.deliverables1Title'),
          items: [t('coaching.deliverables1Item1'), t('coaching.deliverables1Item2')]
        },
        {
          title: t('coaching.deliverables2Title'),
          items: [t('coaching.deliverables2Item1'), t('coaching.deliverables2Item2')]
        }
      ];
    } else {
      return [
        {
          title: t('workshop.deliverables1Title'),
          items: [t('workshop.deliverables1Item1'), t('workshop.deliverables1Item2')]
        },
        {
          title: t('workshop.deliverables2Title'),
          items: [t('workshop.deliverables2Item1'), t('workshop.deliverables2Item2')]
        },
        {
          title: t('workshop.deliverables3Title'),
          items: [t('workshop.deliverables3Item1'), t('workshop.deliverables3Item2'), t('workshop.deliverables3Item3')]
        }
      ];
    }
  };

  const getFlexibility = () => {
    if (planType === 'coaching') {
      return [
        t('coaching.flexibility1'),
        t('coaching.flexibility2'),
        t('coaching.flexibility3'),
        t('coaching.flexibility4')
      ];
    }
    return [];
  };

  const getRequirements = () => {
    if (planType === 'coaching') {
      return [t('coaching.requirement1'), t('coaching.requirement2')];
    } else {
      return [
        t('workshop.requirement1'),
        t('workshop.requirement2'),
        t('workshop.requirement3'),
        t('workshop.requirement4'),
        t('workshop.requirement5')
      ];
    }
  };

  const getLearnings = () => {
    if (planType === 'coaching') {
      return [
        {
          title: t('coaching.learning1Title'),
          items: [
            t('coaching.learning1Item1'),
            t('coaching.learning1Item2'),
            t('coaching.learning1Item3'),
            t('coaching.learning1Item4')
          ]
        },
        {
          title: t('coaching.learning2Title'),
          items: [
            t('coaching.learning2Item1'),
            t('coaching.learning2Item2'),
            t('coaching.learning2Item3')
          ]
        },
        {
          title: t('coaching.learning3Title'),
          items: [
            t('coaching.learning3Item1'),
            t('coaching.learning3Item2'),
            t('coaching.learning3Item3'),
            t('coaching.learning3Item4')
          ]
        }
      ];
    }
    return [];
  };

  const getExtras = () => {
    if (planType === 'coaching') {
      return [t('coaching.extra1'), t('coaching.extra2')];
    }
    return [];
  };

  const deliverables = getDeliverables();
  const flexibility = getFlexibility();
  const requirements = getRequirements();
  const learnings = getLearnings();
  const extras = getExtras();

  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500`}></div>
      
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 h-full border border-gray-100 dark:border-gray-800">
        {/* Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-1.5 bg-gradient-to-r ${gradient} text-white text-sm font-bold rounded-full`}>
            {t(`${planType}.badge`)}
          </span>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} text-white`}>
            {icon}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {t(`${planType}.title`)}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t(`${planType}.subtitle`)}
        </p>

        {/* Pricing */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {t(`${planType}.price`)}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-lg">{t(`${planType}.priceNote`)}</span>
          </div>
          <div className="mt-2 flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4" />
              {t(`${planType}.duration`)}
            </span>
            <span className="flex items-center gap-2">
              <FaClock className="w-4 h-4" />
              {t(`${planType}.frequency`)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {t(`${planType}.description`)}
        </p>

        {/* Flexibility - only show if has items */}
        {flexibility.length > 0 && (
          <div className="mb-6">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <FaCog className="w-4 h-4" />
              {t('page.flexibilityTitle')}
            </h4>
            <ul className="space-y-2">
              {flexibility.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deliverables */}
        <div className="mb-6 space-y-4">
          {deliverables.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                {sectionIndex === 0 && <FaFileAlt className="w-4 h-4" />}
                {sectionIndex === 1 && <FaLaptopCode className="w-4 h-4" />}
                {sectionIndex === 2 && <FaMagic className="w-4 h-4" />}
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Requirements */}
        {requirements.length > 0 && (
          <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-sm text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <FaLightbulb className="w-4 h-4" />
              {t('page.requirementsTitle')}
            </h4>
            <ul className="space-y-1.5">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400">
                  <span className="mt-0.5">📌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings - only for coaching plan */}
        {learnings.length > 0 && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaGraduationCap className="w-5 h-5" />
              {t('page.learningsTitle')}
            </h4>
            <div className="grid gap-4">
              {learnings.map((learning, learningIndex) => (
                <div key={learningIndex} className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {learningIndex + 1}. {learning.title}
                  </h5>
                  <ul className="space-y-1">
                    {learning.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <span className="text-green-500">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extras */}
        {extras.length > 0 && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-sm text-green-800 dark:text-green-300 uppercase tracking-wider mb-2">
              {t('page.promiseTitle')}
            </h4>
            <ul className="space-y-1.5">
              {extras.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-400">
                  <FaCheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Link
          href="https://www.linkedin.com/in/tzu-yang-tsai/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r ${gradient} text-white rounded-xl font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg`}
        >
          <FaComments className="w-5 h-5" />
          <span>{t('page.consultThisPlan')}</span>
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function ServiceCard({ serviceType }: { serviceType: 'strategyConsulting' | 'implementation' | 'speakingWorkshop' | 'advisory' }) {
  const t = useTranslations('services');
  
  const icons = {
    strategyConsulting: <FaCompass className="w-12 h-12" />,
    implementation: <FaTools className="w-12 h-12" />,
    speakingWorkshop: <FaMicrophone className="w-12 h-12" />,
    advisory: <FaHandshake className="w-12 h-12" />
  };

  const deliverables = [
    t(`${serviceType}.deliverable1`),
    t(`${serviceType}.deliverable2`),
    t(`${serviceType}.deliverable3`),
    t(`${serviceType}.deliverable4`)
  ];

  const examples = [
    t(`${serviceType}.example1`),
    t(`${serviceType}.example2`),
    t(`${serviceType}.example3`)
  ];

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all">
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-blue-600 dark:text-blue-400 mt-1">
          {icons[serviceType]}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{t(`${serviceType}.title`)}</h3>
          <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
            {t(`${serviceType}.tagline`)}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {t(`${serviceType}.description`)}
      </p>

      {/* Suitable For */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">
          {t('page.suitableFor')}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {t(`${serviceType}.suitableFor`)}
        </p>
      </div>

      {/* Deliverables */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">
          {t('page.deliverables')}
        </h4>
        <ul className="space-y-2">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline & Pricing */}
      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{t('page.timeline')}</div>
          <div className="font-semibold text-gray-900 dark:text-gray-100">{t(`${serviceType}.timeline`)}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{t('page.investment')}</div>
          <div className="font-semibold text-blue-600 dark:text-blue-400">{t(`${serviceType}.pricing`)}</div>
        </div>
      </div>

      {/* Examples */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">
          {t('page.examples')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
            >
              {example}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href="https://www.linkedin.com/in/tzu-yang-tsai/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
      >
        <span>{t('page.consultThisService')}</span>
        <FaArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t('page.heroTitle')}
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
          {t('page.heroSubtitle')}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          {t('page.heroDescription')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('page.ctaConsult')}
          </Link>
          <Link
            href={`/${locale}/projects`}
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {t('page.ctaPortfolio')}
          </Link>
        </div>
      </div>

      {/* Differentiation Statement */}
      <div className="max-w-4xl mx-auto mb-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">{t('page.whyChooseMe')}</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold mb-2">{t('page.expert3in1')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t('page.expert3in1Desc')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold mb-2">{t('page.battleTested')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t('page.battleTestedDesc')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold mb-2">{t('page.quantifiedResults')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t('page.quantifiedResultsDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Plans Section - 精選方案 */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-600 to-orange-500 text-white text-sm font-bold rounded-full mb-4">
            {t('page.featuredBadge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('page.featuredTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('page.featuredSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeaturedPlanCard planType="coaching" />
          <FeaturedPlanCard planType="workshop" />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm font-medium">
              {t('page.otherServices')}
            </span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <ServiceCard serviceType="strategyConsulting" />
        <ServiceCard serviceType="implementation" />
        <ServiceCard serviceType="speakingWorkshop" />
        <ServiceCard serviceType="advisory" />
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">{t('page.workProcess')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('page.step1Title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t('page.step1Desc')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('page.step2Title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t('page.step2Desc')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('page.step3Title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {t('page.step3Desc')}
            </p>
          </div>
        </div>
        <div className="text-center mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {t('page.processGuarantee')}
          </p>
        </div>
      </div>

      {/* Pricing Note */}
      <div className="max-w-4xl mx-auto text-center p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl mb-20">
        <h3 className="text-2xl font-bold mb-4">{t('page.pricingNote')}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
          {t('page.pricingNoteDesc')}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t('page.pricingNoteFooter')}
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl">
        <h2 className="text-4xl font-bold mb-4">{t('page.readyToStart')}</h2>
        <p className="text-xl mb-8 opacity-90">
          {t('page.readyToStartDesc')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            {t('page.linkedinChat')}
          </Link>
          <button
            onClick={() => {
              const chatWidget = document.querySelector('[data-chat-widget]') as HTMLElement;
              if (chatWidget) {
                chatWidget.click();
              }
            }}
            className="px-8 py-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors font-semibold"
          >
            {t('page.aiAssistant')}
          </button>
        </div>
      </div>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
