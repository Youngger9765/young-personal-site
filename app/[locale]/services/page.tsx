"use client";

import Link from "next/link";
import { FaCompass, FaTools, FaMicrophone, FaHandshake, FaArrowRight } from "react-icons/fa";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  suitableFor: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  examples: string[];
}

const services: Service[] = [
  {
    id: "strategy",
    icon: <FaCompass className="w-12 h-12" />,
    title: "AI Strategy Consulting",
    tagline: "從迷霧到清晰的 AI 轉型路線圖",
    description: "AI 轉型戰略規劃、技術可行性評估、實施路線圖設計。不只告訴你該做什麼，更告訴你為什麼這樣做、如何做、以及如何衡量成功。",
    suitableFor: "想導入 AI 但不知從何開始的組織、需要驗證 AI 想法的團隊、準備進行 AI 轉型的企業",
    deliverables: [
      "AI 戰略報告（現況分析、機會識別、風險評估）",
      "技術架構建議（技術選型、基礎設施、成本估算）",
      "分階段實施計畫（Quick Wins → 短期目標 → 長期願景）",
      "ROI 預測與 KPI 設計"
    ],
    timeline: "4-6 週",
    pricing: "Starting at $20,000",
    examples: ["均一 AI 轉型策略", "企業 AI PoC 規劃", "醫療 AI 可行性評估"]
  },
  {
    id: "implementation",
    icon: <FaTools className="w-12 h-12" />,
    title: "AI Implementation & Development",
    tagline: "7 天從概念到可用 MVP",
    description: "AI MVP 快速開發、系統整合、技術指導。運用 Vibe Coding 方法論，快速驗證想法，降低風險，縮短上市時間。",
    suitableFor: "需要快速驗證 AI 想法的團隊、已有明確需求的專案、需要技術救援的開發團隊",
    deliverables: [
      "可運作的 AI 原型（含前後端、資料庫、AI 整合）",
      "完整技術文件（架構說明、API 文件、部署指南）",
      "雲端部署方案（Cloud Run / Supabase / GCP）",
      "成本優化建議與監控設定"
    ],
    timeline: "彈性（時薪制或專案制）",
    pricing: "$800/hour or project-based",
    examples: ["Jutor - AI English Tutor (Meta LLM Top 8)", "AI Square 多語言學習平台", "Medical Decision Platform 醫療決策平台"]
  },
  {
    id: "speaking",
    icon: <FaMicrophone className="w-12 h-12" />,
    title: "Speaking & Workshops",
    tagline: "讓團隊真正「會用」AI",
    description: "企業內訓、產業研討會、教師培訓。不只講理論，更帶實作；不只教工具，更教思維。",
    suitableFor: "想提升團隊 AI 素養的組織、需要教師 AI 培訓的學校、舉辦產業研討會的單位",
    deliverables: [
      "客製化課程內容（依產業與需求調整）",
      "實作工作坊（帶學員動手做）",
      "課後資源包（簡報、範例、工具清單）",
      "後續諮詢支援（Email / Slack）"
    ],
    timeline: "半天 or 全天工作坊",
    pricing: "Half-day from $3,000",
    examples: ["GAICONF: 均一如何教老師使用 AI", "台大創創: AI 商業模式解構", "MediaTek AI Conference"]
  },
  {
    id: "advisory",
    icon: <FaHandshake className="w-12 h-12" />,
    title: "Advisory & Retainer",
    tagline: "長期夥伴，持續賦能",
    description: "月度技術顧問、戰略諮詢、決策支援。像有個 CAIO 在你的團隊，但不用付全職薪水。",
    suitableFor: "需要持續 AI 指導的組織、正在進行長期專案的團隊、需要戰略夥伴的新創公司",
    deliverables: [
      "每月固定諮詢時數（視方案而定）",
      "優先回應（24 小時內回覆）",
      "戰略審查會議（每月一次）",
      "技術決策支援（架構審查、技術選型、成本優化）"
    ],
    timeline: "月度訂閱制",
    pricing: "$5,000/month (retainer)",
    examples: ["EdTech Startup 長期技術顧問", "Healthcare AI 專案陪跑", "企業 AI 轉型教練"]
  }
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all">
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-blue-600 dark:text-blue-400 mt-1">
          {service.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Suitable For */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">
          適合誰
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {service.suitableFor}
        </p>
      </div>

      {/* Deliverables */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">
          交付內容
        </h4>
        <ul className="space-y-2">
          {service.deliverables.map((item, index) => (
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
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">週期</div>
          <div className="font-semibold text-gray-900 dark:text-gray-100">{service.timeline}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">投資</div>
          <div className="font-semibold text-blue-600 dark:text-blue-400">{service.pricing}</div>
        </div>
      </div>

      {/* Examples */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">
          案例
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.examples.map((example, index) => (
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
        <span>諮詢此服務</span>
        <FaArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          從 AI 戰略到落地實施
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
          不只教你「如何做 AI」，更幫你「真正做出 AI」
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          結合 10+ 年產品與數據經驗、CAIO 領導視野、Meta LLM Top 8 技術實力，
          為教育、醫療、企業提供端到端的 AI 解決方案
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            預約免費諮詢
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            查看案例作品
          </Link>
        </div>
      </div>

      {/* Differentiation Statement */}
      <div className="max-w-4xl mx-auto mb-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">為什麼選擇我？</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold mb-2">三合一專家</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI Strategy + Implementation + Teaching<br/>
              不需要找 3 個人
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold mb-2">實戰驗證</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              自主 AI 產品 x3<br/>
              Meta LLM Top 8 肯定
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold mb-2">量化成果</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              $1.2M saved<br/>
              50% growth, &lt;5% turnover
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">我的工作方式</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">做給你看</h3>
            <p className="text-gray-600 dark:text-gray-400">
              快速 MVP 驗證想法<br/>
              建立技術基礎<br/>
              證明可行性
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">教你怎麼做</h3>
            <p className="text-gray-600 dark:text-gray-400">
              技術轉移<br/>
              團隊培訓<br/>
              文件完整
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">陪你一起做</h3>
            <p className="text-gray-600 dark:text-gray-400">
              持續指導<br/>
              解決問題<br/>
              策略調整
            </p>
          </div>
        </div>
        <div className="text-center mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            ✅ 不會被顧問綁架 · ✅ 團隊能力提升 · ✅ 持續創新不依賴外部
          </p>
        </div>
      </div>

      {/* Pricing Note */}
      <div className="max-w-4xl mx-auto text-center p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl mb-20">
        <h3 className="text-2xl font-bold mb-4">定價說明</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          以上價格為起始參考，最終報價將依專案範圍、複雜度、時程調整。<br/>
          歡迎預約免費諮詢，討論您的需求與客製化方案。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          *所有服務均可開立發票 · 支援台幣或美金計價
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl">
        <h2 className="text-4xl font-bold mb-4">準備開始了嗎？</h2>
        <p className="text-xl mb-8 opacity-90">
          讓我們討論如何幫助你的 AI 專案成功落地
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            LinkedIn 聊聊
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
            AI 助理快速詢問
          </button>
        </div>
      </div>
    </div>
  );
}
