---
name: content-update
description: |
  Streamlined content update workflow for young-personal-site bilingual content.
  Auto-activates on "更新內容", "新增專案", "加作品", "修改文案", "翻譯" keywords.
  Handles dual-language content (zh-TW/en) with consistency checks.
allowed-tools: [Read, Edit, Write, Bash, Grep, Glob]
---

# Content Update Skill

## Purpose
Simplify content updates for the personal website with automatic bilingual support.

**Prevents**:
- ❌ Missing translations (zh-TW or en)
- ❌ Inconsistent content across languages
- ❌ Broken image paths
- ❌ Untested bilingual content

**Ensures**:
- ✅ Both zh-TW and en translations present
- ✅ Translation keys match exactly
- ✅ Images optimized and properly linked
- ✅ Tested in both languages before deployment

---

## Auto-Activation

Triggers on:
- ✅ "更新內容", "update content", "add content"
- ✅ "新增專案", "加作品", "add project"
- ✅ "演講活動", "speaking event", "add talk"
- ✅ "修改文案", "翻譯", "translation"
- ✅ "關於頁面", "about page", "服務內容"

---

## Content Types & Locations

### 1. Projects (`/projects`)
**Translation files**:
- `messages/zh-TW.json` → `projects.items[]`
- `messages/en.json` → `projects.items[]`

**Component**:
- `app/[locale]/projects/page.tsx`

**Images**:
- `public/images/projects/`

### 2. Speaking Events (`/speaking`)
**Translation files**:
- `messages/zh-TW.json` → `speaking.events[]`
- `messages/en.json` → `speaking.events[]`

**Components**:
- `app/[locale]/speaking/page.tsx` (list)
- `app/[locale]/speaking/[slug]/page.tsx` (detail)

**Images**:
- `public/images/speaking/`

### 3. About Page (`/about`)
**Translation files**:
- `messages/zh-TW.json` → `about.*`
- `messages/en.json` → `about.*`

**Component**:
- `app/[locale]/about/page.tsx`

### 4. Services (`/services`)
**Translation files**:
- `messages/zh-TW.json` → `services.*`
- `messages/en.json` → `services.*`

**Component**:
- `app/[locale]/services/page.tsx`

---

## Workflow: Add New Project

### Step 1: Gather Information

**Required info**:
```markdown
Project Checklist:
- [ ] Project name (zh-TW)
- [ ] Project name (en)
- [ ] Description (zh-TW)
- [ ] Description (en)
- [ ] Category/tags
- [ ] Banner image (path or URL)
- [ ] Project URL (if applicable)
- [ ] Date/year
```

**Example**:
```
User: "新增 Duotopia 專案"

Agent asks:
1. 中文描述？
2. English description?
3. 專案分類？
4. 圖片路徑？
```

### Step 2: Update Translation Files

**Read current content**:
```bash
Read messages/zh-TW.json
Read messages/en.json
```

**Add to zh-TW.json**:
```json
{
  "projects": {
    "items": [
      // ... existing projects
      {
        "title": "Duotopia 多鄰國風格學習平台",
        "description": "仿照 Duolingo 的遊戲化學習平台，支援多語言學習路徑",
        "category": "教育科技",
        "image": "/images/projects/duotopia-banner.jpg",
        "year": "2024"
      }
    ]
  }
}
```

**Add to en.json**:
```json
{
  "projects": {
    "items": [
      // ... existing projects
      {
        "title": "Duotopia - Gamified Learning Platform",
        "description": "A Duolingo-inspired gamified learning platform with multi-language learning paths",
        "category": "EdTech",
        "image": "/images/projects/duotopia-banner.jpg",
        "year": "2024"
      }
    ]
  }
}
```

### Step 3: Handle Images

**If image needs to be added**:
```markdown
Image Checklist:
- [ ] File name descriptive (e.g., duotopia-banner.jpg)
- [ ] Optimized size (< 500KB recommended)
- [ ] Placed in correct directory (public/images/projects/)
- [ ] Path matches translation files

Optimization tips:
- Use JPEG for photos (80-85% quality)
- Use PNG for logos/graphics with transparency
- Consider WebP for better compression
- Resize to max 1920px width
```

**Prompt user if needed**:
```
Image needed for this project. Please provide:
1. Image file path, OR
2. Let me know to use placeholder

For best results:
- Optimize to < 500KB
- 16:9 or 4:3 aspect ratio
- Min 800px width
```

### Step 4: Verify Translation Consistency

**Validation**:
```bash
# Check both files have same structure
grep -A 10 "Duotopia" messages/zh-TW.json
grep -A 10 "Duotopia" messages/en.json

# Verify image paths match
grep "duotopia-banner" messages/*.json
```

**Consistency checklist**:
- [ ] Same number of fields in both languages
- [ ] Image paths identical
- [ ] Keys match exactly
- [ ] No missing translations

