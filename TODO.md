# Personal Website TODO

**專案**：Young Tsai 個人品牌網站
**目標**：打造一人公司形象網站
**設計靈感**：Mitchell Sparrow (首選) + Akshay
**更新日期**：2025-12-13

---

## 🎯 設計方向

### 參考網站
1. **Mitchell Sparrow** - mitchellsparrow.com ⭐ 首選
   - 單頁式設計（smooth scroll）
   - Framer Motion 動畫
   - 技能視覺化（進度條）
   - 圖片豐富
   - Tech: Next.js + TypeScript + Tailwind + Framer Motion + Sanity CMS

2. **Akshay** - aksh-ai.com
   - 技能百分比展示（Computer Vision 95%）
   - 研究/成就展示
   - 個人化互動（Coffee with Shay）

3. **Lee Robinson** - leerob.com
   - 極簡主義
   - 以內容為王

### 核心特色（你的優勢）
- ✅ AI 聊天分身（右下角浮動按鈕）← 獨一無二
- ✅ Next.js 15 + MDX 部落格系統
- ✅ 10+ 年經驗 + CAIO 身份
- ✅ 數據成果（$1.2M saved, 50% growth, <5% turnover）
- ✅ AI 產品（Vaitor, Jutor, Cutor）
- ✅ 6 個進行中專案

---

## 📋 Phase 1: 內容更新（優先）

### 1.1 個人資料整合
- [ ] 更新 `knowledge/about-me.md`（AI 聊天知識庫）
  - LinkedIn 完整資訊
  - CAIO 職位 + Deputy CEO + CPO 經歷
  - AI 產品（Vaitor, Jutor, Cutor）
  - 教育背景（交大碩士、成大學士）
  - 成就（Meta LLM Top 8, Speaker）
  - 個人專案（JKSong, iMuzi, Hometaste 等）

### 1.2 首頁 Hero Section
- [ ] 重寫 `app/page.tsx`
  - 職位：CAIO at Junyi Academy
  - 一句話介紹：10+ years building data products and AI solutions
  - 亮點：Meta LLM Top 8 Finalist
  - CTA：[View AI Products] [Chat with AI] [Read Blog]

### 1.3 關於我頁面
- [ ] 更新 `app/about/page.tsx`
  - 完整職位時間線（2014-2025）
  - 教育背景（交大 + 成大）
  - 技能標籤（AI/ML, Data Product, Full-stack）
  - 成就數字（$1.2M, 50%, <5%, 10+ leaders）

### 1.4 專案頁面
- [ ] 重構 `app/projects/page.tsx`
  - **分類 1: AI Products**（最前面）
    - Vaitor (video tutor)
    - Jutor (AI English tutor)
    - Cutor (AI writing assistant)
  - **分類 2: Active Projects**（進行中接案）
    - Language Learning Platform - 語言學習平台
    - Professional Consultation Platform - 專業諮詢 API
    - Card Consultation Platform - 諮詢服務
    - Healthcare Platform - AWS 遷移 POC
    - AI Square - AI 學習平台
    - Medical Decision Platform - 醫療 AI 平台
  - **分類 3: Past Projects**（過去作品）
    - JKSong - 政治新聞投票平台
    - iMuzi - 聲樂學習平台
    - Hometaste - 美食預訂平台
    - Im-Here - EC 平台
    - SolveIssues - 政治議題平台
    - Chillchill - 農民民宿合作平台

### 1.5 部落格文章（至少 2 篇）
- [ ] 建立 `content/blog/meta-llm-taiwan-pitch.mdx`
  - 標題：Meta LLM Taiwan Pitch - Top 8 經驗分享
  - 內容：參賽過程、AI 產品設計、心得

- [ ] 建立 `content/blog/building-ai-tutor-jutor.mdx`
  - 標題：打造 AI 英語家教 Jutor 的旅程
  - 內容：技術架構、教育設計、挑戰

---

## 🎨 Phase 2: 設計優化（學習 Mitchell Sparrow）

### 2.1 安裝依賴
- [ ] 安裝 Framer Motion：`npm install framer-motion`
- [ ] 考慮 Sanity CMS（選配）：`npm install @sanity/client`

### 2.2 動畫效果
- [ ] 加入 Framer Motion 到主要元件
  - Hero section fade-in
  - Skills 進度條動畫
  - Projects 卡片 hover 效果
  - Smooth scroll between sections

### 2.3 單頁式改造（選配）
- [ ] 考慮改成單頁式設計
  - Home (Hero)
  - About (Experience Timeline)
  - Skills (Visual Progress Bars)
  - Projects (Categorized)
  - Blog (Recent Posts)
  - Contact
- [ ] 加入 smooth scroll navigation

### 2.4 技能視覺化
- [ ] 建立技能展示元件 `components/SkillsVisual.tsx`
  - AI/ML: 95% (OpenAI, Gemini, Hugging Face)
  - Data Product: 90% (10+ years)
  - Python: 90% (FastAPI, Flask)
  - Frontend: 85% (React, Next.js, Vue.js)
  - Data Engineering: 85% (SQL, BigQuery, ETL)
  - Full-stack: 80% (Ruby on Rails)

