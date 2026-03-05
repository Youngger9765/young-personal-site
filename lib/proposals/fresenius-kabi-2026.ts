// Fresenius Kabi 課程報價單 - 2026年3月版
export const proposal = {
  slug: 'fresenius-kabi-2026',
  type: 'quotation' as const,
  client: '費森尤斯卡比股份有限公司',
  clientEn: 'Fresenius Kabi',
  contactPerson: 'Carolyn Huang',
  title: '企業內訓課程報價單',
  date: '2026/03/05',
  validDays: 30,

  theme: {
    primary: '#d97706', // amber-600
    accent: '#78350f',  // amber-900
  },

  courses: [
    {
      id: 1,
      title: '自動化流程 -- 不寫程式的工作串接術',
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
      title: 'AI x 醫療長照 -- 從開發到現場的實戰分享',
      hours: '1.5 小時',
      price: 'NT$15,000',
      priceNote: '含稅',
      audience: '主管、數位轉型推動者、醫療產業相關人員',
      format: '經驗分享 + 案例討論',
      description:
        '以長庚、仁愛等醫療院所的 AI 產品開發經驗為基礎，分享從需求訪談、系統設計、法規合規到現場導入的完整歷程，以及讓第一線人員真正採用的關鍵策略。',
      outcomes: [
        '了解醫療場域導入 AI 的實際挑戰與解法',
        '掌握「現場落地」vs「技術開發」的節奏差異',
        '獲得可複製的導入評估框架',
      ],
    },
  ],

  bundlePrice: 'NT$21,000',
  bundleHours: '3hr',

  notes: [
    '含課前需求訪談（30 分鐘線上），依貴司實際情境客製內容',
    '講師自備設備，貴司提供投影及網路環境即可',
    '建議人數：8-25 人',
    '地點：貴司辦公室（杭州北路）',
  ],

  instructor: {
    name: 'Young Tsai',
    title: 'AI 產品顧問',
    bio: '專精 AI 產品開發與傳統產業數位轉型，合作對象涵蓋醫療院所、護理機構、教育平台。現為多間機構技術顧問，實際參與長庚體系、仁愛醫院等場域的 AI 系統設計與導入。',
  },

  contact: {
    email: 'young@example.com',
    calendar: 'https://calendly.com/young-tsai/ai',
    cta: '聯繫討論',
  },
};

export type QuotationProposal = typeof proposal;
