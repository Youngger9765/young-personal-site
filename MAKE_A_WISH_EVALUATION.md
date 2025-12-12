# "許願功能" (Make a Wish) 評估報告

## 方案比較

### 方案 A: GitHub Issues

#### 優點 ✅
- **成本**: 完全免費，無需額外基礎設施
- **討論系統**: 內建留言、回覆、標記功能
- **版本控制**: 所有變更可追蹤
- **分類**: 可用 labels 分類（AI / EdTech / Healthcare / Enterprise）
- **投票機制**: 社群可用 👍 👎 反應投票
- **透明公開**: 展現開放態度，適合 open source 文化
- **開發者友善**: 技術客戶熟悉介面
- **API 整合**: 可用 GitHub API 在網站顯示統計

#### 缺點 ❌
- **門檻高**: 需要 GitHub 帳號（非技術客戶的障礙）
- **UX 較差**: 對非開發者不夠友善
- **公開曝光**: 可能讓人對創意保密感到卻步
- **IP 風險**: 公開提交的創意可能被他人抄襲
- **垃圾訊息**: 難以過濾低品質或惡意提交
- **不適合 NDA**: 敏感專案無法使用
- **專業形象**: 對企業客戶可能顯得不夠正式

#### 風險 ⚠️
1. **期待管理問題**: 太多 issues 未處理會損害專業形象
2. **時間成本**: 需定期回應、分類、關閉 issues
3. **品質控制**: 可能收到不切實際或超出能力範圍的需求
4. **聲譽風險**: 公開拒絕請求可能引發負面觀感
5. **資訊過載**: 難以快速篩選真正有價值的機會

#### 適用場景
- 目標客群主要是技術開發者
- 願意完全透明的開源專案
- 有時間管理社群互動

---

### 方案 B: Tally.so / Typeform ⭐ 推薦

#### 優點 ✅
- **專業 UX**: 美觀、直覺的表單介面
- **無帳號需求**: 降低提交門檻
- **結構化資料**: 可設計問卷收集關鍵資訊
  - 專案類型 (AI Product / EdTech / Healthcare)
  - 預算範圍 (<50K / 50-150K / 150K+ / Open)
  - 時程 (Urgent / 1-3 months / Flexible)
  - 專案簡述
  - 聯絡方式
- **私密性**: 提交內容不公開，保護客戶 IP
- **選擇性公開**: 可選擇展示「已接受的許願」（匿名化）
- **自動化**: Email 通知、自動回覆
- **整合容易**: Webhook 可串接 Notion / Airtable
- **免費方案**: Tally.so 無限制表單和回應

#### 缺點 ❌
- **無討論功能**: 沒有像 GitHub Issues 的對話串
- **需手動篩選**: 沒有自動投票/優先級機制
- **技術門檻**: 需要設定表單（但很簡單）

#### 風險 ⚠️
- **期待管理**: 仍需設定明確的回應時間與條件
- **垃圾訊息**: 可能收到無效提交（但可用 Captcha）

#### 成本
- **Tally.so**: 完全免費（推薦）
- **Typeform**: 免費方案 10 個問題 / 10 份回應/月

---

### 方案 C: GitHub Discussions

#### 優點 ✅
- 比 Issues 更輕鬆的討論氛圍
- 不會造成「需要修復」的壓力
- 可分類（Ideas / Show and tell / Q&A）
- 同樣免費、透明
- 可轉換為 Issue（若決定執行）

#### 缺點 ❌
- 仍需 GitHub 帳號
- 其他缺點與 Issues 類似

---

### 方案 D: Notion + 公開 Database

#### 優點 ✅
- 美觀的展示介面
- 可設定公開表單收集
- 內建分類、篩選、排序
- 可展示處理進度

#### 缺點 ❌
- 免費版限制多
- 表單功能較弱
- 需整合第三方表單工具

---

## 🎯 推薦方案：Tally.so 表單 + 網站展示區

### 實作架構

```
首頁與專案頁 CTA:
┌─────────────────────────────────────────┐
│ 💼 Book Consultation (免費諮詢 30 分鐘)   │  → Calendly
│ ✨ Make a Wish (專案許願)                 │  → Tally.so
└─────────────────────────────────────────┘
```

