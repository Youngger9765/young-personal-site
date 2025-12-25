# Skills Usage Examples

> **Real-world examples of using project skills for young-personal-site**

---

## Example 1: Adding a New Project

### Scenario
User wants to add a new project "Duotopia" to the portfolio.

### User Request
```
新增 Duotopia 專案，這是一個仿照 Duolingo 的遊戲化學習平台
```

### Skill Activation
**content-update** skill auto-activates (triggers: "新增專案")

### Workflow

**Step 1: Gather Information**
```
Claude: "I'll use the content-update skill to add this project. I need:

1. 中文名稱: Duotopia 多鄰國風格學習平台
2. English name: Duotopia - Gamified Learning Platform
3. 中文描述: [user provides]
4. English description: [user provides]
5. 專案分類: 教育科技
6. 圖片: Do you have a banner image?"

User: "圖片在 ~/Downloads/duotopia-banner.jpg"
```

**Step 2: Update Translation Files**
```bash
# Reads messages/zh-TW.json and messages/en.json
# Adds new project entry to both files
```

**Step 3: Add Image**
```bash
# Optimizes image (if > 500KB)
# Moves to public/images/projects/duotopia-banner.jpg
# Updates image mappings
```

**Step 4: Test**
```bash
npm run dev
# Tests:
# - /zh-TW/projects (new project appears)
# - /en/projects (new project appears)
# - Image loads correctly
# - Text displays properly
```

**Step 5: Deploy**
```bash
git add messages/ public/images/
git commit -m "feat: add Duotopia project with bilingual content"
git push
```

### Result
✅ Project added to both language versions
✅ Image optimized and displayed
✅ Bilingual content consistent
✅ Deployed to production

---

## Example 2: Design Improvement

### Scenario
User feels the home page hero section looks cramped.

### User Request
```
首頁的 hero section 看起來很擠，可以改進一下設計嗎？
```

### Skill Activation
**design-improvement** skill auto-activates (triggers: "設計", "改進")

### Workflow

**Step 1: Analyze Current Design**
```
Claude reads: app/[locale]/page.tsx

Current issues identified:
- Padding too small (py-8 → should be py-16)
- Font size not responsive (text-3xl → should scale)
- No gradient background
- Spacing between elements tight
```

**Step 2: Propose Improvements (CARIO)**
```markdown
📋 Context
- Page: Home page hero section
- Current: Simple layout with minimal spacing
- Issue: Feels cramped, not impressive

❓ Problems Identified
1. Vertical padding only 32px (py-8)
2. Title not responsive (fixed text-3xl)
3. Plain white background
4. No visual hierarchy

🎯 Improvement Options

Option A: Minimal changes
- Increase padding: py-8 → py-12
- Add responsive text: text-3xl → text-4xl md:text-5xl
Time: 10 min

Option B: Moderate redesign (RECOMMENDED)
- Padding: py-8 → py-16 md:py-24
- Typography: Responsive + gradient text
- Background: Gradient from warm-cream to white
- Add animations: Framer Motion fade-in
Time: 20-30 min

Option C: Major overhaul
- Complete redesign with hero image
- Complex animations
- Multi-section hero
Time: 1-2 hours

💡 Recommendation: Option B
- Balances improvement vs time
- Follows project design principles
- Responsive and professional

⚡ Impact
- Files: app/[locale]/page.tsx
- Testing: Mobile, tablet, desktop
- Deploy: Automatic via Vercel
```

**Step 3: Get Confirmation**
```
Claude: "Should I proceed with Option B improvements?"
User: "Yes, go ahead"
```

**Step 4: Implement**
```tsx
// Before
<section className="py-8">
  <h1 className="text-3xl font-bold">Young Yang</h1>
  <p className="text-base">AI Education Consultant</p>
</section>

// After
<section className="py-16 md:py-24 bg-gradient-to-br from-warm-cream via-white to-blue-50">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center"
  >
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold
                   bg-gradient-to-r from-slate-600 to-slate-800
                   bg-clip-text text-transparent mb-6">
      Young Yang
    </h1>
    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
      AI Education Consultant
    </p>
  </motion.div>
</section>
```