### 2.5 成就展示
- [ ] 建立成就卡片元件 `components/Achievements.tsx`
  - 🏆 Meta LLM Taiwan Pitch - Top 8 Finalist
  - 🎤 Speaker at MediaTek AI Conference
  - 💰 Saved $1.2M with data dashboard
  - 📈 Increased active users by 50%
  - 👥 Trained 10+ leaders, <5% turnover
  - 🎓 AWS Certified Solutions Architect

---

## 🚀 Phase 3: 功能增強

### 3.1 AI 聊天優化
- [ ] 測試 AI 聊天分身
- [ ] 更新 `knowledge/about-me.md` 確保回答準確
- [ ] 加入對話範例提示（"問我關於..."）

### 3.2 SEO 優化
- [ ] 更新 `app/layout.tsx` metadata
  - title: "Tzu-Yang Tsai | CAIO | AI & Data Product Leader"
  - description: "10+ years building AI and data products. CAIO at Junyi Academy. Meta LLM Top 8 Finalist."
- [ ] 建立 `app/sitemap.ts`
- [ ] 建立 `app/robots.ts`
- [ ] 加入 Open Graph images

### 3.3 Analytics
- [ ] 加入 Vercel Analytics
- [ ] 加入 Google Analytics（選配）

### 3.4 Contact Form
- [ ] 建立 `app/contact/page.tsx` 或加入首頁
- [ ] 整合表單服務（Vercel Forms 或 Resend）

---

## 📝 Phase 4: 內容撰寫

### 4.1 部落格文章計畫（SEO + 思想領導）
1. ✅ Welcome post（已有）
2. ✅ Building with Next.js 15（已有）
3. [ ] Meta LLM Taiwan Pitch - Top 8 經驗分享
4. [ ] 打造 AI 英語家教 Jutor 的旅程
5. [ ] From Deputy CEO to CAIO: My AI Transformation
6. [ ] How We Saved $1.2M with a Data Dashboard
7. [ ] 10 Years of Data Product Management Lessons
8. [ ] Building AI Agents for Education
9. [ ] Managing 6 Projects as a Solopreneur

### 4.2 專案說明完善
- [ ] 每個專案加入：
  - 問題陳述
  - 解決方案
  - 技術棧
  - 成果數據
  - GitHub 連結（如有）
  - Live Demo（如有）

---

## 🎯 Phase 5: 部署 & 行銷

### 5.1 部署準備
- [ ] 環境變數檢查（ANTHROPIC_API_KEY）
- [ ] Build 測試：`npm run build`
- [ ] 本地測試：`npm run start`

### 5.2 Vercel 部署
- [ ] 推送到 GitHub
- [ ] 連接 Vercel
- [ ] 設定環境變數
- [ ] 自訂網域（選配）

### 5.3 推廣
- [ ] LinkedIn 發布（更新個人網站連結）
- [ ] Medium 文章導流
- [ ] GitHub profile README 加入連結
- [ ] 均一官網加入個人網站連結（如適合）

---

## 📊 優先級排序

### 🔥 P0（立即完成）
1. 更新 `knowledge/about-me.md`（AI 聊天知識庫）
2. 重寫首頁 Hero Section
3. 重構專案頁面（分類：AI Products / Active / Past）
4. 測試 AI 聊天功能

### ⚡ P1（本週完成）
5. 更新關於我頁面（完整經歷）
6. 安裝 Framer Motion
7. 加入技能視覺化元件
8. 撰寫 1-2 篇部落格文章

### 💡 P2（下週完成）
9. 動畫效果實作
10. SEO 優化
11. Contact Form
12. 考慮單頁式改造

### 🌟 P3（未來優化）
13. Sanity CMS 整合
14. Analytics
15. 更多部落格文章
16. 自訂網域

---

## 🔗 資源連結

### 個人資訊來源
- LinkedIn: https://www.linkedin.com/in/tzu-yang-tsai/
- GitHub: https://github.com/Youngger9765
- Medium: Young @ Junyi
- 均一專訪: https://official.junyiacademy.org/blog/young_interview/

### 設計靈感
- Mitchell Sparrow: https://www.mitchellsparrow.com/
- Akshay: https://aksh-ai.com/
- Lee Robinson: https://leerob.com/

### 技術文件
- Next.js 15: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs
- MDX: https://mdxjs.com/

---

## 📝 Notes

### 技術決策
- ✅ Next.js 15 (App Router) - 已選定
- ✅ TypeScript - 已啟用
- ✅ Tailwind CSS - 已設定
- ✅ MDX Blog - 已實作
- ✅ Claude AI Chat - 已整合
- 🔄 Framer Motion - 待加入
- 🤔 Sanity CMS - 待評估

### 設計原則
- 專業極簡 + 科技感
- 單頁式流暢體驗（學 Mitchell）
- 技能視覺化（學 Akshay）
- 數據成果展示（突出優勢）
- AI 聊天分身（差異化）

### 內容策略
- 思想領導（essays on AI, product, leadership）
- 專案作品集（AI products + freelance work）
- 成就數字（$1.2M, 50%, <5%）
- 個人故事（Deputy CEO → CAIO）

---

**最後更新**：2025-12-13
