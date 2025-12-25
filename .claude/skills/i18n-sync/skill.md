# i18n-sync - Bilingual Content Synchronization

## Purpose

Ensure **perfect synchronization** between Chinese (zh-TW) and English (en) translation files. This skill prevents missing translations, inconsistent keys, and structural mismatches.

---

## When to Use

**Auto-activates when prompt contains**:
- Translation keywords: `translation`, `翻譯`, `bilingual`, `雙語`
- Language keywords: `language`, `語言`, `i18n`, `locale`
- Content keywords: `messages`, `訊息`, `content`, `內容`
- Specific locales: `zh-TW`, `en`, `Chinese`, `English`, `中英文`

**Manually invoke when**:
- Adding new content (projects, speaking events, about page)
- Updating existing content with new fields
- Refactoring translation structure
- Before committing content changes
- After content updates to verify consistency

---

## Workflow

### Step 1: Locate Translation Files

```bash
# Find translation files
ls -la messages/

# Expected structure:
# messages/
#   ├── zh-TW.json  (Chinese Traditional)
#   └── en.json     (English)
```

**Validation**:
- ✅ Both files exist
- ✅ Both files are valid JSON
- ⚠️ If either missing → Create it

---

### Step 2: Load and Parse JSON

```typescript
// Pseudo-code for understanding
const zhTW = JSON.parse(readFile('messages/zh-TW.json'))
const en = JSON.parse(readFile('messages/en.json'))

// Expected structure:
{
  "navigation": {
    "home": "首頁", // or "Home" in en.json
    "projects": "作品集",
    "speaking": "演講分享",
    "about": "關於我"
  },
  "projects": {
    "duotopia": {
      "title": "Duotopia 英語學習平台",
      "description": "...",
      "tags": ["AI", "教育"]
    }
  },
  // ... more content
}
```

---

### Step 3: Compare Key Structures

**Check for missing keys**:

```python
# Pseudo-code for validation logic
def compare_keys(zh_tw, en, path=""):
    zh_keys = set(zh_tw.keys())
    en_keys = set(en.keys())

    # Find missing keys
    missing_in_en = zh_keys - en_keys
    missing_in_zh = en_keys - zh_keys

    # Report issues
    if missing_in_en:
        print(f"⚠️ Missing in en.json at {path}: {missing_in_en}")

    if missing_in_zh:
        print(f"⚠️ Missing in zh-TW.json at {path}: {missing_in_zh}")

    # Recursively check nested objects
    for key in zh_keys & en_keys:
        if isinstance(zh_tw[key], dict) and isinstance(en[key], dict):
            compare_keys(zh_tw[key], en[key], f"{path}.{key}")
```

**Example output**:

```
Checking key consistency...

✅ navigation.* - All keys match
✅ projects.duotopia.* - All keys match
⚠️ projects.mediatek - Missing in en.json: "media_coverage"
⚠️ speaking.techconf - Missing in zh-TW.json: "slides_url"
```

---

### Step 4: Validate Value Types

**Ensure matching value types**:

```python
def validate_value_types(zh_tw, en, path=""):
    for key in zh_tw.keys():
        if key not in en:
            continue  # Already reported in Step 3

        zh_type = type(zh_tw[key])
        en_type = type(en[key])

        if zh_type != en_type:
            print(f"⚠️ Type mismatch at {path}.{key}")
            print(f"   zh-TW: {zh_type.__name__}")
            print(f"   en: {en_type.__name__}")

        # Recursively validate nested objects
        if isinstance(zh_tw[key], dict):
            validate_value_types(zh_tw[key], en[key], f"{path}.{key}")
```

**Example output**:

```
Validating value types...

✅ All types match correctly
  - Strings match strings
  - Arrays match arrays
  - Objects match objects
```

---

### Step 5: Check for Empty/Missing Translations

**Flag untranslated content**:

```python
def check_empty_values(data, locale, path=""):
    for key, value in data.items():
        current_path = f"{path}.{key}" if path else key

        if isinstance(value, dict):
            check_empty_values(value, locale, current_path)
        elif isinstance(value, str) and not value.strip():
            print(f"⚠️ Empty translation in {locale} at {current_path}")
        elif isinstance(value, list) and len(value) == 0:
            print(f"⚠️ Empty array in {locale} at {current_path}")
```

**Example output**:

```
Checking for empty values...

⚠️ Empty translation in en at projects.newproject.description
⚠️ Empty translation in zh-TW at speaking.futuretalk.summary
```

---

### Step 6: Generate Synchronization Report

**Comprehensive validation report**:

```markdown
# i18n Synchronization Report

## Summary
- ✅ Structural consistency: PASS
- ⚠️ Missing keys detected: 2 issues
- ⚠️ Empty translations: 2 issues
- ✅ Type consistency: PASS

## Issues Found

### Missing Keys

1. **projects.mediatek.media_coverage**
   - Present in: zh-TW.json
   - Missing in: en.json
   - Suggested fix: Add key to en.json with English translation

2. **speaking.techconf.slides_url**
   - Present in: en.json
   - Missing in: zh-TW.json
   - Suggested fix: Add key to zh-TW.json with Chinese translation

### Empty Translations

1. **projects.newproject.description**
   - File: en.json
   - Value: "" (empty string)
   - Suggested fix: Add English description

2. **speaking.futuretalk.summary**
   - File: zh-TW.json
   - Value: "" (empty string)
   - Suggested fix: Add Chinese summary

## Recommendations

1. Fix missing keys before deployment
2. Complete all empty translations
3. Consider using translation-manager agent for bulk updates
4. Run i18n-sync again after fixes

## Next Steps

Choose one:
a) Fix issues manually
b) Invoke translation-manager agent: Skill(skill="translation-manager")
c) Proceed with deployment (not recommended with issues)
```

---

### Step 7: Auto-Fix (Optional)

**If user requests auto-fix**:

```yaml
Auto-fix Process:
  1. Missing keys in en.json:
     - Add key with placeholder: "[TRANSLATION NEEDED]"
     - Preserve structure from zh-TW.json

  2. Missing keys in zh-TW.json:
     - Add key with placeholder: "[需要翻譯]"
     - Preserve structure from en.json

  3. Empty translations:
     - Keep empty (requires human input)
     - Flag for attention

  4. Save updated files:
     - Backup original files
     - Write updated JSON with proper formatting
     - Preserve key order
```

**Example auto-fix**:

Before (en.json):
```json
{
  "projects": {
    "duotopia": {
      "title": "Duotopia English Learning Platform"
    }
  }
}
```

After (en.json with auto-fix):
```json
{
  "projects": {
    "duotopia": {
      "title": "Duotopia English Learning Platform",
      "media_coverage": "[TRANSLATION NEEDED]"
    }
  }
}
```

---

## Validation Rules

### Critical (MUST Pass)

1. **Both files exist** - Cannot deploy without both zh-TW.json and en.json
2. **Valid JSON syntax** - Files must parse correctly
3. **Matching top-level keys** - `navigation`, `projects`, `speaking`, `about` must exist in both

### Warnings (SHOULD Fix)

1. **Missing nested keys** - Warn but don't block deployment
2. **Empty translations** - Flag for attention
3. **Type mismatches** - Arrays vs. strings, objects vs. primitives

### Informational (NICE to Have)

1. **Key order consistency** - Same order in both files
2. **Translation length ratios** - Chinese vs. English length comparisons
3. **Unused keys** - Keys defined but never referenced in code

---

## Integration with Other Skills

### Paired with content-update

When adding new content:
```
1. content-update adds new project/speaking/about entries
   ↓
2. i18n-sync validates both language files
   ↓
3. Report any missing translations
   ↓
4. User completes translations
   ↓
5. i18n-sync validates again → PASS
```

### Paired with deploy-check

Before deployment:
```
1. deploy-check runs TypeScript check
   ↓
2. deploy-check invokes i18n-sync
   ↓
3. i18n-sync validates translation consistency
   ↓
4. If PASS → Safe to deploy
   If FAIL → Fix issues first
```

---

## Common Scenarios

### Scenario 1: Adding a New Project

**User action**: Add new project to portfolio

**i18n-sync workflow**:
```
1. Detect new project key in zh-TW.json
2. Check if corresponding key exists in en.json
3. If missing → Warn: "Missing English translation for new project"
4. Suggest: Add to en.json with translation
5. Validate after user adds translation
```

### Scenario 2: Updating Existing Content

**User action**: Update project description

**i18n-sync workflow**:
```
1. Detect change in zh-TW.json at projects.duotopia.description
2. Check if en.json has same key
3. If exists → Remind: "Remember to update English description too"
4. If missing → Warn: "Missing English version"
5. Validate consistency after update
```

### Scenario 3: Bulk Content Changes

**User action**: Refactor translation structure

**i18n-sync workflow**:
```
1. Full comparison of entire JSON structure
2. Report all differences comprehensively
3. Suggest using translation-manager agent for bulk fixes
4. Validate after bulk update completes
```

---

## Output Format

### Success (All Checks Pass)

```
✅ i18n Synchronization: PASS

📊 Validation Results:
  ✅ Both translation files exist
  ✅ Valid JSON syntax
  ✅ All keys synchronized (zh-TW ↔ en)
  ✅ No empty translations
  ✅ Type consistency verified

🎉 Your bilingual content is perfectly synchronized!
```

