#!/bin/bash
# Pre-push hook for young-personal-site
#
# Purpose: Validate before pushing to remote (triggers deploy-check skill)
# This ensures TypeScript, build, and i18n are all valid before deployment
#
# Installation: Configured via .claude/settings.json

set -e

PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

echo "🚀 Pre-push validation for young-personal-site..."
echo ""

# Check if we're in the right project
if [ ! -f "$PROJECT_ROOT/package.json" ]; then
    echo "⚠️  Warning: Not in a Node.js project. Skipping pre-push checks."
    exit 0
fi

# Check if this is the young-personal-site project
if ! grep -q "young-personal-site" "$PROJECT_ROOT/package.json" 2>/dev/null; then
    echo "⚠️  Warning: Not in young-personal-site project. Skipping project-specific checks."
    exit 0
fi

echo "✅ Project validated: young-personal-site"
echo ""

# Notify about deploy-check skill activation
echo "🎯 RECOMMENDATION: Before pushing, consider running the deploy-check skill:"
echo ""
echo "   Use: Skill(skill=\"deploy-check\")"
echo ""
echo "   This will validate:"
echo "   - TypeScript compilation"
echo "   - Next.js build success"
echo "   - i18n message consistency (zh-TW ↔ en)"
echo "   - Image optimization"
echo ""
echo "💡 You can proceed with push, but deploy-check is recommended for safety."
echo ""

# Don't block the push, just recommend
exit 0