**Step 5: Test Responsive**
```bash
npm run dev

# Test breakpoints:
# - Mobile (375px): ✅ Text readable, proper spacing
# - Tablet (768px): ✅ Layout balanced
# - Desktop (1280px): ✅ Hero prominent, centered
```

**Step 6: Commit and Deploy**
```bash
git add app/[locale]/page.tsx
git commit -m "style: improve home page hero with better spacing and gradient"
git push
```

### Result
✅ Hero section more spacious
✅ Responsive typography
✅ Professional gradient background
✅ Smooth animations
✅ Tested on all devices

---

## Example 3: Pre-Deployment Check

### Scenario
User has made several changes and wants to deploy.

### User Request
```
我修改了一些內容，準備部署了
```

### Skill Activation
**deploy-check** skill auto-activates (triggers: "部署")

### Workflow

**Step 1: Build Verification**
```bash
Claude: "Running pre-deployment checks..."

npm run build

Output:
✓ Creating an optimized production build
✓ Compiled successfully
✓ Generating static pages (10/10)
✓ Finalizing page optimization

✅ Build successful
```

**Step 2: Type Check**
```bash
npx tsc --noEmit

✅ No type errors found
```

**Step 3: Page Accessibility**
```bash
npm run dev

Testing routes:
✅ /zh-TW - loads correctly
✅ /zh-TW/projects - displays all projects
✅ /zh-TW/speaking - events list OK
✅ /zh-TW/about - content displays
✅ /en - loads correctly
✅ /en/projects - displays all projects
✅ /en/speaking - events list OK
✅ /en/about - content displays
```

**Step 4: Bilingual Check**
```
Language Switcher Test:
✅ zh-TW → en: Works, preserves route
✅ en → zh-TW: Works, preserves route
✅ Content updates correctly
```

**Step 5: Image Check**
```bash
# All images present
ls public/images/projects/*.jpg
✅ duotopia-banner.jpg (425KB)
✅ other-project.jpg (380KB)

# No oversized images
find public/images/ -size +500k
✅ None found
```

**Step 6: Console Check**
```
Browser DevTools → Console:
✅ No JavaScript errors
✅ No 404s
✅ No hydration errors
✅ No React warnings
```

**Step 7: Approval**
```
Claude: "All checks passed! ✅

Summary:
- Build: Success
- Type check: No errors
- Pages: All accessible (zh-TW & en)
- Images: Optimized and loading
- Console: Clean

Ready to deploy. Proceed with git push?"

User: "Yes"
```

**Step 8: Deploy**
```bash
git push origin main

# Monitors Vercel deployment
Vercel: Building...
Vercel: Deploying...
Vercel: ✅ Ready (https://your-site.vercel.app)
```

**Step 9: Post-Deploy Verification**
```
Production checks:
✅ Home page loads
✅ Projects page displays new project
✅ Images load correctly
✅ Both languages work
✅ No errors in console

✅ Deployment successful!
```

### Result
✅ All pre-deployment checks passed
✅ No issues detected
✅ Successful deployment
✅ Production site verified

---

## Example 4: Combined Workflow

### Scenario
User wants to add a speaking event with design polish and deploy.

### User Request
```
新增一場演講活動（MediaTek AI 教育），並確保設計專業，然後部署
```

### Skills Activated
1. **content-update** (新增演講)
2. **design-improvement** (確保設計專業)
3. **deploy-check** (部署)

### Workflow

**Phase 1: Content Update**

```
content-update skill:

Step 1: Gather event info
- Event name (zh-TW/en): MediaTek AI 教育 / MediaTek AI Education
- Date: 2024-11-15
- Location: MediaTek HQ / 聯發科總部
- Description: [user provides both languages]
- Image: ~/Downloads/mediatek-event.jpg

Step 2: Update translation files
- messages/zh-TW.json → speaking.events[]
- messages/en.json → speaking.events[]

Step 3: Add image
- Optimize mediatek-event.jpg (650KB → 420KB)
- Move to public/images/speaking/

Step 4: Update valid slugs
- app/[locale]/speaking/[slug]/page.tsx

✅ Content added
```

