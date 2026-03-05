// Fresenius Kabi 課程報價單 - 2026年3月版 (bilingual)

const i18n = {
  'zh-TW': {
    title: '企業內訓課程報價單',
    client: '費森尤斯卡比股份有限公司',
    labels: {
      quotation: '報價單',
      client: '報價對象',
      contact: '聯絡窗口',
      date: '報價日期',
      validity: '有效期限',
      days: '天',
      outcomes: '學員收穫',
      pricingSummary: '費用總覽',
      course: '課程',
      hours: '時數',
      fee: '費用',
      bundle: '兩場合報',
      notes: '備註',
      instructor: '講師簡介',
      ctaHint: '如有任何問題，歡迎隨時聯繫',
      cta: '聯繫討論',
      confidential: '此報價單為機密文件，請勿外流',
    },
    courses: [
      {
        id: 1,
        title: '自動化流程 — 不寫程式的工作串接術',
        hours: '1.5 小時',
        price: 'NT$8,000',
        priceNote: '含稅',
        audience: '全員皆適合，無需技術背景',
        format: '現場實作工作坊',
        description:
          '運用 Make / Zapier 等 no-code 工具，將日常數位工作流（Email、試算表、通訊軟體）自動串接。現場帶做，上完即可應用於自身工作場景。',
        outcomes: [
          '理解自動化流程的基本概念與適用情境',
          '實作至少一條自動化工作流',
          '能自行評估哪些日常工作適合自動化',
        ],
      },
      {
        id: 2,
        title: 'AI × 醫療長照 — 從開發到現場的實戰分享',
        hours: '1.5 小時',
        price: 'NT$15,000',
        priceNote: '含稅',
        audience: '主管、數位轉型推動者、醫療產業相關人員',
        format: '經驗分享 + 案例討論',
        description:
          '以大型醫學中心、中小型連鎖醫院等場域的 AI 產品開發經驗為基礎，分享從需求訪談、系統設計、法規合規到現場導入的完整歷程。其中包含實際案例：如何設計 AI 輔助的 SDM（共享決策）流程——從臨床情境分析、決策輔助工具設計、病人端衛教素材生成，到醫病溝通介面的落地，讓第一線人員真正採用的關鍵策略。',
        outcomes: [
          '了解醫療場域導入 AI 的實際挑戰與解法',
          '掌握「現場落地」vs「技術開發」的節奏差異',
          '理解 SDM 共享決策流程中 AI 的角色：臨床情境分析 → 決策輔助 → 衛教素材 → 醫病溝通',
          '獲得可複製的導入評估框架',
        ],
      },
    ],
    notes: [
      '含課前問卷調查，依貴司實際情境客製內容',
      '講師自備設備，貴司提供投影及網路環境即可',
      '建議人數：8–25 人',
      '地點：貴司辦公室（杭州北路）',
    ],
    instructor: {
      name: 'Young Tsai',
      title: 'AI 產品顧問',
      bio: '專精 AI 產品開發與傳統產業數位轉型，合作對象涵蓋醫療院所、護理機構、教育平台。現為多間機構技術顧問，實際參與大型醫學中心及中小型連鎖醫院等場域的 AI 系統設計與導入。',
    },
  },
  en: {
    title: 'Corporate Training Quotation',
    client: 'Fresenius Kabi',
    labels: {
      quotation: 'Quotation',
      client: 'Client',
      contact: 'Contact',
      date: 'Date',
      validity: 'Valid for',
      days: 'days',
      outcomes: 'Learning Outcomes',
      pricingSummary: 'Pricing Summary',
      course: 'Course',
      hours: 'Hours',
      fee: 'Fee',
      bundle: 'Bundle (both)',
      notes: 'Notes',
      instructor: 'About the Instructor',
      ctaHint: 'Questions? Feel free to reach out anytime.',
      cta: 'Get in Touch',
      confidential: 'This quotation is confidential. Please do not share.',
    },
    courses: [
      {
        id: 1,
        title: 'Workflow Automation — No-Code Integration',
        hours: '1.5 hours',
        price: 'NT$8,000',
        priceNote: 'tax incl.',
        audience: 'All staff — no technical background required',
        format: 'Hands-on workshop',
        description:
          'Use no-code tools like Make / Zapier to connect everyday digital workflows (Email, spreadsheets, messaging apps). Build a live automation during the session — ready to use immediately.',
        outcomes: [
          'Understand core concepts and use cases for workflow automation',
          'Build at least one working automated workflow',
          'Evaluate which daily tasks are suitable for automation',
        ],
      },
      {
        id: 2,
        title: 'AI × Healthcare — Field Experience from Dev to Deployment',
        hours: '1.5 hours',
        price: 'NT$15,000',
        priceNote: 'tax incl.',
        audience: 'Managers, digital transformation leads, healthcare professionals',
        format: 'Experience sharing + case discussion',
        description:
          'First-hand experience building AI products for major medical centers and regional hospital chains. Covers the full journey from requirement interviews, system design, regulatory compliance to on-site deployment. Includes a real-world case study: designing an AI-assisted SDM (Shared Decision-Making) workflow — from clinical scenario analysis, decision-aid tool design, patient education content generation, to the doctor-patient communication interface — and the key strategies to get frontline staff to actually adopt it.',
        outcomes: [
          'Understand real challenges and solutions for AI adoption in healthcare',
          'Grasp the pace gap between "field deployment" vs "tech development"',
          'Learn how AI fits into the SDM workflow: clinical analysis → decision aids → patient education → doctor-patient communication',
          'Gain a replicable framework for evaluating AI readiness',
        ],
      },
    ],
    notes: [
      'Includes a pre-workshop survey to customize content for your team',
      'Instructor provides own equipment — projector and Wi-Fi needed from your side',
      'Recommended group size: 8–25 participants',
      'Location: Your office (Hangzhou N. Rd.)',
    ],
    instructor: {
      name: 'Young Tsai',
      title: 'AI Product Consultant',
      bio: 'Specializes in AI product development and digital transformation for traditional industries. Currently serves as technical consultant for multiple healthcare institutions, with hands-on experience designing and deploying AI systems at major medical centers and regional hospital chains.',
    },
  },
} as const;

export const proposal = {
  slug: 'fresenius-kabi-2026',
  type: 'quotation' as const,
  contactPerson: '',
  date: '2026/03/05',
  validDays: 30,
  bundlePrice: 'NT$20,000',
  bundleHours: '3hr',
  theme: {
    primary: '#d97706', // amber-600
    accent: '#78350f',  // amber-900
  },
  contact: {
    email: 'young@example.com',
    calendar: 'https://calendly.com/young-tsai/ai',
  },
  i18n,
};

export type QuotationProposal = typeof proposal;
export type QuotationLocale = keyof typeof i18n;
