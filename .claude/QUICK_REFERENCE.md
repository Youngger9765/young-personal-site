# Quick Reference Card - Hooks & Skills

## 🚀 Common Commands

### Test Hooks
```bash
# Test skill activation hook
echo "準備部署到 Vercel" | ./.claude/hooks/skill-activation-hook.sh

# Test session start hook
bash ./.claude/hooks/session-start-hook.sh

# Test pre-push hook
bash ./.claude/hooks/pre-push-hook.sh
```

### Manual Skill Invocation
```
Skill(skill="deploy-check")
Skill(skill="i18n-sync")
Skill(skill="content-update")
```

### Validate Configuration
```bash
# Check JSON syntax
python3 -m json.tool .claude/config/skill-rules.json
python3 -m json.tool .claude/settings.json

# Check hook permissions
ls -la .claude/hooks/

# Make hooks executable (if needed)
chmod +x .claude/hooks/*.sh
```

---

## 🎯 Skill Triggers

| Say This... | Skills Activated |
|-------------|------------------|
| "準備部署到 Vercel" | deploy-check |
| "Add project with translations" | content-update + i18n-sync |
| "Fix TypeScript error" | debugging + deploy-check |
| "Update Chinese and English content" | i18n-sync + content-update |
| "Build and deploy" | deploy-check |

---

## 📋 Skills Overview

### deploy-check (CRITICAL)
**When**: Before deployment, push, build
**What**: TypeScript → Build → i18n → Images
**Time**: 30-60 seconds

### i18n-sync (CRITICAL)
**When**: Translation updates, content changes
**What**: Compare zh-TW ↔ en, validate consistency
**Time**: 5-15 seconds

### content-update (HIGH)
**When**: Adding projects, events, updating about
**What**: Update messages → Update components → Validate
**Time**: 10-30 seconds

### debugging (Universal - CRITICAL)
**When**: Errors, bugs, broken code
**What**: 5-step systematic debugging
**Time**: Varies

### requirements-clarification (Universal - CRITICAL)
**When**: New features, unclear requirements
**What**: CARIO framework validation
**Time**: 5-10 minutes

---

## 🔧 Troubleshooting

### Hooks Not Working?
```bash
# 1. Check executable permissions
ls -la .claude/hooks/
# Should see: -rwxr-xr-x

# 2. Fix permissions
chmod +x .claude/hooks/*.sh

# 3. Test manually
echo "test" | ./.claude/hooks/skill-activation-hook.sh
```

### Skills Not Activating?
```bash
# 1. Check keyword mappings
cat .claude/config/skill-rules.json

# 2. Test keyword matching
echo "your prompt here" | ./.claude/hooks/skill-activation-hook.sh

# 3. Manually invoke if needed
# (In Claude conversation)
Skill(skill="skill-name")
```

### JSON Syntax Error?
```bash
# Validate and fix
python3 -m json.tool .claude/config/skill-rules.json
```

---

## 📁 File Locations

```
.claude/
├── hooks/
│   ├── skill-activation-hook.sh   ← Auto-activation
│   ├── pre-push-hook.sh           ← Pre-push reminder
│   └── session-start-hook.sh      ← Session context
├── config/
│   └── skill-rules.json           ← Keyword mappings
├── skills/
│   ├── deploy-check/skill.md
│   ├── i18n-sync/skill.md
│   ├── content-update/skill.md
│   └── design-improvement/skill.md
└── settings.json                  ← Hook configuration
```

---

## 🎨 Adding New Keywords

Edit `.claude/config/skill-rules.json`:

```json
{
  "skills": {
    "deploy-check": {
      "keywords": [
        "deploy",
        "部署",
        "YOUR_NEW_KEYWORD"  ← Add here
      ]
    }
  }
}
```

Test:
```bash
echo "YOUR_NEW_KEYWORD test" | ./.claude/hooks/skill-activation-hook.sh
```

---

## 📊 Performance Expectations

| Component | Speed | Token Cost |
|-----------|-------|------------|
| Hooks | <100ms | 50-100 |
| deploy-check | 30-60s | 200-500 |
| i18n-sync | 5-15s | 100-300 |
| content-update | 10-30s | 150-400 |

---

## 🔥 Most Common Workflows

### 1. Deploy to Production
```
Say: "準備部署到 Vercel"
  ↓
deploy-check activates
  ↓
All checks pass → Push to main
```

### 2. Add New Project
```
Say: "Add new project with bilingual content"
  ↓
content-update + i18n-sync activate
  ↓
Content added → Validation pass → Commit
```

### 3. Fix Build Error
```
Say: "Fix TypeScript build error"
  ↓
debugging + deploy-check activate
  ↓
Error fixed → Build verified → Commit
```

---

## 💡 Pro Tips

1. **Let hooks work for you** - Just type naturally, skills auto-activate
2. **Manual override when needed** - Use `Skill(skill="name")` for 100% reliability
3. **Run deploy-check before every push** - Catch issues early
4. **Keep translations in sync** - i18n-sync after every content change
5. **Use debugging for systematic fixes** - Don't guess, follow the process

---

## 📞 Quick Help

**Documentation**:
- Full hooks guide: `.claude/hooks/README.md`
- Skills guide: `.claude/skills/README.md`
- Integration guide: `.claude/HOOKS-SKILLS-INTEGRATION.md`
- System architecture: `.claude/SYSTEM_ARCHITECTURE.md`

**Testing**:
- Test report: `.claude/SKILLS_TEST_REPORT.md`
- Task completion: `.claude/TASK_2_COMPLETION_REPORT.md`

**Quick Start**:
- `.claude/skills/QUICK_START.md`

---

**Version**: 1.0 | **Last Updated**: 2025-12-25
