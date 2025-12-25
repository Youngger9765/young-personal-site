#!/bin/bash
# Session start hook for young-personal-site
#
# Purpose: Display project context and available skills at session start
#
# Installation: Configured via .claude/settings.json

PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
CURRENT_BRANCH="$(git branch --show-current 2>/dev/null || echo 'unknown')"

echo "🎨 Young Personal Site - Next.js Portfolio"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📍 Branch: $CURRENT_BRANCH"
echo "🌐 Languages: zh-TW (Chinese) | en (English)"
echo "🚀 Deployment: Vercel (auto-deploy on push to main)"
echo ""
echo "🤖 Available Skills:"
echo "   • deploy-check    - Pre-deployment validation"
echo "   • i18n-sync       - Bilingual content sync"
echo "   • content-update  - Portfolio updates"
echo ""
echo "💡 Skills auto-activate based on your prompts."
echo "   Or manually invoke: Skill(skill=\"skill-name\")"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
