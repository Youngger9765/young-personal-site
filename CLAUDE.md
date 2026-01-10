# Young Personal Site

> 通用規則見 `~/.claude/CLAUDE.md`（Agent 路由、Git、Security、TDD）

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| i18n | next-intl (zh-TW/en) |
| Animation | Framer Motion |
| Deploy | Vercel |

## Project Type

- ✅ Personal portfolio site
- ✅ Bilingual content (Chinese/English)
- ✅ Production-ready
- ❌ NOT a prototype/MVP

## Workflow

```
Plan → Implement → Test manually → Format → Commit → Push → Vercel Deploy
```

**Time allocation**: 70% Dev / 20% Testing / 10% Refactoring

## Commands

```bash
# Development
npm run dev

# Build & Test
npm run build
npm run lint
npm run typecheck
```

## Branch Strategy

- `main`: Production (Vercel auto-deploy)
- Feature branches for new features/fixes

## Commit Format

```
feat: add Duotopia project
fix: center-align About page
docs: update documentation
style: improve image compression
```