### Tally.so 表單設計

```yaml
表單標題: "✨ Make a Wish - 專案許願"
說明: |
  有個有趣的 AI / EdTech 專案想法嗎？
  填寫這份表單讓我知道！
  若專案契合且有趣，我會在兩週內主動聯繫。

必填欄位:
  1. 專案類型 (下拉選單)
     - AI Product Development
     - EdTech / Education Platform
     - Healthcare / Medical AI
     - Enterprise Solution
     - Other

  2. 預算範圍 (下拉選單)
     - < $50,000 TWD
     - $50,000 - $150,000 TWD
     - $150,000 - $500,000 TWD
     - > $500,000 TWD
     - Open to discussion
     - No budget (interesting idea only)

  3. 時程 (下拉選單)
     - Urgent (< 1 month)
     - Short-term (1-3 months)
     - Mid-term (3-6 months)
     - Long-term (6+ months)
     - Flexible

  4. 專案簡述 (長文字框，200-500 字)
     請簡單描述：
     - 要解決什麼問題？
     - 目標用戶是誰？
     - 為什麼這個專案有趣或重要？

選填欄位:
  5. Email (用於後續聯繫)
  6. 公司/組織名稱
  7. 參考資料連結 (網站、文件、競品)
  8. 其他補充資訊

自動回覆 Email:
  主旨: "✨ 收到你的許願了！"
  內容: |
    感謝你的提交！

    我會在兩週內評估這個專案。若專案契合且有趣，
    我會主動透過 Email 聯繫你討論細節。

    由於時間有限，若未收到回覆請見諒。
    你也可以透過 LinkedIn 直接聯繫我進行諮詢。

    — Young Tsai
    LinkedIn: https://www.linkedin.com/in/tzu-yang-tsai/
```

### 網站展示區（選配）

在專案頁面或首頁加入「Accepted Wishes」區塊：

```jsx
<section className="accepted-wishes">
  <h2>✨ Wishes Granted</h2>
  <p>專案從許願到實現</p>

  <div className="wish-cards">
    <WishCard
      category="EdTech"
      description="AI-powered language learning platform"
      status="In Development"
      anonymized={true}
    />
    // ... 其他已接受的許願（匿名化）
  </div>
</section>
```

---

## ⚖️ 最終建議

### 階段 1: 先用 Tally.so (立即實作)

**原因**:
1. ✅ 專業形象，適合企業客戶
2. ✅ 無技術門檻，任何人都能提交
3. ✅ 保護客戶 IP
4. ✅ 結構化資料，便於篩選
5. ✅ 免費且快速上線
6. ✅ 期待管理容易（自動回覆）

**實作步驟**:
1. 在 Tally.so 建立表單（15 分鐘）
2. 設定自動回覆 Email
3. 在網站加入 CTA 按鈕
4. 串接 Email 通知（收到提交時通知你）

### 階段 2: 評估後考慮 GitHub Discussions (3-6 個月後)

**時機**:
- 若許願功能反應良好
- 若目標客群主要是技術人員
- 若想建立社群討論氛圍

**混合使用**:
- Tally.so: 接收所有提交（含非技術客戶）
- GitHub Discussions: 公開討論已接受的專案（技術社群）

---

## 📊 決策樹

```
有 AI/EdTech 專案想法
    ↓
非技術客戶 OR 需保密
    ↓ YES
使用 Tally.so 表單
    ↓
你評估後覺得有趣
    ↓ YES
主動聯繫討論
    ↓
決定執行
    ↓
(選配) 在網站展示此案例（匿名）
    ↓
(選配) 若適合，在 GitHub Discussions 公開討論技術細節
```

---

## 🎯 行動項目

### 立即執行
- [ ] 在 Tally.so 建立「Make a Wish」表單
- [ ] 設定自動回覆 Email
- [ ] 在專案頁面加入 CTA 按鈕
- [ ] 測試表單提交流程

### 可選執行
- [ ] 建立 Notion 資料庫追蹤提交
- [ ] 設定 Zapier/Make 自動化（Tally → Notion）
- [ ] 在網站建立「Wishes Granted」展示區
- [ ] 設定每月檢視許願的提醒

---

**建議**: 先用 Tally.so 試行 3 個月，根據反應調整策略。
