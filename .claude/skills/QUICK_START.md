# Quick Start Guide: Project Skills

> **Get started with young-personal-site skills in 5 minutes**

---

## 1️⃣ What Are Skills?

Skills are **automated workflows** that help you:
- Add content faster (bilingual support)
- Improve designs systematically
- Deploy safely (pre-flight checks)

Think of them as **AI assistants** that know your project's best practices.

---

## 2️⃣ The 3 Skills You Have

### 🎨 design-improvement
**When to use**: "This looks ugly" or "Improve the design"

**What it does**:
- Analyzes current design
- Proposes improvements (colors, spacing, typography)
- Implements changes following project standards
- Tests responsive design

**Triggers**: "設計", "design", "很醜", "不好看"

---

### 📝 content-update
**When to use**: "Add a project" or "Update content"

**What it does**:
- Handles bilingual content (zh-TW + en)
- Updates translation files
- Optimizes images
- Tests both language versions

**Triggers**: "新增專案", "更新內容", "翻譯"

---

### ✅ deploy-check
**When to use**: "Ready to deploy" or "Push to production"

**What it does**:
- Runs build verification
- Type-checks TypeScript
- Tests all pages (both languages)
- Verifies images load
- Monitors deployment

**Triggers**: "部署", "deploy", "上線", "push"

---

## 3️⃣ How to Use Them

### Option A: Natural Language (Easiest)

Just talk naturally:

```
You: "新增一個專案"
→ content-update activates automatically

You: "首頁設計很醜，改進一下"
→ design-improvement activates automatically

You: "我要部署了"
→ deploy-check activates automatically
```

### Option B: Explicit Request

```
You: "Use content-update to add this project"
You: "Run design-improvement on the about page"
You: "Execute deploy-check before I push"
```

---

## 4️⃣ Real Example

**You want to add a project and deploy:**

```
You: "新增 Duotopia 專案，設計要專業，然後部署"
```

**What happens:**

```
Step 1: content-update activates
├── Asks for project details (name, description, image)
├── Updates messages/zh-TW.json
├── Updates messages/en.json
├── Adds/optimizes image
└── Tests both languages ✅

Step 2: design-improvement activates
├── Analyzes project card design
├── Proposes improvements (spacing, colors)
├── You approve
├── Implements Tailwind changes
└── Tests responsive layout ✅

Step 3: deploy-check activates
├── Runs npm run build ✅
├── Type-checks TypeScript ✅
├── Tests all pages (zh-TW & en) ✅
├── Verifies images load ✅
└── Gives green light for deployment ✅

Step 4: Deploy
├── git commit -m "feat: add Duotopia project"
├── git push
└── Monitors Vercel deployment ✅

Result: Project added, design polished, deployed safely!
```

**Time**: ~10 minutes (vs 30-45 minutes manually)

---

## 5️⃣ Common Workflows

### Add Content → Deploy
```
"新增專案 X，然後部署"
→ content-update → deploy-check → deploy
```

### Fix Design → Deploy
```
"首頁設計改進後部署"
→ design-improvement → deploy-check → deploy
```

### Update Content → Verify → Deploy
```
"更新關於頁面，確認無誤後上線"
→ content-update → deploy-check → deploy
```

---

## 6️⃣ Tips for Success

### ✅ DO:
- **Be specific**: "新增 Duotopia 專案，遊戲化學習平台"
- **Provide context**: Mention which page or component
- **Review proposals**: Skills use CARIO format (Context → Options → Recommendation)
- **Trust the process**: Skills follow proven workflows

### ❌ DON'T:
- **Be vague**: "加個東西" (too unclear)
- **Skip review**: Always check what skills propose
- **Rush**: Let skills complete their checklists

---

## 7️⃣ Troubleshooting

### Skill Not Activating?

**Try explicit request**:
```
"Use content-update to add this project"
```

**Or use exact trigger keywords**:
```
Chinese: "新增專案", "設計", "部署"
English: "add project", "design", "deploy"
```

### Skill Behaving Incorrectly?

**Check the skill file**:
```bash
cat .claude/skills/<skill-name>/skill.md
```

**Update if needed** (skills are just Markdown files!)

---

## 8️⃣ What's Next?

### Learn More:
- 📖 **README.md**: Full documentation
- 📝 **EXAMPLES.md**: 7 real-world scenarios
- 📋 **SKILLS_TEST_REPORT.md**: Technical details

### Advanced Usage:
- Combine multiple skills in one request
- Customize skill workflows (edit skill.md files)
- Create new skills for your needs

---

## 9️⃣ Quick Reference

### Trigger Keywords

| Skill | Chinese | English |
|-------|---------|---------|
| design-improvement | 設計, 很醜, 不好看, 排版 | design, UI, layout, ugly |
| content-update | 新增專案, 更新內容, 翻譯 | add project, update content, translation |
| deploy-check | 部署, 上線, 發布, 推送 | deploy, push, publish |

### File Locations

```
.claude/skills/
├── design-improvement/skill.md  # Design workflow
├── content-update/skill.md      # Content workflow
└── deploy-check/skill.md        # Deploy workflow
```

---

## 🎉 You're Ready!

Start using skills with natural language:

```
"新增一個專案"
"設計不好看，改進一下"
"準備部署了"
```

Skills will guide you through the rest!

---

**Quick Start Version**: 1.0
**Last Updated**: 2025-12-25
**Estimated Reading Time**: 5 minutes

**Remember**: Skills are here to help. Just talk naturally, and they'll activate when needed! 🚀
