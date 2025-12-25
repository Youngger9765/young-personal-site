---
name: deploy-check
description: |
  Pre-deployment verification checklist for young-personal-site.
  Auto-activates on "部署", "deploy", "上線", "發布", "push" keywords.
  Ensures code quality, functionality, and bilingual content before Vercel deployment.
allowed-tools: [Bash, Read, Grep, Glob]
---

# Deploy Check Skill

## Purpose
Systematic pre-deployment verification to prevent shipping broken code.

**Prevents**:
- ❌ Build failures in production
- ❌ TypeScript errors
- ❌ Missing translations
- ❌ Broken images
- ❌ Responsive design issues

**Ensures**:
- ✅ Clean build
- ✅ All pages accessible
- ✅ Bilingual content working
- ✅ Images loading
- ✅ No console errors

---

## Auto-Activation

Triggers on:
- ✅ "部署", "deploy", "上線", "發布"
- ✅ "push", "push to main", "推送"
- ✅ "準備部署", "ready to deploy"
- ✅ "檢查", "verify before deploy"

---

## Pre-Deployment Checklist

### 1. Build Verification

**Run build command**:
```bash
npm run build
```

**Success criteria**:
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint errors (critical only)
- [ ] Build output shows all routes generated

**Common build issues**:
```
Error: Type errors
→ Fix: Check TypeScript types in components

Error: Module not found
→ Fix: Verify imports and file paths

Error: Image optimization failed
→ Fix: Check image file sizes and formats
```

### 2. Type Check

**Run TypeScript compiler**:
```bash
npx tsc --noEmit
```

**Success criteria**:
- [ ] No type errors
- [ ] All components properly typed
- [ ] Props interfaces correct

### 3. Page Accessibility Check

**Verify all pages render**:
```bash
# Start dev server
npm run dev

# Then manually check:
# ✅ / (home)
# ✅ /projects
# ✅ /speaking
# ✅ /speaking/[event-slug]
# ✅ /about
# ✅ /services
```

**Test checklist**:
```markdown
zh-TW Routes:
- [ ] http://localhost:3000/zh-TW
- [ ] http://localhost:3000/zh-TW/projects
- [ ] http://localhost:3000/zh-TW/speaking
- [ ] http://localhost:3000/zh-TW/about
- [ ] http://localhost:3000/zh-TW/services

en Routes:
- [ ] http://localhost:3000/en
- [ ] http://localhost:3000/en/projects
- [ ] http://localhost:3000/en/speaking
- [ ] http://localhost:3000/en/about
- [ ] http://localhost:3000/en/services
```

### 4. Bilingual Content Verification

**Check language switcher**:
```markdown
Language Switcher Test:
1. Start on zh-TW home page
2. Click language switcher → Should go to /en
3. Navigate to /en/projects
4. Click language switcher → Should go to /zh-TW/projects
5. Verify content changes correctly

Checklist:
- [ ] Language switcher visible
- [ ] Switches between zh-TW and en
- [ ] Preserves current route
- [ ] Content updates correctly
```

**Check for missing translations**:
```bash
# Search for translation keys in code
grep -r "useTranslations" app/

# Verify keys exist in both files
# Example: if code uses t('projects.title')
# → Check messages/zh-TW.json has projects.title
# → Check messages/en.json has projects.title
```

### 5. Image Loading Check

**Verify all images load**:
```bash
# Find all image references
grep -r "images/" app/ public/

# Check files exist
ls -lh public/images/projects/
ls -lh public/images/speaking/

# Verify sizes (should be < 500KB each)
find public/images/ -type f -size +500k
```

**Image checklist**:
- [ ] All project images present
- [ ] All speaking event images present
- [ ] Images optimized (< 500KB)
- [ ] No broken image paths
- [ ] Images display on all pages

### 6. Responsive Design Check

**Test breakpoints**:
```markdown
Browser DevTools → Responsive mode

Mobile (375px):
- [ ] Home page: readable, no overflow
- [ ] Projects: cards stack vertically
- [ ] Speaking: events list readable
- [ ] About: text centered, proper spacing
- [ ] Navigation: mobile menu works

Tablet (768px):
- [ ] Home: proper spacing
- [ ] Projects: 2-column grid
- [ ] Layout balanced

Desktop (1280px):
- [ ] Home: hero section centered
- [ ] Projects: 3-column grid
- [ ] All content within max-width
- [ ] No excessive whitespace
```

### 7. Console Error Check

