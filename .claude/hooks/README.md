# Claude Code Hooks - young-personal-site

## Overview

This directory contains **project-specific hooks** for the young-personal-site portfolio. These hooks integrate with the 3 custom Skills created for this project:

- **deploy-check** - Pre-deployment validation
- **i18n-sync** - Bilingual content synchronization
- **content-update** - Portfolio content updates

## Hook Architecture

```
User Prompt
    ↓
skill-activation-hook.sh (keyword matching)
    ↓
Auto-inject Skill() calls
    ↓
Skills activate automatically
    ↓
Workflows execute
```

## Available Hooks

### 1. skill-activation-hook.sh (UserPromptSubmit)

**Purpose**: Automatically activate Skills based on keyword detection

**When it runs**: Every time you submit a prompt

**What it does**:
- Reads `skill-rules.json` for keyword mappings
- Matches keywords in your prompt
- Injects `Skill()` activation commands
- Prioritizes critical skills (MANDATORY) vs. recommended skills

**Example**:

```
Input: "我要部署到 Vercel"

Output:
🚨 CRITICAL: The following skills MUST be activated for this request:

- deploy-check (MANDATORY)

🎯 INSTRUCTION: Use the Skill tool IMMEDIATELY before proceeding:

Skill(skill="deploy-check")

⚠️ IMPORTANT: Do NOT start implementation without activating these skills.
---
我要部署到 Vercel
```

**Configuration**: `.claude/config/skill-rules.json`

---

### 2. pre-push-hook.sh (BeforePush)

**Purpose**: Recommend deploy-check before pushing to remote

**When it runs**: Before `git push` operations (via Claude Code)

**What it does**:
- Validates you're in the young-personal-site project
- Recommends running `deploy-check` skill
- Does NOT block the push (non-intrusive)

**Example Output**:

```
🚀 Pre-push validation for young-personal-site...

✅ Project validated: young-personal-site

🎯 RECOMMENDATION: Before pushing, consider running the deploy-check skill:

   Use: Skill(skill="deploy-check")

   This will validate:
   - TypeScript compilation
   - Next.js build success
   - i18n message consistency (zh-TW ↔ en)
   - Image optimization

💡 You can proceed with push, but deploy-check is recommended for safety.
```

---

### 3. session-start-hook.sh (SessionStart)

**Purpose**: Display project context at session start

**When it runs**: When you start a new Claude Code session in this project

**What it does**:
- Shows current git branch
- Lists available languages (zh-TW, en)
- Displays deployment target (Vercel)
- Lists available Skills

**Example Output**:

```
🎨 Young Personal Site - Next.js Portfolio
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Branch: main
🌐 Languages: zh-TW (Chinese) | en (English)
🚀 Deployment: Vercel (auto-deploy on push to main)

🤖 Available Skills:
   • deploy-check    - Pre-deployment validation
   • i18n-sync       - Bilingual content sync
   • content-update  - Portfolio updates

💡 Skills auto-activate based on your prompts.
   Or manually invoke: Skill(skill="skill-name")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Skill Keyword Mappings

### deploy-check (CRITICAL)

**Keywords**:
- English: `deploy`, `push`, `publish`, `production`, `vercel`, `build`, `release`
- Chinese: `部署`, `推送`, `發布`, `上線`, `正式環境`, `構建`, `發版`

**Auto-activates when you say**:
- "準備部署到 Vercel"
- "Build and deploy to production"
- "Push to main branch"

---

### i18n-sync (CRITICAL)

**Keywords**:
- English: `translation`, `bilingual`, `language`, `i18n`, `locale`, `zh-TW`, `en`, `messages`, `content`
- Chinese: `翻譯`, `雙語`, `中英文`, `語言`, `訊息`, `內容`

**Auto-activates when you say**:
- "更新翻譯檔案"
- "Add new project with bilingual content"
- "Sync Chinese and English messages"

---

### content-update (HIGH PRIORITY)

**Keywords**:
- English: `project`, `portfolio`, `speaking`, `event`, `about`, `bio`, `add`, `update`, `modify`, `gallery`
- Chinese: `專案`, `作品`, `作品集`, `演講`, `分享`, `活動`, `關於`, `個人簡介`, `新增`, `更新`, `修改`, `畫廊`

**Auto-activates when you say**:
- "新增一個專案到作品集"
- "Add speaking event to portfolio"
- "Update about page bio"

---

### Universal Skills (Inherited from Global)

#### requirements-clarification (CRITICAL)

**Keywords**: `需求`, `requirement`, `客戶要`, `新功能`, `clarify`, `spec`

#### debugging (CRITICAL)

**Keywords**: `bug`, `error`, `debug`, `壞掉`, `修復`, `fix`, `broken`, `not working`, `typescript error`, `build error`

---

## Testing Hooks

### Test skill-activation-hook.sh

```bash
# Test deploy keyword
echo "準備部署到 Vercel" | ./.claude/hooks/skill-activation-hook.sh