### Step 5: Test Bilingual Display

**Test locally**:
```bash
# Start dev server
npm run dev

# Test both languages:
# 1. Visit http://localhost:3000/zh-TW/projects
# 2. Visit http://localhost:3000/en/projects
# 3. Check new project appears
# 4. Verify image loads
# 5. Test language switcher
```

**Manual test checklist**:
- [ ] Project visible on zh-TW version
- [ ] Project visible on en version
- [ ] Image loads correctly
- [ ] Text displays properly (no overflow)
- [ ] Responsive on mobile
- [ ] Language switcher works

### Step 6: Commit and Deploy

```bash
# Build check
npm run build

# If successful, commit
git add messages/zh-TW.json messages/en.json public/images/
git commit -m "feat: add Duotopia project with bilingual content"

# Push (auto-deploys)
git push
```

---

## Workflow: Add Speaking Event

### Step 1: Gather Event Information

```markdown
Event Checklist:
- [ ] Event name (zh-TW & en)
- [ ] Date
- [ ] Location
- [ ] Description (zh-TW & en)
- [ ] Event type (conference/workshop/podcast/etc.)
- [ ] Audience size (if applicable)
- [ ] Event image
- [ ] Media coverage links (if any)
- [ ] Slide deck link (if any)
- [ ] Video link (if any)
```

### Step 2: Update Translation Files

**zh-TW.json**:
```json
{
  "speaking": {
    "events": [
      {
        "slug": "mediatek-ai-education-2024",
        "title": "AI 賦能教育：從理論到實踐",
        "date": "2024-11-15",
        "location": "聯發科技總部",
        "type": "企業內訓",
        "description": "分享 AI 在教育領域的應用案例與實踐經驗",
        "image": "/images/speaking/mediatek-2024.jpg",
        "attendees": "80+",
        "media": [
          {
            "title": "活動報導",
            "url": "https://..."
          }
        ]
      }
    ]
  }
}
```

**en.json**:
```json
{
  "speaking": {
    "events": [
      {
        "slug": "mediatek-ai-education-2024",
        "title": "AI-Powered Education: From Theory to Practice",
        "date": "2024-11-15",
        "location": "MediaTek Headquarters",
        "type": "Corporate Training",
        "description": "Sharing AI education case studies and practical experiences",
        "image": "/images/speaking/mediatek-2024.jpg",
        "attendees": "80+",
        "media": [
          {
            "title": "Event Coverage",
            "url": "https://..."
          }
        ]
      }
    ]
  }
}
```

### Step 3: Update Valid Slugs (if detail page needed)

**Edit** `app/[locale]/speaking/[slug]/page.tsx`:
```tsx
// Add new slug to valid slugs array
const validSlugs = [
  // ... existing slugs
  'mediatek-ai-education-2024',
];
```

### Step 4: Test and Deploy

```bash
# Test speaking list page
npm run dev
# → Visit /zh-TW/speaking and /en/speaking

# Test detail page (if added)
# → Visit /zh-TW/speaking/mediatek-ai-education-2024

# Commit
git add messages/ app/
git commit -m "feat: add MediaTek AI education speaking event"
git push
```

---

## Workflow: Update About/Services Content

### Step 1: Identify Content to Update

**About page sections**:
- `about.hero` (Hero section)
- `about.intro` (Introduction)
- `about.background` (Background)
- `about.expertise` (Expertise areas)
- `about.values` (Core values)

**Services page sections**:
- `services.hero`
- `services.consulting`
- `services.training`
- `services.development`

### Step 2: Update Both Language Files

**Example: Update about intro**:

**zh-TW.json**:
```json
{
  "about": {
    "intro": "全新的自我介紹文字..."
  }
}
```

**en.json**:
```json
{
  "about": {
    "intro": "Updated introduction text..."
  }
}
```

### Step 3: Test and Deploy

```bash
npm run dev
# Test /zh-TW/about and /en/about

git add messages/
git commit -m "docs: update about page introduction"
git push
```

---

## Translation Best Practices

### 1. Consistency in Tone

**zh-TW**: 專業但親和
```
✅ "協助企業導入 AI 教育解決方案"
❌ "幫公司弄 AI 教學的東西"
```

**en**: Professional and clear
```
✅ "Help enterprises adopt AI-powered education solutions"
❌ "Help companies with AI teaching stuff"
```

### 2. Terminology Consistency

**Maintain glossary**:
```
教育科技 = EdTech
企業內訓 = Corporate Training
工作坊 = Workshop
演講 = Talk/Speech
顧問服務 = Consulting Services
```

### 3. Length Balance

**Try to keep similar length**:
```
zh-TW: "AI 賦能教育的創新實踐" (11 chars)
en:    "Innovative AI-Powered Education" (31 chars)
```