**Open browser console**:
```markdown
Chrome DevTools → Console

Check for:
- [ ] No JavaScript errors
- [ ] No failed network requests
- [ ] No 404 errors for images/fonts
- [ ] No hydration errors
- [ ] No React warnings

Common issues:
- Hydration mismatch → Check server/client rendering
- 404 images → Verify image paths
- CORS errors → Check external resource URLs
```

### 8. Performance Check (Optional)

**Lighthouse audit** (if time permits):
```markdown
Chrome DevTools → Lighthouse → Run audit

Target scores:
- Performance: > 80
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

Quick wins if scores low:
- Optimize images (convert to WebP)
- Minimize unused JavaScript
- Add alt text to images
- Fix heading hierarchy
```

---

## Quick Deploy Checklist

**For fast deployments, minimum checks**:

```markdown
## 🚀 Quick Deploy Checklist

### Must-Do (2-3 minutes)
- [ ] npm run build (succeeds)
- [ ] Home page loads (both languages)
- [ ] No TypeScript errors
- [ ] No console errors

### Should-Do (5 minutes)
- [ ] All pages load (zh-TW & en)
- [ ] Images display correctly
- [ ] Language switcher works
- [ ] Mobile view acceptable

### Optional (10+ minutes)
- [ ] Full responsive testing
- [ ] Performance audit
- [ ] Cross-browser testing
```

---

## Deployment Workflow

### Step 1: Run Pre-Deploy Checks

**Execute checklist**:
```bash
# 1. Build check
echo "Running build..."
npm run build

# 2. Type check
echo "Checking types..."
npx tsc --noEmit

# 3. Verify clean git status
git status
```

**Output should show**:
```
✓ Build completed successfully
✓ No type errors
✓ Working tree clean (or staged changes only)
```

### Step 2: Final Review

**Review changes**:
```bash
# See what's changed
git status
git diff --cached

# Review commit message
git log -1 --oneline
```

**Review checklist**:
- [ ] Commit message clear and descriptive
- [ ] Only intended files staged
- [ ] No sensitive data (API keys, credentials)
- [ ] No debug code (console.log, debugger)

### Step 3: Push to Deploy

```bash
# Push to main (triggers Vercel deployment)
git push origin main
```

### Step 4: Monitor Deployment

**Watch Vercel dashboard**:
```markdown
Vercel Deployment Status:
1. Visit https://vercel.com/your-project
2. Check deployment status:
   - Building... → Wait
   - Ready → Success! ✅
   - Error → Check logs ❌

If error:
- Click on deployment
- View build logs
- Fix issue locally
- Re-deploy
```

### Step 5: Post-Deployment Verification

**Test production site**:
```markdown
Production Checks (on your-site.vercel.app):

Critical (must verify):
- [ ] Home page loads
- [ ] No 500 errors
- [ ] Images display
- [ ] Both languages work

Important:
- [ ] All pages accessible
- [ ] Navigation works
- [ ] External links work
- [ ] Mobile responsive

Nice-to-have:
- [ ] Share on social (check OG tags)
- [ ] Test on different devices
```

---

## Common Deployment Issues

### Issue 1: Build Fails in Vercel

**Symptoms**:
```
Error: Build failed
```

**Debug**:
```bash
# Test build locally (exact same as Vercel)
npm run build

# Check Node version matches Vercel
node --version

# Review Vercel build logs for specific error
```

**Common causes**:
- TypeScript errors (fix locally)
- Missing dependencies (check package.json)
- Environment variables missing (add in Vercel dashboard)

### Issue 2: Images Missing in Production

**Symptoms**:
- Images work locally but 404 in production

**Debug**:
```bash
# Verify images committed to git
git ls-files public/images/

# Check image paths in code
grep -r "images/" app/

# Ensure paths start with /images/ (not ./images/)
```

**Fix**:
```tsx
// ✅ Correct
<Image src="/images/project-banner.jpg" />

// ❌ Wrong
<Image src="./images/project-banner.jpg" />
```

### Issue 3: Translation Keys Missing

**Symptoms**:
- English version shows blank text or key names

**Debug**:
```bash
# Find translation usage
grep -r "useTranslations" app/

# Check both files have keys
grep "projects.title" messages/zh-TW.json
grep "projects.title" messages/en.json
```

**Fix**:
- Add missing keys to translation files
- Ensure keys match exactly (case-sensitive)

### Issue 4: Hydration Errors

**Symptoms**:
```
Error: Hydration failed
Text content does not match server-rendered HTML
```

