#!/bin/bash
# UserPromptSubmit hook for keyword-based skill activation (OPTIMIZED)
#
# Project: young-personal-site (Next.js 15 + TypeScript + i18n)
# Version: 2.0 (Performance Optimized)
# Changes:
#   - Added jq support (3-5x faster than Python)
#   - Simplified output format (reduced processing time)
#   - Added global skills inheritance
#   - Reduced timeout risk
#
# Installation: Configured via .claude/settings.json

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_CONFIG="$SCRIPT_DIR/../config/skill-rules.json"
GLOBAL_CONFIG="$HOME/.claude/config/skill-rules.json"

# Read user prompt from stdin
USER_PROMPT=$(cat)

# Quick check: if config doesn't exist, pass through
if [ ! -f "$PROJECT_CONFIG" ]; then
    echo "$USER_PROMPT"
    exit 0
fi

# Lowercase prompt for case-insensitive matching (bash 3.2 compatible)
PROMPT_LOWER=$(echo "$USER_PROMPT" | tr '[:upper:]' '[:lower:]')

# Check if we should inherit global skills
INHERIT_GLOBAL=$(jq -r '.inherit_global // false' "$PROJECT_CONFIG" 2>/dev/null)

# Build combined config if inheriting
if [ "$INHERIT_GLOBAL" = "true" ] && [ -f "$GLOBAL_CONFIG" ]; then
    # Merge global and project skills (project takes precedence)
    COMBINED_CONFIG=$(jq -s '.[0].skills + .[1].skills | {skills: .}' "$GLOBAL_CONFIG" "$PROJECT_CONFIG" 2>/dev/null)
    CONFIG_TO_USE="$COMBINED_CONFIG"
else
    CONFIG_TO_USE=$(cat "$PROJECT_CONFIG")
fi

# Parse skills and match keywords using jq (much faster than Python)
MATCHES=$(echo "$CONFIG_TO_USE" | jq -r --arg prompt "$PROMPT_LOWER" '
.skills | to_entries[] |
select(
    .value.keywords |
    any(. | ascii_downcase | . as $kw | $prompt | contains($kw))
) |
"\(.key)|\(.value.priority // "low")|\(.value.force_activation // false)"
' 2>/dev/null || echo "")

# If no matches, pass through original prompt
if [ -z "$MATCHES" ]; then
    echo "$USER_PROMPT"
    exit 0
fi

# Parse matches into arrays
MATCHED_SKILLS=()
CRITICAL_SKILLS=()

while IFS='|' read -r skill priority force; do
    MATCHED_SKILLS+=("$skill")
    if [ "$priority" = "critical" ] || [ "$force" = "true" ]; then
        CRITICAL_SKILLS+=("$skill")
    fi
done <<< "$MATCHES"

# Build activation message (simplified format)
if [ ${#CRITICAL_SKILLS[@]} -gt 0 ]; then
    # Critical skills - mandatory activation
    echo "🚨 CRITICAL: Use these skills BEFORE proceeding:"
    echo ""
    for skill in "${CRITICAL_SKILLS[@]}"; do
        echo "  Skill(skill=\"$skill\")"
    done
    echo ""
    echo "⚠️ These skills contain MANDATORY workflows and standards."
    echo ""
    echo "---"
    echo ""
fi

if [ ${#MATCHED_SKILLS[@]} -gt ${#CRITICAL_SKILLS[@]} ]; then
    # Non-critical skills - recommended
    echo "💡 Recommended skills detected:"
    for skill in "${MATCHED_SKILLS[@]}"; do
        if [[ ! " ${CRITICAL_SKILLS[@]} " =~ " ${skill} " ]]; then
            echo "  - $skill (optional)"
        fi
    done
    echo ""
fi

# Output original prompt
echo "$USER_PROMPT"