**Why**: Prevents layout breaking in UI

### 4. Context Preservation

**Include context in descriptions**:
```json
// Good
{
  "title": "Duotopia 多鄰國風格學習平台",
  "description": "仿照 Duolingo 的遊戲化學習平台，支援多語言學習路徑，包含積分系統、連勝記錄等功能"
}

// Bad (too vague)
{
  "title": "Duotopia",
  "description": "學習平台"
}
```

---

## Common Content Update Scenarios

### Scenario 1: Quick Text Fix

**User**: "修改關於頁面的自我介紹，改成 XXX"

**Workflow**:
1. Read both translation files
2. Update zh-TW intro
3. Ask user for English version OR translate
4. Update en intro
5. Test both languages
6. Commit: "docs: update about page intro"

### Scenario 2: Add Multiple Projects

**User**: "新增 3 個專案：A, B, C"

**Workflow**:
1. Gather info for all 3 projects (batch)
2. Update zh-TW.json (add all 3)
3. Update en.json (add all 3)
4. Add images (if needed)
5. Test all projects display
6. Commit: "feat: add projects A, B, and C"

### Scenario 3: Image Optimization

**User**: "專案圖片太大，幫我優化"

**Workflow**:
1. Identify large images (> 500KB)
2. Suggest optimization:
   ```bash
   # Using ImageOptim, TinyPNG, or similar
   # Target: 80-85% JPEG quality, < 500KB
   ```
3. Update image files
4. Verify paths still correct
5. Commit: "perf: optimize project images"

---

## Translation Checklist Template

**Copy this for every content update**:

```markdown
## Content Update Checklist

### Content Gathering
- [ ] zh-TW content ready
- [ ] en content ready
- [ ] Images identified/optimized
- [ ] Links verified (if any)

### File Updates
- [ ] messages/zh-TW.json updated
- [ ] messages/en.json updated
- [ ] Images added to public/images/
- [ ] Component updated (if needed)

### Validation
- [ ] Translation keys match
- [ ] Image paths identical
- [ ] No missing fields
- [ ] Terminology consistent

### Testing
- [ ] zh-TW page displays correctly
- [ ] en page displays correctly
- [ ] Images load
- [ ] Language switcher works
- [ ] Mobile responsive
- [ ] npm run build succeeds

### Deployment
- [ ] Commit with clear message
- [ ] Push to main
- [ ] Verify Vercel deployment
```

---

## Anti-Patterns to Avoid

### ❌ Updating Only One Language

```json
// Bad: Only zh-TW updated
// messages/zh-TW.json
{
  "projects": {
    "items": [
      { "title": "New Project", ... }
    ]
  }
}

// messages/en.json (MISSING new project!)
{
  "projects": {
    "items": []
  }
}
```

**Result**: English version shows missing content!

### ❌ Mismatched Image Paths

```json
// Bad: Different paths
// zh-TW.json
{ "image": "/images/project-banner.jpg" }

// en.json
{ "image": "/images/projects/banner.jpg" }
```

**Result**: Image missing in one language!

### ❌ Inconsistent Keys

```json
// Bad: Different structures
// zh-TW.json
{
  "projects": {
    "list": [...]
  }
}

// en.json
{
  "projects": {
    "items": [...]
  }
}
```

**Result**: Translation system breaks!

---

## Quick Reference: Common Updates

### Add Project
```
1. Read messages/zh-TW.json, messages/en.json
2. Add to projects.items[] in both files
3. Add image to public/images/projects/
4. Test both languages
5. Commit: "feat: add [project name]"
```

### Add Speaking Event
```
1. Read translation files
2. Add to speaking.events[] in both files
3. Update valid slugs if needed
4. Add image to public/images/speaking/
5. Test both languages + detail page
6. Commit: "feat: add [event name] speaking event"
```

### Update About Content
```
1. Read messages files
2. Update about.* in both zh-TW and en
3. Test /about in both languages
4. Commit: "docs: update about page [section]"
```

### Fix Translation
```
1. Identify incorrect translation
2. Update in appropriate messages file
3. Test affected pages
4. Commit: "fix: correct [section] translation"
```

---

## Success Metrics

### Before This Skill
- ⏱️ Content updates: Manual, error-prone
- 🌍 Bilingual sync: Often broken
- 🖼️ Images: Inconsistent paths

### After This Skill
- ✅ Content updates: Streamlined, systematic
- 🌍 Bilingual sync: Always consistent
- 🖼️ Images: Properly linked and optimized

---

## Related Skills

- **design-improvement**: Content + design updates together
- **deploy-check**: Pre-deployment content verification

---

**Skill Version**: v1.0
**Last Updated**: 2025-12-25
**Project**: young-personal-site
**Philosophy**: "Content is king, but consistency is queen" 👑
