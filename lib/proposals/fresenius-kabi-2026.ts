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
        id: '1A',
        title: 'AI 一人軍團 — 自動化你的日常工作（講座版）',
        hours: '1.5 小時',
        price: 'NT$10,000',
        priceNote: '含稅',
        audience: '全員皆適合，無需技術背景',
        format: '經驗分享 + 現場示範',
        description:
          '我如何用 AI 聽說讀寫，同時管理 5 家公司、15 個專案。以真實工作流為基礎，拆解 AI 時代的四大核心能力：聽 — AI 語音辨識與智慧會議摘要（Plaud AI / ChatGPT Whisper）；說 — Mac 聽寫功能驅動 AI 即時協作，自然語言下達複雜指令（Mac Dictation / Claude）；讀 — 文件智慧解析與企業知識庫建構（NotebookLM / Claude Projects）；寫 — 從數據分析到簡報的自動化產出（Advanced Data Analysis / Gamma）。全程使用免費工具，講師現場示範完整流程。',
        outcomes: [
          '掌握 AI「聽說讀寫」四大核心能力，建立個人 AI 工作流',
          '聽 — 運用 AI 語音辨識自動產出結構化會議記錄與待辦事項',
          '說 — 用 Mac 聽寫功能對 AI 下達複雜指令，語音驅動即時協作',
          '讀 — 用 NotebookLM 即時解析長文件，建立可查詢的知識庫',
          '寫 — 了解從原始數據 → AI 分析 → 自動生成簡報的完整流程',
        ],
      },
      {
        id: '1B',
        title: 'AI 一人軍團 — 自動化你的日常工作（工作坊版）',
        hours: '1.5 小時',
        price: 'NT$15,000',
        priceNote: '含稅',
        audience: '全員皆適合，無需技術背景',
        format: '經驗分享 + 現場實作工作坊',
        description:
          '我如何用 AI 聽說讀寫，同時管理 5 家公司、15 個專案。以真實工作流為基礎，拆解 AI 時代的四大核心能力：聽 — AI 語音辨識與智慧會議摘要（Plaud AI / ChatGPT Whisper）；說 — Mac 聽寫功能驅動 AI 即時協作，自然語言下達複雜指令（Mac Dictation / Claude）；讀 — 文件智慧解析與企業知識庫建構（NotebookLM / Claude Projects）；寫 — 從數據分析到簡報的自動化產出（Advanced Data Analysis / Gamma）。全程使用免費工具，學員現場跟著做，上完課明天就能用。',
        outcomes: [
          '掌握 AI「聽說讀寫」四大核心能力，建立個人 AI 工作流',
          '聽 — 運用 AI 語音辨識自動產出結構化會議記錄與待辦事項',
          '說 — 用 Mac 聽寫功能對 AI 下達複雜指令，語音驅動即時協作',
          '讀 — 用 NotebookLM 即時解析長文件，建立可查詢的知識庫',
          '寫 — 實作從原始數據 → AI 分析 → 自動生成簡報的完整流程',
        ],
      },
      {
        id: 2,
        title: 'AI × 醫療長照 — 從開發到現場的實戰分享',
        hours: '1.5 小時',
        price: 'NT$10,000',
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
        id: '1A',
        title: 'AI One-Person Army — Automate Your Daily Work (Lecture)',
        hours: '1.5 hours',
        price: 'NT$10,000',
        priceNote: 'tax incl.',
        audience: 'All staff — no technical background required',
        format: 'Experience sharing + live demo',
        description:
          'How I use AI to Listen, Speak, Read, and Write — managing 5 companies and 15 projects simultaneously. Four core AI capabilities based on real workflows: Listen — AI speech recognition and intelligent meeting summarization (Plaud AI / ChatGPT Whisper); Speak — voice-driven AI collaboration via Mac Dictation, issue complex commands in natural language (Mac Dictation / Claude); Read — intelligent document parsing and enterprise knowledge base construction (NotebookLM / Claude Projects); Write — automated pipeline from data analysis to presentation (Advanced Data Analysis / Gamma). All free tools, instructor demonstrates the complete workflow live.',
        outcomes: [
          'Master the four core AI capabilities — Listen, Speak, Read, Write — to build a personal AI workflow',
          'Listen — Use AI speech recognition to auto-generate structured meeting notes and action items',
          'Speak — Use Mac Dictation to issue complex commands to AI in natural language for voice-driven collaboration',
          'Read — Parse long documents instantly with NotebookLM and build searchable knowledge bases',
          'Write — Understand the complete raw data → AI analysis → auto-generated presentation pipeline',
        ],
      },
      {
        id: '1B',
        title: 'AI One-Person Army — Automate Your Daily Work (Workshop)',
        hours: '1.5 hours',
        price: 'NT$15,000',
        priceNote: 'tax incl.',
        audience: 'All staff — no technical background required',
        format: 'Experience sharing + hands-on workshop',
        description:
          'How I use AI to Listen, Speak, Read, and Write — managing 5 companies and 15 projects simultaneously. Four core AI capabilities based on real workflows: Listen — AI speech recognition and intelligent meeting summarization (Plaud AI / ChatGPT Whisper); Speak — voice-driven AI collaboration via Mac Dictation, issue complex commands in natural language (Mac Dictation / Claude); Read — intelligent document parsing and enterprise knowledge base construction (NotebookLM / Claude Projects); Write — automated pipeline from data analysis to presentation (Advanced Data Analysis / Gamma). All free tools, hands-on practice, ready to use the next day.',
        outcomes: [
          'Master the four core AI capabilities — Listen, Speak, Read, Write — to build a personal AI workflow',
          'Listen — Use AI speech recognition to auto-generate structured meeting notes and action items',
          'Speak — Use Mac Dictation to issue complex commands to AI in natural language for voice-driven collaboration',
          'Read — Parse long documents instantly with NotebookLM and build searchable knowledge bases',
          'Write — Build a complete raw data → AI analysis → auto-generated presentation pipeline',
        ],
      },
      {
        id: 2,
        title: 'AI × Healthcare — Field Experience from Dev to Deployment',
        hours: '1.5 hours',
        price: 'NT$10,000',
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
  date: '2026/03/08',
  validDays: 30,
  bundles: [
    { label: '1A + 2', labelEn: '1A + 2', originalPrice: 'NT$20,000', bundlePrice: 'NT$16,000', hours: '3hr', save: 'NT$4,000' },
    { label: '1B + 2', labelEn: '1B + 2', originalPrice: 'NT$25,000', bundlePrice: 'NT$20,000', hours: '3hr', save: 'NT$5,000' },
  ],
  theme: {
    primary: '#d97706', // amber-600
    accent: '#78350f',  // amber-900
  },
  contact: {},
  i18n,
};

export type QuotationProposal = typeof proposal;
export type QuotationLocale = keyof typeof i18n;
