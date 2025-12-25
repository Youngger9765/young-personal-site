# Young Personal Site - Project Skills

> **Specialized AI skills for young-personal-site development**
>
> These skills streamline common workflows and enforce project standards.

---

## 📚 Available Skills

### 1. **design-improvement** 🎨

**Purpose**: Systematic design optimization following project standards

**Auto-activates on**:
- "設計", "design", "UI"
- "很醜", "不好看", "改進視覺"
- "排版", "layout", "顏色", "spacing"

**What it does**:
- Analyzes current design issues
- Proposes improvements (CARIO format)
- Implements changes following design principles
- Tests responsive design
- Ensures color palette consistency (slate-blue, coral-orange, warm-cream)

**Example usage**:
```
User: "專案頁面的設計看起來很擠，可以改進嗎？"
→ Skill analyzes → Proposes changes → Implements → Tests → Deploys
```

**Location**: `.claude/skills/design-improvement/skill.md`

---

### 2. **content-update** 📝

**Purpose**: Streamlined bilingual content updates (zh-TW/en)

**Auto-activates on**:
- "更新內容", "新增專案", "加作品"
- "演講活動", "修改文案", "翻譯"

**What it does**:
- Handles dual-language content (zh-TW & en)
- Updates translation files (`messages/zh-TW.json`, `messages/en.json`)
- Manages images (optimization, paths)
- Ensures translation consistency
- Tests bilingual display

**Example usage**:
```
User: "新增 Duotopia 專案"
→ Gathers info → Updates both translation files → Adds image → Tests both languages → Deploys
```

**Location**: `.claude/skills/content-update/skill.md`

---

### 3. **deploy-check** ✅

**Purpose**: Pre-deployment verification checklist

**Auto-activates on**:
- "部署", "deploy", "上線", "發布"
- "push", "準備部署"

**What it does**:
- Runs build verification (`npm run build`)
- Type-checks TypeScript (`npx tsc --noEmit`)
- Verifies all pages load (zh-TW & en)
- Checks images and translations
- Tests responsive design
- Monitors deployment to Vercel

**Example usage**:
```
User: "準備部署了"
→ Runs all checks → Identifies issues → User fixes → All pass → Deploys → Monitors
```

**Location**: `.claude/skills/deploy-check/skill.md`

---

## 🚀 Quick Start

### Using Skills

Skills **auto-activate** when you use trigger keywords:

```bash
# Design improvement
"這個頁面的設計不太好看"
→ design-improvement skill activates

# Content update
"新增一個專案"
→ content-update skill activates

# Deploy check
"我要部署了"
→ deploy-check skill activates
```

You can also **manually invoke** skills:

```bash
# In conversation with Claude
"Use the design-improvement skill to analyze the home page"
"Run content-update to add this project"
"Execute deploy-check before I push"
```

---

## 📖 Skill Workflows

### Complete Feature Workflow

**Example: Adding a new project with design polish**

```
1. User: "新增 Duotopia 專案，並且讓設計看起來專業"

2. content-update skill activates:
   - Gathers project info (name, description, images)
   - Updates messages/zh-TW.json
   - Updates messages/en.json
   - Adds optimized image
   - Tests bilingual display

3. design-improvement skill activates:
   - Analyzes project card design
   - Proposes improvements (spacing, colors, animations)
   - Implements Tailwind changes
   - Tests responsive layout

4. deploy-check skill activates:
   - Runs npm run build
   - Type checks
   - Verifies all pages load
   - Tests both languages
   - Checks images

5. Deployment:
   - git commit -m "feat: add Duotopia project with polished design"
   - git push
   - Vercel auto-deploys
   - Skill monitors deployment

6. Done! ✅
```

---

## 🎯 Skill Integration

### How Skills Work Together

```
┌─────────────────────┐
│  content-update     │ ← Add/update content (bilingual)
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  design-improvement │ ← Polish design and layout
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  deploy-check       │ ← Verify before deployment
└──────────┬──────────┘
           │
           ▼
        Deploy! 🚀
```

### Example Combinations

**Add Project + Design Polish + Deploy**:
```
User: "新增專案 A，確保設計專業，然後部署"
→ content-update → design-improvement → deploy-check → deploy
```

**Update About Page + Deploy**:
```
User: "更新關於頁面的自我介紹，然後上線"
→ content-update (updates both translations) → deploy-check → deploy
```

**Design Fix + Deploy**:
```
User: "首頁的間距太小，修正後部署"
→ design-improvement → deploy-check → deploy
```

---

## 📐 Project Standards (Enforced by Skills)

### Design Standards (design-improvement)
- **Colors**: slate-blue, coral-orange, warm-cream only
- **Spacing**: Tailwind increments (p-4, p-6, p-8, etc.)
- **Typography**: Clear hierarchy (h1 > h2 > h3 > p)
- **Responsive**: Mobile-first, test 375px, 768px, 1280px

### Content Standards (content-update)
- **Bilingual**: MUST have both zh-TW and en versions
- **Consistency**: Translation keys must match exactly
- **Images**: Optimized (< 500KB), correct paths
- **Testing**: Both languages tested before commit

### Deployment Standards (deploy-check)
- **Build**: Must pass `npm run build`
- **Types**: No TypeScript errors
- **Pages**: All routes accessible (zh-TW & en)
- **Quality**: No console errors, images load

---

## 🛠️ Customizing Skills

### Modifying Existing Skills

Skills are Markdown files with YAML frontmatter:

```markdown
---
name: skill-name
description: |
  Skill description with trigger keywords.
allowed-tools: [Read, Write, Edit, Bash]
---

# Skill Name

## Purpose
...

## Auto-Activation
Triggers on:
- ✅ "keyword1", "keyword2"

## Workflow
1. Step one
2. Step two
...
```