# Test i18n keyword
echo "Update translations for new project" | ./.claude/hooks/skill-activation-hook.sh

# Test content keyword
echo "Add new speaking event" | ./.claude/hooks/skill-activation-hook.sh

# Test debugging keyword
echo "Fix TypeScript build error" | ./.claude/hooks/skill-activation-hook.sh
```

### Expected Output Format

```
🚨 CRITICAL: The following skills MUST be activated for this request:

- [skill-name] (MANDATORY)

🎯 INSTRUCTION: Use the Skill tool IMMEDIATELY before proceeding:

Skill(skill="[skill-name]")

⚠️ IMPORTANT: Do NOT start implementation without activating these skills.
The skills contain critical workflows and standards that MUST be followed.

---

[Your original prompt]
```

---

## Customization

### Adding New Keywords

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

### Changing Priority Levels

```json
{
  "skills": {
    "content-update": {
      "priority": "critical",  // ← Change from "high" to "critical"
      "force_activation": true  // ← Make it mandatory
    }
  }
}
```

Priority levels:
- **critical** - Must activate (blocking)
- **high** - Should activate (strong recommendation)
- **medium** - May activate (suggestion)
- **low** - Optional

### Disabling a Hook Temporarily

Edit `.claude/settings.json`:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "matcher": "*",
        "hooks": [
          // Comment out or remove this block to disable
          // {
          //   "type": "command",
          //   "command": "bash ./.claude/hooks/skill-activation-hook.sh",
          //   "timeout": 5
          // }
        ]
      }
    ]
  }
}
```

### Creating a New Hook

1. **Create the script**:
   ```bash
   touch .claude/hooks/my-custom-hook.sh
   chmod +x .claude/hooks/my-custom-hook.sh
   ```

2. **Write the hook logic**:
   ```bash
   #!/bin/bash
   echo "My custom hook logic here"
   ```

3. **Register in settings.json**:
   ```json
   {
     "hooks": {
       "SessionStart": [
         {
           "matcher": "*",
           "hooks": [
             {
               "type": "command",
               "command": "bash ./.claude/hooks/my-custom-hook.sh",
               "timeout": 5
             }
           ]
         }
       ]
     }
   }
   ```

---

## Integration with Skills

### How Hooks Trigger Skills

```
1. You type: "準備部署"
   ↓
2. skill-activation-hook.sh detects "部署" keyword
   ↓
3. Hook matches to deploy-check skill in skill-rules.json
   ↓
4. Hook injects: Skill(skill="deploy-check")
   ↓
5. Claude Code executes Skill tool
   ↓
6. deploy-check skill activates
   ↓
7. Skill runs its workflow (TypeScript check → Build → i18n validation)
```

### Manual Override

If auto-activation doesn't work, manually invoke:

```
Use Skill(skill="deploy-check")
```

### Multiple Skills

Some prompts trigger multiple skills:

```
Input: "Add new project with Chinese and English translations"

Triggers:
- content-update (keyword: "project")
- i18n-sync (keyword: "translations", "Chinese and English")

Output:
🚨 CRITICAL: The following skills MUST be activated for this request:

- i18n-sync (MANDATORY)

💡 Recommended skills detected:

- content-update

🎯 INSTRUCTION: Use the Skill tool IMMEDIATELY before proceeding:

Skill(skill="i18n-sync")
Skill(skill="content-update")
```

