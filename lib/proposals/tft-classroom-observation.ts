// TFT 觀課平台建置整合提案 - 2026年2月版
export const proposal = {
  slug: 'tft-classroom-observation',
  client: 'TFT 為台灣而教',
  logo: 'https://yt3.googleusercontent.com/ytc/AIdro_nfgUUqE2DBn3TxwpDXiJtgtc4MMgdzQ8cGBZztF5gGf74=s900-c-k-c0x00ffffff-no-rj',
  title: '觀課平台建置整合提案',
  version: '完整版',
  date: '2026年2月',

  // 品牌配色 - TFT 桃紅色系
  theme: {
    primary: '#E73373',      // TFT 桃紅（主色）
    primaryLight: '#F05A8C',
    accent: '#2D3142',       // 深灰藍（強調）
    colors: ['#FFD93D', '#FFFFFF', '#FF6B9D', '#1E3A5F'], // 裝飾圓圈：黃、白、粉紅、深藍
    featureColors: ['#E73373', '#F4A261', '#2A9D8F', '#264653', '#FF6B9D', '#1E3A5F', '#FFD93D'], // 功能卡 icon
  },

  summary: `三個月上線、半年試行可調三次；
220 萬從零打造專屬系統，高度彈性可調整；2 萬／年維護。
人數不限、組織可獨立分開運作，雲端與 AI 用多少付多少。
智慧財產版權歸公司所有。`,

  sections: {
    objective: {
      title: '一、專案目標',
      content: `建置一套專屬觀課平台，將既有觀課與評量流程（現行表單／Excel）系統化，支援班級管理、評量紀錄、成績彙整與查詢，確保資料可追溯、可長期使用，並符合基本資安與個資保護要求。

本平台以「支援專家判斷、降低行政與教學負擔」為核心設計原則，而非取代專業決策。`,
    },

    scope: {
      title: '二、系統規格與範圍（Phase 1）',
      roles: ['管理員', '教學教練', '學生（新手老師）'],
      rolesNote: '含角色權限控管',
      features: [
        {
          name: '班級與帳號管理',
          items: [
            '建立／編輯／停用班級',
            '教練與學生指派',
            '不採人頭訂閱制',
            '使用者人數與班級數於合理使用情境下不設上限',
          ],
        },
        {
          name: '作業與觀課紀錄',
          items: [
            '指派作業／觀課任務',
            '學生上傳文字、圖片',
            '教練填寫觀課紀錄',
          ],
        },
        {
          name: '評量規準',
          items: [
            '量化評分',
            '質性回饋',
            '評量歷史紀錄保存與查詢',
          ],
        },
        {
          name: '儀表板與資料檢視',
          items: [
            '學生個人學習與評量紀錄',
            '班級／整體成績彙整',
            '資料匯出（CSV）',
          ],
        },
        {
          name: '組織分割（多租戶）',
          items: [
            '支援多組織（Multi-tenant）分割設計',
            '各組織資料、帳號、班級相互獨立',
            '權限可依組織分層設定',
          ],
        },
        {
          name: '影片內容支援',
          items: [
            '不提供影片串流與影片檔案儲存',
            '支援於作業／觀課紀錄中嵌入（embed）YouTube 影片連結',
            '影片播放與流量依第三方平台規範為準',
          ],
        },
        {
          name: '資安與資料保護',
          items: ['HTTPS', '權限分級（RBAC）', '操作紀錄', '定期備份'],
        },
      ],
      excluded: ['外部系統整合', '功能擴充與流程變更'],
      architecture: {
        title: '角色互動流程',
        roles: [
          {
            id: 'admin',
            name: '管理員',
            icon: '👤',
            color: '#264653',
            actions: ['建立班級', '指派教練', '管理帳號', '查看報表'],
          },
          {
            id: 'coach',
            name: '教學教練',
            icon: '👨‍🏫',
            color: '#E73373',
            actions: ['指派作業', '填寫觀課紀錄', '評量打分', '給予回饋'],
          },
          {
            id: 'student',
            name: '學生（新手老師）',
            icon: '🎓',
            color: '#2A9D8F',
            actions: ['上傳作業', '觀看影片', '查看評量', '追蹤進度'],
          },
        ],
        flows: [
          { from: 'admin', to: 'coach', label: '指派班級' },
          { from: 'coach', to: 'student', label: '派發作業' },
          { from: 'student', to: 'coach', label: '繳交作業' },
          { from: 'coach', to: 'student', label: '評量回饋' },
        ],
        center: {
          name: '觀課平台',
          features: ['班級管理', '作業系統', '評量規準', '儀表板'],
        },
      },
    },

    timeline: {
      title: '三、時程規劃',
      summary: '總期程：約 9 個月（含開發 3 個月 + 試行 6 個月）',
      milestones: [
        {
          phase: '開發期',
          duration: '第 1～12 週',
          color: '#E73373',
          steps: [
            { week: '1～4', title: '知識轉譯', desc: '與領域專家確認評量邏輯、欄位與流程' },
            { week: '5～8', title: '系統開發', desc: '核心功能開發與整合' },
            { week: '9～12', title: '測試上線', desc: '測試、修正、正式上線' },
          ],
        },
        {
          phase: '試行期',
          duration: '第 13～36 週（6 個月）',
          color: '#2A9D8F',
          steps: [
            { week: '13～20', title: '第一輪試行', desc: '小規模試用、收集回饋、第一次調整' },
            { week: '21～28', title: '第二輪試行', desc: '擴大使用範圍、第二次調整' },
            { week: '29～36', title: '第三輪試行', desc: '全面試用、最終優化、正式交付' },
          ],
        },
      ],
      trialTerms: [
        '試行期間內包含三次「規格外但屬合理範圍」之修改',
        '以既有功能之流程調整、欄位微調、使用體驗優化為限',
        '不包含新增模組、重大邏輯重構或系統擴充',
      ],
      note: '實際時程依需求確認與回饋速度微調。試行期結束後，後續需求將依功能擴充流程另行評估與報價。',
    },

    advantages: {
      title: '四、方案優勢',
      intro: '相較市面既有觀課平台，本方案具備以下差異化優勢：',
      items: [
        {
          icon: '💰',
          title: '人數不限、無人頭費',
          desc: '不採訂閱制，使用人數不設限；避免隨組織規模成長而成本暴增',
        },
        {
          icon: '🎯',
          title: '專為 TFT 流程設計',
          desc: '非通用 SaaS 套裝，而是依 TFT 教學教練實際工作流程量身打造',
        },
        {
          icon: '🔧',
          title: '客製化評量規準',
          desc: '評量邏輯與欄位可依 TFT 現有表單轉譯，無需遷就系統預設框架',
        },
        {
          icon: '🔄',
          title: '試行期三次調整',
          desc: '半年試行內含三次規格調整，確保系統貼合實際使用情境',
        },
        {
          icon: '📦',
          title: '輕量化、免硬體',
          desc: '純雲端架構，無需另購錄影設備或 AI 分析硬體，降低導入門檻',
        },
        {
          icon: '🏛️',
          title: '可擴充至教育部計畫',
          desc: '架構保留彈性，未來可依教育部或其他單位需求延伸應用，支援跨組織、跨計畫部署',
        },
        {
          icon: '📱',
          title: 'RWD 響應式設計',
          desc: '電腦、平板、手機多裝置適配，教練與學生可隨時隨地使用',
        },
        {
          icon: '🤖',
          title: 'AI 多模態輔助（選配）',
          desc: '支援教材影音、文檔之 AI 摘要與分析，優化觀課紀錄整理與行政流程',
        },
        {
          icon: '🔐',
          title: '數據主權自主',
          desc: '資料自理自營，不經第三方平台，符合個資法與內部資安規範',
        },
        {
          icon: '📜',
          title: '版權完整歸屬',
          desc: '程式碼與智財權歸 TFT 所有，非授權租用，可自由調整與延伸',
        },
        {
          icon: '💳',
          title: '無租賃與授權費',
          desc: '一次建置，免年度授權費或人頭訂閱費，長期成本可控',
        },
        {
          icon: '⚡',
          title: '響應速度快',
          desc: '功能調整、Bug 修復直接處理，不需等待原廠排程或客服流程',
        },
        {
          icon: '🚫',
          title: '無廠商鎖定風險',
          desc: '不依賴特定平台，避免服務終止、功能調整或漲價風險',
        },
        {
          icon: '✅',
          title: '合規友善',
          desc: '易配合政府採購、資安稽核、內部審計等合規要求',
        },
      ],
    },

    principles: {
      title: '五、功能設計原則',
      items: [
        {
          name: '保留未來擴充彈性',
          details: [
            '系統架構與資料模型保留延伸其他用途之彈性',
            '可支援不同觀課情境、評量用途或教育應用',
          ],
        },
        {
          name: '以專業判斷為核心',
          details: [
            '系統以輔助專家判斷為主，不進行自動化決策',
            '避免過早自動化影響教育專業與公平性',
          ],
        },
      ],
    },

    pricing: {
      title: '六、費用說明',
      items: [
        {
          name: '一次性建置費',
          amount: 'NT$ 220 萬',
          note: '含系統設計、開發、測試與初次上線，不含第一年維護費',
        },
        {
          name: '年度維護費',
          amount: 'NT$ 2 萬 / 年',
          note: '系統正式上線後起算',
          includes: [
            '系統穩定性維護',
            'Bug 修復',
            '資安更新',
            '資料備份',
            '基本使用支援',
          ],
        },
        {
          name: '額外使用費（實報實銷）',
          subitems: [
            {
              name: '雲端資源',
              details: [
                '運算、資料庫、儲存、對外流量',
                '依實際使用量計費，由甲方自行負擔',
                '常態使用情境預估：約 5～10 萬 / 年',
              ],
            },
            {
              name: 'AI 輔助機制（選配）',
              details: [
                'Phase 1 核心功能不含 AI，不產生 Token 費用',
                'AI 不作為自動評分或決策依據',
                '可依需求彈性導入以下應用場景：',
              ],
              scenarios: [
                { category: '🎬 影音處理', desc: '影片轉逐字稿、自動摘要', usage: '中～高' },
                { category: '📝 教練輔助', desc: '學員進度摘要、評核建議、回饋草稿', usage: '中' },
                { category: '💬 智慧問答', desc: '學員 Chatbot、文件推薦', usage: '低～中' },
                { category: '📊 數據分析', desc: '群體分析、教學斷點偵測、統計協作', usage: '中' },
                { category: '📋 評量建置', desc: 'AI 導引輸入 Rubrics、格式轉換', usage: '低' },
                { category: '🔍 資源推薦', desc: '教案教材配對、影片推薦', usage: '低' },
                { category: '📄 文件處理', desc: '書面掃描 OCR、照片描述生成', usage: '低～中' },
              ],
            },
            {
              name: 'AI 使用費',
              details: [
                'AI API / Token 依實際使用量計費',
                '系統建置於 Google Cloud，可彈性串接 Vertex AI / Gemini 或其他服務',
                '由甲方自行負擔，用多少付多少',
              ],
            },
          ],
        },
      ],
      threeYearEstimate: {
        title: '七、三年總成本概念（估）',
        items: [
          { name: '建置費', amount: '220 萬' },
          { name: '維護費（2 年）', amount: '40 萬' },
          { name: '雲端使用費（估）', amount: '10～20 萬' },
          { name: 'AI Token', amount: '依實際使用量另計' },
        ],
        total: '約 270～280 萬（不含 AI Token）',
      },
    },

    cooperation: {
      title: '八、合作模式說明',
      intro: '本案可依甲方行政與採購流程，彈性採用下列任一模式：',
      modes: [
        {
          name: '個人專案約聘',
          details: [
            '以專案約聘方式加入甲方團隊',
            '負責系統設計、開發與技術主導',
          ],
        },
        {
          name: '外部執行顧問（委外承接）',
          details: [
            '以外部顧問／專案委外方式承接',
            '負責完整系統交付與成果驗收',
          ],
        },
      ],
      note: '無論採用何種模式，報價、交付內容、時程與責任範圍皆一致，僅差異於合約與行政形式。',
    },

    value: {
      title: '九、執行與價值參考',
      items: [
        {
          title: '極度熟悉班／生／師／課之核心系統模組',
          detail: '可直接將教育行政與教學流程轉譯為系統結構',
        },
        {
          title: '評量規準與診斷系統首席設計經驗',
          detail: '實際擔任均一教育平台多套診斷與評量系統之首席設計與製作，負責評量邏輯、資料結構與系統落地',
        },
        {
          title: '北市數位實驗中學課綱與評量從零到有經驗',
          detail: '參與課程架構、學習歷程與評量制度整體規劃',
        },
        {
          title: 'TFT、KIST、中央縣市局處 多次教育數位合作經驗',
          detail: '熟悉教育組織行政流程、決策節奏與現場限制，具備跨單位協調能力',
        },
        {
          title: 'AI × 教育 × 數位落地整合經驗',
          detail: '清楚理解 AI 在教育場域的可行性與風險邊界，能選擇合適的數位化策略，而非單純導入技術',
        },
      ],
    },
  },

  contact: {
    name: 'Young',
    email: 'young@example.com',
    calendar: 'https://calendly.com/young-tsai/ai',
    cta: '聯繫討論',
  },
};

export type Proposal = typeof proposal;