**To customize**:
1. Edit `.claude/skills/<skill-name>/skill.md`
2. Update trigger keywords in `description`
3. Modify workflow steps
4. Save (changes apply immediately)

### Adding New Skills

```bash
# Create new skill directory
mkdir -p .claude/skills/my-new-skill

# Create skill.md
touch .claude/skills/my-new-skill/skill.md

# Use template from existing skills
# Add YAML frontmatter
# Define workflow
```

---

## 📊 Skill Usage Analytics

### How to Know Skills Are Working

**Skill activation indicators**:
- Claude mentions skill name in response
- Workflow follows skill structure (CARIO format, checklists)
- Automatic checks run (build, type-check, tests)

**Example**:
```
User: "新增專案"

Claude: "I'll use the content-update skill to add this project..."
        (follows content-update workflow)
        ✅ Skill activated correctly
```

---

## 🔍 Troubleshooting

### Skill Not Activating?

**Check**:
1. **Trigger keywords**: Use exact keywords from skill `description`
2. **File location**: Skills must be in `.claude/skills/<name>/skill.md`
3. **YAML frontmatter**: Must be valid YAML with required fields

**Manual activation**:
```
"Use the <skill-name> skill to..."
"Run the <skill-name> workflow for..."
```

### Skill Behaving Incorrectly?

**Debug**:
1. Read the skill file: `.claude/skills/<skill-name>/skill.md`
2. Check workflow steps
3. Verify tools available in `allowed-tools`
4. Update skill if needed

---

## 📚 Learning Resources

### Understanding CARIO Format

Used in **design-improvement** and **content-update** for structured proposals:

```
📋 Context: What are we working on?
❓ Ambiguity: What's unclear or needs decision?
🎯 Options: Different approaches (A, B, C)
💡 Recommendation: Best option and why
⚡ Impact: What's affected, complexity, time
```

### Understanding Checklists

Used in **deploy-check** for systematic verification:

```markdown
Pre-Deploy Checklist:
- [ ] Build succeeds
- [ ] Types check
- [ ] Pages load
- [ ] Images display
- [ ] Translations work
```

---

## 🎓 Best Practices

### When to Use Skills

**✅ Use skills for**:
- Repetitive workflows (add content, deploy)
- Quality checks (design, deployment)
- Multi-step processes (bilingual updates)

**❌ Don't need skills for**:
- One-off questions
- Simple changes (fix typo)
- Exploration (understanding codebase)

### Skill Development Tips

**Good skill characteristics**:
- Clear trigger keywords
- Step-by-step workflow
- Concrete examples
- Integration with other skills
- Follows project standards

**Bad skill characteristics**:
- Vague triggers
- Ambiguous steps
- No examples
- Conflicts with standards

---

## 📞 Getting Help

### Skill Issues

If skills aren't working as expected:

1. **Check skill file**: `.claude/skills/<name>/skill.md`
2. **Verify syntax**: YAML frontmatter valid?
3. **Test manually**: "Use the X skill to..."
4. **Update**: Edit skill file to fix issues

### Global Skills

This project also uses **global skills** from `~/.claude/skills/`:
- `requirements-clarification`: Clarify requirements before coding
- `prd-workflow`: Document-driven development
- `debugging`: Systematic bug fixing

These work **alongside** project-specific skills.

---

## 🚀 Future Skills (Planned)

### Potential Additions

**performance-optimization** 🚀:
- Auto-optimize images (WebP conversion)
- Bundle size analysis
- Lighthouse audit automation

**seo-improvement** 🔍:
- Meta tags verification
- Structured data validation
- Sitemap generation

**analytics-review** 📊:
- Vercel Analytics insights
- User behavior analysis
- Performance monitoring

---

## 📝 Changelog

### v1.0 (2025-12-25)

**Initial skills**:
- ✅ design-improvement
- ✅ content-update
- ✅ deploy-check

**Features**:
- Auto-activation on keywords
- CARIO format for proposals
- Systematic checklists
- Bilingual support
- Responsive design checks

---

## 🤝 Contributing

### Improving Skills

Skills evolve based on usage. To improve:

1. **Identify pain points** in current workflows
2. **Update skill files** with better steps
3. **Add examples** from real usage
4. **Test** to ensure improvements work

### Sharing Skills

If you develop useful skills:

1. Document clearly (use existing format)
2. Add examples
3. Test thoroughly
4. Share in project documentation

---

## 📖 Quick Reference

### Skill Files Structure

```
.claude/skills/
├── design-improvement/
│   └── skill.md          # Design optimization workflow
├── content-update/
│   └── skill.md          # Bilingual content updates
├── deploy-check/
│   └── skill.md          # Pre-deployment verification
└── README.md             # This file
```

### Trigger Keywords Summary

| Skill | Chinese Keywords | English Keywords |
|-------|-----------------|------------------|
| design-improvement | 設計, 很醜, 不好看, 排版, 顏色, 間距 | design, UI, layout, color, spacing |
| content-update | 更新內容, 新增專案, 加作品, 翻譯 | update content, add project, translation |
| deploy-check | 部署, 上線, 發布, 推送 | deploy, push, publish |

### Common Commands

```bash
# Check if skills exist
ls -la .claude/skills/

# Read a skill
cat .claude/skills/design-improvement/skill.md

# Edit a skill
# (use your editor)
code .claude/skills/content-update/skill.md
```

---

**Version**: v1.0
**Last Updated**: 2025-12-25
**Project**: young-personal-site
**Maintained by**: Young + Claude AI

**Philosophy**: "Automate the repetitive, perfect the process" 🤖✨