**Common causes**:
```tsx
// ❌ Bad: Different on server vs client
<div>{new Date().toString()}</div>

// ✅ Good: Consistent
<div suppressHydrationWarning>{new Date().toString()}</div>
// OR use useEffect for client-only rendering
```

**Fix**:
- Ensure server and client render same content
- Use `suppressHydrationWarning` for dynamic content
- Use `useEffect` for client-only code

---

## Rollback Procedure

**If deployment breaks production**:

### Option 1: Instant Rollback (Vercel)

```markdown
1. Go to Vercel dashboard
2. Find previous successful deployment
3. Click "Promote to Production"
4. Site rolls back immediately
```

### Option 2: Git Revert

```bash
# Find bad commit
git log --oneline -5

# Revert it
git revert <commit-hash>

# Push (triggers new deployment)
git push
```

### Option 3: Fix Forward

```bash
# Fix the issue locally
# Test thoroughly
npm run build
npm run dev # test manually

# Commit fix
git add .
git commit -m "fix: resolve production issue with X"

# Deploy fix
git push
```

---

## Deployment Best Practices

### 1. Deploy During Low-Traffic Times

**Recommended**:
- Weekday mornings (9-11am)
- Avoid Friday afternoons
- Not during peak hours

### 2. Small, Incremental Deploys

**Good**:
```bash
# Deploy 1: Add new project
git commit -m "feat: add project A"
git push

# Wait, verify ✅

# Deploy 2: Update about page
git commit -m "docs: update about page"
git push
```

**Bad**:
```bash
# Deploy: Everything at once (high risk!)
git commit -m "feat: 10 projects, redesign, new pages, etc."
git push
```

### 3. Test Locally First (Always!)

```bash
# ALWAYS before pushing
npm run build && npm run dev
# → Test manually
# → Verify everything works
# → THEN push
```

### 4. Monitor After Deployment

**First 5 minutes after deploy**:
- Visit production site
- Test critical paths (home, projects, about)
- Check browser console for errors
- Verify no broken images

---

## Quick Reference: Deploy Commands

```bash
# Full pre-deploy check
npm run build && npx tsc --noEmit

# Build only
npm run build

# Type check only
npx tsc --noEmit

# Lint check
npm run lint

# Run dev server for manual testing
npm run dev

# Git status
git status

# Stage all changes
git add .

# Commit
git commit -m "feat: your message"

# Push (deploys to Vercel)
git push

# Force re-deploy (if needed)
git commit --allow-empty -m "chore: trigger redeploy"
git push
```

---

## Environment-Specific Checks

### Local Development
```bash
npm run dev
# → Test at http://localhost:3000
```

### Production (Vercel)
```bash
# After git push, deployment is automatic
# → Test at https://your-site.vercel.app
```

### Preview Deployments (Branches)
```bash
# Push to feature branch
git push origin feature-branch
# → Vercel creates preview URL
# → Test without affecting production
```

---

## Success Metrics

### Before This Skill
- ⏱️ Deployments: Often break production
- 🐛 Bugs: Discovered after deployment
- ⏮️ Rollbacks: Frequent

### After This Skill
- ✅ Deployments: Smooth, predictable
- 🐛 Bugs: Caught before deployment
- ⏮️ Rollbacks: Rare

---

## Related Skills

- **design-improvement**: Design changes → deploy-check → deploy
- **content-update**: Content changes → deploy-check → deploy

---

## Complete Deploy Workflow Example

**Scenario**: Adding new project and deploying

```bash
# 1. Make changes
# (content-update skill adds project)

# 2. Pre-deploy checks (THIS SKILL)
echo "Running pre-deployment checks..."

# Build check
npm run build
# → ✅ Build successful

# Type check
npx tsc --noEmit
# → ✅ No errors

# Manual test
npm run dev
# → Visit localhost:3000/zh-TW/projects
# → Visit localhost:3000/en/projects
# → ✅ New project appears
# → ✅ Image loads
# → ✅ No console errors

# 3. Commit
git add .
git commit -m "feat: add Duotopia project with bilingual content"

# 4. Deploy
git push origin main

# 5. Monitor Vercel
# → Wait for "Ready" status
# → Visit production site
# → ✅ Verify new project live

# 6. Done! 🎉
```

---

**Skill Version**: v1.0
**Last Updated**: 2025-12-25
**Project**: young-personal-site
**Philosophy**: "Measure twice, deploy once" 📐➡️🚀
