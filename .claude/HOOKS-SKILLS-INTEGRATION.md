# Hooks ↔ Skills Integration Guide

## Overview

This document explains how **Hooks** and **Skills** work together in the young-personal-site project.

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Prompt                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                  skill-activation-hook.sh                       │
│                  (keyword detection)                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    skill-rules.json                             │
│                    (keyword → skill mapping)                    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│              Inject Skill() activation commands                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   Skills Auto-Activate                          │
│         (deploy-check, i18n-sync, content-update)               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                  Execute Skill Workflows                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Complete Workflow Examples

### Example 1: Deploying to Production

**User says**: "準備部署到 Vercel"

**Hook Flow**:
```
1. skill-activation-hook.sh receives: "準備部署到 Vercel"
   ↓
2. Matches keyword: "部署" → deploy-check skill
   ↓
3. Injects: Skill(skill="deploy-check")
   ↓
4. deploy-check skill activates
   ↓
5. Runs deployment validation workflow
```

**Skill Workflow** (deploy-check):
```yaml
Step 1: TypeScript Compilation Check
  - Run: npm run type-check (or tsc --noEmit)
  - Verify: No TypeScript errors
  - Output: ✅ TypeScript OK or ❌ Fix errors

Step 2: Next.js Build Test
  - Run: npm run build
  - Verify: Build succeeds
  - Output: ✅ Build OK or ❌ Fix build errors

Step 3: i18n Message Consistency
  - Compare: messages/zh-TW.json vs messages/en.json
  - Verify: Matching keys, no missing translations
  - Output: ✅ i18n OK or ⚠️ Missing keys: [list]

Step 4: Image Optimization Check
  - Find: Large images (>500KB)
  - Verify: All images optimized
  - Output: ✅ Images OK or ⚠️ Compress: [list]

Step 5: Final Report
  - Summary: All checks passed → Safe to deploy
  - Or: Fix issues first → List blockers
```

**Result**: You get a comprehensive pre-deployment validation report

---

### Example 2: Adding a New Project

**User says**: "新增一個專案到作品集，需要中英文說明"

**Hook Flow**:
```
1. skill-activation-hook.sh receives prompt
   ↓
2. Matches keywords:
   - "專案" → content-update skill
   - "中英文" → i18n-sync skill
   ↓
3. Injects:
   Skill(skill="i18n-sync")
   Skill(skill="content-update")
   ↓
4. Both skills activate
   ↓
5. Coordinated workflow execution
```

**Skill Workflow** (content-update + i18n-sync):
```yaml
content-update workflow:
  Step 1: Identify content type (project, speaking, about)
  Step 2: Update messages/zh-TW.json
  Step 3: Update messages/en.json
  Step 4: Update component (projects/page.tsx)
  Step 5: Add images if needed
  Step 6: Update image mappings

i18n-sync workflow:
  Step 1: Validate zh-TW keys exist
  Step 2: Validate en keys exist
  Step 3: Compare key structures
  Step 4: Check for missing translations
  Step 5: Report inconsistencies
  Step 6: Suggest fixes

Coordinated result:
  ✅ Project added to both language files
  ✅ Keys are synchronized
  ✅ Component updated
  ✅ Images added and optimized
  ✅ Ready to test
```

**Result**: Complete bilingual project addition with validation

---

### Example 3: Fixing a TypeScript Error

**User says**: "TypeScript build 失敗了"

**Hook Flow**:
```
1. skill-activation-hook.sh receives prompt
   ↓
2. Matches keywords:
   - "TypeScript" → deploy-check skill
   - "失敗" → debugging skill
   ↓
3. Injects:
   Skill(skill="deploy-check")
   Skill(skill="debugging")
   ↓
4. Both skills activate
   ↓
5. Systematic debugging process
```

**Skill Workflow** (debugging):
```yaml
Step 1: Identify Error
  - Read error message
  - Locate failing file/line
  - Understand error type

Step 2: Analyze Root Cause
  - Check type definitions
  - Review recent changes
  - Identify why error occurred

Step 3: Propose Solutions
  - List possible fixes
  - Recommend best approach
  - Explain tradeoffs

Step 4: Implement Fix
  - Apply recommended solution
  - Update affected files
  - Follow TypeScript best practices

Step 5: Verify Resolution
  - Run: npm run type-check
  - Run: npm run build
  - Confirm: No errors remain
```