---

## Workflow Examples

### Example 1: Deploying to Production

**Your prompt**: "部署到 Vercel"

**Hook activates**: `deploy-check`

**Workflow**:
1. Hook injects `Skill(skill="deploy-check")`
2. deploy-check skill runs:
   - ✅ TypeScript compilation check
   - ✅ `npm run build` test
   - ✅ i18n message consistency check (zh-TW ↔ en)
   - ✅ Image optimization check
3. If all pass → Safe to push
4. If any fail → Fix issues first

---

### Example 2: Adding a New Project

**Your prompt**: "新增一個專案到作品集，需要中英文說明"

**Hooks activate**: `content-update` + `i18n-sync`

**Workflow**:
1. Hook injects both skills
2. content-update skill guides you:
   - Update `messages/zh-TW.json`
   - Update `messages/en.json`
   - Add to projects gallery
   - Add banner image
3. i18n-sync skill validates:
   - ✅ Both language files have matching keys
   - ✅ No missing translations
   - ✅ Consistent structure

---

### Example 3: Fixing a Build Error

**Your prompt**: "TypeScript build 失敗了"

**Hook activates**: `debugging`

**Workflow**:
1. Hook injects `Skill(skill="debugging")`
2. debugging skill follows 5-step process:
   - 🔍 Identify error message
   - 📊 Analyze root cause
   - 🎯 Propose solutions
   - ✅ Implement fix
   - 🧪 Verify resolution

---

## Troubleshooting

### Hook Not Executing

**Check if hook is executable**:
```bash
ls -la .claude/hooks/
# Should show: -rwxr-xr-x (executable permissions)
```

**If not executable**:
```bash
chmod +x .claude/hooks/*.sh
```

---

### Keywords Not Matching

**Test keyword manually**:
```bash
echo "your test prompt" | ./.claude/hooks/skill-activation-hook.sh
```

**Check skill-rules.json syntax**:
```bash
python3 -m json.tool .claude/config/skill-rules.json
```

**Add more keyword variations**:
- Plural forms: "project" → "projects"
- Different tenses: "deploy" → "deploying", "deployed"
- Synonyms: "bug" → "issue", "problem"
- Chinese variants: "翻譯" → "翻译" (simplified)

---

### Python Not Found

The hook requires Python 3. Check:

```bash
which python3
python3 --version
```

If not installed, install via:
```bash
# macOS
brew install python3

# Ubuntu/Debian
sudo apt install python3
```

---

### Skills Not Listed

**Check settings.json**:
```bash
cat .claude/settings.json | grep -A 20 "hooks"
```

**Verify hook paths**:
```bash
ls -la .claude/hooks/skill-activation-hook.sh
ls -la .claude/config/skill-rules.json
```

---

## Performance

**Execution Time**: <100ms per prompt
**Token Cost**: ~50-100 tokens added to prompt (minimal)
**Success Rate**: ~75-80% auto-activation

---

## Best Practices

1. **Use keyword-based activation by default** - Fast and effective
2. **Keep keywords updated** - Add new triggers as you discover them
3. **Test hooks regularly** - Ensure they're working correctly
4. **Monitor activation rates** - Are skills actually activating?
5. **Combine with manual calls** - For 100% reliability, manually invoke skills when needed

---

## Integration with Global Hooks

This project inherits universal skills from global hooks:

**Global hooks location**: `~/.claude/hooks/`

**Global skills**:
- requirements-clarification
- prd-workflow
- debugging

**Project-specific skills** (this project):
- deploy-check
- i18n-sync
- content-update

**How they work together**:
1. Global skills activate across ALL projects
2. Project skills activate ONLY in young-personal-site
3. Both use the same hook mechanism (keyword matching)
4. No conflicts - complementary workflows

---

## Version History

- **v1.0** (2025-12-25) - Initial implementation with 3 project-specific skills
  - deploy-check
  - i18n-sync
  - content-update

---

**Last Updated**: 2025-12-25
**Project**: young-personal-site (Next.js 15 Portfolio)
**Maintained By**: Young (with Claude Code assistance)