**Phase 2: Design Improvement**

```
design-improvement skill:

Step 1: Analyze event card design
- Current: Basic card layout
- Improvement needed: Make more prominent

Step 2: Propose changes
📋 Speaking event cards need visual polish

💡 Recommended changes:
1. Add hover animation (scale + shadow)
2. Better typography (date formatting)
3. Event type badge with color coding
4. Responsive image sizing

Step 3: Implement
- Update SpeakingCard component
- Add Framer Motion hover effects
- Improve responsive layout

✅ Design polished
```

**Phase 3: Deploy Check**

```
deploy-check skill:

Step 1: Build check
npm run build → ✅ Success

Step 2: Type check
npx tsc --noEmit → ✅ No errors

Step 3: Page tests
✅ /zh-TW/speaking - new event appears
✅ /en/speaking - new event appears
✅ /zh-TW/speaking/mediatek-ai-education-2024 - detail page loads
✅ Image displays correctly

Step 4: Responsive test
✅ Mobile, tablet, desktop all good

Step 5: Console check
✅ No errors

✅ All checks passed
```

**Phase 4: Deployment**

```bash
git add messages/ public/images/ app/
git commit -m "feat: add MediaTek speaking event with polished design"
git push

Vercel: ✅ Deployed
```

### Result
✅ Speaking event added (bilingual)
✅ Design professionally polished
✅ All checks passed
✅ Successfully deployed
✅ Production verified

**Time**: ~15 minutes total (vs 30-45 minutes manually)

---

## Example 5: Error Recovery

### Scenario
User tries to deploy but deploy-check finds issues.

### User Request
```
準備部署了
```

### Skill Activation
**deploy-check** skill auto-activates

### Workflow

**Step 1: Build Check - FAILS**
```bash
npm run build

Error: Type error
  Type 'string | undefined' is not assignable to type 'string'
  File: app/[locale]/projects/page.tsx:42

❌ Build failed
```

**Step 2: Report to User**
```
Claude: "Pre-deployment check found an issue:

❌ Build Error: TypeScript type error in projects page

Error details:
- File: app/[locale]/projects/page.tsx
- Line: 42
- Issue: Possible undefined value

I can fix this. Should I proceed?"

User: "Yes, fix it"
```

**Step 3: Fix Issue**
```tsx
// Before (line 42)
const title: string = project.title; // Error: could be undefined

// After
const title: string = project.title ?? 'Untitled Project'; // ✅ Safe
```

**Step 4: Retry Build**
```bash
npm run build

✅ Build successful
```

**Step 5: Continue Checks**
```
Type check: ✅
Pages: ✅
Images: ✅
Console: ✅

All checks now passing!
```

**Step 6: Deploy**
```bash
git add app/[locale]/projects/page.tsx
git commit -m "fix: handle undefined project title safely"
git push
```

### Result
✅ Issue caught BEFORE deployment
✅ Fixed immediately
✅ Prevented production error
✅ Successfully deployed with fix

**Benefit**: Saved 30+ minutes of debugging in production

---

## Example 6: Translation Consistency Check

### Scenario
User adds content but forgets English translation.

### User Request
```
新增專案 "AI 學習助手"
```

### Skill Activation
**content-update** skill auto-activates

### Workflow

**Step 1: Gather Info**
```
Claude: "I'll add this project. I need:

1. 中文名稱: AI 學習助手 ✅
2. 中文描述: [user provides] ✅
3. English name: ?
4. English description: ?"

User: "Oh I forgot, let me think..."
```

**Step 2: Detect Missing Translation**
```
Claude: "I notice you haven't provided the English version yet.

For bilingual consistency, I need:
- English title
- English description

Would you like me to:
A) Wait for you to provide English version
B) Suggest a translation based on the Chinese
C) Add as Chinese-only (NOT recommended - breaks bilingual support)

Recommendation: Option B, then you can review/adjust"

User: "Option B please"
```