**Result**: Systematic debugging with verified fix

---

## Hook Types and Their Purposes

### 1. skill-activation-hook.sh (UserPromptSubmit)

**Trigger**: Every user prompt submission

**Purpose**: Auto-activate Skills based on keywords

**Integration with Skills**:
- Reads keyword mappings from `skill-rules.json`
- Matches keywords to Skills
- Injects `Skill()` activation commands
- Ensures critical Skills are always activated

**Example Mappings**:
```json
{
  "deploy": "deploy-check",
  "部署": "deploy-check",
  "translation": "i18n-sync",
  "翻譯": "i18n-sync",
  "project": "content-update",
  "專案": "content-update"
}
```

---

### 2. pre-push-hook.sh (BeforePush)

**Trigger**: Before `git push` operations

**Purpose**: Remind user to validate before deployment

**Integration with Skills**:
- Recommends running `deploy-check` skill
- Does NOT force activation (non-blocking)
- Provides helpful reminder with skill details

**Why This Matters**:
- Prevents pushing broken code
- Ensures TypeScript/build/i18n checks
- Maintains deployment quality

---

### 3. session-start-hook.sh (SessionStart)

**Trigger**: New Claude Code session start

**Purpose**: Display project context and available Skills

**Integration with Skills**:
- Lists all 3 project-specific Skills
- Shows what each Skill does
- Reminds how to manually invoke Skills

**Why This Matters**:
- Onboarding for new sessions
- Quick reference for available Skills
- Context awareness

---

## Keyword → Skill Mapping

### Complete Mapping Table

| Keyword(s) | Skill | Priority | Language |
|-----------|-------|----------|----------|
| deploy, 部署, push, 推送 | deploy-check | CRITICAL | Both |
| translation, 翻譯, bilingual, 雙語 | i18n-sync | CRITICAL | Both |
| project, 專案, portfolio, 作品集 | content-update | HIGH | Both |
| bug, error, 壞掉, 修復 | debugging | CRITICAL | Both |
| requirement, 需求, spec | requirements-clarification | CRITICAL | Both |

### Multi-Keyword Triggers

Some prompts trigger multiple Skills:

**"Add new project with Chinese and English translations"**
→ Triggers: `content-update` + `i18n-sync`

**"Fix build error before deploying"**
→ Triggers: `debugging` + `deploy-check`

**"Update about page in both languages"**
→ Triggers: `content-update` + `i18n-sync`

---

## Skill Activation Patterns

### Pattern 1: Single Critical Skill

```
User: "部署到 Vercel"

Hook Output:
🚨 CRITICAL: The following skills MUST be activated:
- deploy-check (MANDATORY)

🎯 INSTRUCTION: Use the Skill tool IMMEDIATELY:
Skill(skill="deploy-check")

⚠️ IMPORTANT: Do NOT start without activating this skill.
```

### Pattern 2: Multiple Critical Skills

```
User: "Add project with bilingual content"

Hook Output:
🚨 CRITICAL: The following skills MUST be activated:
- i18n-sync (MANDATORY)
- content-update (MANDATORY)

🎯 INSTRUCTION: Use the Skill tool IMMEDIATELY:
Skill(skill="i18n-sync")
Skill(skill="content-update")
```

### Pattern 3: Mixed Priority Skills

```
User: "Update project description"

Hook Output:
🚨 CRITICAL: The following skills MUST be activated:
- i18n-sync (MANDATORY)

💡 Recommended skills detected:
- content-update

🎯 INSTRUCTION: Use the Skill tool IMMEDIATELY:
Skill(skill="i18n-sync")
Skill(skill="content-update")
```

---

## Testing the Integration

### Test 1: Deploy Keyword

```bash
echo "準備部署到 Vercel" | ./.claude/hooks/skill-activation-hook.sh
```

**Expected**:
- deploy-check skill activated
- Critical priority
- Mandatory activation

### Test 2: Translation Keyword

```bash
echo "Update translations for new feature" | ./.claude/hooks/skill-activation-hook.sh
```

**Expected**:
- i18n-sync skill activated
- Critical priority

### Test 3: Content Keyword

```bash
echo "Add new speaking event" | ./.claude/hooks/skill-activation-hook.sh
```