### Warnings (Non-Critical Issues)

```
⚠️ i18n Synchronization: WARNINGS DETECTED

📊 Validation Results:
  ✅ Both translation files exist
  ✅ Valid JSON syntax
  ⚠️ 2 missing keys detected
  ⚠️ 1 empty translation found
  ✅ Type consistency verified

🔧 Issues to fix:
  1. projects.newproject.media_coverage - Missing in en.json
  2. speaking.futuretalk.summary - Empty in zh-TW.json

💡 Recommendation: Fix these issues before deployment
```

### Failure (Critical Issues)

```
❌ i18n Synchronization: FAILED

📊 Validation Results:
  ❌ en.json has invalid JSON syntax
  ✅ zh-TW.json is valid
  ❌ Cannot compare keys due to syntax error

🚨 Critical Issues:
  1. en.json - Syntax error on line 45: Unexpected token }

⛔ DEPLOYMENT BLOCKED: Fix critical issues first
```

---

## Testing the Skill

### Test 1: Perfect Sync

**Setup**:
```json
// messages/zh-TW.json
{
  "navigation": {
    "home": "首頁"
  }
}

// messages/en.json
{
  "navigation": {
    "home": "Home"
  }
}
```

**Expected**: ✅ PASS - Perfect synchronization

---

### Test 2: Missing Key

**Setup**:
```json
// messages/zh-TW.json
{
  "navigation": {
    "home": "首頁",
    "projects": "作品集"
  }
}

// messages/en.json
{
  "navigation": {
    "home": "Home"
  }
}
```

**Expected**: ⚠️ WARNING - Missing "projects" key in en.json

---

### Test 3: Type Mismatch

**Setup**:
```json
// messages/zh-TW.json
{
  "projects": {
    "tags": ["AI", "教育"]
  }
}

// messages/en.json
{
  "projects": {
    "tags": "AI, Education"
  }
}
```

**Expected**: ⚠️ WARNING - Type mismatch (array vs. string)

---

## Best Practices

1. **Run before every content change** - Validate before editing
2. **Fix issues immediately** - Don't accumulate translation debt
3. **Use consistent structure** - Mirror key hierarchy in both files
4. **Keep keys in same order** - Easier to manually review
5. **Add comments for context** - Help future translators (JSON5 if supported)
6. **Version control translations** - Track changes over time

---

## Edge Cases

### Case 1: Nested Object Depth Mismatch

```json
// zh-TW.json
{
  "projects": {
    "duotopia": {
      "details": {
        "version": "2.0"
      }
    }
  }
}

// en.json
{
  "projects": {
    "duotopia": {
      "details": "Version 2.0"
    }
  }
}
```

**Detection**: Type mismatch - object vs. string
**Solution**: Align structure depth in both files

---

### Case 2: Array Length Differences

```json
// zh-TW.json
{
  "projects": {
    "tags": ["AI", "教育", "創新"]
  }
}

// en.json
{
  "projects": {
    "tags": ["AI", "Education"]
  }
}
```

**Detection**: Array length mismatch (3 vs. 2)
**Solution**: Ensure same number of tags, or document why different

---

### Case 3: Special Characters Encoding

```json
// zh-TW.json
{
  "about": {
    "bio": "AI 專家 • iOS 開發者"
  }
}

// en.json
{
  "about": {
    "bio": "AI Expert \u2022 iOS Developer"
  }
}
```

**Detection**: Different encoding for bullet point (• vs. \u2022)
**Solution**: Both valid - no action needed (JSON handles this)

---

## Troubleshooting

### Issue: "JSON parse error"

**Cause**: Invalid JSON syntax (missing comma, quote, etc.)

**Fix**:
1. Use JSON validator: `python3 -m json.tool messages/zh-TW.json`
2. Check syntax error line number
3. Fix syntax issue
4. Re-run i18n-sync

---

### Issue: "Too many missing keys"

**Cause**: Translation files severely out of sync

**Fix**:
1. Use auto-fix to add placeholder keys
2. Prioritize critical translations (navigation, projects)
3. Consider invoking translation-manager agent for bulk work
4. Schedule time to complete all translations

---

### Issue: "Cannot read translation files"

**Cause**: Files don't exist or permission issues

**Fix**:
1. Check files exist: `ls -la messages/`
2. Check permissions: `chmod 644 messages/*.json`
3. Create missing files if needed
4. Re-run i18n-sync

---

## Version History

- **v1.0** (2025-12-25) - Initial implementation
  - Basic key comparison
  - Type validation
  - Empty value detection
  - Comprehensive reporting

---

**Last Updated**: 2025-12-25
**Project**: young-personal-site
**Integration**: deploy-check, content-update