**Step 3: Suggest Translation**
```
Claude: "Suggested English translation:

Title: "AI Learning Assistant"
Description: "An intelligent learning companion powered by AI, helping students..."

Does this work, or would you like to adjust?"

User: "Perfect!"
```

**Step 4: Update Both Files**
```json
// messages/zh-TW.json
{
  "title": "AI 學習助手",
  "description": "由 AI 驅動的智能學習夥伴..."
}

// messages/en.json
{
  "title": "AI Learning Assistant",
  "description": "An intelligent learning companion powered by AI..."
}
```

**Step 5: Verify Consistency**
```bash
# Check both files have same structure
grep -A 5 "AI.*Assistant" messages/*.json

✅ Both files have matching entries
✅ Keys identical
✅ Content complete
```

### Result
✅ Prevented incomplete translation
✅ Maintained bilingual consistency
✅ User didn't have to remember to update both files

**Benefit**: Automatic bilingual enforcement

---

## Example 7: Image Optimization

### Scenario
User adds project with large image.

### User Request
```
新增專案，圖片在這裡：~/Downloads/project-banner.jpg
```

### Skill Activation
**content-update** skill auto-activates

### Workflow

**Step 1: Check Image Size**
```bash
ls -lh ~/Downloads/project-banner.jpg
# Output: 2.3MB

⚠️ Image too large (> 500KB recommended)
```

**Step 2: Notify User**
```
Claude: "I notice the banner image is 2.3MB, which is quite large.

For optimal performance:
- Recommended: < 500KB
- Current: 2.3MB (4.6x larger)

Would you like me to:
A) Proceed with optimization (compress to ~400KB)
B) Use as-is (slower page load)

Recommendation: Option A"

User: "Optimize it"
```

**Step 3: Optimize Image**
```bash
# (Using ImageOptim or similar tool)
# Original: 2.3MB
# Optimized: 420KB (JPEG 82% quality)

✅ Size reduced by 82%
✅ Quality maintained (visually identical)
```

**Step 4: Move to Project**
```bash
mv ~/Downloads/project-banner.jpg public/images/projects/
```

**Step 5: Verify**
```bash
ls -lh public/images/projects/project-banner.jpg
# 420K ✅

npm run dev
# Test image loads
# ✅ Loads fast, looks great
```

### Result
✅ Image optimized (2.3MB → 420KB)
✅ Page load faster
✅ Quality preserved
✅ User didn't need to manually optimize

**Benefit**: Automatic performance optimization

---

## Tips for Using Skills

### 1. Use Natural Language

**✅ Good**:
```
"新增專案"
"設計不好看，改進一下"
"準備部署了"
```

**✅ Also Good**:
```
"Use content-update to add this project"
"Run design-improvement on the home page"
"Execute deploy-check before pushing"
```

### 2. Be Specific

**✅ Specific**:
```
"新增 Duotopia 專案，這是遊戲化學習平台，圖片在 ~/Downloads/"
```

**❌ Vague**:
```
"加個東西"
```

### 3. Trust the Workflow

Skills follow systematic workflows. Let them guide you through the process.

### 4. Provide Feedback

If a skill proposes changes (CARIO format), review and approve/adjust.

### 5. Combine Skills

Multiple skills can work together:
```
"新增專案 + 改進設計 + 部署"
→ content-update → design-improvement → deploy-check → deploy
```

---

## Common Patterns

### Pattern 1: Add Content → Deploy
```
User: "新增專案 X，然後部署"
→ content-update → deploy-check → deploy
```

### Pattern 2: Fix Design → Deploy
```
User: "首頁設計改進後部署"
→ design-improvement → deploy-check → deploy
```

### Pattern 3: Update Content → Verify → Deploy
```
User: "更新關於頁面，確認無誤後上線"
→ content-update → deploy-check → deploy
```

### Pattern 4: Batch Changes → Deploy
```
User: "新增 3 個專案，改進設計，部署"
→ content-update (x3) → design-improvement → deploy-check → deploy
```

---

**Last Updated**: 2025-12-25
**Examples**: 7 real-world scenarios
**Skills Demonstrated**: content-update, design-improvement, deploy-check