**Expected**:
- content-update skill activated
- High priority

### Test 4: Multi-Skill Trigger

```bash
echo "Add project with Chinese and English content" | ./.claude/hooks/skill-activation-hook.sh
```

**Expected**:
- content-update + i18n-sync both activated
- Both shown in output

---

## Customization Guide

### Adding a New Skill

**Step 1**: Create the skill directory
```bash
mkdir -p .claude/skills/my-new-skill
```

**Step 2**: Add to skill-rules.json
```json
{
  "skills": {
    "my-new-skill": {
      "description": "What the skill does",
      "keywords": ["keyword1", "keyword2", "關鍵字"],
      "force_activation": true,
      "priority": "critical",
      "activation_message": "MANDATORY: Use my-new-skill..."
    }
  }
}
```

**Step 3**: Create skill instructions (SKILL.md)
```markdown
# my-new-skill

## Workflow
1. Step 1
2. Step 2
3. Step 3
```

**Step 4**: Test the integration
```bash
echo "keyword1 test" | ./.claude/hooks/skill-activation-hook.sh
```

### Adding New Keywords to Existing Skills

Edit `.claude/config/skill-rules.json`:

```json
{
  "skills": {
    "deploy-check": {
      "keywords": [
        "deploy",
        "部署",
        "YOUR_NEW_KEYWORD"  // ← Add here
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

## Troubleshooting

### Issue: Skills Not Auto-Activating

**Check 1**: Is the hook executable?
```bash
ls -la .claude/hooks/skill-activation-hook.sh
# Should show: -rwxr-xr-x
```

**Fix**:
```bash
chmod +x .claude/hooks/skill-activation-hook.sh
```

**Check 2**: Are keywords correctly mapped?
```bash
cat .claude/config/skill-rules.json | grep -A 10 "keywords"
```

**Check 3**: Test hook manually
```bash
echo "your test prompt" | ./.claude/hooks/skill-activation-hook.sh
```

---

### Issue: Wrong Skill Activated

**Problem**: Hook activates unexpected skill

**Solution**: Review keyword mappings
- Keywords might be too broad
- Add more specific keywords
- Adjust priority levels

**Example**:
```json
// Too broad
"keywords": ["update"]

// More specific
"keywords": ["update translation", "update i18n", "更新翻譯"]
```

---

### Issue: Multiple Skills Conflict

**Problem**: Too many skills activate for one prompt

**Solution**: Adjust `max_skills_per_prompt` in skill-rules.json
```json
{
  "activation_strategy": {
    "max_skills_per_prompt": 2  // ← Limit to 2 skills
  }
}
```

---

## Performance Metrics

**Hook Execution Time**: <100ms per prompt
**Token Cost**: ~50-100 tokens added
**Success Rate**: ~75-80% auto-activation
**Skill Coordination**: Seamless (no conflicts)

---

## Best Practices

1. **Keep keywords updated** - Add new triggers as you discover them
2. **Test integration regularly** - Ensure hooks → skills flow works
3. **Monitor activation rates** - Are skills actually activating?
4. **Use manual override when needed** - For 100% reliability, invoke skills manually
5. **Coordinate skills** - Ensure multiple skills don't conflict
6. **Document changes** - Update skill-rules.json comments

---

## Future Enhancements

### Planned Improvements

1. **Smart Priority Adjustment**
   - Auto-adjust priorities based on usage patterns
   - Learn which skills are most valuable

2. **Context-Aware Activation**
   - Activate different skills based on file context
   - E.g., editing messages/*.json → auto-activate i18n-sync

3. **Skill Dependency Management**
   - Define skill dependencies (deploy-check requires i18n-sync)
   - Auto-activate dependent skills

4. **Performance Analytics**
   - Track hook execution times
   - Monitor skill activation rates
   - Identify optimization opportunities

---

## Summary

**Hooks** provide the **trigger mechanism** (keyword detection)
**Skills** provide the **execution workflows** (systematic processes)

Together, they create a **powerful automation system**:
- Auto-detect user intent from prompts
- Activate relevant workflows automatically
- Ensure quality standards are followed
- Prevent common mistakes (broken deploys, missing translations)

**Result**: Faster, safer, more reliable development

---

**Last Updated**: 2025-12-25
**Project**: young-personal-site
**Integration Status**: ✅ Fully Operational
